// An index.js file is required for deploying w/ vercel
import Page from 'templates/Page'
import { createClient, getPagePaths } from 'lib/prismic'

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const uid = params.uid
  let page = null
  let header = null
  let footer = null

  try {
    page = await client.getByUID('page', uid)
  } catch (err) {}

  return {
    props: { page, header, footer },
  }
}

export async function getStaticPaths() {
  const paths = await getPagePaths({ type: 'page' })

  return {
    paths,
    fallback: true,
  }
}
