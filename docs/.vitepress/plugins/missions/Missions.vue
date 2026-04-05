<template>
  <div class="missions-container">
    <h2 v-if="title">{{ title }}</h2>
    <div class="missions-grid">
      <a
        v-for="mission in sortedMissions"
        :key="mission.url"
        :href="withBase(mission.url)"
        class="mission-card"
      >
        <div v-if="mission.badge" class="mission-badge">
          <img :src="withBase(mission.badge)" :alt="mission.title" />
        </div>
        <div class="mission-title">{{ mission.title }}</div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "vitepress";
import { missions } from "virtual:missions-data";

const props = withDefaults(
  defineProps<{
    title: string;
    section?: string;
    sort?: "alphabetical" | "last-updated" | "level";
    order?: "ascending" | "descending";
  }>(),
  {
    sort: "alphabetical",
    order: "ascending",
  }
);

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
}
</style>
