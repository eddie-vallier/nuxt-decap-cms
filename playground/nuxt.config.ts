export default defineNuxtConfig({
  modules: [
    '../src/module',
    '@nuxt/content',
    '@nuxt/ui',
    'nuxt-svgo',
    '@nuxt/fonts',
    // '@pinia/nuxt',
    '@nuxtjs/mdc',
  ],
  devtools: { enabled: true },
  app: {
    baseURL: '/nuxt-decap-cms/',
  },
  css: ['~/assets/css/main.css'],
  routeRules: {
    '/': {
      prerender: true,
    },
  },
  vite: {
    optimizeDeps: {
      include: ['debug'],
    },
  },
  decapCms: {
    backend: {
      name: 'github',
      repo: 'eddie-vallier/nuxt-decap-cms',
      site_url: 'https://eddie-vallier.github.io/nuxt-decap-cms',
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
