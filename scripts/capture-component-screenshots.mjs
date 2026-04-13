/**
 * Captures element-level screenshots of each custom Vue component
 * rendered on the VitePress site. Saves PNGs to the root assets/ folder.
 *
 * Follows the project screenshot guidelines (WRITING_STYLE.md):
 *   - Light theme / white background (prefers-color-scheme: light)
 *   - Element-level capture (no browser frame, focused on component)
 *   - No cursor
 *   - PNG format, lowercase-hyphen filenames
 *
 * Usage:  node scripts/capture-component-screenshots.mjs
 *
 * Prerequisites:
 *   npm i -D @playwright/test
 *   npx playwright install chromium
 */

import { chromium } from "@playwright/test";
import { execSync, spawn } from "node:child_process";
import { mkdirSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const ASSETS = resolve(ROOT, "assets");
const BASE = "/agent-academy";
const PORT = 5199; // high port to avoid conflicts with existing dev servers

/** Components to screenshot — each entry maps to a page + CSS selector. */
const TARGETS = [
  {
    name: "mission-meta",
    path: "/special-ops/yaml-specialist",
    selector: ".mission-meta",
  },
  {
    name: "missions",
    path: "/special-ops/",
    selector: ".missions-container",
  },
  {
    name: "breadcrumb",
    path: "/tags/fundamentals",
    selector: ".breadcrumb",
  },
  {
    name: "page-dates",
    path: "/special-ops/yaml-specialist",
    selector: ".page-dates",
  },
  {
    name: "products-index",
    path: "/products/",
    selector: ".taxonomy-index",
  },
  {
    name: "tags-index",
    path: "/tags/",
    selector: ".taxonomy-index",
  },
  {
    name: "industries-index",
    path: "/industries/",
    selector: ".taxonomy-index",
  },
  {
    name: "action-button",
    path: "/",
    selector: ".action-button",
  },
  {
    name: "download-files",
    path: "/recruit/00-course-setup/",
    selector: ".download-files",
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Wait until the dev server responds on the given URL. */
async function waitForServer(url, timeoutMs = 90_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url, {
        signal: AbortSignal.timeout(2000),
        redirect: "manual",
      });
      // Accept any non-error status (200, 301, 302, etc.)
      if (res.status < 500) return;
    } catch {
      // not ready yet
    }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error(`Dev server did not start within ${timeoutMs / 1000}s`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  // Ensure assets directory exists
  if (!existsSync(ASSETS)) mkdirSync(ASSETS);

  // Run the copy-badges step first (required before vitepress dev)
  console.log("Running copy-badges…");
  execSync("node scripts/copy-badges.mjs", { cwd: ROOT, stdio: "inherit" });

  // Start the VitePress dev server on a dedicated port
  console.log(`\nStarting VitePress dev server on port ${PORT}…`);
  const server = spawn(
    "npx",
    ["vitepress", "dev", "docs", "--port", String(PORT)],
    { cwd: ROOT, stdio: "pipe", shell: true },
  );

  // Capture stdout/stderr to detect the actual port VitePress binds to
  let resolveUrl;
  const serverUrlPromise = new Promise((r) => { resolveUrl = r; });

  function scanForUrl(d) {
    // Strip ANSI escape codes before matching
    const text = d.toString().replace(/\x1b\[[0-9;]*m/g, "");
    // VitePress prints:  ➜  Local:   http://localhost:PORT/agent-academy/
    const match = text.match(/https?:\/\/localhost:\d+\/[^\s]*/);
    if (match && !match[0].includes("expose")) {
      resolveUrl(match[0].replace(/\/$/, ""));
    }
  }

  server.stdout.on("data", (d) => { process.stdout.write(d); scanForUrl(d); });
  server.stderr.on("data", (d) => { process.stderr.write(d); scanForUrl(d); });
  server.on("error", (err) => console.error("spawn error:", err));

  try {
    // Wait for server to print its URL
    const serverUrl = await Promise.race([
      serverUrlPromise,
      new Promise((_, rej) =>
        setTimeout(() => rej(new Error("Dev server did not print a URL within 90s")), 90_000),
      ),
    ]);
    console.log(`\nDev server is ready at ${serverUrl}\n`);

    await waitForServer(serverUrl);
    console.log("Dev server is ready.\n");

    const browser = await chromium.launch();
    const context = await browser.newContext({
      viewport: { width: 1280, height: 800 },
      // Force light theme per WRITING_STYLE.md ("Always use light theme
      // with white background before capturing")
      colorScheme: "light",
    });

    const PADDING = 24; // px of breathing room around the component

    for (const target of TARGETS) {
      const url = `${serverUrl}${target.path}`;
      console.log(`Capturing ${target.name} from ${url} …`);
      const page = await context.newPage();
      await page.goto(url, { waitUntil: "networkidle" });

      // Hide the fixed nav bar so it never overlaps the component
      await page.addStyleTag({
        content: `
          .VPNav, nav.VPNavBar, header { display: none !important; }
        `,
      });

      // Wait for the component to render
      const el = await page.waitForSelector(target.selector, {
        timeout: 15_000,
      });
      if (!el) {
        console.warn(
          `  ⚠ Selector "${target.selector}" not found – skipping.`,
        );
        await page.close();
        continue;
      }

      // Scroll the element into view and get its bounding box
      await el.scrollIntoViewIfNeeded();
      // Small delay to let any scroll-triggered layout settle
      await page.waitForTimeout(300);
      const box = await el.boundingBox();

      // boundingBox() returns viewport-relative coords; add scroll offsets
      // so the clip works correctly with fullPage: true
      const scroll = await page.evaluate(() => ({
        x: window.scrollX,
        y: window.scrollY,
      }));
      const fullWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const fullHeight = await page.evaluate(() => document.documentElement.scrollHeight);

      // Expand the bounding box by PADDING, clamped to the full page
      const clip = {
        x: Math.max(0, box.x + scroll.x - PADDING),
        y: Math.max(0, box.y + scroll.y - PADDING),
        width: Math.min(box.width + PADDING * 2, fullWidth - Math.max(0, box.x + scroll.x - PADDING)),
        height: Math.min(box.height + PADDING * 2, fullHeight - Math.max(0, box.y + scroll.y - PADDING)),
      };

      const outPath = resolve(ASSETS, `component-${target.name}.png`);
      await page.screenshot({ path: outPath, clip, fullPage: true });
      console.log(`  ✔ Saved ${outPath}`);
      await page.close();
    }

    await browser.close();
    console.log("\nDone — all screenshots saved to assets/");
  } finally {
    // Kill the dev server
    server.kill();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
