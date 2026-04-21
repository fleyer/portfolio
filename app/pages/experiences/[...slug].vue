<script setup lang="ts">
import Navigation from '~/components/content/Navigation.vue'
import { useNavNext, useNavPrevious } from '~/composable/nav/experience'

const route = useRoute()

const { data: experience } = await useAsyncData(route.path+"/detail", () => {
  return queryCollection("experiences").where("id","=",`experiences${route.path}.yml`).first()
})

const { data: experienceContent } = await useAsyncData(route.path+"/content", () => {
  return queryCollection("experiencesContent").path(route.path).first()
})

if(experience.value == null || experienceContent.value == null){
  throw createError({
    status: 404,
    message: "Experience not found",
    fatal: true
  })
}

 const next = await useNavNext(experience)
 const previous = await useNavPrevious(experience)

</script>
<template>
  <UPage v-if="experience && experienceContent">
    <UPageHero
        orientation="horizontal"
        :ui="{
          container: 'lg:flex sm:flex-row items-center !pb-0',
          title: '!mx-0 text-left',
          description: '!mx-0 text-left',
          links: 'justify-start',
          headline: 'flex items-center'
        }"
    >
      <template #title>
        {{ experience.title }} <span class="text-muted text-3xl">@{{ experience.company.name }}</span>
      </template>

      <template #headline>
        <ProseStrong>{{ experience.startDate }} - {{  experience.endDate }} </ProseStrong>
        <UIcon class="mx-2" name="i-lucide-map-pin"> </UIcon>{{ experience.country }} - {{  experience.location }}
      </template>

      <template #description>
        <div class="flex flex-col-reverse sm:flex-row">
          <div class="flex-2">{{ experience.summary }}</div>
          <div class="p-10 rounded b-white flex-1">
            <NuxtLink target="blank" :to="experience.company.url">
              <NuxtImg v-if="experience.logo" :src="experience.logo" class="w-full"/>
            </NuxtLink>
          </div>
        </div>
      </template>

    </UPageHero>
    <UPageSection>
      <ContentRenderer :value="experienceContent"></ContentRenderer>
      <template #bottom>
        <Navigation :next="next" :previous="previous"></Navigation>
      </template>
    </UPageSection>
  </UPage>

</template>
