// An index.js file is required for deploying w/ vercel
import Page from 'templates/Page'
import { createClient } from 'lib/prismic'

export default Page

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })
  const slug = params?.uid ?? 'home'

  const page = await client.getByUID('page', slug)

  const header = await client.getSingle('header')
  const footer = await client.getSingle('footer')

  return {
    props: { page, header, foot },
  }
}
