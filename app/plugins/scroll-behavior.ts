import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('page:finish', () => {
    if (!window.location.hash) window.scrollTo({ top: 0 })
  })
})
