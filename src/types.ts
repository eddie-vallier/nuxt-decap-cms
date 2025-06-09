import { z } from 'zod'

const collectionSchema = z.object({
  name: z.string(),
  label: z.string(),
  label_singular: z.string(),
  nested: z.object({
    depth: z.number(),
    summary: z.string(),
  }).optional(),
  folder: z.string(),
  format: z.string(),
  create: z.boolean(),
  editor: z.object({
    preview: z.boolean().default(false),
  }),
  fields: z.array(
    z.object({
      label: z.string(),
      name: z.string(),
      widget: z.string(),
    }),
  ).default([]),
  meta: z.object({
    path: z.object({
      widget: z.string(),
      label: z.string(),
      index_file: z.string().default('index'),
    }),
  }).optional(),
})

const backendSchema = z.object({
  name: z.string(),
  repo: z.string(),
  branch: z.string().default('main'),
  site_url: z.string().optional(),
})

export const moduleOptionsSchema = z.object({
  route: z.string().default('/decap'),
  backend: backendSchema,
  media_folder: z.string().default('static/img'),
  public_folder: z.string().default('/img'),
  collections: z.array(collectionSchema).default([]),
}).refine(data => data.backend !== undefined, {
  message: '[nuxt-decap] "backend" config is required.',
  path: ['backend'],
})

export type ModuleOptions = z.input<typeof moduleOptionsSchema>
export type RequiredModuleOptions = z.output<typeof moduleOptionsSchema>
