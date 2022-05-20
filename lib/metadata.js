// TODO These defaults are overwritten in Prismic via Singleton Metadata or Template-specific overrides
const metaDefaults = {
  TWITTER_HANDLE: '{@twitterHandle}',
  TITLE: '{Default Title}',
  DESCRIPTION: '{Default description (50 - 155 characters)}',
  DIVIDER: '|',
  IMAGE: '/images/share.jpg', // TODO should be 1200 x 627px
}

export default metaDefaults

export function getMetaData(doc) {
  // Determine template overrides
  const metadata = {
    meta_title: null,
    meta_divider: null,
    meta_description: null,
    meta_image: null,
  }

  if (!doc || !doc.data) return metadata

  // Every template in Prismic should have these override options (TODO ensure exact naming in your project)
  // And then each template may have specifics for determining default metadata fields if these overrides are left blank
  const {
    ['meta-title']: meta_title,
    ['meta-description']: meta_description,
    ['meta-image']: meta_image,
  } = doc.data

  switch (doc.type) {
    // Add more content types here as cases
    default:
      metadata.meta_title = meta_title
      metadata.meta_description = meta_description
      metadata.meta_image = meta_image

      break
  }

  return metadata
}
