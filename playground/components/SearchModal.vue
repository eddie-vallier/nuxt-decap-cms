<script lang="ts" setup>
const opened = ref(false)
</script>

<template>
  <UModal v-model:open="opened">
    <slot />

    <template #content>
      <UInput
        icon="i-lucide-search"
        size="md"
        variant="outline"
        placeholder="Search..."
      />
      <Placeholder class="h-48 m-4" />
    </template>
  </UModal>
</template>
