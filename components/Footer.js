import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoMark}>F</span>
            <div>
              <div className={styles.logoMain}>FUJI</div>
              <div className={styles.logoSub}>International Consultancy</div>
            </div>
          </div>
          <p className={styles.tagline}>
            Bridging markets. Unlocking potential.<br />
            Building lasting partnerships worldwide.
          </p>
        </div>

        {/* Navigation */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navigation</h4>
          <ul className={styles.list}>
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className={styles.footerLink}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Services</h4>
          <ul className={styles.list}>
            {[
              'Market Entry Strategy',
              'Regulatory Advisory',
              'Cross-border M&A',
              'Trade & Compliance',
              'International HR',
            ].map((s) => (
              <li key={s}>
                <Link href="/services" className={styles.footerLink}>{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact</h4>
          <ul className={styles.list}>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}>✉</span>
              <a href="mailto:info@fuji-consultancy.com" className={styles.footerLink}>
                info@fuji-consultancy.com
              </a>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}>✆</span>
              <a href="tel:+81000000000" className={styles.footerLink}>
                +81 (0) 000 000 0000
              </a>
            </li>
            <li className={styles.contactItem}>
              <span className={styles.contactIcon}>◉</span>
              <span className={styles.footerLink}>Tokyo · London · Singapore</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <span>© {year} FUJI International Consultancy. All rights reserved.</span>
          <div className={styles.legal}>
            <Link href="/contact" className={styles.legalLink}>Privacy Policy</Link>
            <Link href="/contact" className={styles.legalLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
