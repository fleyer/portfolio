<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageSection

    :ui="{
      container: '!p-0',
      title: 'text-left',
      description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted'
    }"
  >
    <template #title>
      <LandingTitle>
        {{ page.about.title }}
      </LandingTitle>
    </template>
    <template #description>
      <MDC
        :value="page.about.description.sm"
        class="block sm:hidden"
      />
      <MDC
        :value="page.about.description.lg"
        class="hidden sm:block"
      />
    </template>
  </UPageSection>
</template>
