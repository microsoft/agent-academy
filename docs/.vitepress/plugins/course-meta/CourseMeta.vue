<template>
  <div v-if="codename || timeMinutes" class="course-meta">
    <span v-if="codename" class="meta-item">
      <span class="meta-label">Codename</span>
      <code class="meta-value">{{ codename }}</code>
    </span>
    <span v-if="timeMinutes" class="meta-item">
      <span class="meta-label">Time</span>
      <span class="meta-time">
        <svg class="time-pie" viewBox="0 0 16 16" role="img" :aria-label="`${timeMinutes} minutes`">
          <circle cx="8" cy="8" r="6" class="pie-bg" />
          <circle cx="8" cy="8" r="6" class="pie-border" />
          <circle v-if="timeIcon.full" cx="8" cy="8" r="6" class="pie-fill" />
          <path v-else :d="timeIcon.d" class="pie-fill" />
        </svg>
        {{ timeMinutes }} min
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";

const { frontmatter } = useData();

const codename = computed(() => frontmatter.value.codename ?? null);

const timeMinutes = computed(() => {
  const t = frontmatter.value.time;
  const n = Number(t);
  return t && !isNaN(n) && n > 0 ? n : null;
});

const timeIcon = computed(() => {
  const minutes = timeMinutes.value;
  if (!minutes) return { full: false, d: '' };
  const pct = Math.min(minutes / 60, 1);
  const angle = pct * 360;
  if (angle >= 359.9) return { full: true, d: '' };
  const cx = 8, cy = 8, r = 6;
  const rad = (angle - 90) * (Math.PI / 180);
  const ex = cx + r * Math.cos(rad);
  const ey = cy + r * Math.sin(rad);
  const largeArc = angle > 180 ? 1 : 0;
  return {
    full: false,
    d: `M ${cx} ${cy} L ${cx} ${cy - r} A ${r} ${r} 0 ${largeArc} 1 ${ex.toFixed(3)} ${ey.toFixed(3)} Z`,
  };
});
</script>

<style scoped>
.course-meta {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: baseline;
  gap: 0.35rem 0.75rem;
  width: 100%;
  padding: 0.75rem 1rem;
  margin: 0.75rem 0 1.25rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  font-size: 0.9rem;
}

.meta-item {
  display: contents;
}

.meta-label {
  font-weight: 600;
  color: var(--vp-c-text-2);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  white-space: nowrap;
  align-self: baseline;
  padding-top: 0.1rem;
}

.meta-value {
  color: var(--vp-c-text-1);
  background: var(--vp-c-default-soft);
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  font-size: 0.85rem;
}

.meta-time {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  color: var(--vp-c-text-1);
}

.time-pie {
  width: 18px;
  height: 18px;
  flex-shrink: 0;
}

.pie-bg {
  fill: var(--vp-c-bg);
}

.pie-border {
  fill: none;
  stroke: var(--vp-c-divider);
  stroke-width: 1;
}

.pie-fill {
  fill: var(--vp-c-text-2);
}
</style>
