import Link from 'next/link';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ icon, title, description, index = 0, featured = false }) {
  return (
    <div
      className={`${styles.card} ${featured ? styles.featured : ''} animate-fade-up`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className={styles.iconWrap}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{description}</p>
      <Link href="/contact" className={styles.cta}>
        Learn more <span>→</span>
      </Link>
    </div>
  );
}
