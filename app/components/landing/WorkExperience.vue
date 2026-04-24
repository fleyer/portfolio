<script setup lang="ts">
const { data: page } = useAsyncData('experience-page', () => {
  return queryCollection('pages').path('/experiences').first()
})
const { data: experiences } = await useAsyncData('experiences-landing', () => {
  return queryCollection('experiences').order('startDate', 'DESC').all()
})

if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}

if (!experiences.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
    fatal: true
  })
}
</script>

<template>
  <UPageSection
    v-if="page"
    id="experiences"
    :title="page.title"
    :ui="{
      title: 'text-left text-xl sm:text-xl lg:text-2xl font-medium',
      container: '!pt-0 flex flex-column items-center lg:gap-8 w-full'
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
        <div
          v-if="experience.logo"
          class="bg-white p-10 rounded-lg flex justify-center items-center"
        >
          <NuxtImg
            :src="experience.logo"
            class="w-full max-w-100"
          />
        </div>
        <template #leading>
          <span class="text-sm text-muted">
            {{ experience.startDate }} - {{ experience.endDate }}
          </span>
        </template>

        <template #footer>
          <UButton :to="`/${experience.stem}`">
            More
          </UButton>
        </template>
      </UPageCard>
    </Motion>
  </UPageSection>
</template>

<style scoped>

</style>
