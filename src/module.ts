import { defineNuxtModule, createResolver, addServerHandler, addPrerenderRoutes } from '@nuxt/kit'
import { moduleOptionsSchema, type ModuleOptions } from './types'
import resolveOptions from './utils/resolve-options'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-decap-cms',
    configKey: 'decapCms',
  },
  defaults: moduleOptionsSchema.safeParse({}).data,
  async setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url)

    const options = await resolveOptions(_options, _nuxt)

    _nuxt.options.runtimeConfig.decapCms = options

    addServerHandler({
      route: `${options.route}`,
      handler: resolve('./runtime/index.get'),
    })

    addServerHandler({
      route: `${options.route}/config.yml`,
      handler: resolve('./runtime/config.get'),
    })

    addPrerenderRoutes([options.route, `${options.route}/config.yml`])
  },
})
