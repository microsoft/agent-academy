<template>
  <div v-if="credits" class="mission-credits">
    <div class="mission-credits-head">
      <span class="mission-credits-label">🪙 Mission Copilot Credits Estimation</span>
    </div>
    <p class="mission-credits-total">{{ creditsLabel }}</p>
    <p class="mission-credits-note">
      <template v-if="hasBreakdown">
        Non-binding estimate. Your actual consumption depends on how much you
        experiment, re-prompt, and test.
        <a href="#copilot-credits-estimate">See how this was calculated</a>.
      </template>
      <template v-else>
        Nothing in this mission consumes Copilot Credits.
      </template>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
import { parseCredits } from "./parseCredits";

const { frontmatter } = useData();

const credits = computed(() => parseCredits(frontmatter.value.credits));

const hasBreakdown = computed(() => (credits.value?.max ?? 0) > 0);

const creditsLabel = computed(() => {
  const c = credits.value;
  if (!c) return "";
  if (c.max === 0) return "None expected";
  const fmt = (n: number) => n.toLocaleString("en-US");
  return c.min === c.max
    ? `~${fmt(c.max)} credits`
    : `${fmt(c.min)} - ${fmt(c.max)} credits`;
});
</script>

<style scoped>
.mission-credits {
  padding: 0.9rem 1.1rem;
  margin: 1rem 0 1.25rem;
  border: 1px solid var(--vp-c-divider);
  border-left: 3px solid var(--vp-c-brand-1);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
}

.mission-credits-head {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.mission-credits-label {
  font-weight: 600;
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.mission-credits-total {
  margin: 0.35rem 0 0;
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  line-height: 1.3;
}

.mission-credits-note {
  margin: 0.5rem 0 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}
</style>
