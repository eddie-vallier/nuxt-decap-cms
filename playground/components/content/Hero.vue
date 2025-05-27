<template>
  <div class="w-full text-center mt-30">
    <h1 class="font-bold text-7xl mb-0">
      <slot
        name="first-line"
        mdc-unwrap="p"
      /><br>
      <span class="text-primary">
        <slot
          name="second-line"
          mdc-unwrap="p"
        />
      </span>
    </h1>
    <slot name="subtitle" />
    <slot name="default" />
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>
