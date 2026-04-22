import { defineCollection, defineContentConfig, z } from '@nuxt/content'

const createBaseSchema = () => z.object({
  title: z.string(),
  description: z.string()
})

const createButtonSchema = () => z.object({
  label: z.string(),
  icon: z.string().optional(),
  to: z.string().optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  target: z.enum(['_blank', '_self']).optional()
})

const createImageSchema = () => z.object({
  src: z.string().editor({ input: 'media' }),
  alt: z.string()
})

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: 'page',
      source: 'index.yml',
      schema: z.object({
        icon: z.string().nonempty(),
        hero: z.object({
          links: z.array(createButtonSchema()),
          images: z.array(createImageSchema())
        }),
        about: createBaseSchema(),
        experiences: createBaseSchema().extend({
          items: z.array(z.object({
            date: z.date(),
            position: z.string(),
            company: z.object({
              name: z.string(),
              url: z.string(),
              logo: z.string().editor({ input: 'icon' }),
              color: z.string()
            })
          }))
        })
      })
    }),
    experiences: defineCollection({
      type: 'data',
      source: 'experiences/*.yml',
      schema: z.object({
        title: z.string().nonempty(),
        summary: z.string().nonempty(),
        logo: z.string().nonempty(),
        startDate: z.string().nonempty(),
        endDate: z.string().nonempty(),
        position: z.string(),
        location: z.string(),
        country: z.string(),
        company: z.object({
          name: z.string(),
          url: z.string(),
          color: z.string()
        })
      })
    }),

    experiencesContent: defineCollection({
      type: 'page',
      source: 'experiences/*.md'
    }),

    pages: defineCollection({
      type: 'page',
      source: [
        { include: 'experiences.yml' }
      ],
      schema: z.object({
        links: z.array(createButtonSchema())
      })
    }),
    gallery: defineCollection({
      type: 'page',
      source: 'gallery.yml',
      schema: z.object({
        content: z.object({}),
        images: z.array(createImageSchema())
      })
    })
  }
})
