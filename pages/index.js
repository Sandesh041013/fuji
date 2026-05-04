import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import styles from '../styles/Home.module.css';

const services = [
  {
    icon: '🌏',
    title: 'Market Entry Strategy',
    description: 'Navigate new markets with confidence. We provide end-to-end advisory for companies entering Asia-Pacific, European, and emerging markets.',
  },
  {
    icon: '⚖️',
    title: 'Regulatory & Compliance',
    description: 'Stay ahead of evolving regulations. Our specialists ensure full compliance across jurisdictions, minimizing risk and maximizing opportunity.',
    featured: true,
  },
  {
    icon: '🤝',
    title: 'Cross-border M&A',
    description: 'From deal sourcing to post-merger integration, we guide every step of international acquisitions and strategic partnerships.',
  },
];

const stats = [
  { value: '20+', label: 'Years of Experience' },
  { value: '40+', label: 'Countries Served' },
  { value: '500+', label: 'Projects Completed' },
  { value: '97%', label: 'Client Satisfaction' },
];

export default function Home() {
  useEffect(() => {
    document.body.classList.add('hero-page');
    return () => document.body.classList.remove('hero-page');
  }, []);

  return (
    <>
      <Head>
        <title>FUJI International Consultancy — Global Business Advisory</title>
        <meta name="description" content="FUJI International Consultancy delivers expert guidance for global market entry, regulatory compliance, and cross-border business growth." />
        <meta property="og:title" content="FUJI International Consultancy" />
        <meta property="og:description" content="Bridging markets. Unlocking potential. Building lasting partnerships worldwide." />
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
            Global Business Advisory Since 2004
          </div>

          <h1 className={`animate-fade-up delay-1 ${styles.heroTitle}`}>
            Where Ambition<br />
            <span className={styles.heroAccent}>Meets Global</span><br />
            Opportunity
          </h1>

          <p className={`animate-fade-up delay-2 ${styles.heroSub}`}>
            FUJI International Consultancy empowers organizations to expand across borders,
            navigate complexity, and build lasting success in international markets.
          </p>

          <div className={`animate-fade-up delay-3 ${styles.heroCtas}`}>
            <Button href="/services" size="lg" arrow>
              Explore Services
            </Button>
            <Button href="/about" variant="ghost" size="lg">
              Our Story
            </Button>
          </div>

          <div className={`animate-fade-up delay-4 ${styles.heroTrust}`}>
            <span>Trusted by leading organizations across</span>
            <div className={styles.trustRegions}>
              <span>Asia-Pacific</span>
              <span aria-hidden>·</span>
              <span>Europe</span>
              <span aria-hidden>·</span>
              <span>Americas</span>
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

      {/* ── Services Preview ── */}
      <section className="section">
        <div className="container">
          <div className={styles.sectionHead}>
            <span className="eyebrow">What We Do</span>
            <h2 className="section-title">Expertise That<br />Opens Doors</h2>
            <div className="divider" />
            <p style={{ color: 'var(--gray-mid)', maxWidth: 520, lineHeight: 1.75 }}>
              From strategy through execution, our multidisciplinary teams bring 
              the local insight and global perspective your expansion deserves.
            </p>
          </div>

          <div className={`grid-3 ${styles.cardsGrid}`}>
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>

          <div className={styles.servicesMore}>
            <Button href="/services" variant="secondary" size="md" arrow>
              View All Services
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
              Two Decades of<br />
              <span className={styles.redText}>Trusted Advisory</span>
            </h2>
            <div className={styles.dividerWhite} />
            <p className={styles.aboutDesc}>
              Founded in Tokyo and operating across four continents, FUJI International
              Consultancy has guided hundreds of organizations through the complexities of 
              international business — from Fortune 500 multinationals to ambitious regional leaders.
            </p>
            <Button href="/about" variant="ghost" size="md" arrow>
              Read Our Story
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
              <span className={styles.visualBadgeNum}>500+</span>
              <span className={styles.visualBadgeLabel}>Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div>
              <h2 className={styles.ctaTitle}>Ready to expand your horizons?</h2>
              <p className={styles.ctaSub}>Speak with a senior consultant — no obligation.</p>
            </div>
            <Button href="/contact" size="lg" arrow>
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
