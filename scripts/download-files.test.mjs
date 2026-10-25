import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, rm, symlink } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { test } from "node:test";
import { build, createServer } from "vite";
import JSZip from "jszip";
import { downloadFilesPlugin } from "../docs/.vitepress/plugins/download-files/index.ts";

async function fixture(t) {
  const root = await mkdtemp(path.join(os.tmpdir(), "academy-downloads-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const folder = "lesson/assets/skill";
  const dir = path.join(root, folder);
  await mkdir(path.join(dir, "scripts"), { recursive: true });
  await mkdir(path.join(dir, "references"), { recursive: true });
  await mkdir(path.join(dir, "node_modules/ignored"), { recursive: true });
  await writeFile(path.join(dir, "SKILL.md"), "# Example skill\n");
  await writeFile(path.join(dir, "a.txt"), "sample\n");
  await writeFile(path.join(dir, "scripts/generate.py"), "print('example')\n");
  await writeFile(path.join(dir, "references/template.txt"), "reference\n");
  await writeFile(path.join(dir, ".npmrc"), "save-exact=true\n");
  await writeFile(path.join(dir, "node_modules/ignored/index.js"), "excluded\n");
  await writeFile(path.join(root, "index.md"), `<download-files path="${folder}" />`);
  return { root, folder, dir };
}

async function output(root) {
  const result = await build({
    configFile: false,
    root,
    logLevel: "silent",
    plugins: [downloadFilesPlugin(root)],
    build: {
      write: false,
      minify: false,
      rollupOptions: {
        input: "virtual:download-bundles",
        preserveEntrySignatures: "strict",
      },
    },
  });
  assert.ok(!Array.isArray(result));
  return result.output;
}

function assets(result) {
  return new Map(result.filter((item) => item.type === "asset").map(
    (item) => [item.fileName, Buffer.from(item.source)]
  ));
}

test("multi-file bundles preserve nested dependencies and have no standalone skill alternative", async (t) => {
  const { root, folder } = await fixture(t);
  await mkdir(path.join(root, "unused/assets/files"), { recursive: true });
  await writeFile(path.join(root, "unused/assets/files/unused.txt"), "not downloaded");
  const first = await output(root);
  const firstAssets = assets(first);
  const archivePath = `downloads/${folder}/skill.zip`;
  assert.equal(firstAssets.size, 1);
  const zip = await JSZip.loadAsync(firstAssets.get(archivePath), { checkCRC32: true });
  assert.deepEqual(Object.keys(zip.files), [".npmrc", "SKILL.md", "a.txt", "references/template.txt", "scripts/generate.py"]);
  assert.equal(await zip.file("SKILL.md").async("string"), "# Example skill\n");
  assert.equal(await zip.file("scripts/generate.py").async("string"), "print('example')\n");
  for (const file of Object.values(zip.files)) {
    assert.equal(file.date.toISOString(), "2000-01-01T00:00:00.000Z");
  }
  const secondAssets = assets(await output(root));
  assert.deepEqual(firstAssets.get(archivePath), secondAssets.get(archivePath));
  assert.ok(first.some((item) => item.type === "chunk" && item.code.includes(archivePath)));
});

test("single Markdown skills get descriptive names and preserve their bytes", async (t) => {
  const { root } = await fixture(t);
  for (const version of ["device-guidance-v1-0-1", "device-guidance-v1-0-2"]) {
    const folder = `lesson/assets/${version}`;
    await mkdir(path.join(root, folder), { recursive: true });
    await writeFile(path.join(root, folder, "SKILL.md"), `---\nname: ${version}\n---\n# Instructions\n`);
  }
  await writeFile(path.join(root, "index.md"), [
    '<download-files path="lesson/assets/device-guidance-v1-0-1" />',
    '<download-files path="lesson/assets/device-guidance-v1-0-2" />',
  ].join("\n"));
  const published = assets(await output(root));
  assert.equal(published.size, 2);
  for (const version of ["device-guidance-v1-0-1", "device-guidance-v1-0-2"]) {
    assert.equal(published.get(`downloads/lesson/assets/${version}/${version}.md`).toString(),
      `---\nname: ${version}\n---\n# Instructions\n`);
  }
});

test("a sole descriptively named Markdown file keeps its filename", async (t) => {
  const { root } = await fixture(t);
  await mkdir(path.join(root, "single"));
  await writeFile(path.join(root, "single/seo-audit.md"), "# Audit\n");
  await writeFile(path.join(root, "index.md"), '<download-files path="single" />');
  assert.equal(assets(await output(root)).get("downloads/single/seo-audit.md").toString(), "# Audit\n");
});

test("an explicit existing ZIP is copied without changing its bytes or wrapping it", async (t) => {
  const { root, dir, folder } = await fixture(t);
  const original = await new JSZip().file("solution.xml", "<solution />").generateAsync({ type: "nodebuffer" });
  await writeFile(path.join(dir, "prepared.zip"), original);
  await writeFile(path.join(root, "index.md"), `<download-files path="${folder}/prepared.zip" />`);
  const published = assets(await output(root));
  assert.deepEqual(published.get(`downloads/${folder}/prepared.zip/prepared.zip`), original);
  assert.equal(published.size, 1);
});

test("a folder containing only a prepared ZIP preserves its filename and bytes", async (t) => {
  const { root } = await fixture(t);
  await mkdir(path.join(root, "prepared"));
  const original = await new JSZip().file("SKILL.md", "# Skill\n").generateAsync({ type: "nodebuffer" });
  await writeFile(path.join(root, "prepared/skill-package.zip"), original);
  await writeFile(path.join(root, "index.md"), '<download-files path="prepared" />');
  assert.deepEqual(assets(await output(root)).get("downloads/prepared/skill-package.zip"), original);
});

test("ZIP resources alongside skill source files are included, not mistaken for a prepared package", async (t) => {
  const { root, dir, folder } = await fixture(t);
  await mkdir(path.join(dir, "references/examples"));
  await writeFile(path.join(dir, "references/examples/data.zip"), "nested archive");
  await writeFile(path.join(dir, "other.zip"), "root archive");
  const zip = await JSZip.loadAsync(assets(await output(root)).get(`downloads/${folder}/skill.zip`));
  assert.equal(await zip.file("references/examples/data.zip").async("string"), "nested archive");
  assert.equal(await zip.file("other.zip").async("string"), "root archive");
  assert.ok(zip.file("SKILL.md"));
  assert.ok(zip.file("scripts/generate.py"));
});

test("explicit file references and custom filenames keep original formats and bytes", async (t) => {
  const { root, dir, folder } = await fixture(t);
  await writeFile(path.join(dir, "example data.csv"), "name,value\nsample,1\n");
  await writeFile(path.join(root, "index.md"), [
    `<download-files path="${folder}/SKILL.md" filename="frontend-design.md" />`,
    `<download-files path="${folder}/example data.csv" />`,
    `<download-files path="${folder}" filename="python-skill.zip" />`,
  ].join("\n"));
  const published = assets(await output(root));
  assert.equal(published.get(`downloads/${folder}/SKILL.md/frontend-design.md`).toString(), "# Example skill\n");
  assert.equal(published.get(`downloads/${folder}/example data.csv/example data.csv`).toString(), "name,value\nsample,1\n");
  assert.ok(published.has(`downloads/${folder}/python-skill.zip`));
});

test("invalid, missing, and empty referenced folders fail the build", async (t) => {
  const { root } = await fixture(t);
  await mkdir(path.join(root, "empty"));
  for (const folder of ["../outside", "missing", "empty"]) {
    await writeFile(path.join(root, "index.md"), `<download-files path="${folder}" />`);
    await assert.rejects(output(root), /Invalid download-files path|ENOENT|No downloadable files/);
  }
});

test("multiple ZIP resources are packaged without silently discarding them", async (t) => {
  const { root } = await fixture(t);
  const folder = "multiple";
  await mkdir(path.join(root, folder));
  await writeFile(path.join(root, folder, "first.zip"), "first");
  await writeFile(path.join(root, folder, "second.zip"), "second");
  await writeFile(path.join(root, "index.md"), `<download-files path="${folder}" />`);
  const zip = await JSZip.loadAsync(assets(await output(root)).get("downloads/multiple/multiple.zip"));
  assert.equal(await zip.file("first.zip").async("string"), "first");
  assert.equal(await zip.file("second.zip").async("string"), "second");
});

test("invalid or conflicting filename overrides fail instead of changing file formats", async (t) => {
  const { root, folder } = await fixture(t);
  for (const filename of ["../escape.zip", "skill.md", "nested/name.zip", "nested\\name.zip"]) {
    await writeFile(path.join(root, "index.md"), `<download-files path="${folder}" filename="${filename}" />`);
    await assert.rejects(output(root), /Invalid download filename/);
  }
  await writeFile(path.join(root, "index.md"),
    `<download-files path="${folder}" filename="one.zip" />\n<download-files path="${folder}" filename="two.zip" />`);
  await assert.rejects(output(root), /Conflicting download filenames/);
});

test("symbolic-link entries fail instead of including unintended files", async (t) => {
  const { root, dir } = await fixture(t);
  await symlink(path.join(dir, "SKILL.md"), path.join(dir, "linked.md"));
  await assert.rejects(output(root), /symbolic links/);
});

test("development serves matching archives and descriptive Markdown files under the configured base", async (t) => {
  const { root, dir, folder } = await fixture(t);
  await writeFile(path.join(root, "index.md"),
    `<download-files path="${folder}" />\n<download-files path="${folder}/SKILL.md" filename="frontend-design.md" />`);
  const published = assets(await output(root));
  const server = await createServer({
    configFile: false,
    root,
    base: "/agent-academy/",
    logLevel: "silent",
    plugins: [downloadFilesPlugin(root)],
    server: { port: 0, host: "127.0.0.1" },
  });
  t.after(() => server.close());
  await server.listen();
  const address = server.httpServer.address();
  assert.ok(address && typeof address !== "string");
  const origin = `http://127.0.0.1:${address.port}/agent-academy/`;
  const archivePath = `downloads/${folder}/skill.zip`;
  const response = await fetch(origin + archivePath);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get("content-type"), "application/zip");
  assert.deepEqual(Buffer.from(await response.arrayBuffer()), published.get(archivePath));
  const head = await fetch(origin + archivePath, { method: "HEAD" });
  assert.equal(head.status, 200);
  assert.equal(await head.text(), "");
  assert.equal(head.headers.get("content-length"), String(published.get(archivePath).length));
  const skillPath = `downloads/${folder}/SKILL.md/frontend-design.md`;
  const skill = await fetch(origin + skillPath);
  assert.equal(skill.status, 200);
  assert.match(skill.headers.get("content-type"), /^text\/markdown/);
  assert.deepEqual(Buffer.from(await skill.clone().arrayBuffer()), published.get(skillPath));
  assert.equal(await skill.text(), "# Example skill\n");
  await writeFile(path.join(dir, "SKILL.md"), "# Updated skill\n");
  const updated = await fetch(origin + skillPath);
  assert.equal(await updated.text(), "# Updated skill\n");
  assert.equal((await fetch(origin + "downloads/missing.zip")).status, 404);
  assert.equal((await fetch(origin + archivePath, { method: "POST" })).status, 405);
});
