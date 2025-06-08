<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const route = useRoute()
const { data } = await useAsyncData('navigationMenu', () => queryCollection('navigationMenu').all())

const items = computed<NavigationMenuItem[]>(() => data.value.map(item => ({
  ...item,
  active: route.path == item.to,
})) ?? [])
</script>

<template>
  <UNavigationMenu
    highlight-color="primary"
    orientation="horizontal"
    :items="items"
    class="justify-center"
  />
</template>
