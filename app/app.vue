<script setup lang="ts">
const colorMode = useColorMode()
const config = useRuntimeConfig()
const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { key: 'theme-color', name: 'theme-color', content: color }
  ],
  link: [
    { rel: 'icon', href: config.app.baseURL + 'favicon.ico' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: config.app.baseURL + 'favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: config.app.baseURL + 'favicon-16x16.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: config.app.baseURL + 'apple-touch-icon.png' },
    { rel: 'manifest', href: config.app.baseURL + 'site.webmanifest' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

useSeoMeta({
  titleTemplate: '%s'
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
      </UMain>
    </NuxtLayout>

    <ClientOnly>
      <LazyUContentSearch
        shortcut="meta_k"
        :links="navLinks"
        :fuse="{ resultLimit: 42 }"
      />
    </ClientOnly>
  </UApp>
</template>
