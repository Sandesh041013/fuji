import styles from '../styles/Gallery.module.css'

export default function Gallery() {
  return (
    <section className={styles.gallerySection}>
      <div className={styles.container}>

        {/* Header */}
        <div className={styles.galleryHeader}>
          <h2>Gallery</h2>
          <div className={styles.underline}></div>
          <p>
            Explore moments from our students' journeys, classes, and cultural experiences in Japan.
          </p>
        </div>

        {/* Grid */}
        <div className={styles.galleryGrid}>

          <div className={`${styles.galleryItem} ${styles.large}`}>
            <img src="/gallery-1.jpg" alt="Learning" />
            <div className={styles.overlay}></div>
            <div className={styles.text}>Learning</div>
          </div>

          <div className={styles.galleryItem}>
            <img src="/gallery-2.jpg" alt="Culture" />
            <div className={styles.overlay}></div>
            <div className={styles.text}>Culture</div>
          </div>

          <div className={styles.galleryItem}>
            <img src="/gallery-3.jpg" alt="Classes" />
            <div className={styles.overlay}></div>
            <div className={styles.text}>Classes</div>
          </div>

          <div className={styles.galleryItem}>
            <img src="/gallery-4.jpg" alt="Experience" />
            <div className={styles.overlay}></div>
            <div className={styles.text}>Experience</div>
          </div>

          <div className={`${styles.galleryItem} ${styles.large}`}>
            <img src="/gallery-5.jpg" alt="Community" />
            <div className={styles.overlay}></div>
            <div className={styles.text}>Community</div>
          </div>

          <div className={styles.galleryItem}>
            <img src="/gallery-6.jpg" alt="Culture" />
            <div className={styles.overlay}></div>
            <div className={styles.text}>Culture</div>
          </div>

        </div>

      </div>
    </section>
  )
}
