<template>
  <div class="vl">
    <div class="controls">
      <div class="search-wrap">
        <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <input v-model="query" type="text" placeholder="Search videos..." class="search-input" />
        <button v-if="query" class="clear-btn" @click="query = ''" aria-label="Clear search">✕</button>
      </div>
      <div class="track-filters" v-if="props.track === 'all'">
        <button
          v-for="t in tracks"
          :key="t.id"
          class="pill"
          :class="{ active: activeTrack === t.id }"
          @click="activeTrack = t.id"
        >{{ t.label }}</button>
      </div>
    </div>

    <template v-for="track in visibleTracks" :key="track">
      <div v-if="grouped[track] && grouped[track].length" class="track-section">
        <div class="section-label" v-if="props.track === 'all'">{{ trackLabel[track] }}</div>

        <div
          v-if="activeVideo && activeVideo.track === track"
          class="player-wrap"
          :ref="el => { if (el) playerRefs[track] = el }"
        >
          <div class="player-inner">
            <div class="player-video">
              <iframe
                :src="`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1&rel=0`"
                allowfullscreen
                allow="autoplay; fullscreen"
                title="Video player"
              ></iframe>
            </div>
            <div class="player-meta">
              <span :class="['track-badge', `badge-${activeVideo.track}`]">{{ trackLabel[activeVideo.track] }}</span>
              <h3 class="player-title">{{ activeVideo.title }}</h3>
              <p class="player-desc">{{ activeVideo.desc }}</p>
              <div class="player-actions">
                <a :href="`https://www.youtube.com/watch?v=${activeVideo.youtubeId}`" target="_blank" rel="noopener" class="yt-link">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  Watch on YouTube
                </a>
                <button class="close-player" @click="activeVideo = null">✕ Close player</button>
              </div>
            </div>
          </div>
        </div>

        <div class="grid">
          <div
            v-for="v in grouped[track]"
            :key="v.youtubeId"
            class="card"
            :class="{ playing: activeVideo && activeVideo.youtubeId === v.youtubeId }"
            @click="selectVideo(v, track)"
          >
            <div class="thumb">
              <img
                :src="`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`"
                :alt="v.title"
                loading="lazy"
              />
              <div class="thumb-overlay">
                <svg class="play-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <span class="duration">{{ v.duration }}</span>
            </div>
            <div class="card-body">
              <span :class="['track-badge', `badge-${v.track}`]" v-if="props.track === 'all'">{{ trackLabel[v.track] }}</span>
              <div class="card-title">{{ v.title }}</div>
              <div class="card-date" v-if="v.published">{{ v.published }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <div v-if="totalVisible === 0" class="empty">
      No videos match your search.
    </div>
  </div>
</template>

<script setup>
import { ref, computed, nextTick } from 'vue'

const props = defineProps({
  track: {
    type: String,
    default: 'all'
  }
})

const query = ref('')
const activeTrack = ref(props.track)
const activeVideo = ref(null)
const playerRefs = ref({})

const tracks = [
  { id: 'all', label: 'All videos' },
  { id: 'recruit', label: 'Recruit' },
  { id: 'operative', label: 'Operative' },
  { id: 'special-ops', label: 'Special Ops' },
  { id: 'cowork', label: 'Cowork Collective' },
]

const trackLabel = {
  recruit: 'Recruit',
  operative: 'Operative',
  'special-ops': 'Special Ops',
  cowork: 'Cowork Collective',
}

const trackOrder = ['recruit', 'operative', 'special-ops', 'cowork']

async function selectVideo(video, track) {
  if (activeVideo.value?.youtubeId === video.youtubeId) {
    activeVideo.value = null
    return
  }
  activeVideo.value = video
  await nextTick()
  const el = playerRefs.value[track]
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }
}

const videos = [
  { youtubeId: 'BhPz_zicUnM', track: 'recruit', title: 'Introduction to agents', desc: 'Learn the essential AI concepts behind agents including Large Language Models, Retrieval-Augmented Generation, and the difference between conversational and autonomous agents.', duration: '4:46', published: 'Nov 2025' },
  { youtubeId: 'x4OCwDRGeLE', track: 'recruit', title: 'Copilot Studio fundamentals', desc: 'Break down the building blocks that power every agent: knowledge, tools, topics, and instructions — and learn how these elements work together.', duration: '7:38', published: 'Nov 2025' },
  { youtubeId: 'BVNUmLXFCq8', track: 'recruit', title: 'Deploy a declarative agent for Microsoft 365 Copilot', desc: 'Build a declarative agent in Copilot Studio, add an AI prompt as a tool, and deploy the agent so it can answer questions in Microsoft 365 Copilot.', duration: '18:49', published: 'Nov 2025' },
  { youtubeId: '1iATbkgfcpU', track: 'recruit', title: 'Creating a solution for your agent', desc: 'Learn how to manage agents across multiple environments by creating a solution — an essential step for ALM and production deployments.', duration: '8:57', published: 'Nov 2025' },
  { youtubeId: 'NmXsx8WjWuM', track: 'recruit', title: 'Using a pre-built agent', desc: 'Build an agent in minutes by customizing a pre-built template. Learn how to adapt existing agents to your own use case.', duration: '4:43', published: 'Nov 2025' },
  { youtubeId: 'qZTtQVncGFg', track: 'recruit', title: 'Create a custom agent using natural language', desc: 'Build your own agent using natural language prompts and connect it to real data sources — no code required.', duration: '13:13', published: 'Nov 2025' },
  { youtubeId: '7iPAZaA8nJs', track: 'recruit', title: 'Add a new topic with trigger and nodes', desc: 'Create a new topic from scratch and enable your agent to answer specific questions using triggers and conversation nodes.', duration: '12:50', published: 'Nov 2025' },
  { youtubeId: 'RhIlzYHPCXo', track: 'recruit', title: 'Enhance user interactions with Adaptive Cards', desc: 'Make your agent more dynamic and user-friendly by integrating Adaptive Cards into your topics.', duration: '11:51', published: 'Nov 2025' },
  { youtubeId: 'vtLZJT3eBXg', track: 'recruit', title: 'Add an agent flow to the topic for automation', desc: 'Automate your agent\'s responses using agent flows — learn how to connect Power Automate flows directly into your Copilot Studio topics.', duration: '17:40', published: 'Nov 2025' },
  { youtubeId: 'ZgwHL8PQ1nY', track: 'recruit', title: 'Add event triggers for autonomous agent capabilities', desc: 'Introduce event triggers to your agent — a key feature for building agents that can act autonomously without user prompting.', duration: '7:24', published: 'Nov 2025' },
  { youtubeId: 'eVZmljhYlSI', track: 'recruit', title: 'Publishing your agent', desc: 'Walk through the final step of your agent-building journey: publishing your agent to Teams, Copilot, and other channels.', duration: '9:27', published: 'Nov 2025' },
  { youtubeId: 'VaEy6ux2sQs', track: 'operative', title: 'Get started with the Hiring Agent', desc: 'Kick off the Operative track by building the Hiring Agent — a fully automated agent that handles recruitment workflows end to end.', duration: '11:33', published: 'March 2026' },
  { youtubeId: 'h_pgKSKHlIU', track: 'operative', title: 'Authoring agent instructions', desc: 'Learn how to write clear, precise agent instructions that shape behavior, decision-making, and response quality.', duration: '4:49', published: 'March 2026' },
  { youtubeId: 'X-nyqdk6tcc', track: 'operative', title: 'Multi-agent ready with connected agents', desc: 'Upgrade your single agent to a fully orchestrated multi-agent system using connected agents in Copilot Studio.', duration: '12:51', published: 'March 2026' },
  { youtubeId: 'lXdlj4DjR28', track: 'operative', title: 'Add event triggers to act autonomously', desc: 'Use event triggers to build agents that can initiate actions on their own — no user prompt required.', duration: '16:38', published: 'March 2026' },
  { youtubeId: 'c5rqNQt2Mmc', track: 'operative', title: 'Understanding agent models and response formatting', desc: 'Learn how to choose the right AI model for speed, depth, and accuracy — and control how your agent formats its responses.', duration: '14:26', published: 'March 2026' },
  { youtubeId: '2IjDV_D3Jb0', track: 'operative', title: 'AI safety and content moderation', desc: 'Implement enterprise-grade AI safety and content moderation in Copilot Studio to protect your agent and your users.', duration: '9:25', published: 'March 2026' },
  { youtubeId: 'icP_qH8LFK8', track: 'operative', title: 'Extracting resume contents with multi-modal prompts', desc: 'Unlock the power of multimodal prompts to extract structured data from resumes and unstructured documents.', duration: '8:23', published: 'March 2026' },
  { youtubeId: '-cHP29cIu-U', track: 'operative', title: 'Enhanced prompts with Dataverse grounding', desc: 'Ground your Copilot Studio agents in trusted Dataverse data for more accurate, context-aware responses.', duration: '8:29', published: 'March 2026' },
  { youtubeId: 'GYSEI0jbCvk', track: 'operative', title: 'Generating an interview prep document', desc: 'Generate professional interview prep documents by turning structured prompts into polished Word documents via your agent.', duration: '13:53', published: 'March 2026' },
  { youtubeId: 'kW2f8Z8fzBw', track: 'operative', title: 'Integrate with MCP servers', desc: 'Connect your Copilot Studio agent to external tools, APIs, and enterprise systems using the Model Context Protocol.', duration: '12:35', published: 'March 2026' },
  { youtubeId: 'QRBimOsgKEQ', track: 'operative', title: 'Collecting feedback from users', desc: 'Learn how to collect structured feedback from users inside your agent using built-in thumbs and custom feedback flows.', duration: '19:33', published: 'March 2026' },
  { youtubeId: 'CpgZo--FhaU', track: 'cowork', title: 'Copilot just got a major upgrade with Copilot Cowork', desc: 'Everything you need to know about Copilot Cowork — what it is, how it differs from regular Copilot, the 13 built-in skills, scheduled tasks, and how to create custom skills.', duration: '15:30', published: 'April 2026' },
  { youtubeId: 'osjHPVfNF3w', track: 'cowork', title: 'Copilot Cowork vs. Manual Presentation Redesign', desc: 'See how Copilot Cowork can help convert an existing presentation to use a template.', duration: '4:12', published: 'April 2026' },
  { youtubeId: 'Ebwi_VF6EIc', track: 'special-ops', title: 'From CLI to Agent Magic with the Power Platform CLI MCP Server', desc: 'Learn how the Power Platform CLI MCP server turns complex CLI commands into natural language conversations', duration: '19:25', published: 'Feb 2026' },

]

const filtered = computed(() => {
  const q = query.value.toLowerCase().trim()
  return videos.filter(v => {
    const trackMatch = activeTrack.value === 'all' || v.track === activeTrack.value
    const queryMatch = !q || v.title.toLowerCase().includes(q) || v.desc.toLowerCase().includes(q)
    return trackMatch && queryMatch
  })
})

const grouped = computed(() => {
  const g = {}
  filtered.value.forEach(v => {
    if (!g[v.track]) g[v.track] = []
    g[v.track].push(v)
  })
  return g
})

const visibleTracks = computed(() => trackOrder.filter(t => grouped.value[t]?.length))
const totalVisible = computed(() => filtered.value.length)
</script>

<style scoped>
.vl {
  width: 100%;
  padding: 1rem 0;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 1.5rem;
}

.search-wrap {
  position: relative;
  width: 100%;
}

.search-icon {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--vp-c-text-3);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 8px 36px;
  font-size: 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  outline: none;
  transition: border-color 0.15s;
}

.search-input:focus {
  border-color: var(--vp-c-brand-1);
}

.clear-btn {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 13px;
  color: var(--vp-c-text-3);
  cursor: pointer;
  padding: 0;
  line-height: 1;
}

.track-filters {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.pill {
  font-size: 13px;
  padding: 5px 14px;
  border-radius: 20px;
  border: 1px solid var(--vp-c-divider);
  background: transparent;
  cursor: pointer;
  color: var(--vp-c-text-2);
  transition: all 0.15s;
  white-space: nowrap;
}

.pill:hover { background: var(--vp-c-bg-soft); }

.pill.active {
  background: var(--vp-c-brand-soft);
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.track-section {
  margin-bottom: 2.5rem;
}

.section-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: var(--vp-c-text-3);
  margin-bottom: 10px;
  padding-bottom: 6px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.player-wrap {
  margin-bottom: 1.25rem;
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 12px;
  overflow: hidden;
  background: var(--vp-c-bg-soft);
}

.player-inner {
  display: flex;
  flex-direction: column;
}

@media (min-width: 640px) {
  .player-inner { flex-direction: row; }
}

.player-video { flex: 0 0 55%; }

.player-video iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
  display: block;
  border: none;
}

.player-meta {
  flex: 1;
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.player-title {
  font-size: 15px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  line-height: 1.4;
  margin: 0;
}

.player-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.65;
  margin: 0;
  flex: 1;
}

.player-actions {
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 4px;
}

.yt-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #ff0000;
  text-decoration: none;
  border: 1px solid rgba(255,0,0,0.3);
  border-radius: 6px;
  padding: 5px 12px;
  transition: background 0.15s;
}

.yt-link:hover { background: rgba(255,0,0,0.06); }

.close-player {
  font-size: 13px;
  color: var(--vp-c-text-2);
  background: none;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  padding: 5px 12px;
  cursor: pointer;
  transition: background 0.15s;
}

.close-player:hover { background: var(--vp-c-bg-soft); }

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 14px;
}

.card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  overflow: hidden;
  background: var(--vp-c-bg);
  cursor: pointer;
  transition: border-color 0.15s, transform 0.15s;
}

.card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-1px);
}

.card.playing {
  border-color: var(--vp-c-brand-1);
  border-width: 2px;
}

.thumb {
  position: relative;
  aspect-ratio: 16 / 9;
  background: #111;
  overflow: hidden;
}

.thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: opacity 0.2s;
}

.card:hover .thumb img { opacity: 0.85; }

.thumb-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s;
  background: rgba(0,0,0,0.2);
}

.card:hover .thumb-overlay { opacity: 1; }

.play-icon {
  width: 40px;
  height: 40px;
  filter: drop-shadow(0 2px 4px rgba(0,0,0,0.4));
}

.duration {
  position: absolute;
  bottom: 6px;
  right: 7px;
  font-size: 11px;
  background: rgba(0,0,0,0.75);
  color: #fff;
  padding: 2px 5px;
  border-radius: 4px;
  font-variant-numeric: tabular-nums;
}

.card-body { padding: 10px 12px; }

.card-title {
  font-size: 13px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-top: 5px;
}

.track-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 10px;
}

.badge-recruit     { background: #dcfce7; color: #166534; }
.badge-operative   { background: #ede9fe; color: #5b21b6; }
.badge-special-ops { background: #ffedd5; color: #9a3412; }
.badge-cowork      { background: #dbeafe; color: #1e40af; }

.card-date {
  font-size: 11px;
  color: var(--vp-c-text-3);
  margin-top: 4px;
}

.empty {
  font-size: 14px;
  color: var(--vp-c-text-2);
  padding: 3rem 0;
  text-align: center;
}
</style>