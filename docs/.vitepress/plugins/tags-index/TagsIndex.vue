<template>
  <div class="taxonomy-index">
    <a
      v-for="item in items"
      :key="item.slug"
      :href="withBase(`/tags/${item.slug}`)"
      class="taxonomy-card"
    >
      <!-- safe: icon content is hardcoded in icons.ts, not user input -->
      <svg v-if="icons[item.slug]" class="taxonomy-icon" viewBox="0 0 20 20" aria-hidden="true" v-html="icons[item.slug]" />
      <span class="taxonomy-label">{{ item.label }}</span>
      <span class="taxonomy-count">{{ missionCount(item.slug) }} mission{{ missionCount(item.slug) === 1 ? '' : 's' }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { withBase } from "vitepress";
import { missions } from "virtual:missions-data";
import tagData from "../../data/tags.json";
import { tagIcons as icons } from "../../data/icons";

const items = tagData.filter(t =>
  missions.some(m => (m.tags ?? []).includes(t.slug))
);

function missionCount(slug: string): number {
  return missions.filter(m => (m.tags ?? []).includes(slug)).length;
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
  align-items: flex-start;
  gap: 0.3rem;
  padding: 0.85rem 1rem;
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

.taxonomy-icon {
  width: 28px;
  height: 28px;
  color: var(--vp-c-text-1);
  margin-bottom: 0.25rem;
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
