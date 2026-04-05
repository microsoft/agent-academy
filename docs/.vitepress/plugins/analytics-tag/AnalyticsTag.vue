<script setup lang="ts">
const props = defineProps<{
  section: string;
  mission?: string;
}>();

const src = props.mission
  ? `https://m365-visitor-stats.azurewebsites.net/agent-academy/${props.section}/${props.mission}`
  : `https://m365-visitor-stats.azurewebsites.net/agent-academy/${props.section}`;
</script>

<template>
  <img :src="src" alt="Analytics" />
</template>
