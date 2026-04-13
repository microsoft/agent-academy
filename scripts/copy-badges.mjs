#!/usr/bin/env node
/**
 * Copies all mission badge images into docs/public/images/ so they are
 * available to the VitePress dev server and included in the production build.
 */

import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.resolve(__dirname, "../docs");
const publicImagesDir = path.resolve(docsDir, "public/images");
const COURSE_BADGE_PATTERN = /!\[[^\]]*\]\((?<badgePath>[^)]*mcs-agent-academy-[^)]+-badge\.(?:png|jpe?g|svg|webp))\)/g;

const EXCLUDED_DIRS = new Set([
  ".vitepress", "public", "images", "includes",
  "our-team", "data", "commander-preview", "recent-changes",
]);

fs.mkdirSync(publicImagesDir, { recursive: true });

let copied = 0;
const copiedDestinations = new Set();

function copyBadge(badgeSrc) {
  if (!fs.existsSync(badgeSrc)) return;

  const destName = path.basename(badgeSrc);
  const dest = path.join(publicImagesDir, destName);
  if (copiedDestinations.has(dest)) return;

  fs.copyFileSync(badgeSrc, dest);
  copiedDestinations.add(dest);
  copied++;
  console.log(`Copied: ${path.relative(docsDir, badgeSrc)} -> public/images/${destName}`);
}

for (const sectionEntry of fs.readdirSync(docsDir, { withFileTypes: true })) {
  if (!sectionEntry.isDirectory() || EXCLUDED_DIRS.has(sectionEntry.name)) continue;

  const sectionDir = path.join(docsDir, sectionEntry.name);

  for (const missionEntry of fs.readdirSync(sectionDir, { withFileTypes: true })) {
    if (!missionEntry.isDirectory()) continue;

    const indexPath = path.join(sectionDir, missionEntry.name, "index.md");
    if (!fs.existsSync(indexPath)) continue;

    const { data: frontmatter } = matter(fs.readFileSync(indexPath, "utf-8"));
    if (!frontmatter.badge) continue;

    const badgeSrc = path.resolve(path.dirname(indexPath), frontmatter.badge);
    copyBadge(badgeSrc);
  }
}

for (const markdownPath of [
  path.join(docsDir, "index.md"),
  path.join(docsDir, "commander/index.md"),
  path.join(docsDir, "commander-preview/index.md"),
  path.join(docsDir, "recruit/course-completion-badges-recruit/index.md"),
  path.join(docsDir, "operative/course-completion-badges-operative/index.md"),
]) {
  if (!fs.existsSync(markdownPath)) continue;

  const content = fs.readFileSync(markdownPath, "utf-8");
  for (const match of content.matchAll(COURSE_BADGE_PATTERN)) {
    copyBadge(path.resolve(path.dirname(markdownPath), match.groups.badgePath));
  }
}

console.log(`\nDone - ${copied} badge image(s) synced to docs/public/images/`);
