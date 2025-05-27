import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    pages: defineCollection({
      type: 'page',
      source: 'pages/**/*.md',
    }),
    navigationMenu: defineCollection({
      type: 'data',
      source: 'components/navigationMenu/*.yml',
      schema: z.object({
        label: z.string(),
        icon: z.string().optional(),
        active: z.boolean().optional(),
        to: z.string().optional(),
        target: z.string(),
        children: z.array(
          z.object({
            label: z.string(),
            icon: z.string().optional(),
            description: z.string().optional(),
            to: z.string().optional(),
          }),
        ).optional(),
      }),
    }),
  },
})
