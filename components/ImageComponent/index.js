import PropTypes from 'prop-types'
import styles from './index.module.scss'
import classNames from 'classnames'
import NextImage from 'next/image'
import { useState } from 'react'

const ImageComponent = ({
  image,
  quality = 75,
  className,
  containerClass,
  layout = 'intrinsic',
  priority = false,
  objectFit = 'cover',
  objectPosition = 'center',
  sizes = layout === 'fill' ? '100vw' : undefined,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className={classNames(styles.imageContainer, containerClass)}>
      {image?.url && (
        <NextImage
          className={classNames(styles.image, className, 'chromatic-ignore', {
            [styles.loaded]: loaded,
          })}
          src={image?.url}
          alt={image?.alt}
          width={image?.dimensions?.width ?? 1200}
          height={image?.dimensions?.height ?? 768}
          layout={layout}
          objectFit={objectFit}
          objectPosition={objectPosition}
          priority={priority}
          quality={quality}
          onLoadingComplete={() => {
            setLoaded(true)
          }}
          sizes={sizes}
          {...props}
        />
      )}
    </div>
  )
}

export default ImageComponent

ImageComponent.propTypes = {
  image: PropTypes.object,
  className: PropTypes.string,
  objectFit: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.oneOf(['none', 'cover', 'contain', 'scale-down', 'fill']),
  ]),
  objectPosition: PropTypes.string,
  layout: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.oneOf(['fill', 'intrinsic', 'fixed', 'responsive']),
  ]),
  priority: PropTypes.bool,
  sizes: PropTypes.string,
  quality: PropTypes.number,
}
