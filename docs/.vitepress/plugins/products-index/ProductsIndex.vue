<template>
  <div class="taxonomy-index">
    <a
      v-for="item in items"
      :key="item.slug"
      :href="withBase(`/products/${item.slug}`)"
      class="taxonomy-card"
    >
      <img v-if="fileIcons[item.slug]" :src="withBase(fileIcons[item.slug])" :alt="item.label" class="taxonomy-icon taxonomy-icon--img" />
      <!-- safe: icon content is hardcoded in icons.ts, not user input -->
      <svg v-else-if="icons[item.slug]" class="taxonomy-icon" viewBox="0 0 24 24" aria-hidden="true" v-html="icons[item.slug]" />
      <span class="taxonomy-label">{{ item.label }}</span>
      <span class="taxonomy-count">{{ missionCount(item.slug) }} mission{{ missionCount(item.slug) === 1 ? '' : 's' }}</span>
    </a>
  </div>
</template>

<script setup lang="ts">
import { withBase } from "vitepress";
import { missions } from "virtual:missions-data";
import productData from "../../data/products.json";
import { productIcons as icons } from "../../data/icons";

// Products that have an official SVG file in /public/product-icons/
const fileIcons: Record<string, string> = {
  "azure":                  "/product-icons/azure.svg",
  "copilot-cowork":         "/product-icons/copilot-cowork.svg",
  "copilot-studio":         "/product-icons/copilot-studio.svg",
  "dataverse":              "/product-icons/dataverse.svg",
  "github-copilot":         "/product-icons/github-copilot.svg",
  "microsoft-365":          "/product-icons/microsoft-365.svg",
  "microsoft-365-copilot":  "/product-icons/microsoft-365-copilot.svg",
  "microsoft-learn":        "/product-icons/microsoft-learn.svg",
  "outlook":                "/product-icons/outlook.svg",
  "power-automate":         "/product-icons/power-automate.svg",
  "power-platform":         "/product-icons/power-platform.svg",
  "sharepoint":             "/product-icons/sharepoint.svg",
  "teams":                  "/product-icons/teams.svg",
  "visual-studio-code":     "/product-icons/visual-studio-code.svg",
};

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

.taxonomy-icon--img {
  object-fit: contain;
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
