import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  paths() {
    const tags = JSON.parse(
      readFileSync(resolve(__dirname, "../.vitepress/data/tags.json"), "utf-8")
    );
    return tags.map((t) => ({ params: { slug: t.slug, label: t.label } }));
  },
};
