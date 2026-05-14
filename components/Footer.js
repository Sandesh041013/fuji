import Link from "next/link";
import styles from "./Footer.module.css";

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
              <div className={styles.logoSub}>Study & Work Visa Services</div>
            </div>
          </div>

          <p className={styles.tagline}>
            Specialist support for students and professionals relocating to
            Japan and beyond.
            <br />
            Admissions, employer matching, visa processing and post-arrival
            support.
          </p>
        </div>

        {/* Navigation */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navigation</h4>

          <ul className={styles.list}>
            {["Home", "About", "Services", "Universities", "Contact"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={styles.footerLink}
                  >
                    {item}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Our Services</h4>

          <ul className={styles.list}>
            {[
              "Study Visa Guidance",
              "Working Visa Guidance",
              "Document Translation & Certification",
              "Pre-departure & Arrival Support",
              "Job Placement Assistance",
            ].map((s) => (
              <li key={s}>
                <Link href="/services" className={styles.footerLink}>
                  {s}
                </Link>
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

              <a
                href="mailto:info@fuji-consultancy.com"
                className={styles.footerLink}
              >
                info@fuji-consultancy.com
              </a>
            </li>

            <li className={styles.contactItem}>
              <span className={styles.contactIcon}>✆</span>

              <div>
                <a href="tel:+977014123456" className={styles.footerLink}>
                  Butwal: +977-1-4123456
                </a>
              </div>
            </li>

            <li className={styles.contactItem}>
              <span className={styles.contactIcon}>◉</span>

              <span className={styles.footerLink}>
                Kathmandu · Tokyo · Singapore
              </span>
            </li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Follow Us</h4>

          <div className={styles.socials}>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61556999377426"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="Facebook"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.99 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.888h-2.33V21.878C18.343 21.128 22 16.99 22 12z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="Instagram"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6a5 5 0 100 10 5 5 0 000-10zm6.5-3a1.5 1.5 0 11.001 3.001A1.5 1.5 0 0118.5 5z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@fuji.international"
              target="_blank"
              rel="noreferrer"
              className={styles.socialLink}
              aria-label="TikTok"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.115V2h-3.193v13.766c0 1.338-1.066 2.434-2.403 2.465a2.432 2.432 0 01-2.495-2.431 2.433 2.433 0 012.431-2.431c.269 0 .527.044.768.124v-3.25a5.728 5.728 0 00-.768-.053A5.684 5.684 0 004.48 15.874 5.684 5.684 0 0010.164 21.56a5.684 5.684 0 005.684-5.684V9.356a7.977 7.977 0 004.66 1.497V7.66a4.77 4.77 0 01-.919-.974z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <span>
            © {year} FUJI International Consultancy. All rights reserved.
          </span>

          <div className={styles.legal}>
            <Link href="/contact" className={styles.legalLink}>
              Privacy Policy
            </Link>

            <Link href="/contact" className={styles.legalLink}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
