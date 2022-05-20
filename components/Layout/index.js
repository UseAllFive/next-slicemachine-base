import PropTypes from 'prop-types'
import Footer from 'components/Footer'
import Header from 'components/Header'

const Layout = ({ header, footer, children }) => {
  return (
    <>
      <Header {...header?.data} />
      <main>{children}</main>
      <Footer {...footer?.data} />
    </>
  )
}

export default Layout

Layout.propTypes = { children: PropTypes.any }
