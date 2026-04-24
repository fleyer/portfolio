<script setup lang="ts">
const { data: page } = await useAsyncData('more-landing', () => {
  return queryCollection('pages').path('/more').first()
})
</script>

<template>
  <UPageSection
    v-if="page"
    id="more"
    :title="page.title"
    :ui="{
      container: '!pt-0',
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium'
    }"
  >
    <Gallery />
  </UPageSection>
</template>
