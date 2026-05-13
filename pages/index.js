import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import styles from '../styles/Home.module.css';

const stats = [
  { value: '20+', label: 'Years of Guidance' },
  { value: '100+', label: 'Successful Visa Assistance' },
  { value: '50+', label: 'Partner Institutions' },
  { value: '95%', label: 'Client Satisfaction' },
];

export default function Home() {
  useEffect(() => {
    document.body.classList.add('hero-page');
    return () => document.body.classList.remove('hero-page');
  }, []);

  return (
    <>
      <Head>
        <title>
          FUJI International Consultancy — Study & Work in Japan
        </title>

        <meta
          name="description"
          content="FUJI International Consultancy provides expert guidance for study visas, work opportunities, visa documentation, and relocation support in Japan."
        />

        <meta
          property="og:title"
          content="FUJI International Consultancy"
        />

        <meta
          property="og:description"
          content="Your trusted partner for study and work opportunities in Japan."
        />
      </Head>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden>
          <div className={styles.heroGlow} />
          <div className={styles.heroGrid} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={`${styles.heroBadge} animate-fade-up`}>
            <span className={styles.badgeDot} />
            Trusted Guidance for Study & Work in Japan
          </div>

          <h1 className={`animate-fade-up delay-1 ${styles.heroTitle}`}>
            Your Journey
            <br />
            <span className={styles.heroAccent}>To Study & Work</span>
            <br />
            In Japan
          </h1>

          <p className={`animate-fade-up delay-2 ${styles.heroSub}`}>
            FUJI International Consultancy helps students and professionals achieve their dream of studying and working in Japan through trusted guidance, visa support, and complete relocation assistance.
          </p>

          <div className={`animate-fade-up delay-3 ${styles.heroCtas}`}>
            <Button href="/services" size="lg" arrow>
              Explore Services
            </Button>
            <Button href="/about" variant="ghost" size="lg">
              Why Choose Us
            </Button>
          </div>

          <div className={`animate-fade-up delay-4 ${styles.heroTrust}`}>
            <span>Helping students & professionals build futures through</span>
            <div className={styles.trustRegions}>
              <span>Japan</span>
              <span aria-hidden>·</span>
              <span>Education</span>
              <span aria-hidden>·</span>
              <span>Employment</span>
            </div>
          </div>
        </div>

        <div className={styles.heroScroll} aria-hidden>
          <span />
        </div>
      </section>

      {/* ── Stats ── */}
      <section className={`section section--gray ${styles.statsSection}`}>
        <div className="container">
          <div className={`grid-4 ${styles.statsGrid}`}>
            {stats.map(({ value, label }, i) => (
              <div key={label} className={`${styles.stat} animate-fade-up delay-${i + 1}`}>
                <div className={styles.statValue}>{value}</div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW SECTION (REPLACED WHAT WE OFFER) ── */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Why Students Trust FUJI</span>

            <h2 className="section-title">
              Built on Guidance,<br />
              Trust & Results
            </h2>

            <div className="divider" />

            <p style={{ color: 'var(--gray-mid)', maxWidth: 520, lineHeight: 1.75 }}>
              We are more than a consultancy — we are a support system for students and professionals who want to build their future in Japan with confidence.
            </p>
          </div>

          <div className={`grid-3 ${styles.cardsGrid}`}>
            {[
              {
                icon: '🧭',
                title: 'Clear Step-by-Step Process',
                description:
                  'We simplify complex visa and admission processes into clear, guided steps so you always know what comes next.',
              },
              {
                icon: '🤝',
                title: 'Personal Mentor Support',
                description:
                  'Each applicant receives personalized guidance from experienced consultants throughout their journey.',
                featured: true,
              },
              {
                icon: '📈',
                title: 'Proven Success Outcomes',
                description:
                  'Our structured approach has helped many students successfully secure admissions and visa approvals in Japan.',
              },
            ].map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>

          <div className={styles.servicesMore}>
            <Button href="/about" variant="secondary" size="md" arrow>
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* ── About Strip ── */}
      <section className={`section section--dark ${styles.aboutStrip}`}>
        <div className={`container ${styles.aboutInner}`}>
          <div className={styles.aboutText}>
            <span className="eyebrow eyebrow--white">About FUJI</span>

            <h2 className={styles.aboutTitle}>
              Your Trusted Partner<br />
              <span className={styles.redText}>for Japan Opportunities</span>
            </h2>

            <div className={styles.dividerWhite} />

            <p className={styles.aboutDesc}>
              FUJI International Consultancy is committed to helping students and professionals build successful futures in Japan. We provide expert support for study opportunities, employment pathways, visa processing, and relocation guidance every step of the way.
            </p>

            <Button href="/about" variant="ghost" size="md" arrow>
              Learn More About Us
            </Button>
          </div>

          <div className={styles.aboutVisual} aria-hidden>
            <div className={styles.visualCard}>
              <div className={styles.visualFlag}>F</div>
              <div className={styles.visualLines}>
                <span /><span /><span />
              </div>
            </div>

            <div className={styles.visualBadge}>
              <span className={styles.visualBadgeNum}>100+</span>
              <span className={styles.visualBadgeLabel}>Success Stories</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.ctaTitle}>
                Ready to Start Your Japan Journey?
              </h2>
              <p className={styles.ctaSub}>
                Speak with our consultants and get professional guidance today.
              </p>
            </div>

            <Button href="/contact" size="lg" arrow>
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}