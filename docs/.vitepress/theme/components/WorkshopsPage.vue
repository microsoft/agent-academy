<template>
  <div class="resources-grid">
    <div v-for="r in resources" :key="r.title" class="resource-card" :class="{ 'coming-soon': !r.available }">
      <div class="resource-icon">{{ r.icon }}</div>
      <div class="resource-body">
        <div class="resource-title">{{ r.title }}</div>
        <div class="resource-desc">{{ r.desc }}</div>
        <a v-if="r.available && r.link" :href="r.link" :target="r.link.startsWith('http') ? '_blank' : undefined" rel="noopener" class="resource-link">{{ r.linkText }} →</a>
        <span v-else class="coming-soon-label">Coming soon</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const resources = [
  {
    icon: '📚',
    title: 'Agent Academy curriculum',
    desc: 'The full self-paced curriculum your participants will work through. Familiarize yourself with the content before delivering it live.',
    available: true,
    link: 'https://aka.ms/agent-academy',
    linkText: 'View curriculum'
  },
  {
    icon: '🎬',
    title: 'Video walkthroughs',
    desc: 'Mission-by-mission video walkthroughs you can use to supplement live delivery or share with participants for pre-work.',
    available: true,
    link: 'https://microsoft.github.io/agent-academy/videos/',
    linkText: 'Browse videos'
  },
  {
    icon: '🖥️',
    title: 'Speaker presentation deck',
    desc: 'Ready-to-use slide decks for delivering Agent Academy as a structured workshop session.',
    available: true,
    link: './presentationMaterials/',
    linkText: 'View Decks'
  },
  {
    icon: '📋',
    title: 'Facilitator guide',
    desc: 'Timing guidance, setup checklist, common troubleshooting, and tips from speakers who\'ve already delivered it.',
    available: true,
    link: './facilitatorGuide/',
    linkText: 'View guide'
  },
]
</script>

<style scoped>
.resources-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 14px;
  margin: 1rem 0 2rem;
}

.resource-card {
  display: flex;
  gap: 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 1.1rem 1.25rem;
  background: var(--vp-c-bg);
}

.resource-card.coming-soon {
  opacity: 0.6;
}

.resource-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.resource-title {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 5px;
}

.resource-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin-bottom: 10px;
}

.resource-link {
  font-size: 13px;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  font-weight: 500;
}

.resource-link:hover {
  text-decoration: underline;
}

.coming-soon-label {
  font-size: 12px;
  color: var(--vp-c-text-3);
  font-style: italic;
}
</style>