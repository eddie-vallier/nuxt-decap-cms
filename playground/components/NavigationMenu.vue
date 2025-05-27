<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const { data } = await useAsyncData('navigationMenu', () => queryCollection('navigationMenu').all())

const items = ref<NavigationMenuItem[]>(data.value ?? [])
</script>

<template>
  <UNavigationMenu
    highlight-color="primary"
    orientation="horizontal"
    :items="items"
    class="justify-center"
  />
</template>
