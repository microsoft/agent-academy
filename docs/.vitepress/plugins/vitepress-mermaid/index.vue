<template>
  <div :key="theme" ref="diagramRef" class="mermaid" :style="{ minHeight: fixedHeight }">
    {{ value }}
  </div>
</template>

<script setup>
import { useData } from 'vitepress'
import { computed, ref, watch, nextTick } from 'vue'
import mermaid from 'mermaid'

const props = defineProps({
  value: String
})

const { isDark } = useData()
const theme = computed(() => isDark.value ? 'dark' : 'default')

const diagramRef = ref(null)
const fixedHeight = ref('auto')

// Initialize mermaid
mermaid.initialize({
  startOnLoad: false,
  theme: theme.value,
})

watch(diagramRef, async () => {
  const element = diagramRef.value
  if (!element) return

  await nextTick()

  // Update mermaid config with current theme
  mermaid.initialize({
    startOnLoad: false,
    theme: theme.value,
  })

  // Remove any previous processing
  element.removeAttribute('data-processed')

  // Render the diagram
  try {
    await mermaid.run({
      nodes: [element]
    })

    // Capture height after render
    setTimeout(() => {
      if (element) {
        const height = element.offsetHeight
        if (height > 0) {
          fixedHeight.value = `${height}px`
        }
      }
    }, 100)
  } catch (error) {
    console.error('Mermaid rendering error:', error)
  }
}, { immediate: true })
</script>

<style scoped>
.mermaid {
  display: flex;
  justify-content: center;
  margin: 1rem 0;
  opacity: 0;
  transition: opacity 300ms ease;
}

.mermaid:has(> svg) {
  opacity: 1;
}
</style>