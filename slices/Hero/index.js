import React from 'react'
import { PrismicRichText } from '@prismicio/react'
import styles from './index.module.scss'

const Hero = ({ slice }) => {
  return (
    <section className={styles.hero}>
      <span className="title">
        {slice.primary.title ? (
          <PrismicRichText field={slice.primary.title} />
        ) : (
          <h2>Template slice, update me!</h2>
        )}
      </span>
      {slice.primary.description ? (
        <PrismicRichText field={slice.primary.description} />
      ) : (
        <p>start by editing this slice from inside Slice Machine!</p>
      )}
    </section>
  )
}

export default Hero
