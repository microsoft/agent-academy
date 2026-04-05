<template>
  <div v-if="hasAnything" class="mission-meta">
    <span v-if="difficulty" class="meta-item">
      <span class="meta-label">Difficulty</span>
      <span class="meta-stars">{{ '⭐'.repeat(difficulty) }}</span>
    </span>
    <span v-if="time" class="meta-item">
      <span class="meta-label">Time</span>
      <span class="meta-value">{{ time }}</span>
    </span>
    <span v-if="products.length" class="meta-item meta-item--products">
      <span class="meta-label">Products</span>
      <span class="meta-products">
          <a v-for="p in products" :key="p.slug" :href="p.href" class="meta-product-pill">{{ p.label }}</a>
        </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useData, withBase } from "vitepress";
import productData from "../../data/products.json";

const PRODUCT_LABELS = Object.fromEntries(productData.map((p) => [p.slug, p.label]));

const { frontmatter } = useData();

const difficulty = computed(() => {
  const d = Number(frontmatter.value.difficulty);
  return d >= 1 && d <= 5 ? d : 0;
});

const time = computed(() => {
  const t = frontmatter.value.time;
  if (!t) return null;
  return `~${t} min`;
});

const products = computed(() =>
  (frontmatter.value.products ?? []).map((slug: string) => ({
    slug,
    label: PRODUCT_LABELS[slug] ?? slug,
    href: withBase(`/products/${slug}`),
  }))
);

const hasAnything = computed(() => difficulty.value || time.value || products.value.length > 0);
</script>

<style scoped>
.mission-meta {
  display: inline-flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  align-items: center;
  padding: 0.5rem 1rem;
  margin: 0.75rem 0 1.25rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  font-size: 0.9rem;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.meta-item--products {
  align-items: baseline;
}

.meta-label {
  font-weight: 600;
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.meta-stars,
.meta-value {
  color: var(--vp-c-text-1);
}

.meta-products {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.meta-product-pill {
  font-size: 0.75rem;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
  white-space: nowrap;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}

.meta-product-pill:hover {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}
</style>
