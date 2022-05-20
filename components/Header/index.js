import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { PrismicLink } from '@prismicio/react'
import Grid from 'components/Grid'
import Container from 'components/Container'

const Header = ({ links }) => {
  return <header className={styles.header}>Logo</header>
}

export default Header

Header.propTypes = { links: PropTypes.array }
