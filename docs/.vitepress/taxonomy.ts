import tagsData from "./data/tags.json";
import productsData from "./data/products.json";
import industriesData from "./data/industries.json";

export interface TaxonomyEntry {
  slug: string;
  label: string;
}

export const TAGS: TaxonomyEntry[] = tagsData;
export const PRODUCTS: TaxonomyEntry[] = productsData;
export const INDUSTRIES: TaxonomyEntry[] = industriesData;

// Lookup helpers
export const TAG_LABELS = Object.fromEntries(TAGS.map((t) => [t.slug, t.label]));
export const PRODUCT_LABELS = Object.fromEntries(PRODUCTS.map((p) => [p.slug, p.label]));
export const INDUSTRY_LABELS = Object.fromEntries(INDUSTRIES.map((i) => [i.slug, i.label]));
