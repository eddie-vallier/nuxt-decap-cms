export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
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
