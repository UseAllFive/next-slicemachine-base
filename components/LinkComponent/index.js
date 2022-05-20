import PropTypes from 'prop-types'
import styles from './index.module.scss'
import classNames from 'classnames'
import Link from 'next/link'

const LinkComponent = ({ href, children, ...props }) => {
  return (
    <Link href={href}>
      <a className={styles.link} {...props}>
        {children}
      </a>
    </Link>
  )
}

export default LinkComponent

LinkComponent.propTypes = { href: PropTypes.string, children: PropTypes.any }
