<script setup lang="ts">
const images = import.meta.glob('~/assets/gallery/*', { eager: true, import: 'default' })
const imagePaths = Object.values(images)
</script>

<template>
  <UPageSection
    :ui="{
      container: 'flex lg:flex flex-row flex-wrap justify-center'
    }"
  >
    <PolaroidItem
      v-for="(image, index) of imagePaths"
      :key="index"
      :image="{ src: image }"
      :index
      :ui="{ image: 'size-50' }"
    />
  </UPageSection>
</template>
