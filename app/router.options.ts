import type { RouterConfig } from '@nuxt/schema'

let SCROLL_BEHAVIOR = false

export const disableScrollBehaviorUntilNextNav = function () {
  SCROLL_BEHAVIOR = false
}

export const enableScrollBehavior = function () {
  SCROLL_BEHAVIOR = true
}

export default <RouterConfig> {
  scrollBehavior(to, from, savedPosition) {
    if (!SCROLL_BEHAVIOR) {
      enableScrollBehavior()
      return { }
    } else if (to.hash) {
      return {
        el: to.hash,
        top: 80, // Adjust for fixed header height
        behavior: 'smooth'
      }
    } else return savedPosition || { top: 0 }
  }
}
