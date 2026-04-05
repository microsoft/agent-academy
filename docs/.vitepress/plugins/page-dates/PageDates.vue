<script setup lang="ts">
import { useData } from "vitepress";

const { frontmatter } = useData();

function formatDate(raw: string | undefined): string {
  if (!raw) return "";
  const d = new Date(raw);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
</script>

<template>
  <div
    v-if="frontmatter['created-date'] || frontmatter['last-edited-date']"
    class="page-dates"
  >
    <span v-if="frontmatter['created-date']">
      📅 Created: {{ formatDate(frontmatter["created-date"]) }}
    </span>
    <span
      v-if="
        frontmatter['created-date'] && frontmatter['last-edited-date']
      "
      class="separator"
    >·</span>
    <span v-if="frontmatter['last-edited-date']">
      ✏️ Last updated: {{ formatDate(frontmatter["last-edited-date"]) }}
    </span>
  </div>
</template>

<style scoped>
.page-dates {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
}

.separator {
  color: var(--vp-c-divider);
}
</style>
