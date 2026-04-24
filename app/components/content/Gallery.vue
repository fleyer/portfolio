<script setup lang="ts">
const images = import.meta.glob('~/assets/gallery/*', { eager: true, import: 'default' })
const imagePaths = Object.values(images)
</script>

<template>
  <div class="flex lg:flex flex-row flex-wrap justify-center">
    <Motion
      v-for="(image, index) in imagePaths"
      :key="index"
      class="z-1 hover:z-50"
      :initial="{ opacity: 0, transform: 'translateY(10px)' }"
      :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
      :transition="{ delay: 0.2 + index * 0.1 }"
      :in-view-options="{ once: true }"
    >
      <PolaroidItem
        :key="index"
        :image="{ src: image }"
        :index
        :ui="{ image: 'size-50' }"
      />
    </Motion>
  </div>
</template>
