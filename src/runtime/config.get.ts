import * as yaml from 'js-yaml'
import { defineEventHandler } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (_event) => {
  const { decapCms: options } = useRuntimeConfig()

  return yaml.dump(options, { noRefs: true })
})
