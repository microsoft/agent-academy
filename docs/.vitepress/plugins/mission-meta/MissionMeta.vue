<template>
  <div v-if="hasAnything" class="mission-meta">
    <span v-if="difficulty" class="meta-item">
      <span class="meta-label">Difficulty</span>
      <span class="meta-stars" :aria-label="`${difficulty} out of 3`">
        <svg v-for="i in 3" :key="i" class="meta-star" :class="{ filled: i <= difficulty }" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M8 1l1.9 3.9 4.3.6-3.1 3 .7 4.3L8 10.7l-3.8 2 .7-4.3-3.1-3 4.3-.6z"/>
        </svg>
      </span>
    </span>
    <span v-if="time" class="meta-item">
      <span class="meta-label">Time</span>
      <span class="meta-value">{{ time }}</span>
    </span>
    <span v-if="products.length" class="meta-item meta-item--pills">
      <span class="meta-label">Products</span>
      <span class="meta-pills">
        <a v-for="p in products" :key="p.slug" :href="p.href" class="meta-pill meta-pill--product">{{ p.label }}</a>
      </span>
    </span>
    <span v-if="tags.length" class="meta-item meta-item--pills">
      <span class="meta-label">Tags</span>
      <span class="meta-pills">
        <a v-for="t in tags" :key="t.slug" :href="t.href" class="meta-pill meta-pill--tag">{{ t.label }}</a>
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useData, withBase } from "vitepress";
import productData from "../../data/products.json";
import tagData from "../../data/tags.json";

const PRODUCT_LABELS = Object.fromEntries(productData.map((p) => [p.slug, p.label]));
const TAG_LABELS = Object.fromEntries(tagData.map((t) => [t.slug, t.label]));

const { frontmatter } = useData();

const difficulty = computed(() => {
  const d = Number(frontmatter.value.difficulty);
  return d >= 1 && d <= 3 ? d : 0;
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

const tags = computed(() =>
  (frontmatter.value.tags ?? []).map((slug: string) => ({
    slug,
    label: TAG_LABELS[slug] ?? slug,
    href: withBase(`/tags/${slug}`),
  }))
);

const hasAnything = computed(() => difficulty.value || time.value || products.value.length > 0 || tags.value.length > 0);
</script>

<style scoped>
.mission-meta {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: baseline;
  gap: 0.35rem 0.75rem;
  width: fit-content;
  max-width: 100%;
  padding: 0.75rem 1rem;
  margin: 0.75rem 0 1.25rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  font-size: 0.9rem;
}

.meta-item {
  display: contents;
}

.meta-item--pills {
  display: contents;
}

.meta-label {
  font-weight: 600;
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  align-self: baseline;
  padding-top: 0.1rem;
}

.meta-stars {
  display: flex;
  align-items: center;
  gap: 0.15rem;
}

.meta-star {
  width: 14px;
  height: 14px;
  fill: var(--vp-c-divider);
  transition: fill 0.15s;
}

.meta-star.filled {
  fill: #f59e0b;
}

.meta-value {
  color: var(--vp-c-text-1);
}

.meta-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.meta-pill {
  font-size: 0.75rem;
  padding: 0.15rem 0.55rem;
  border-radius: 999px;
  white-space: nowrap;
  text-decoration: none;
  transition: background 0.15s, color 0.15s;
}

.meta-pill--product {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
}

.meta-pill--product:hover {
  background: var(--vp-c-brand-2, #4c5fd7);
  color: #fff;
}

.meta-pill--tag {
  background: var(--vp-c-yellow-soft, #fef3c7);
  color: var(--vp-c-yellow-1, #92400e);
}

.meta-pill--tag:hover {
  background: var(--vp-c-yellow-2, #f59e0b);
  color: #fff;
}

.meta-pill:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}
</style>
