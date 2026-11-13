<template>
  <div class="resources-grid">
    <div v-for="deck in featuredDecks" :key="deck.track" class="resource-card featured-resource">
      <div class="resource-body">
        <span class="resource-eyebrow">Microsoft Copilot harness</span>
        <h3 class="resource-title">{{ deck.title }}</h3>
        <p class="resource-desc">{{ deck.desc }}</p>
        <slot :name="deck.track" />
        <a :href="withBase(deck.link)" class="resource-link">{{ deck.linkText }} →</a>
      </div>
    </div>
    <div v-for="r in resources" :key="r.title" class="resource-card">
      <div class="resource-icon" aria-hidden="true">{{ r.icon }}</div>
      <div class="resource-body">
        <h3 class="resource-title">{{ r.title }}</h3>
        <div class="resource-desc">{{ r.desc }}</div>
        <a :href="r.link.startsWith('http') ? r.link : withBase(r.link)" :target="r.link.startsWith('http') ? '_blank' : undefined" rel="noopener noreferrer" class="resource-link">{{ r.linkText }} →</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { withBase } from 'vitepress'

const featuredDecks = [
  {
    track: 'recruit',
    title: 'NextGen Recruit speaker deck',
    desc: 'A full-day workshop for building the Contoso IT Concierge with knowledge, tools, skills, and workflows. Includes facilitator notes and lab walkthroughs.',
    link: '/recruit-nextgen/',
    linkText: 'Explore the NextGen Recruit curriculum'
  },
  {
    track: 'operative',
    title: 'NextGen Operative speaker deck',
    desc: 'A full-day advanced workshop for building a multi-agent hiring system with Dataverse MCP, Python skills, connected agents, workflows, and evaluations. Includes facilitator notes and lab walkthroughs.',
    link: '/operative-nextgen/',
    linkText: 'Explore the NextGen Operative curriculum'
  },
]

const resources = [
  {
    icon: '📋',
    title: 'Facilitator guide',
    desc: 'Start here for timing guidance, a setup checklist, troubleshooting, and tips from experienced facilitators.',
    link: '/events/workshops/facilitatorGuide',
    linkText: 'Plan your workshop'
  },
  {
    icon: '🖥️',
    title: 'All speaker decks',
    desc: 'Choose Recruit or Operative on the Microsoft Copilot harness or standard harness to match your workshop.',
    link: '/events/workshops/presentationMaterials',
    linkText: 'Browse speaker decks'
  },
  {
    icon: '📚',
    title: 'Agent Academy curriculum',
    desc: 'The full self-paced curriculum your participants will work through. Familiarize yourself with the content before delivering it live.',
    link: 'https://aka.ms/agent-academy',
    linkText: 'View curriculum'
  },
  {
    icon: '🎬',
    title: 'Video walkthroughs',
    desc: 'Mission-by-mission video walkthroughs you can use to supplement live delivery or share with participants for pre-work.',
    link: '/videos/',
    linkText: 'Browse videos'
  },
]
</script>

<style scoped>
.resources-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
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

.featured-resource {
  grid-column: 1 / -1;
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-soft);
  padding: 1.5rem;
}

.resource-eyebrow {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--vp-c-brand-1);
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.resource-icon {
  font-size: 1.4rem;
  flex-shrink: 0;
  margin-top: 2px;
}

.resource-card .resource-title {
  margin: 0 0 5px;
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.featured-resource .resource-title {
  font-size: 22px;
  line-height: 1.3;
}

.resource-card .resource-desc {
  margin: 0 0 10px;
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.6;
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

.resource-link:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 4px;
}

@media (max-width: 640px) {
  .resources-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>