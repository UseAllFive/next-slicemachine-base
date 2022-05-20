import PropTypes from 'prop-types'
import styles from './index.module.scss'
import { PrismicLink } from '@prismicio/react'
import Grid from 'components/Grid'
import Container from 'components/Container'

const Header = ({ links, socials }) => {
  return (
    <header className={styles.header}>
      <Container>
        <Grid className={styles.grid}>
          <div className={styles.logo}>Logo Here</div>
          <nav className={styles.nav}>
            {links?.map(({ link, text }, i) => (
              <PrismicLink key={`link-${i}`} field={link}>
                {text}
              </PrismicLink>
            ))}
            {socials?.map(({ link, type }, i) => (
              <PrismicLink key={`social-link-${i}`} field={link}>
                {icons[type]}
              </PrismicLink>
            ))}
          </nav>
        </Grid>
      </Container>
    </header>
  )
}

export default Header

Header.propTypes = { links: PropTypes.array, socials: PropTypes.array }
