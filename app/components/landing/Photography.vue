<script setup lang="ts">
const { data: page } = await useAsyncData('photography-landing', () => {
  return queryCollection('pages').path('/photography').first()
})
</script>

<template>
  <UPageSection
    v-if="page"
    :title="page.title"
    :ui="{
      title: 'text-left',
      container: '!pt-0 flex flex-column items-center lg:gap-8 w-full'
    }"
  >
    <template #title>
      <LandingTitle>{{ page.title }}</LandingTitle>
    </template>
    <Gallery />
  </UPageSection>
</template>
