#!/usr/bin/env node
/**
 * Validates frontmatter on mission pages.
 * Checks for required fields: difficulty, time, description.
 * Targets: docs/special-ops/*\/index.md and docs/cowork-collective/*\/index.md
 */

import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const docsDir = path.resolve(__dirname, "../docs");

const MISSION_DIRS = ["special-ops", "cowork-collective"];
const REQUIRED_FIELDS = ["difficulty", "time", "description", "created-date", "last-edited-date"];

// Index pages for the section itself (not missions)
const SECTION_INDEX_NAMES = new Set(MISSION_DIRS.map((d) => path.join(docsDir, d, "index.md")));

let errors = 0;
let checked = 0;

for (const sectionName of MISSION_DIRS) {
  const sectionDir = path.join(docsDir, sectionName);
  if (!fs.existsSync(sectionDir)) continue;

  for (const entry of fs.readdirSync(sectionDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;

    const indexPath = path.join(sectionDir, entry.name, "index.md");
    if (!fs.existsSync(indexPath)) continue;

    const raw = fs.readFileSync(indexPath, "utf-8");
    const { data: fm } = matter(raw);
    const rel = path.relative(docsDir, indexPath).replace(/\\/g, "/");
    checked++;

    const missing = REQUIRED_FIELDS.filter((f) => {
      const val = fm[f];
      return val === undefined || val === null || val === "";
    });

    if (missing.length > 0) {
      for (const field of missing) {
        console.error(`Error: ${rel} — missing frontmatter field: "${field}"`);
      }
      errors++;
    } else {
      // Type checks
      if (typeof fm.difficulty !== "number" || fm.difficulty < 1 || fm.difficulty > 5) {
        console.error(`Error: ${rel} — "difficulty" must be a number between 1 and 5 (got: ${JSON.stringify(fm.difficulty)})`);
        errors++;
      }
      if (typeof fm.time !== "number" || fm.time <= 0) {
        console.error(`Error: ${rel} — "time" must be a positive number in minutes (got: ${JSON.stringify(fm.time)})`);
        errors++;
      }
      if (typeof fm.description !== "string" || fm.description.trim().length < 10) {
        console.error(`Error: ${rel} — "description" must be a non-empty string of at least 10 characters`);
        errors++;
      }
      for (const dateField of ["created-date", "last-edited-date"]) {
        const raw = fm[dateField];
        if (isNaN(new Date(raw).getTime())) {
          console.error(`Error: ${rel} — "${dateField}" must be a valid date (got: ${JSON.stringify(raw)})`);
          errors++;
        }
      }
    }
  }
}

console.log(`\nFrontmatter check: ${checked} mission(s) checked, ${errors} error(s) found.`);

if (errors > 0) {
  process.exit(1);
}
