import DecapCms from '../../../src/module'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/mdc', // TODO: Should be auto-imported by the module
    DecapCms,
  ],
  decapCms: {
    backend: {
      name: 'github',
      repo: 'eddie-vallier/nuxt-decap-cms',
    },
    collections: [
      {
        name: 'page',
        label: 'Pages',
        label_singular: 'Page',
        nested: {
          depth: 100,
          summary: '{{title}}',
        },
        folder: 'playground/content/pages',
        format: 'frontmatter',
        create: true,
        editor: {
          preview: true,
        },
        fields: [
          { label: 'Body', name: 'body', widget: 'markdown' },
        ],
        meta: { path: { widget: 'string', label: 'Path', index_file: 'index' } },
      },
    ],
  },
})
