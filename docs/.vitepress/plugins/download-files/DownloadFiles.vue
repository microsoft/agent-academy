<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "vitepress";
import { bundles } from "virtual:download-bundles";
import { allIcons } from "../../data/icons";

const props = defineProps<{
  path: string;
  label?: string;
  variant?: "button" | "link";
  icon?: string;
  filename?: string;
}>();

const isLink = computed(() => props.variant === "link");
const iconData = computed(() => props.icon ? allIcons[props.icon] : undefined);
const normalizedPath = computed(() => props.path.replace(/^\.?\//, "").replace(/\/$/, ""));
const bundle = computed(() => {
  const result = bundles[normalizedPath.value];
  if (!result) throw new Error(`No download bundle found for: ${props.path}`);
  return result;
});
const encodePath = (value: string) => value.split("/").map(encodeURIComponent).join("/");
const downloadUrl = computed(() => withBase(`/${encodePath(bundle.value.url)}`));
const githubFolderUrl = computed(() =>
  `https://github.com/microsoft/agent-academy/${bundle.value.isFile ? "blob" : "tree"}/main/docs/${encodePath(normalizedPath.value)}`
);
const buttonLabel = computed(() => props.label || `Download ${bundle.value.fileName}`);
</script>

<template>
  <span :class="isLink ? 'download-files-inline' : 'download-files'">
    <a
      :href="downloadUrl"
      :download="bundle.fileName"
      :class="isLink ? 'download-link' : 'download-btn'"
    >
      <svg
        v-if="iconData"
        class="icon"
        :width="isLink ? 14 : 16"
        :height="isLink ? 14 : 16"
        :viewBox="iconData.viewBox"
        fill="none"
        aria-hidden="true"
        v-html="iconData.svg"
      />
      <svg
        v-else-if="!isLink"
        class="icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 1v9m0 0L5 7m3 3 3-3M3 12v1.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V12"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>{{ buttonLabel }}</span>
    </a>
    <span class="download-alternatives">
      <a :href="githubFolderUrl" target="_blank" rel="noopener noreferrer">View source files on GitHub</a>
    </span>
  </span>
</template>

<style scoped>
.download-files {
  display: block;
  margin: 1rem 0;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 8px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.9rem;
  font-weight: 500;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}

.download-btn:hover {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white, #fff);
}

.download-btn:focus-visible,
.download-link:focus-visible,
.download-alternatives a:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
  border-radius: 2px;
}

.icon {
  flex-shrink: 0;
}

.download-files-inline {
  display: inline;
}

.download-link {
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 2px;
}

.download-alternatives {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem 1rem;
  margin-top: 0.4rem;
  font-size: 0.85rem;
}

.download-files-inline .download-alternatives {
  display: inline;
  margin-left: 0.75rem;
}

</style>
