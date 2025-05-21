import { defu } from 'defu'
import { loadConfig } from 'c12'
import type { Nuxt } from 'nuxt/schema'
import { moduleOptionsSchema, type ModuleOptions, type RequiredModuleOptions } from '../types'

export default async function resolveOptions(
  inlineOptions: ModuleOptions,
  nuxt: Nuxt,
): Promise<RequiredModuleOptions> {
  const external = await loadConfig<ModuleOptions>({
    name: 'decap',
    cwd: nuxt.options.rootDir,
  })

  const merged = defu(
    inlineOptions,
    external?.config || {},
    moduleOptionsSchema.safeParse({}).data,
  )

  const parsed = moduleOptionsSchema.safeParse(merged)

  if (!parsed.success) {
    console.error('[nuxt-decap] Invalid module options:\n', parsed.error.format())
    throw new Error('[nuxt-decap] Invalid configuration.')
  }

  return parsed.data as RequiredModuleOptions
}
