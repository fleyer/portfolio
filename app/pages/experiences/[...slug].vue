<script setup lang="ts">
const route = useRoute()

const { data: experience } = await useAsyncData("experience-detail", () => {
  return queryCollection("experiences").where("id","=",`experiences${route.path}.yml`).first()
})

if(experience.value == null){
  throw createError({
    status: 404,
    message: "Experience not found",
    fatal: true
  })
}

const markDown = parseMarkdown(experience.value.description)

</script>
<template>
  <UPage v-if="experience">
    <UPageHero
        :title="experience.title"
        orientation="horizontal"
        :ui="{
          container: 'lg:flex sm:flex-row items-center !pb-0',
          title: '!mx-0 text-left',
          description: '!mx-0 text-left',
          links: 'justify-start'
        }"
    >
      <div class="p-10 rounded b-white">
        <NuxtLink target="blank" :to="experience.company.url">
          <NuxtImg :src="experience.logo"/>
        </NuxtLink>
      </div>
      <template #footer>
        {{ experience.startDate }} - {{  experience.endDate }}
      </template>
    </UPageHero>
    <!-- <UPageSection> -->
      <MDC :value="`# Hello World

Learn more about the **MDC** component in the [documentation](https://github.com/nuxt-modules/mdc).
`" unwrap="p"/>
    <!-- </UPageSection> -->
  </UPage>

</template>
