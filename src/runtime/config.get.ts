import * as yaml from 'js-yaml'

export default defineEventHandler(async (_event) => {
  const { decapCms: options } = useRuntimeConfig()

  return yaml.dump(options, { noRefs: true })
})
