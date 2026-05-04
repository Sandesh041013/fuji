import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href) =>
    href === '/' ? router.pathname === '/' : router.pathname.startsWith(href);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
  <Link href="/" className={styles.logo}>
  <Image 
    src="/fujibigbg.png"
    alt="Fuji International Consultancy logo"
    width={250}
    height={250}
    className={styles.logoImg}
    priority
  />
</Link>

        {/* Desktop Nav */}
        <ul className={styles.links}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.link} ${isActive(href) ? styles.active : ''}`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/contact" className={styles.cta}>
          Get in Touch
        </Link>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobile} ${menuOpen ? styles.mobileOpen : ''}`}>
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.mobileLink} ${isActive(href) ? styles.mobileActive : ''}`}
          >
            {label}
          </Link>
        ))}
        <Link href="/contact" className={styles.mobileCta}>
          Get in Touch →
        </Link>
      </div>
    </nav>
  );
}
