<script setup lang="ts">
import type { ExperiencesCollectionItem } from '@nuxt/content'

type NavigationProps = {
  previous?: ExperiencesCollectionItem | undefined | null
  next?: ExperiencesCollectionItem | undefined | null
}

defineProps<NavigationProps>()
const colorMode = useColorMode()
const darkCls = 'bg-transparent group-hover:text-gray-100 border-1 solid'
const lightCls = 'bg-gray-100 group-hover:bg-gray-200'
const color = computed(() => colorMode.value === 'dark' ? darkCls : lightCls)
</script>

<template>
  <UContainer class="flex gap-4">
    <ULink
      :to="'/'+ (previous?.stem || '#')"
      :class="`flex group ${previous ? '' : 'pointer-events-none'}`"
    >
      <UCard>
        <div :class="`flex justify-center items-center rounded-full w-10 h-10 mb-2 ${color}`">
          <UIcon name="i-lucide-arrow-left" />
        </div>
        <ProseStrong>{{ previous ? previous.title : "" }}</ProseStrong><br>
        {{ previous ? "@"+previous.company.name : "" }}

      </UCard>
    </ULink>
    <ULink
      :to="'/'+ (next?.stem || '#')"
      :class="`flex group ${next ? '' : 'pointer-events-none'}`"
    >
      <UCard>
        <div :class="`flex justify-center items-center rounded-full w-10 h-10 mb-2 disabled:bg-red ${color}`">
          <UIcon name="i-lucide-arrow-right" />
        </div>
        <ProseStrong>{{ next?.title }}</ProseStrong> <br>
        {{ next ? "@"+next.company.name : "" }}
      </UCard>
    </ULink>
  </UContainer>
</template>
