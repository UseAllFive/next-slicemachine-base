import PropTypes from 'prop-types'
import styles from './index.module.scss'
import classNames from 'classnames'

const Container = ({ children, className, Tag = 'div' }) => {
  return (
    <Tag className={classNames(className, styles.container)}>{children}</Tag>
  )
}

export default Container

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  tag: PropTypes.string,
}
