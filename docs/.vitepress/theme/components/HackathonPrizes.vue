<template>
  <div class="prizes">
    <div class="participant-row">
      <img :src="participantBadge" alt="Participant badge" class="participant-badge" />
      <div class="participant-text">
        <div class="participant-title">All participants</div>
        <div class="participant-desc">Every valid submission earns the official Agent Academy Hackathon participant badge — regardless of placement.</div>
      </div>
    </div>

    <div class="tracks-grid">
      <div v-for="track in tracks" :key="track.id" class="track-col">
        <div :class="['track-header', `track-${track.id}`]">
          <span class="track-emoji">{{ track.emoji }}</span>
          <span class="track-name">{{ track.name }}</span>
        </div>
        <div class="place-list">
          <div v-for="place in places" :key="place.rank" class="place-row">
            <img
              :src="badgeImages[`${place.rank}Place${track.badge}`]"
              :alt="`${place.label} - ${track.name}`"
              class="badge-img"
            />
            <div class="place-info">
              <div class="place-label">{{ place.label }}</div>
              <div class="place-prize">{{ place.prize }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import participantBadge from '../../../events/hackathon/assets/participant.png'
import firstRecruit from '../../../events/hackathon/assets/1stPlaceRecruit.png'
import secondRecruit from '../../../events/hackathon/assets/2ndPlaceRecruit.png'
import thirdRecruit from '../../../events/hackathon/assets/3rdPlaceRecruit.png'
import firstOperative from '../../../events/hackathon/assets/1stPlaceOperative.png'
import secondOperative from '../../../events/hackathon/assets/2ndPlaceOperative.png'
import thirdOperative from '../../../events/hackathon/assets/3rdPlaceOperative.png'
import firstSpecialOps from '../../../events/hackathon/assets/1stPlaceSpecialOps.png'
import secondSpecialOps from '../../../events/hackathon/assets/2ndPlaceSpecialOps.png'
import thirdSpecialOps from '../../../events/hackathon/assets/3rdPlaceSpecialOps.png'
import firstCowork from '../../../events/hackathon/assets/1stPlaceCowork.png'
import secondCowork from '../../../events/hackathon/assets/2ndPlaceCowork.png'
import thirdCowork from '../../../events/hackathon/assets/3rdPlaceCowork.png'

const tracks = [
  { id: 'recruit',    name: 'Recruit',          emoji: '🟢', badge: 'Recruit' },
  { id: 'operative',  name: 'Operative',         emoji: '🔵', badge: 'Operative' },
  { id: 'specialops', name: 'Special Ops',       emoji: '🎯', badge: 'SpecialOps' },
  { id: 'cowork',     name: 'Cowork Collective', emoji: '🤝', badge: 'Cowork' },
]

const places = [
  { rank: '1st', label: '🥇 First place',  prize: '$1,500 Microsoft Store Gift Card' },
  { rank: '2nd', label: '🥈 Second place', prize: '$1,000 Microsoft Store Gift Card' },
  { rank: '3rd', label: '🥉 Third place',  prize: '$500 Microsoft Store Gift Card' },
]

const badgeImages = {
  '1stPlaceRecruit': firstRecruit,
  '2ndPlaceRecruit': secondRecruit,
  '3rdPlaceRecruit': thirdRecruit,
  '1stPlaceOperative': firstOperative,
  '2ndPlaceOperative': secondOperative,
  '3rdPlaceOperative': thirdOperative,
  '1stPlaceSpecialOps': firstSpecialOps,
  '2ndPlaceSpecialOps': secondSpecialOps,
  '3rdPlaceSpecialOps': thirdSpecialOps,
  '1stPlaceCowork': firstCowork,
  '2ndPlaceCowork': secondCowork,
  '3rdPlaceCowork': thirdCowork,
}
</script>

<style scoped>
.prizes {
  margin: 1.5rem 0 2rem;
}

.participant-row {
  display: flex;
  align-items: center;
  gap: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
  background: var(--vp-c-bg-soft);
  margin-bottom: 1.5rem;
}

.participant-badge {
  width: 100px;
  height: 100px;
  object-fit: contain;
  flex-shrink: 0;
}

.participant-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 5px;
}

.participant-desc {
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.55;
}

.tracks-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 14px;
}

.track-col {
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  overflow: hidden;
  background: var(--vp-c-bg);
}

.track-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 600;
}

.track-recruit    { background: #dcfce7; color: #166534; }
.track-operative  { background: #ede9fe; color: #5b21b6; }
.track-specialops { background: #ffedd5; color: #9a3412; }
.track-cowork     { background: #dbeafe; color: #1e40af; }

.place-list {
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.place-row {
  display: flex;
  align-items: center;
  gap: 14px;
}

.badge-img {
  width: 90px;
  height: 90px;
  object-fit: contain;
  flex-shrink: 0;
}

.place-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 3px;
}

.place-prize {
  font-size: 13px;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}
</style>