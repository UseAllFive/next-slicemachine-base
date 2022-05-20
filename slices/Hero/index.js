import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import styles from './index.module.scss'
import classNames from 'classnames'

const Hero = ({ slice }) => {
  switch (slice?.variation) {
    // Add more variation cases here
    default:
      return <HeroDefault {...slice?.primary} />
  }
}

/*
 * ============================================
 * Hero Default
 * ============================================
 * Description: A little something about the code below...
 */

const HeroDefault = ({ title, description }) => {
  return (
    <section className={classNames(styles.hero, styles.heroDefault)}>
      <span className="title">
        {title ? (
          <PrismicRichText field={title} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </span>
      {description ? (
        <PrismicRichText field={description} />
      ) : (
        <p>start by editing this slice from inside Slice Machine!</p>
      )}
    </section>
  )
}

export default Hero
