<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { groupWorkshops, workshops } from "./workshopSchedule";

type ScheduleTab = "upcoming" | "past";
const tabs: { id: ScheduleTab; label: string }[] = [
  { id: "upcoming", label: "Upcoming" },
  { id: "past", label: "Past" },
];
const activeTab = ref<ScheduleTab>("upcoming");
const today = ref("");
const groups = computed(() => groupWorkshops(workshops, today.value));
let timer: ReturnType<typeof setInterval> | undefined;

function updateDate() {
  const now = new Date();
  today.value = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

onMounted(() => {
  updateDate();
  timer = setInterval(updateDate, 60_000);
});
onUnmounted(() => clearInterval(timer));

function navigateTabs(event: KeyboardEvent, index: number) {
  let next: number;
  if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
  else if (event.key === "ArrowLeft") next = (index + tabs.length - 1) % tabs.length;
  else if (event.key === "Home") next = 0;
  else if (event.key === "End") next = tabs.length - 1;
  else return;
  event.preventDefault();
  activeTab.value = tabs[next].id;
  const tabList = (event.currentTarget as HTMLButtonElement).parentElement;
  tabList?.querySelectorAll<HTMLButtonElement>('[role="tab"]')[next].focus();
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short", month: "short", day: "numeric", year: "numeric", timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
</script>

<template>
  <div class="workshop-schedule">
    <div class="schedule-tabs" role="tablist" aria-label="Workshop schedule">
      <button
        v-for="(tab, index) in tabs"
        :id="`workshop-tab-${tab.id}`"
        :key="tab.id"
        type="button"
        role="tab"
        :aria-selected="activeTab === tab.id"
        :aria-controls="`workshop-panel-${tab.id}`"
        :tabindex="activeTab === tab.id ? 0 : -1"
        @click="activeTab = tab.id"
        @keydown="navigateTabs($event, index)"
      >
        {{ tab.label }} <span class="event-count">{{ groups[tab.id].length }}</span>
      </button>
    </div>
    <div
      v-for="tab in tabs"
      :id="`workshop-panel-${tab.id}`"
      :key="tab.id"
      :hidden="activeTab !== tab.id"
      :aria-labelledby="`workshop-tab-${tab.id}`"
      role="tabpanel"
      tabindex="0"
      class="schedule-panel"
    >
      <div v-if="groups[tab.id].length" class="schedule-table">
        <table role="table">
          <caption class="sr-only">{{ tab.label }} Agent Academy workshops</caption>
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Event</th>
              <th scope="col">Location</th>
              <th scope="col">Facilitators</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="workshop in groups[tab.id]" :key="`${workshop.date}-${workshop.name}`">
              <td><time :datetime="workshop.date">{{ formatDate(workshop.date) }}</time></td>
              <td><a :href="workshop.url" target="_blank" rel="noopener noreferrer">{{ workshop.name }}</a></td>
              <td class="workshop-detail" data-label="Location">{{ workshop.location }}</td>
              <td class="workshop-detail" data-label="Facilitators">{{ workshop.facilitators }}</td>
              <td>
                <span class="event-status" :class="{ 'sold-out': tab.id === 'upcoming' && workshop.soldOut }">
                  {{ tab.id === "past" ? "Completed" : workshop.soldOut ? "Sold out" : "Upcoming" }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p v-else class="empty-schedule">
        {{ tab.id === "upcoming" ? "No upcoming workshops announced yet. Check back for new dates." : "No past workshops yet." }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.workshop-schedule {
  margin: 1.5rem 0 2rem;
}

.schedule-tabs {
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.schedule-tabs button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 0;
  border-bottom: 3px solid transparent;
  color: var(--vp-c-text-2);
  font: inherit;
  font-weight: 600;
  cursor: pointer;
}

.schedule-tabs button[aria-selected="true"] {
  border-bottom-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
}

.event-count {
  padding: 0 0.5rem;
  border-radius: 1rem;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-size: 0.8rem;
}

.schedule-tabs button:focus-visible,
.schedule-panel:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 4px;
}

.schedule-table {
  overflow-x: auto;
}

.schedule-table table {
  display: table;
  width: 100%;
  margin: 1rem 0 0;
  font-size: 0.875rem;
}

.schedule-table time {
  white-space: nowrap;
}

.event-status {
  white-space: nowrap;
  font-size: 0.8rem;
  font-weight: 600;
}

.sold-out {
  color: var(--vp-c-warning-1);
}

.empty-schedule {
  padding: 1.5rem 0;
  color: var(--vp-c-text-2);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}

@media (max-width: 640px) {
  .schedule-table table,
  .schedule-table tbody,
  .schedule-table tr,
  .schedule-table td {
    display: block;
  }

  .schedule-table thead {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }

  .schedule-table tr {
    margin-bottom: 0.75rem;
    padding: 1rem;
    border: 1px solid var(--vp-c-divider);
    border-radius: 10px;
    background: var(--vp-c-bg);
  }

  .schedule-table td {
    padding: 0.25rem 0;
    border: 0;
    overflow-wrap: anywhere;
  }

  .schedule-table td:first-child {
    color: var(--vp-c-text-2);
    font-size: 0.8rem;
  }

  .schedule-table td:nth-child(2) {
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
  }

  .workshop-detail::before {
    content: attr(data-label) ": ";
    font-weight: 600;
  }
}
</style>
