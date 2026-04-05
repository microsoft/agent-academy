import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  paths() {
    const products = JSON.parse(
      readFileSync(resolve(__dirname, "../.vitepress/data/products.json"), "utf-8")
    );
    return products.map((p) => ({ params: { slug: p.slug, label: p.label } }));
  },
};
