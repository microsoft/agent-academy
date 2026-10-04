<template>
  <div v-if="hasEstimate" class="course-credits">
    <div class="course-credits-head">
      <span class="course-credits-label">🪙 Course Copilot Credits Estimation</span>
    </div>
    <p class="course-credits-total">
      {{ totalLabel }}
      <span class="course-credits-sub">across {{ missionCount }} missions</span>
    </p>
    <div v-if="$slots.default" class="course-credits-note course-credits-intro">
      <slot />
    </div>
    <p class="course-credits-note">
      The course total is the sum of the per-mission estimates shown on each
      mission page. This is a non-binding estimate. We aim for a conservative
      guess, but your actual Copilot Credits consumption depends on how much you
      experiment, re-prompt, and test, and it may end up higher than the range
      shown.
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { missions } from "virtual:missions-data";

const props = defineProps<{ section: string }>();

const sectionMissions = computed(() =>
  missions.filter((m) => m.section === props.section && m.credits !== null)
);

const total = computed(() =>
  sectionMissions.value.reduce(
    (acc, m) => ({
      min: acc.min + (m.credits?.min ?? 0),
      max: acc.max + (m.credits?.max ?? 0),
    }),
    { min: 0, max: 0 }
  )
);

const totalLabel = computed(() => {
  const fmt = (n: number) => n.toLocaleString("en-US");
  const { min, max } = total.value;
  return min === max ? `~${fmt(max)} credits` : `${fmt(min)} - ${fmt(max)} credits`;
});

const missionCount = computed(() => sectionMissions.value.length);

const hasEstimate = computed(() => missionCount.value > 0);
</script>

<style scoped>
.course-credits {
  padding: 0.9rem 1.1rem;
  margin: 1rem 0 1.25rem;
  border: 1px solid var(--vp-c-divider);
  border-left: 3px solid var(--vp-c-brand-1);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.course-credits-head {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.course-credits-label {
  font-weight: 600;
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.course-credits-total {
  margin: 0.35rem 0 0;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1.3;
}

.course-credits-sub {
  font-size: 0.8rem;
  font-weight: 400;
  color: var(--vp-c-text-2);
}

.course-credits-note {
  margin: 0.5rem 0 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.course-credits-intro {
  color: var(--vp-c-text-1);
}

.course-credits-intro :deep(p) {
  margin: 0;
  font-size: inherit;
  line-height: inherit;
}

.course-credits-intro :deep(p + p) {
  margin-top: 0.5rem;
}
</style>
