<script setup lang="ts">
import { ref, computed, onBeforeUnmount } from "vue";
import { useData } from "vitepress";
import { bundles } from "virtual:download-bundles";
import { allIcons } from "../../data/icons";
import JSZip from "jszip";

const props = defineProps<{
  path: string;
  label?: string;
  variant?: "button" | "link";
  icon?: string;
}>();

const isLink = computed(() => props.variant === "link");
const iconData = computed(() => (props.icon ? allIcons[props.icon] : undefined));

const { site } = useData();

const normalizedPath = computed(() =>
  props.path.replace(/^\.?\//, "").replace(/\/$/, "")
);

const folderName = computed(() => {
  const parts = normalizedPath.value.split("/");
  return parts[parts.length - 1] || "download";
});

const files = computed(() => bundles[normalizedPath.value] ?? []);

const zipName = computed(() => `${folderName.value}.zip`);

const buttonLabel = computed(() => props.label || `Download ${zipName.value}`);

type Status = "idle" | "loading" | "success" | "error";
const status = ref<Status>("idle");
const errorMessage = ref("");
let successTimer: ReturnType<typeof setTimeout> | undefined;

onBeforeUnmount(() => {
  if (successTimer) {
    clearTimeout(successTimer);
    successTimer = undefined;
  }
});

async function download() {
  if (status.value === "loading") return;

  // Clear any lingering success timer
  if (successTimer) {
    clearTimeout(successTimer);
    successTimer = undefined;
  }

  if (files.value.length === 0) {
    status.value = "error";
    errorMessage.value = "No files found in this folder.";
    return;
  }

  status.value = "loading";
  errorMessage.value = "";

  try {
    const zip = new JSZip();
    const base = site.value.base || "/";

    const fetchPromises = files.value.map(async (fileName) => {
      const url = `${base}${normalizedPath.value}/${fileName}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch ${fileName} (${response.status})`);
      }
      const blob = await response.blob();
      zip.file(fileName, blob);
    });

    await Promise.all(fetchPromises);

    const zipBlob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(zipBlob);

    const a = document.createElement("a");
    a.href = url;
    a.download = zipName.value;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    status.value = "success";
    successTimer = setTimeout(() => {
      status.value = "idle";
    }, 2500);
  } catch (e) {
    status.value = "error";
    errorMessage.value =
      e instanceof Error ? e.message : "An error occurred while creating the zip.";
  }
}
</script>

<template>
  <div :class="isLink ? 'download-files-inline' : 'download-files'">
    <component
      :is="isLink ? 'a' : 'button'"
      :href="isLink ? '#' : undefined"
      :type="isLink ? undefined : 'button'"
      :class="[
        isLink ? 'download-link' : 'download-btn',
        {
          loading: status === 'loading',
          success: status === 'success',
          error: status === 'error',
        },
      ]"
      :disabled="!isLink && status === 'loading' ? true : undefined"
      @click.prevent="download"
    >
      <!-- Brand icon (optional) -->
      <svg
        v-if="iconData && status === 'idle'"
        class="icon brand-icon"
        :width="isLink ? 14 : 16"
        :height="isLink ? 14 : 16"
        :viewBox="iconData.viewBox"
        fill="none"
        aria-hidden="true"
        v-html="iconData.svg"
      />
      <!-- Spinner -->
      <svg
        v-if="status === 'loading'"
        class="spinner"
        :width="isLink ? 14 : 16"
        :height="isLink ? 14 : 16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <circle
          cx="8"
          cy="8"
          r="6"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-dasharray="28"
          stroke-dashoffset="10"
        />
      </svg>
      <!-- Checkmark (button variant only, on success) -->
      <svg
        v-else-if="status === 'success' && !isLink"
        class="icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M3 8.5 6.5 12 13 4"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <!-- Download arrow (button variant only, when idle and no brand icon) -->
      <svg
        v-else-if="status === 'idle' && !isLink && !iconData"
        class="icon"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
      >
        <path
          d="M8 1v9m0 0L5 7m3 3 3-3M3 12v1.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V12"
          stroke="currentColor"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span v-if="status === 'loading'">Creating zip…</span>
      <span v-else-if="status === 'success'">Downloaded!</span>
      <span v-else>{{ buttonLabel }}</span>
    </component>
    <p v-if="status === 'error'" class="error-msg">{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
.download-files {
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
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, color 0.2s;
}

.download-btn:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.download-btn:hover:not(:disabled) {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white, #fff);
}

.download-btn:disabled {
  cursor: wait;
  opacity: 0.7;
}

.download-btn.success {
  border-color: var(--vp-c-green-1, #065f46);
  color: var(--vp-c-green-1, #065f46);
  background: var(--vp-c-green-soft, #d1fae5);
}

.download-btn.error {
  border-color: var(--vp-c-danger-1);
  color: var(--vp-c-danger-1);
  background: var(--vp-c-danger-soft);
}

.icon {
  flex-shrink: 0;
}

.brand-icon {
  flex-shrink: 0;
}

.spinner {
  flex-shrink: 0;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error-msg {
  color: var(--vp-c-danger-1);
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

/* Link variant */
.download-files-inline {
  display: inline;
}

.download-link {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: var(--vp-c-brand-1);
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
  transition: color 0.15s;
}

.download-link:hover {
  color: var(--vp-c-brand-2);
}

.download-link:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
  border-radius: 2px;
}

.download-link.loading {
  cursor: wait;
  opacity: 0.7;
}

.download-link.success {
  color: var(--vp-c-green-1, #065f46);
}

.download-link.error {
  color: var(--vp-c-danger-1);
}
</style>
