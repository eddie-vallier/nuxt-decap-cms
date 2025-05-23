import * as yaml from 'js-yaml'
import { defineEventHandler, setResponseHeaders } from 'h3'
import { useRuntimeConfig } from '#imports'

export default defineEventHandler(async (event) => {
  const { decapCms: options } = useRuntimeConfig()

  setResponseHeaders(event, {
    'Content-Type': 'application/x-yaml',
  })

  return yaml.dump(options, { noRefs: true })
})
