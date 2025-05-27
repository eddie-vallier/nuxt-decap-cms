<template>
  <div class="flex gap-1 h-full items-center font-bold text-xl justify-center md:justify-start">
    <NuxtLink to="/" class="flex items-center gap-1">
      <NuxtLogo
        :filled="true"
      />
      Nuxt
      <span class="text-primary">Decap</span>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import NuxtLogo from '~/assets/svg/NuxtLogo.svg'
</script>

<style scoped>
* {
  font-family: PublicSans, sans-serif;
}
</style>
