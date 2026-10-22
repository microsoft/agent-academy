<script setup lang="ts">
import { computed } from "vue";
import { useRoute, withBase } from "vitepress";
import { recruitExperienceSwitcherEnabled } from "../../featureFlags";
import { findGroupForPath, isPathActive, type CoursePath } from "../coursePaths";

const route = useRoute();

function normalizeRoutePath(path: string) {
  const [pathname] = path.split(/[?#]/);
  const base = withBase("/");
  const relativePathname = pathname.startsWith(base)
    ? `/${pathname.slice(base.length)}`
    : pathname;
  const normalizedPathname = relativePathname.replace(/\/index(?:\.html)?$/, "/");
  return normalizedPathname.endsWith("/")
    ? normalizedPathname
    : `${normalizedPathname}/`;
}

const relativePath = computed(() => normalizeRoutePath(route.path));

const activeGroup = computed(() => findGroupForPath(relativePath.value));

const isCourseOverview = computed(() =>
  activeGroup.value?.paths.some((path) => relativePath.value === path.home),
);

function isActive(path: CoursePath) {
  return activeGroup.value ? isPathActive(activeGroup.value, path, relativePath.value) : false;
}

function selectPath(path: CoursePath) {
  if (!isActive(path)) window.location.assign(withBase(path.home));
}
</script>

<template>
  <nav
    v-if="activeGroup && isCourseOverview && (activeGroup.course !== 'Recruit' || recruitExperienceSwitcherEnabled)"
    class="course-path-switcher"
    :aria-label="`${activeGroup.course} course path`"
  >
    <p class="course-path-switcher__label">Choose your experience</p>
    <div class="course-path-switcher__options">
      <a
        v-for="path in activeGroup.paths"
        :key="path.root"
        class="course-path-switcher__option"
        :class="{ 'course-path-switcher__option--active': isActive(path) }"
        :href="withBase(path.home)"
        :aria-current="isActive(path) ? 'page' : undefined"
        @click.prevent="selectPath(path)"
      >
        <span class="course-path-switcher__name">{{ path.label }}</span>
        <span class="course-path-switcher__description">{{ path.description }}</span>
      </a>
    </div>
  </nav>
</template>

<style scoped>
.course-path-switcher {
  margin: 0 0 2rem;
  padding: 1rem;
  border: 2px solid var(--vp-c-brand-1);
  border-radius: 8px;
  background: var(--vp-c-brand-soft);
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
}

.course-path-switcher__label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 0 0.85rem;
  color: var(--vp-c-text-1);
  font-size: 0.95rem;
  font-weight: 700;
  letter-spacing: 0;
}

.course-path-switcher__label::before {
  width: 0.65rem;
  height: 0.65rem;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  content: "";
  box-shadow: 0 0 0 4px var(--vp-c-bg);
}

.course-path-switcher__options {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.5rem;
}

.course-path-switcher__option {
  display: flex;
  min-width: 0;
  min-height: 4.25rem;
  flex-direction: column;
  justify-content: center;
  padding: 0.75rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  text-decoration: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease, color 0.15s ease;
}

.course-path-switcher__option:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-text-1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.course-path-switcher__option--active {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-text-1);
  box-shadow: inset 4px 0 0 var(--vp-c-brand-1), 0 2px 8px rgba(0, 0, 0, 0.1);
}

.course-path-switcher__name {
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.35;
}

.course-path-switcher__description {
  margin-top: 0.2rem;
  color: var(--vp-c-text-2);
  font-size: 0.75rem;
  line-height: 1.35;
}

@media (max-width: 640px) {
  .course-path-switcher__options {
    grid-template-columns: 1fr;
  }
}
</style>