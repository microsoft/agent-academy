---
aside: false
---

<script setup>
import { useData } from 'vitepress'
import { useHead } from '@unhead/vue'
const { params } = useData()
useHead({ title: params.value.label + ' | Agent Academy' })
</script>

<!-- markdownlint-disable MD033 -->
<breadcrumb section="products" :label="$params.label" />

# {{ $params.label }}

<missions :product="$params.slug" :filterable="false" sort="alphabetical" />
<!-- markdownlint-enable MD033 -->
