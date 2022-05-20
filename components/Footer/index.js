import PropTypes from 'prop-types'
import { PrismicLink } from '@prismicio/react'

const Footer = ({ links }) => {
  return (
    <footer>
      {links?.map(({ link, text }, i) => (
        <PrismicLink key={`link-${i}`} field={link}>
          {text}
        </PrismicLink>
      ))}
    </footer>
  )
}

export default Footer

Footer.propTypes = { links: PropTypes.array }
