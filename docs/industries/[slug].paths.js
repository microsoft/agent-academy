import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  paths() {
    const industries = JSON.parse(
      readFileSync(resolve(__dirname, "../.vitepress/data/industries.json"), "utf-8")
    );
    return industries.map((i) => ({ params: { slug: i.slug, label: i.label } }));
  },
};
