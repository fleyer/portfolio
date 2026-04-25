<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.about.title"
    :ui="{
      container: '!p-0',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <template #description>
      <MDC :value="page.about.description.sm" class="block sm:hidden"/>
      <MDC :value="page.about.description.lg" class="hidden sm:block"/>
    </template>
  </UPageSection>
</template>

<style scoped>

</style>
