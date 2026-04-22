export default defineAppConfig({
  global: {
    picture: {
      dark: '/romain_manchado.jpg',
      light: '/romain_manchado.jpg',
      alt: 'My profile picture'
    },
    email: 'manchado.romain@gmail.com',
    socials: [
      { link: 'https://www.linkedin.com/in/rmanchado', icon: 'i-lucide-linkedin' },
      { link: 'https://bsky.app/profile/oro-wa.bsky.social', icon: 'i-simple-icons-bluesky' },
      { link: 'https://github.com/fleyer?tab=repositories', icon: 'i-lucide-github' }
    ],
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        headline: 'text-muted',
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Built with Nuxt UI • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-discord',
      'to': 'https://go.nuxt.com/discord',
      'target': '_blank',
      'aria-label': 'Nuxt on Discord'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://go.nuxt.com/x',
      'target': '_blank',
      'aria-label': 'Nuxt on X'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/nuxt/ui',
      'target': '_blank',
      'aria-label': 'Nuxt UI on GitHub'
    }]
  }
})
