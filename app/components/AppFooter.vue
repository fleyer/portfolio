<script setup lang="ts">
const { footer } = useAppConfig()
</script>

<template>
  <UFooter
    class="z-10 bg-default"
    :ui="{ left: 'text-muted text-xs' }"
  >
    <template #left>
      <ULink
        to="https://github.com/nuxt/ui"
        target="blank"
      >{{ footer.credits }}</ULink>
    </template>
  </UFooter>
</template>
