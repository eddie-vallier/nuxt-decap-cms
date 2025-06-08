<script setup lang="ts">
const route = useRoute()
const path = `/${['pages', ...route.path.split('/')].filter(Boolean).join('/')}`

const { data, error } = await useAsyncData(`page-${path.replace('/', '-')}`, () =>
  queryCollection('pages').path(path).first(),
)
</script>

<template>
  <div
    v-if="data"
    class="prose dark:prose-invert max-w-none"
  >
    <ContentRenderer :value="data" />
  </div>
  <div v-else>
    <h1>Page non trouvée</h1>
    <p>{{ error?.message }}</p>
  </div>
</template>
