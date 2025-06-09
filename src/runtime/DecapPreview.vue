<template>
  <MDCRenderer
    v-if="ast"
    class="prose  dark:prose-invert"
    :body="ast.body"
    :data="ast.data"
  />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { parseMarkdown } from '#imports'

const ast = ref()

onMounted(() => {
  window.addEventListener('message', async (event) => {
    if (event.data?.type == 'preview-content') {
      ast.value = await parseMarkdown(event.data?.markdown || '')
    }
  })
})
</script>
