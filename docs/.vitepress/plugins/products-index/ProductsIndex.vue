<template>
  <div class="taxonomy-index">
    <a
      v-for="item in items"
      :key="item.slug"
      :href="withBase(`/products/${item.slug}`)"
      class="taxonomy-card"
    >
      <span class="taxonomy-label">{{ item.label }}</span>
      <span class="taxonomy-count">{{ missionCount(item.slug) }} mission{{ missionCount(item.slug) === 1 ? '' : 's' }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { withBase } from "vitepress";
import { missions } from "virtual:missions-data";
import productData from "../../data/products.json";

const items = productData.filter(p =>
  missions.some(m => (m.products ?? []).includes(p.slug))
);

function missionCount(slug: string): number {
  return missions.filter(m => (m.products ?? []).includes(slug)).length;
}
</script>

<style scoped>
.taxonomy-index {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.75rem;
  margin-top: 1.25rem;
}

.taxonomy-card {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: border-color 0.2s, box-shadow 0.2s;
}

.taxonomy-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.taxonomy-card:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.taxonomy-label {
  font-weight: 600;
  font-size: 0.9rem;
}

.taxonomy-count {
  font-size: 0.78rem;
  color: var(--vp-c-text-2);
}
</style>
