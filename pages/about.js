import Head from 'next/head';
import Button from '../components/Button';
import styles from '../styles/About.module.css';

const values = [
  { icon: '◈', title: 'Integrity First', desc: 'We build relationships on transparency, honesty, and unwavering ethical standards in every engagement.' },
  { icon: '◉', title: 'Global Perspective', desc: 'With offices across four continents, we bring authentic local intelligence to every global challenge.' },
  { icon: '◇', title: 'Results-Driven', desc: 'Our success is measured by yours. We remain accountable to the outcomes we help you achieve.' },
  { icon: '◈', title: 'Long-term Partnership', desc: 'We are not transactional advisors — we invest in lasting relationships that grow with your ambitions.' },
];

const team = [
  { name: 'Hiroshi Yamamoto', role: 'Founder & CEO', region: 'Tokyo' },
  { name: 'Sophia Müller', role: 'Managing Director, Europe', region: 'Frankfurt' },
  { name: 'James Okonkwo', role: 'Head of Africa & ME', region: 'Dubai' },
  { name: 'Priya Nair', role: 'Director, South Asia', region: 'Singapore' },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About — FUJI International Consultancy</title>
        <meta name="description" content="Learn about FUJI International Consultancy's history, mission, values, and the global team behind our advisory excellence." />
      </Head>

      {/* ── Page Hero ── */}
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow animate-fade-up">Who We Are</span>
          <h1 className="animate-fade-up delay-1">Built on Trust.<br />Driven by Results.</h1>
          <p className="animate-fade-up delay-2">
            For over two decades, FUJI International Consultancy has been the partner of choice 
            for organizations navigating the complexities of global business.
          </p>
        </div>
      </div>

      {/* ── Story ── */}
      <section className="section">
        <div className="container">
          <div className={styles.story}>
            <div className={styles.storyText}>
              <span className="eyebrow">Our Story</span>
              <h2 className="section-title">From Tokyo to the World</h2>
              <div className="divider" />
              <p>
                Founded in 2004 by Hiroshi Yamamoto in Tokyo, FUJI International Consultancy 
                began as a boutique advisory serving Japanese corporations entering Southeast Asian markets. 
                What started as a two-person operation has grown into a global consultancy with 
                over 200 professionals across 12 offices worldwide.
              </p>
              <p style={{ marginTop: 20 }}>
                Our name — FUJI — reflects our philosophy: like Mount Fuji, we stand for 
                permanence, clarity, and the ability to see farther than others. Every engagement 
                is guided by a commitment to long-term value over short-term gain.
              </p>
              <p style={{ marginTop: 20 }}>
                Today, we serve clients ranging from ambitious regional enterprises to Global 500 
                multinationals, delivering advisory across market entry, regulatory compliance, 
                M&A, and international human capital strategy.
              </p>
              <div style={{ marginTop: 36 }}>
                <Button href="/contact" size="md" arrow>
                  Talk to Our Team
                </Button>
              </div>
            </div>
            <div className={styles.storyVisual}>
              <div className={styles.timelineCard}>
                {[
                  { year: '2004', event: 'Founded in Tokyo' },
                  { year: '2008', event: 'Expanded to Southeast Asia' },
                  { year: '2012', event: 'European office opened in Frankfurt' },
                  { year: '2016', event: 'Middle East & Africa practice launched' },
                  { year: '2020', event: 'Americas expansion — New York & São Paulo' },
                  { year: '2024', event: '500+ successful engagements worldwide' },
                ].map(({ year, event }) => (
                  <div key={year} className={styles.timelineItem}>
                    <span className={styles.timelineYear}>{year}</span>
                    <div className={styles.timelineDot} />
                    <span className={styles.timelineEvent}>{event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="section section--gray">
        <div className="container">
          <div className={`grid-2 ${styles.mvGrid}`}>
            <div className={styles.mvCard}>
              <span className={styles.mvIcon}>◎</span>
              <h3>Our Mission</h3>
              <div className="divider" />
              <p>
                To empower organizations of every scale to succeed beyond their borders — by 
                providing the strategic intelligence, local expertise, and trusted relationships 
                that transform international ambition into measurable reality.
              </p>
            </div>
            <div className={`${styles.mvCard} ${styles.mvDark}`}>
              <span className={styles.mvIcon}>◈</span>
              <h3>Our Vision</h3>
              <div className="divider" />
              <p>
                A world where geography is never a barrier to business excellence — where 
                companies are free to operate across cultures, markets, and regulatory systems 
                with confidence and clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 60 }}>
            <span className="eyebrow">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
            <div className="divider divider--center" />
          </div>
          <div className={`grid-4 ${styles.valuesGrid}`}>
            {values.map(({ icon, title, desc }, i) => (
              <div key={title} className={`${styles.valueCard} animate-fade-up delay-${i + 1}`}>
                <div className={styles.valueIcon}>{icon}</div>
                <h4 className={styles.valueTitle}>{title}</h4>
                <p className={styles.valueDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="section section--dark">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 56 }}>
            <span className="eyebrow eyebrow--white">Leadership</span>
            <h2 style={{ color: 'var(--secondary)' }} className="section-title">
              The People Behind FUJI
            </h2>
            <div className="divider divider--center" />
          </div>
          <div className={`grid-4 ${styles.teamGrid}`}>
            {team.map(({ name, role, region }, i) => (
              <div key={name} className={`${styles.teamCard} animate-fade-up delay-${i + 1}`}>
                <div className={styles.teamAvatar}>
                  {name.split(' ').map(w => w[0]).join('')}
                </div>
                <div className={styles.teamName}>{name}</div>
                <div className={styles.teamRole}>{role}</div>
                <div className={styles.teamRegion}>◉ {region}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
