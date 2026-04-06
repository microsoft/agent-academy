---
aside: false
---

<!-- markdownlint-disable-file MD041 -->
<script setup>
import { useData } from 'vitepress'
import { onMounted } from 'vue'
const { params } = useData()
onMounted(() => { document.title = params.value.label + ' | Agent Academy' })
</script>

<breadcrumb section="tags" :label="$params.label" />

# {{ $params.label }}

<missions :tag="$params.slug" :filterable="false" sort="alphabetical" />
