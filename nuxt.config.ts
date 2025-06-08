// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/test-utils',
    '@nuxt/ui',
    '@nuxtjs/mdc',
  ],
  decapCms: {
    backend: {
      name: 'github',
      repo: 'eddie-vallier/nuxt-decap-cms',
    },
    collections: [],
  },
})
