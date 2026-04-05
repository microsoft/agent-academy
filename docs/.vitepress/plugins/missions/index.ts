import type { Plugin } from "vite";
import path from "node:path";
import fs from "node:fs";
import { execFileSync } from "node:child_process";
import matter from "gray-matter";

const VIRTUAL_MODULE_ID = "virtual:missions-data";
const RESOLVED_ID = "\0" + VIRTUAL_MODULE_ID;

const EXCLUDED_DIRS = new Set([
  ".vitepress",
  "public",
  "images",
  "includes",
  "our-team",
  "data",
  "commander-preview",
  "recent-changes",
]);

const COURSE_BADGES: Record<string, string> = {
  recruit: "/images/mcs-agent-academy-recruit-badge.png",
  operative: "/images/mcs-agent-academy-operative-badge.png",
  commander: "/images/mcs-agent-academy-commander-badge.png",
};

interface MissionData {
  title: string;
  section: string;
  url: string;
  badge: string | null;
  difficulty: number;
  tags: string[];
  lastUpdated: number;
  createdAt: number;
}

function stripFrontmatter(raw: string): string {
  return raw.replace(/^---[\r\n][\s\S]*?[\r\n]---[\r\n]?/, "");
}

function getFileAtCommit(
  hash: string,
  relPath: string,
  repoRoot: string
): string {
  try {
    return execFileSync("git", ["show", `${hash}:${relPath}`], {
      cwd: repoRoot,
      encoding: "utf-8",
    });
  } catch {
    return "";
  }
}

function getContentTimestamp(filePath: string, repoRoot: string): number {
  try {
    const relPath = path
      .relative(repoRoot, filePath)
      .replace(/\\/g, "/");

    const log = execFileSync(
      "git", ["log", "-10", "--format=%H:%ct", "--", relPath],
      { cwd: repoRoot, encoding: "utf-8" }
    ).trim();

    if (!log) return 0;

    const commits = log.split(/\r?\n/).map((line) => {
      const sep = line.indexOf(":");
      return {
        hash: line.substring(0, sep),
        timestamp: parseInt(line.substring(sep + 1), 10) * 1000,
      };
    });

    // Walk from newest to oldest, comparing content without frontmatter
    for (let i = 0; i < commits.length - 1; i++) {
      const curr = getFileAtCommit(commits[i].hash, relPath, repoRoot);
      const prev = getFileAtCommit(commits[i + 1].hash, relPath, repoRoot);

      if (stripFrontmatter(curr) !== stripFrontmatter(prev)) {
        return commits[i].timestamp;
      }
    }

    // Fallback to oldest commit in our window (likely initial creation)
    return commits[commits.length - 1].timestamp;
  } catch {
    return 0;
  }
}

function getMergedAt(filePath: string, repoRoot: string): number {
  try {
    const relPath = path
      .relative(repoRoot, filePath)
      .replace(/\\/g, "/");

    // --first-parent follows only the main branch line, --diff-filter=A
    // finds the merge commit that introduced the file on main
    const stdout = execFileSync(
      "git", ["log", "--first-parent", "--reverse", "--format=%ct", "--", relPath],
      { cwd: repoRoot, encoding: "utf-8" }
    ).trim();
    const first = stdout.split(/\r?\n/)[0];
    return first ? parseInt(first, 10) * 1000 : 0;
  } catch {
    return 0;
  }
}

function extractH1(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  if (!match) return "";
  return match[1].replace(/\s*\{#[^}]+\}\s*$/, "").trim();
}

function loadMissions(docsDir: string): MissionData[] {
  const repoRoot = path.resolve(docsDir, "..");
  const missions: MissionData[] = [];
  const entries = fs.readdirSync(docsDir, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory() || EXCLUDED_DIRS.has(entry.name)) continue;

    const sectionName = entry.name;
    const sectionDir = path.join(docsDir, sectionName);
    const subEntries = fs.readdirSync(sectionDir, { withFileTypes: true });

    for (const sub of subEntries) {
      if (!sub.isDirectory()) continue;

      const indexPath = path.join(sectionDir, sub.name, "index.md");
      if (!fs.existsSync(indexPath)) continue;

      const raw = fs.readFileSync(indexPath, "utf-8");
      const { data: frontmatter, content } = matter(raw);

      const title = extractH1(content);
      if (!title) continue;

      let badge: string | null = null;
      if (frontmatter.badge) {
        const badgeFsPath = path.resolve(
          path.dirname(indexPath),
          frontmatter.badge
        );
        // Prevent path traversal outside docsDir
        if (!badgeFsPath.startsWith(docsDir + path.sep) && badgeFsPath !== docsDir) {
          badge = null;
        } else {
          badge = "/" + path.relative(docsDir, badgeFsPath).replace(/\\/g, "/");
        }
      } else if (COURSE_BADGES[sectionName]) {
        badge = COURSE_BADGES[sectionName];
      }

      missions.push({
        title,
        section: sectionName,
        url: `/${sectionName}/${sub.name}/`,
        badge,
        difficulty: Math.min(Math.max(Number(frontmatter.difficulty) || 0, 0), 5),
        tags: frontmatter.tags ?? [],
        lastUpdated: getContentTimestamp(indexPath, repoRoot),
        createdAt: getMergedAt(indexPath, repoRoot),
      });
    }
  }

  return missions;
}

export function missionsPlugin(docsDir: string): Plugin {
  return {
    name: "vitepress-missions",
    resolveId(id) {
      if (id === VIRTUAL_MODULE_ID) return RESOLVED_ID;
    },
    load(id) {
      if (id !== RESOLVED_ID) return;
      const missions = loadMissions(docsDir);
      return `export const missions = ${JSON.stringify(missions)};`;
    },
    configureServer(server) {
      // Invalidate virtual module when any markdown file changes
      server.watcher.on("change", (file) => {
        if (file.endsWith(".md")) {
          const mod = server.moduleGraph.getModuleById(RESOLVED_ID);
          if (mod) {
            server.moduleGraph.invalidateModule(mod);
            server.ws.send({ type: "full-reload" });
          }
        }
      });
    },
    writeBundle(options) {
      const outDir = options.dir;
      if (!outDir) return;

      const missions = loadMissions(docsDir);
      const badgePaths = new Set<string>();

      for (const mission of missions) {
        if (!mission.badge) continue;
        // badge is a root-relative path like /images/foo.png or /cowork-collective/assets/foo.png
        badgePaths.add(mission.badge);
      }

      for (const badgePath of badgePaths) {
        const srcFile = path.join(docsDir, badgePath.replace(/\//g, path.sep));
        if (!fs.existsSync(srcFile)) continue;

        const destFile = path.join(outDir, badgePath.replace(/\//g, path.sep));
        const destDir = path.dirname(destFile);
        fs.mkdirSync(destDir, { recursive: true });
        fs.copyFileSync(srcFile, destFile);
      }
    },
  };
}
