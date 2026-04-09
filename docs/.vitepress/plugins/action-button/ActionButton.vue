<script setup lang="ts">
defineProps<{
  href: string;
  label: string;
  icon?: string;
  external?: boolean;
}>();
</script>

<template>
  <a
    :href="href"
    class="action-button"
    :target="(external || href.startsWith('http')) ? '_blank' : undefined"
    :rel="(external || href.startsWith('http')) ? 'noopener noreferrer' : undefined"
  >
    <span v-if="icon" aria-hidden="true">{{ icon }}</span>
    {{ label }}
    <span v-if="external || href.startsWith('http')" class="sr-only">(opens in a new tab)</span>
  </a>
</template>

<style scoped>
.action-button {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 1.2rem;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 8px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  text-decoration: none !important;
  transition: background 0.2s, color 0.2s;
}

.action-button:hover {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white, #fff);
}

.action-button:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 2px;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>
