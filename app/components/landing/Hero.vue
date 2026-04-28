<script setup lang="ts">
import type { IndexCollectionItem } from '@nuxt/content'

const { global } = useAppConfig()

defineProps<{
  page: IndexCollectionItem
}>()
</script>

<template>
  <UPageHero
    :ui="{
      root: 'h-dvh',
      headline: 'flex items-center justify-center',
      title: 'text-shadow-md max-w-lg mx-auto',
      links: 'mt-4 flex-col justify-center items-center',
      container: 'gap-0 sm:gap-0 md:gap-0 lg:gap-0 h-dvh grid-rows-[auto_1fr] pb-0!'
    }"
  >
    <template #headline>
      <Motion
        :in-view-options="{ once: true }"
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1
        }"
      >
        <UColorModeAvatar
          class="size-50 ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
          :light="global.picture?.light!"
          :dark="global.picture?.dark!"
          :alt="global.picture?.alt!"
        />
      </Motion>
    </template>

    <template #title>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.1
        }"
      >
        {{ page.title }}
      </Motion>
    </template>

    <template #description>
      <Motion
        :initial="{
          scale: 1.1,
          opacity: 0,
          filter: 'blur(20px)'
        }"
        :animate="{
          scale: 1,
          opacity: 1,
          filter: 'blur(0px)'
        }"
        :transition="{
          duration: 0.6,
          delay: 0.3
        }"
      >
        <div class="flex justify-center items-center">
          {{ page.description }}<UIcon
            class="ml-2"
            :name="page.icon"
          />
        </div>
        <div class="mt-10 flex justify-center gap-4">
          <NuxtLink
            v-for="(social, index) in global.socials"
            :key="index"
            class="rounded-full border border-solid w-10 h-10 flex justify-center items-center"
            :to="social.link"
            target="blank"
            external
          ><UIcon :name="social.icon" /></NuxtLink>
        </div>
      </Motion>
    </template>
    <Motion
      :initial="{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        scale: 1.1,
        opacity: 0,
        filter: 'blur(20px)'
      }"
      :animate="{
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)'
      }"
      :transition="{
        duration: 0.6,
        delay: 0.7
      }"
    >
      <slot name="default" />
    </Motion>

    <Motion
      :initial="{
        scale: 1.1,
        opacity: 0,
        filter: 'blur(20px)'
      }"
      :animate="{
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)'
      }"
      :transition="{
        duration: 0.6,
        delay: 0.7
      }"
    >
      <div class="flex gap-4 justify-center items-end p-4 sm:p-10">
        <UButton
          variant="subtle"
          icon="i-lucide-external-link"
        >
          <NuxtLink
            target="_blank"
            to="/resume/Romain_Manchado_Resume_2026.pdf"
            external
            variant="subtle"
          >See my resume</NuxtLink>
        </UButton>
        <MailButton />
      </div>
    </Motion>
  </UPageHero>
</template>

<style lang="css" scoped>
.half-height {
  height: 50%;
}
</style>
