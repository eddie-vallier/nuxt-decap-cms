<template>
  <div class="flex gap-1 h-full items-center font-bold text-xl justify-center md:justify-end">
    <SearchModal>
      <UButton
        class="cursor-pointer"
        icon="i-lucide-search"
        size="md"
        color="neutral"
        variant="ghost"
      />
    </SearchModal>
    <ClientOnly v-if="!colorMode?.forced">
      <UButton
        class="cursor-pointer"
        :icon="isDark ? 'i-lucide-moon' : 'i-lucide-sun'"
        color="neutral"
        variant="ghost"
        @click="isDark = !isDark"
      />

      <template #fallback>
        <div class="size-8" />
      </template>
    </ClientOnly>
    <UButton
      icon="i-simple-icons:github"
      size="md"
      color="neutral"
      variant="ghost"
      to="https://github.com/eddie-vallier/nuxt-decap-cms"
      target="_blank"
      external
    />
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set(_isDark) {
    colorMode.preference = _isDark ? 'dark' : 'light'
  },
})
</script>

<style>

</style>
