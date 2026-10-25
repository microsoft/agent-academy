import type { Plugin } from "vite";
import path from "node:path";
import fs from "node:fs";
import JSZip from "jszip";

const VIRTUAL_MODULE_ID = "virtual:download-bundles";
const RESOLVED_ID = "\0" + VIRTUAL_MODULE_ID;
const EXCLUDED_DIRS = new Set([".vitepress", "public", "node_modules"]);
const EXCLUDED_BUNDLE_DIRS = new Set(["node_modules", ".git", "__pycache__", "dist"]);
const ZIP_DATE = new Date("2000-01-01T00:00:00Z");

interface DownloadBundle {
  fileName: string;
  url: string;
  isFile: boolean;
  sourceFile?: string;
}

function referencedDownloads(
  dir: string,
  downloads = new Map<string, string | undefined>()
): Map<string, string | undefined> {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && !EXCLUDED_DIRS.has(entry.name)) {
      referencedDownloads(fullPath, downloads);
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      const text = fs.readFileSync(fullPath, "utf8");
      for (const match of text.matchAll(/<download-files\b[^>]*>/g)) {
        const source = match[0].match(/\spath\s*=\s*(["'])(.*?)\1/s)?.[2];
        if (!source) throw new Error(`download-files requires a literal path in: ${fullPath}`);
        if (/\s:filename\s*=/.test(match[0])) {
          throw new Error(`download-files requires a literal filename in: ${fullPath}`);
        }
        const key = source.replace(/^\.?\//, "").replace(/\/$/, "");
        const fileName = match[0].match(/\sfilename\s*=\s*(["'])(.*?)\1/s)?.[2];
        const previous = downloads.get(key);
        if (previous && fileName && previous !== fileName) {
          throw new Error(`Conflicting download filenames for: ${key}`);
        }
        downloads.set(key, fileName || previous);
      }
    }
  }
  return downloads;
}

function sourcePath(docsDir: string, folder: string): string {
  if (
    !folder ||
    folder.split("/").some((part) => !part || part === "." || part === "..") ||
    folder.includes("\\") ||
    path.isAbsolute(folder)
  ) {
    throw new Error(`Invalid download-files path: ${folder}`);
  }
  const dir = path.join(docsDir, folder);
  const relative = path.relative(fs.realpathSync(docsDir), fs.realpathSync(dir));
  if (relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Download folder must be inside docs: ${folder}`);
  }
  if (fs.lstatSync(dir).isSymbolicLink()) {
    throw new Error(`Download folder must not contain symbolic links: ${folder}`);
  }
  return dir;
}

function bundleFiles(docsDir: string, folder: string, relative = ""): string[] {
  const dir = sourcePath(docsDir, path.posix.join(folder, relative));
  const files: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const name = path.posix.join(relative, entry.name);
    if (entry.isSymbolicLink()) {
      throw new Error(`Download folder must not contain symbolic links: ${folder}/${name}`);
    }
    if (entry.isDirectory() && !EXCLUDED_BUNDLE_DIRS.has(entry.name)) {
      files.push(...bundleFiles(docsDir, folder, name));
    } else if (entry.isFile() && entry.name !== ".DS_Store") {
      files.push(name);
    }
  }
  if (relative) return files.sort();
  if (!files.length) throw new Error(`No downloadable files in: ${folder}`);
  return files.sort();
}

function describeBundle(docsDir: string, source: string, filename?: string): DownloadBundle {
  const fullPath = sourcePath(docsDir, source);
  const isFile = fs.statSync(fullPath).isFile();
  const files = isFile ? [] : bundleFiles(docsDir, source);
  const singleArchive = files.length === 1 && files[0].toLowerCase().endsWith(".zip");
  const singleMarkdown = files.length === 1 && files[0].toLowerCase().endsWith(".md");
  const sourceFile = isFile ? source
    : singleArchive ? `${source}/${files[0]}`
    : singleMarkdown ? `${source}/${files[0]}` : undefined;
  const defaultName = isFile ? path.posix.basename(source)
    : singleArchive ? path.posix.basename(files[0])
    : singleMarkdown && path.posix.basename(files[0]).toLowerCase() !== "skill.md" ? path.posix.basename(files[0])
    : `${path.posix.basename(source)}.${singleMarkdown ? "md" : "zip"}`;
  const fileName = filename || defaultName;
  if (fileName === "." || fileName === ".." || /[/\\]/.test(fileName) ||
      path.posix.extname(fileName).toLowerCase() !== path.posix.extname(defaultName).toLowerCase()) {
    throw new Error(`Invalid download filename: ${fileName}`);
  }
  return {
    fileName,
    url: `downloads/${source}/${fileName}`,
    isFile,
    sourceFile,
  };
}

async function downloadBytes(docsDir: string, source: string, bundle: DownloadBundle): Promise<Buffer> {
  if (bundle.sourceFile) {
    return fs.readFileSync(sourcePath(docsDir, bundle.sourceFile));
  }
  const zip = new JSZip();
  for (const name of bundleFiles(docsDir, source)) {
    zip.file(name, fs.readFileSync(sourcePath(docsDir, `${source}/${name}`)), {
      date: ZIP_DATE,
      createFolders: false,
    });
  }
  return zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE", platform: "DOS" });
}

export function downloadFilesPlugin(docsDir: string): Plugin {
  let base = "/";
  let isSsr = false;
  const loadBundles = (): Record<string, DownloadBundle> => Object.fromEntries(
    [...referencedDownloads(docsDir)].sort(([a], [b]) => a.localeCompare(b)).map(([source, filename]) => [
      source, describeBundle(docsDir, source, filename),
    ] as const)
  );

  return {
    name: "vitepress-download-files",
    configResolved(config) {
      base = config.base;
      isSsr = Boolean(config.build.ssr);
    },
    resolveId(id) {
      if (id === VIRTUAL_MODULE_ID) return RESOLVED_ID;
    },
    load(id) {
      if (id !== RESOLVED_ID) return;
      return `export const bundles = ${JSON.stringify(loadBundles())};`;
    },
    async generateBundle() {
      if (isSsr) return;
      for (const [folder, bundle] of Object.entries(loadBundles())) {
        this.emitFile({
          type: "asset", fileName: bundle.url,
          source: await downloadBytes(docsDir, folder, bundle),
        });
      }
    },
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        try {
          const requestPath = new URL(req.url || "/", "http://localhost").pathname;
          const prefix = `${base}downloads/`;
          if (!requestPath.startsWith(prefix)) return next();
          if (req.method !== "GET" && req.method !== "HEAD") {
            res.statusCode = 405;
            res.setHeader("Allow", "GET, HEAD");
            res.end("Method not allowed");
            return;
          }
          const assetPath = decodeURIComponent(requestPath.slice(base.length));
          for (const [folder, bundle] of Object.entries(loadBundles())) {
            if (assetPath !== bundle.url) continue;
            const bytes = await downloadBytes(docsDir, folder, bundle);
            const contentTypes: Record<string, string> = {
              ".md": "text/markdown; charset=utf-8",
              ".zip": "application/zip",
              ".pdf": "application/pdf",
              ".csv": "text/csv; charset=utf-8",
            };
            res.setHeader("Content-Type", contentTypes[path.posix.extname(bundle.fileName).toLowerCase()] || "application/octet-stream");
            res.setHeader("Content-Length", bytes.length);
            res.setHeader("Cache-Control", "no-cache");
            res.end(req.method === "HEAD" ? undefined : bytes);
            return;
          }
          res.statusCode = 404;
          res.end("Download not found");
        } catch (error) {
          next(error);
        }
      });
      server.watcher.on("all", (event, file) => {
        if (!["add", "change", "unlink"].includes(event)) return;
        const relative = path.relative(docsDir, file).replace(/\\/g, "/");
        if (relative.startsWith("..") || EXCLUDED_DIRS.has(relative.split("/")[0])) return;
        const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
        if (mod) {
          server.moduleGraph.invalidateModule(mod);
          server.ws.send({ type: "full-reload" });
        }
      });
    },
  };
}
