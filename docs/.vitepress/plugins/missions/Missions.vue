<template>
  <div class="missions-container">
    <h2 v-if="title">{{ title }}</h2>
    <div ref="gridRef" class="missions-grid">
      <a
        v-for="mission in pagedMissions"
        :key="mission.url"
        :href="withBase(mission.url)"
        class="mission-card"
      >
        <div v-if="mission.badge" class="mission-badge">
          <img :src="withBase(mission.badge)" :alt="mission.title" />
        </div>
        <span class="mission-section-pill" :class="'pill-' + mission.section">
          {{ sectionLabel(mission.section) }}
        </span>
        <div class="mission-title">{{ mission.title }}</div>
      </a>
    </div>
    <div v-if="totalPages > 1" class="missions-pager">
      <button :disabled="page <= 1" class="pager-btn" @click="page--">← Prev</button>
      <span class="pager-info">Page {{ page }} of {{ totalPages }}</span>
      <button :disabled="page >= totalPages" class="pager-btn" @click="page++">Next →</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted, nextTick, watch } from "vue";
import { withBase } from "vitepress";
import { missions } from "virtual:missions-data";

const props = withDefaults(
  defineProps<{
    title: string;
    section?: string;
    sort?: "alphabetical" | "last-updated" | "level" | "first-added";
    order?: "ascending" | "descending";
    maxRows?: number;
  }>(),
  {
    sort: "alphabetical",
    order: "ascending",
  }
);

const SECTION_LABELS: Record<string, string> = {
  "special-ops": "Special Ops",
  recruit: "Recruit",
  operative: "Operative",
  "cowork-collective": "Cowork Collective",
};

function sectionLabel(section: string): string {
  return SECTION_LABELS[section] ?? section;
}

const sortedMissions = computed(() => {
  let filtered = props.section
    ? missions.filter((m) => m.section === props.section)
    : [...missions];

  filtered.sort((a, b) => {
    let cmp = 0;
    switch (props.sort) {
      case "last-updated":
        cmp = a.lastUpdated - b.lastUpdated;
        break;
      case "first-added":
        cmp = a.createdAt - b.createdAt;
        break;
      case "level":
        cmp = a.difficulty - b.difficulty;
        break;
      case "alphabetical":
      default:
        cmp = a.title.localeCompare(b.title);
        break;
    }
    return props.order === "descending" ? -cmp : cmp;
  });

  return filtered;
});

// Pagination based on max-rows and detected column count
const gridRef = ref<HTMLElement | null>(null);
const columns = ref(1);
const page = ref(1);

function detectColumns() {
  if (!gridRef.value) return;
  const style = getComputedStyle(gridRef.value);
  const cols = style.gridTemplateColumns.split(" ").length;
  if (cols > 0) columns.value = cols;
}

let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  nextTick(detectColumns);
  if (gridRef.value) {
    resizeObserver = new ResizeObserver(detectColumns);
    resizeObserver.observe(gridRef.value);
  }
});

onUnmounted(() => {
  resizeObserver?.disconnect();
});

const itemsPerPage = computed(() => {
  if (!props.maxRows) return Infinity;
  return props.maxRows * columns.value;
});

const totalPages = computed(() => {
  if (!props.maxRows) return 1;
  return Math.max(1, Math.ceil(sortedMissions.value.length / itemsPerPage.value));
});

watch(totalPages, (tp) => {
  if (page.value > tp) page.value = tp;
});

const pagedMissions = computed(() => {
  if (!props.maxRows) return sortedMissions.value;
  const start = (page.value - 1) * itemsPerPage.value;
  return sortedMissions.value.slice(start, start + itemsPerPage.value);
});
</script>

<style scoped>
.missions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.mission-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: border-color 0.25s, box-shadow 0.25s;
}

.mission-card:hover {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.mission-badge {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
}

.mission-badge img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 4px;
}

.mission-title {
  font-weight: 600;
  font-size: 0.95rem;
  text-align: center;
  line-height: 1.4;
  height: calc(1.4em * 3);
  display: flex;
  align-items: center;
}

.mission-section-pill {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.15rem 0.6rem;
  border-radius: 999px;
  margin-bottom: 0.5rem;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
}

.pill-special-ops {
  background: #fef3c7;
  color: #92400e;
}

.pill-recruit {
  background: #d1fae5;
  color: #065f46;
}

.pill-operative {
  background: #dbeafe;
  color: #1e40af;
}

.pill-cowork-collective {
  background: #ede9fe;
  color: #5b21b6;
}

:root.dark .pill-special-ops {
  background: #78350f;
  color: #fef3c7;
}

:root.dark .pill-recruit {
  background: #064e3b;
  color: #d1fae5;
}

:root.dark .pill-operative {
  background: #1e3a5f;
  color: #dbeafe;
}

:root.dark .pill-cowork-collective {
  background: #4c1d95;
  color: #ede9fe;
}

.missions-pager {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.pager-btn {
  padding: 0.35rem 0.9rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 0.85rem;
  cursor: pointer;
  transition: border-color 0.25s;
}

.pager-btn:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
}

.pager-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pager-info {
  font-size: 0.85rem;
  color: var(--vp-c-text-2);
}
</style>
