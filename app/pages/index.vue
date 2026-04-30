<script setup lang="ts">
import { useRoutingIntersectionObserver } from '~/composable/router/routingIntersectionObserver'

const { data: page } = await useAsyncData('index', () => {
  return queryCollection('index').first()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description
})

useRoutingIntersectionObserver([
  useTemplateRef<ComponentPublicInstance>('hero'),
  useTemplateRef<ComponentPublicInstance>('experience'),
  useTemplateRef<ComponentPublicInstance>('photography')
])
</script>

<template>
  <UPage v-if="page">
    <LandingHero
      ref="hero"
      :page
    >
      <LandingAbout :page />
    </LandingHero>
    <LandingWorkExperience
      id="experiences"
      ref="experience"
    />
    <LandingPhotography
      id="photography"
      ref="photography"
    />
  </UPage>
</template>
