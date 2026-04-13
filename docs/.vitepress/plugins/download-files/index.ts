import type { Plugin } from "vite";
import path from "node:path";
import fs from "node:fs";

const VIRTUAL_MODULE_ID = "virtual:download-bundles";
const RESOLVED_ID = "\0" + VIRTUAL_MODULE_ID;

const EXCLUDED_DIRS = new Set([
  ".vitepress",
  "public",
  "node_modules",
]);

const EXCLUDED_EXTENSIONS = new Set([".md"]);

interface DownloadBundle {
  [folderPath: string]: string[];
}

/**
 * Collect non-markdown files inside `dir` (non-recursively).
 * Returns the file list, or an empty array if the directory has none.
 */
function listFiles(dir: string): string[] {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return [];
  }

  const files: string[] = [];
  for (const entry of entries) {
    if (!entry.isFile()) continue;
    const ext = path.extname(entry.name).toLowerCase();
    if (EXCLUDED_EXTENSIONS.has(ext)) continue;
    files.push(entry.name);
  }
  return files.sort();
}

/**
 * Recursively find directories named "assets" under `dir`,
 * then index every subfolder inside each "assets" directory.
 * Only these targeted folders are shipped to the client bundle.
 */
function scanAssetFolders(
  dir: string,
  docsDir: string,
  bundles: DownloadBundle
): void {
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (EXCLUDED_DIRS.has(entry.name)) continue;

    const fullPath = path.join(dir, entry.name);

    if (entry.name === "assets") {
      // Index the assets folder itself
      const assetFiles = listFiles(fullPath);
      if (assetFiles.length > 0) {
        const relativePath = path.relative(docsDir, fullPath).replace(/\\/g, "/");
        if (!relativePath.startsWith("..")) {
          bundles[relativePath] = assetFiles;
        }
      }

      // Index each subfolder inside assets/
      let assetSubEntries: fs.Dirent[];
      try {
        assetSubEntries = fs.readdirSync(fullPath, { withFileTypes: true });
      } catch {
        continue;
      }
      for (const sub of assetSubEntries) {
        if (!sub.isDirectory()) continue;
        const subPath = path.join(fullPath, sub.name);
        const subFiles = listFiles(subPath);
        if (subFiles.length > 0) {
          const relativePath = path.relative(docsDir, subPath).replace(/\\/g, "/");
          if (!relativePath.startsWith("..")) {
            bundles[relativePath] = subFiles;
          }
        }
      }
    } else {
      // Keep searching deeper for assets/ directories
      scanAssetFolders(fullPath, docsDir, bundles);
    }
  }
}

function loadBundles(docsDir: string): DownloadBundle {
  const bundles: DownloadBundle = {};
  scanAssetFolders(docsDir, docsDir, bundles);
  return bundles;
}

export function downloadFilesPlugin(docsDir: string): Plugin {
  return {
    name: "vitepress-download-files",
    resolveId(id) {
      if (id === VIRTUAL_MODULE_ID) return RESOLVED_ID;
    },
    load(id) {
      if (id !== RESOLVED_ID) return;
      const bundles = loadBundles(docsDir);
      return `export const bundles = ${JSON.stringify(bundles)};`;
    },
    configureServer(server) {
      server.watcher.on("add", (file) => {
        if (!file.endsWith(".md")) {
          const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
          if (mod) {
            server.moduleGraph.invalidateModule(mod);
            server.ws.send({ type: "full-reload" });
          }
        }
      });
      server.watcher.on("unlink", (file) => {
        if (!file.endsWith(".md")) {
          const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
          if (mod) {
            server.moduleGraph.invalidateModule(mod);
            server.ws.send({ type: "full-reload" });
          }
        }
      });
    },
  };
}
