<template>
  <nav class="breadcrumb" aria-label="Breadcrumb">
    <ol>
      <li v-for="(crumb, i) in crumbs" :key="i">
        <span v-if="i > 0" class="breadcrumb-sep" aria-hidden="true">/</span>
        <a v-if="crumb.href" :href="crumb.href" class="breadcrumb-link">{{ crumb.label }}</a>
        <span v-else class="breadcrumb-current" aria-current="page">{{ crumb.label }}</span>
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
import { withBase } from "vitepress";

const props = defineProps<{
  section: "products" | "tags";
  label?: string;
}>();

const sectionLabel = props.section === "products" ? "Products" : "Tags";
const sectionHref = withBase(`/${props.section}/`);

const crumbs = props.label
  ? [
      { label: "Home", href: withBase("/") },
      { label: sectionLabel, href: sectionHref },
      { label: props.label },
    ]
  : [
      { label: "Home", href: withBase("/") },
      { label: sectionLabel },
    ];
</script>

<style scoped>
.breadcrumb {
  margin-bottom: 1.25rem;
}

.breadcrumb ol {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.25rem;
  list-style: none;
  margin: 0;
  padding: 0;
  font-size: 0.85rem;
  line-height: 1.5;
}

.breadcrumb li {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}

.breadcrumb-sep {
  color: var(--vp-c-text-3);
}

.breadcrumb-link {
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: color 0.15s;
}

.breadcrumb-link:hover {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
}

.breadcrumb-current {
  color: var(--vp-c-text-1);
  font-weight: 500;
}
</style>
