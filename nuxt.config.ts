// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
    '@nuxtjs/mdc'
  ],

  imports: {
    dirs: ['composables/**', 'composables/**/**']
  },

  devtools: {
    enabled: true
  },

  app: {
    head: {
      script: [
        { src: 'https://static.cloudflareinsights.com/beacon.min.js?token=9296db2bfd8c4d5299246802bee664db' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    preset: 'github-pages',
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true
    }
  },

  vite: {
    optimizeDeps: {
      include: []
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    clientBundle: {
      scan: true,
      sizeLimitKb: 256,

      icons: [
        'lucide:sun',
        'lucide:moon'
      ]
    }
  },

  ogImage: {
    zeroRuntime: true
  }

})
