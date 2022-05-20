import PropTypes from 'prop-types'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { SliceZone } from '@prismicio/react'
import { components } from '../../slices/index'
import { getMetaData } from 'lib/metadata'
import Meta from 'components/Meta'

const Page = ({ page, header, footer }) => {
  const router = useRouter()

  if (!router.isFallback && !page?.id) {
    return <ErrorPage statusCode={404} />
  }

  const metadata = getMetaData(page)

  return (
    <>
      <Meta metadata={metadata} />
      <Layout header={header} footer={footer}>
        <SliceZone slices={page?.data?.slices} components={components} />
      </Layout>
    </>
  )
}

Page.propTypes = {}

export default Page
