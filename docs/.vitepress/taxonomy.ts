import tagsData from "./data/tags.json";
import productsData from "./data/products.json";

export interface TaxonomyEntry {
  slug: string;
  label: string;
}

export const TAGS: TaxonomyEntry[] = tagsData;
export const PRODUCTS: TaxonomyEntry[] = productsData;

// Lookup helpers
export const TAG_LABELS = Object.fromEntries(TAGS.map((t) => [t.slug, t.label]));
export const PRODUCT_LABELS = Object.fromEntries(PRODUCTS.map((p) => [p.slug, p.label]));
