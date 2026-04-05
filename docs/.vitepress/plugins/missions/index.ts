import type { Plugin } from "vite";
import path from "node:path";
import fs from "node:fs";
import { execSync } from "node:child_process";
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

function getGitTimestamp(filePath: string): number {
  try {
    const stdout = execSync(`git log -1 --format=%ct "${filePath}"`, {
      cwd: path.dirname(filePath),
      encoding: "utf-8",
    }).trim();
    return stdout ? parseInt(stdout, 10) * 1000 : 0;
  } catch {
    return 0;
  }
}

function getGitCreatedAt(filePath: string): number {
  try {
    const stdout = execSync(
      `git log --reverse --format=%ct "${filePath}"`,
      { cwd: path.dirname(filePath), encoding: "utf-8" }
    ).trim();
    const first = stdout.split(/\r?\n/)[0];
    return first ? parseInt(first, 10) * 1000 : 0;
  } catch {
    return 0;
  }
}

function extractH1(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : "";
}

function loadMissions(docsDir: string): MissionData[] {
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
        badge = "/" + path.relative(docsDir, badgeFsPath).replace(/\\/g, "/");
      } else if (COURSE_BADGES[sectionName]) {
        badge = COURSE_BADGES[sectionName];
      }

      missions.push({
        title,
        section: sectionName,
        url: `/${sectionName}/${sub.name}/`,
        badge,
        difficulty: frontmatter.difficulty ?? 0,
        tags: frontmatter.tags ?? [],
        lastUpdated: getGitTimestamp(indexPath),
        createdAt: getGitCreatedAt(indexPath),
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
  };
}
