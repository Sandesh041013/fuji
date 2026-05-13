import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/universities", label: "Universities" },
    { href: "/services", label: "Services" },
    {
      href: "/courses",
      label: "Courses",
      dropdown: [
        { href: "/courses/jft", label: "JFT" },
        { href: "/courses/jlpt", label: "JLPT" },
        { href: "/courses/nat", label: "NAT" },
      ],
    },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) =>
    href === "/"
      ? router.pathname === "/"
      : router.pathname.startsWith(href);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/fujibigbg.png"
            alt="Fuji International Consultancy"
            width={220}
            height={80}
            className={styles.logoImg}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className={styles.links}>
          {links.map((item) => (
            <li key={item.href} className={styles.navItem}>
              <Link
                href={item.href}
                className={`${styles.link} ${
                  isActive(item.href) ? styles.active : ""
                }`}
              >
                {item.label}
              </Link>

              {item.dropdown && (
                <div className={styles.dropdown}>
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={styles.dropdownItem}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/contact" className={styles.cta}>
          Get in Touch
        </Link>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${
            menuOpen ? styles.open : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${styles.mobile} ${
          menuOpen ? styles.mobileOpen : ""
        }`}
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`${styles.mobileLink} ${
              isActive(href) ? styles.mobileActive : ""
            }`}
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