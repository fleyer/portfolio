export default defineAppConfig({
  global: {
    picture: {
      dark: 'https://media.licdn.com/dms/image/v2/D4E03AQHR6uPkSrSGxQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699648253421?e=1775088000&v=beta&t=FSWLXD3b3Z9KIw-Vwp7o2vX971Q4q1XYPcra5X9epps',
      light: 'https://media.licdn.com/dms/image/v2/D4E03AQHR6uPkSrSGxQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1699648253421?e=1775088000&v=beta&t=FSWLXD3b3Z9KIw-Vwp7o2vX971Q4q1XYPcra5X9epps',
      alt: 'My profile picture'
    },
    email: 'manchado.romain@gmail.com',
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
