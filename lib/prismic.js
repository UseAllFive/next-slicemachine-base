import * as prismic from '@prismicio/client'
import { enableAutoPreviews } from '@prismicio/next'
import sm from '../sm.json'

export const endpoint = sm.apiEndpoint
export const repositoryName = prismic.getRepositoryName(endpoint)

// This factory function allows smooth preview setup
export function createClient(config = {}) {
  const client = prismic.createClient(endpoint, {
    ...config,
  })

  enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  })

  return client
}

// Dynamic page paths
export const getPagePaths = async ({
  type = 'page',
  excludeUIDs = ['home'],
}) => {
  const client = createClient()

  const documents = await client.getAllByType(type)

  // Exclude paths and map params
  const paths = documents
    .filter((doc) => !excludeUIDs.includes(doc.uid))
    .map((doc) => ({
      params: {
        uid: doc.uid,
      },
    }))

  return paths
}
