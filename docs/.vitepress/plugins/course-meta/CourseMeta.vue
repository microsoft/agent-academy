<template>
  <div v-if="codename || time" class="course-meta">
    <div v-if="codename" class="course-meta-row">
      <span class="course-meta-icon">🕵️‍♂️</span>
      <span class="course-meta-label">CODENAME</span>
      <code class="course-meta-value">{{ codename }}</code>
    </div>
    <div v-if="time" class="course-meta-row">
      <span class="course-meta-icon">⏱️</span>
      <span class="course-meta-label">Operation Time Window</span>
      <code class="course-meta-value">~{{ time }} minutes</code>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

const { frontmatter } = useData();

const codename = computed(() => frontmatter.value.codename ?? null);
const time = computed(() => {
  const t = frontmatter.value.time;
  return t != null ? t : null;
});
</script>

<style scoped>
.course-meta {
  display: inline-flex;
  flex-direction: column;
  gap: 0.4rem;
  padding: 0.6rem 1rem;
  margin: 0.75rem 0 1.25rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  font-size: 0.9rem;
}

.course-meta-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.course-meta-icon {
  font-size: 1rem;
  flex-shrink: 0;
}

.course-meta-label {
  font-weight: 600;
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  flex-shrink: 0;
}

.course-meta-value {
  color: var(--vp-c-text-1);
  background: var(--vp-c-default-soft);
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
  font-size: 0.85rem;
}
</style>
