<script setup lang="ts">
const { data: page } = await useAsyncData('experience-page', () => {
  return queryCollection('pages').path("/experiences").first()
})
const { data: experiences } = await useAsyncData('experiences', () => {
  return queryCollection('experiences').order("startDate","DESC").all()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

const { global } = useAppConfig()

useSeoMeta({
  title: page.value?.seo?.title || page.value?.title,
  ogTitle: page.value?.seo?.title || page.value?.title,
  description: page.value?.seo?.description || page.value?.description,
  ogDescription: page.value?.seo?.description || page.value?.description
})
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    >
      <UColorModeAvatar
        class="sm:rotate-4 size-36 rounded-lg ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
        :light="global.picture?.light!"
        :dark="global.picture?.dark!"
        :alt="global.picture?.alt!"
        :as="{ img: 'img' }"
      />
    </UPageHero>
    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
       <Motion
        v-for="(experience, index) in experiences"
        :key="experience.title"
        :initial="{ opacity: 0, transform: 'translateY(10px)' }"
        :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
        :transition="{ delay: 0.2 * index }"
        :in-view-options="{ once: true }"
      >
        <UPageCard
          :title="experience.title"
          :description="experience.summary"
          orientation="horizontal"
          class="group"
          :to="`/${experience.stem}`"
          :ui="{
            wrapper: 'max-lg:order-last',
            description: 'line-clamp-3 overflow-hidden text-ellipsis'
          }"
        >
          <div v-if="experience.logo" class="bg-white p-10 rounded-lg flex justify-center items-center">
            <NuxtImg :src="experience.logo" class="w-full max-w-100"/>
          </div>
          <template #leading>
            <span class="text-sm text-muted">
              {{ experience.startDate }} - {{ experience.endDate }}
            </span>
          </template>

          <template #footer>
            <div v-if="index === 0">
              <UButton>Mail me <UIcon name="i-lucide-mail"></UIcon></UButton>
            </div>
            <div v-if="index !== 0">
              <UButton :to="`/${experience.stem}`">More</UButton>
            </div>
          </template>
        </UPageCard>
      </Motion>
    </UPageSection>
  </UPage>
</template>
