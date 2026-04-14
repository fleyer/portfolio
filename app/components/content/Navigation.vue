<script setup lang="ts">
import type { ExperiencesCollectionItem } from '@nuxt/content';

type NavigationProps = {
  previous?: ExperiencesCollectionItem | undefined | null,
  next?: ExperiencesCollectionItem | undefined | null
}

const props = defineProps<NavigationProps>()
</script>

<template>

  <UContainer class="flex gap-4">
    <ULink :to="'/'+ (previous?.stem || '#')" class="flex group" :disabled="!previous">
      <UCard>
        <div class="flex justify-center items-center rounded-full bg-gray-100 w-10 h-10 group-hover:bg-gray-200">
          <UIcon name="i-lucide-arrow-left"></UIcon>
        </div>
        <ProseStrong>{{ previous ? previous.title : ""}}</ProseStrong><br>
        {{ previous ? "@"+previous.company.name : ""  }}

      </UCard>
    </ULink>
    <ULink :to="'/'+next?.stem || '#'" :disabled="!next" class="flex group">
      <UCard>
        <div class="flex justify-center items-center rounded-full bg-gray-100 w-10 h-10 group-hover:bg-gray-200">
          <UIcon name="i-lucide-arrow-right"></UIcon>
        </div>
        <ProseStrong>{{ next?.title }}</ProseStrong> <br>
        {{ next ? "@"+next.company.name : ""  }}
      </UCard>
    </ULink>
  </UContainer>

</template>
