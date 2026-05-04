import Head from 'next/head';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import styles from '../styles/Services.module.css';

const services = [
  {
    icon: '🌏',
    title: 'Market Entry Strategy',
    description: 'Navigate new markets with confidence. We provide comprehensive analysis, competitive mapping, and go-to-market roadmaps tailored to your target regions.',
  },
  {
    icon: '⚖️',
    title: 'Regulatory & Compliance',
    description: 'Stay ahead of evolving regulations across jurisdictions. Our specialists minimize compliance risk and help you operate with legal certainty worldwide.',
  },
  {
    icon: '🤝',
    title: 'Cross-border M&A',
    description: 'From deal sourcing and due diligence to post-merger integration, we guide every step of international acquisitions and strategic partnerships.',
  },
  {
    icon: '📊',
    title: 'Trade & Export Advisory',
    description: 'Optimize your international trade flows. We advise on customs strategy, preferential tariff arrangements, and export control compliance.',
  },
  {
    icon: '🏛️',
    title: 'Government Relations',
    description: 'Build effective relationships with regulators and government bodies. We provide market intelligence and represent your interests at the highest levels.',
  },
  {
    icon: '👥',
    title: 'International HR & Talent',
    description: 'Attract, deploy, and retain global talent. From expatriate management to executive search, we support your international human capital strategy.',
  },
  {
    icon: '💼',
    title: 'Corporate Restructuring',
    description: 'Optimize your international corporate structure for efficiency, compliance, and tax effectiveness — without disrupting day-to-day operations.',
  },
  {
    icon: '🔒',
    title: 'Risk & Due Diligence',
    description: 'Make decisions with clarity. Our multi-jurisdictional due diligence process identifies risks before they become liabilities.',
  },
  {
    icon: '📡',
    title: 'Digital Transformation',
    description: 'Navigate the unique challenges of technology expansion internationally — from data localization laws to regional platform strategy.',
  },
];

const industries = [
  'Financial Services', 'Manufacturing', 'Technology', 'Healthcare',
  'Energy & Infrastructure', 'Consumer Goods', 'Real Estate', 'Logistics',
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — FUJI International Consultancy</title>
        <meta name="description" content="Explore FUJI International Consultancy's full range of global advisory services: market entry, regulatory compliance, M&A, trade, and more." />
      </Head>

      {/* ── Page Hero ── */}
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow animate-fade-up">What We Offer</span>
          <h1 className="animate-fade-up delay-1">Advisory Built<br />for Global Scale</h1>
          <p className="animate-fade-up delay-2">
            Nine core practice areas. One integrated team. Wherever your ambition takes you.
          </p>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <section className="section">
        <div className="container">
          <div className={styles.introRow}>
            <div>
              <span className="eyebrow">Our Practice Areas</span>
              <h2 className="section-title">End-to-End<br />Global Advisory</h2>
              <div className="divider" />
            </div>
            <p className={styles.introPara}>
              Every FUJI engagement draws on multiple disciplines — our practice areas are designed 
              to integrate seamlessly so you receive unified counsel, not siloed advice.
            </p>
          </div>

          <div className={`grid-3 ${styles.grid}`}>
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="section section--gray">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 52 }}>
            <span className="eyebrow">Sector Expertise</span>
            <h2 className="section-title">Industries We Serve</h2>
            <div className="divider divider--center" />
            <p className="section-subtitle">
              Deep vertical knowledge lets us deliver advice that's strategic, not generic.
            </p>
          </div>
          <div className={styles.industries}>
            {industries.map((ind, i) => (
              <div key={ind} className={`${styles.industryChip} animate-fade-up delay-${(i % 4) + 1}`}>
                <span className={styles.chipDot} />
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 64 }}>
            <span className="eyebrow">How We Work</span>
            <h2 className="section-title">Our Engagement Process</h2>
            <div className="divider divider--center" />
          </div>
          <div className={styles.process}>
            {[
              { num: '01', title: 'Discovery', desc: 'We begin with a deep-dive into your goals, constraints, and market context.' },
              { num: '02', title: 'Analysis', desc: 'Our specialists analyze the opportunity landscape and identify key success factors.' },
              { num: '03', title: 'Strategy', desc: 'We develop a bespoke roadmap with clear milestones, responsibilities, and metrics.' },
              { num: '04', title: 'Execution', desc: 'We work alongside your team to implement, refine, and accelerate progress.' },
            ].map(({ num, title, desc }, i) => (
              <div key={num} className={`${styles.step} animate-fade-up delay-${i + 1}`}>
                <div className={styles.stepNum}>{num}</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>{title}</h4>
                  <p className={styles.stepDesc}>{desc}</p>
                </div>
                {i < 3 && <div className={styles.stepArrow} aria-hidden>→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <span className="eyebrow eyebrow--white">Start Today</span>
            <h2 className={styles.ctaTitle}>Let's define your next chapter together.</h2>
            <p className={styles.ctaSub}>Our senior consultants are available for an obligation-free discovery call.</p>
            <Button href="/contact" size="lg" arrow>
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
