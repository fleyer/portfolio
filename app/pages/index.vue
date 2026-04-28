<script setup lang="ts">
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

const debouncedUpdateLocationHash = useDebounceFn(updateWindowLocationHash, 500)

function updateWindowLocationHash([entry]: IntersectionObserverEntry[]) {
  if (entry?.target.id) {
    window.history.replaceState(history.state, '', entry.target.id ? `#${entry.target.id}` : '')
  } else {
    window.history.replaceState(history.state, '', window.location.pathname + window.location.search)
  }
}

function filterIntersectingEntries(fn: (entries: IntersectionObserverEntry[]) => void) {
  return (entries: IntersectionObserverEntry[]) => {
    const intersectingEntries = entries.filter(entry => entry.isIntersecting)
    if (intersectingEntries.length > 0) {
      fn(intersectingEntries)
    }
  }
}

useIntersectionObserver(
  [useTemplateRef<ComponentPublicInstance>('hero'), useTemplateRef<ComponentPublicInstance>('experience'), useTemplateRef<ComponentPublicInstance>('photography')],
  filterIntersectingEntries(debouncedUpdateLocationHash),
  { threshold: 0.4 }
)
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
