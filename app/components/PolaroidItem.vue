<script setup lang="ts">
withDefaults(defineProps<{
  image: {
    src: string | unknown
    alt?: string
  }
  ui?: {
    image: string
  }
  index: number
}>(), {
  ui: () => ({ image: 'size-32' })
})
</script>

<template>
  <div
    class="relative bg-white shadow-xl/30 p-2 flex flex-col transition-transform duration-300 ease-in-out hover:scale-105 hover:rotate-0"
    :class="[
      index % 2 === 0 ? '-rotate-5' : 'rotate-5',
      index % 2 === 0 ? 'hover:-translate-x-4' : 'hover:translate-x-4'
    ]"
  >
    <img
      :src="image.src"
      :alt="image.alt"
      :class="`${ui.image} object-cover`"
    >
    <span class="w-32 text-xs text-black font-serif font-medium text-center mt-2">
      {{ image.alt }}
    </span>
  </div>
</template>
