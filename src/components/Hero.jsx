import React from 'react'
import styles from './Hero.module.scss'

function Hero() {
  return (
    <section className={styles.hero}>

      <div className={styles.heroContent}>
        <div className={styles.heroContentTop}>
          <span>new</span>
          <p>
            Join the biggest cybersecurity event for 
            Universities! More than $65,000 in prizes 
          </p>
        </div>
        <h2 className={styles.heroContentMiddle}>
          The #1 cybersecurity
          upskilling platform.
        </h2>
        <p className={styles.heroContentBottom}>
          Hack The Box gives individuals, businesses
          and universities the tools they need to
          continuously improve their cybersecurity 
          capabilities — all in one place.
        </p>
      </div>
      <div className={styles.imgContent}>

      </div>

    </section>
  )
}

export default Hero