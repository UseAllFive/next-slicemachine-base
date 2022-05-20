import 'normalize.css'
import '../styles/fonts.css'
import '../styles/globals.scss'
import { PrismicProvider } from '@prismicio/react'
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from 'lib/prismic'
import { linkResolver } from 'lib/resolvers'
import LinkComponent from 'components/LinkComponent'

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={LinkComponent}
      externalLinkComponent={(props) => (
        <LinkComponent {...props} target="_blank" rel="noreferrer noopener" />
      )}>
      <PrismicPreview repositoryName={repositoryName}>
        <Component {...pageProps} />
      </PrismicPreview>
    </PrismicProvider>
  )
}
