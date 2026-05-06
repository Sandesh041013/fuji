import Head from 'next/head';
import Button from '../../components/Button';
import styles from '../../styles/CoursePage.module.css';

const LEVELS = [
  { name: 'N5 (5級)', desc: 'Most basic level — ideal for complete beginners.' },
  { name: 'N4 (4級)', desc: 'Elementary Japanese for familiar and everyday situations.' },
  { name: 'N3 (3級)', desc: 'Intermediate — daily conversations and basic workplace Japanese.' },
  { name: 'N2 (2級)', desc: 'Upper intermediate — used in formal and professional settings.' },
  { name: 'N1 (1級)', desc: 'Advanced — complex language for academic and business use.' },
];

const SCHEDULE = [
  { day: 'Monday – Friday', time: '6:00 AM – 8:00 AM', label: 'N5/N4 Morning' },
  { day: 'Monday – Friday', time: '3:00 PM – 5:00 PM', label: 'N3/N2 Afternoon' },
  { day: 'Saturday', time: '8:00 AM – 12:00 PM', label: 'N1 Saturday' },
];

export default function NAT() {
  return (
    <>
      <Head>
        <title>NAT-TEST Course – FUJI International Consultancy</title>
        <meta name="description" content="Prepare for the NAT-TEST (Nihongo Ability Test) at FUJI International Consultancy with expert coaching." />
      </Head>

      <section className={styles.hero} style={{'--course-color': '#2c3e50'}}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroLeft}>
            <div className={styles.courseBadge}>Language Certification</div>
            <h1 className={styles.heroTitle}>NAT-TEST</h1>
            <p className={styles.heroSubtitle}>Nihongo Ability Test</p>
            <p className={styles.heroPara}>
              The NAT-TEST is a flexible and widely accepted Japanese proficiency certification, held 6 times per year. With more test dates than JLPT, it's an excellent choice for those needing faster certification turnaround.
            </p>
            <div className={styles.heroActions}>
              <Button href="/contact" size="lg">Enroll Now</Button>
              <Button href="/contact" variant="outline" size="lg">Ask a Question</Button>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.courseCard} style={{'--course-color': '#2c3e50'}}>
              <div className={styles.courseCardEmoji}>📝</div>
              <div className={styles.courseCardGrid}>
                {[
                  { label: 'Levels', value: 'N5 → N1' },
                  { label: 'Duration', value: '2–10 Months' },
                  { label: 'Exams/Year', value: '6 Times' },
                  { label: 'Format', value: 'Offline Test' },
                ].map((item, i) => (
                  <div key={i} className={styles.courseCardItem}>
                    <span className={styles.courseCardLabel}>{item.label}</span>
                    <span className={styles.courseCardValue}>{item.value}</span>
                  </div>
                ))}
              </div>
              <Button href="/contact" size="md" style={{width:'100%', justifyContent:'center'}}>Reserve Your Spot</Button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="container">
          <div className={styles.twoCol}>
            <div>
              <span className="section-label">What is NAT-TEST?</span>
              <div className="red-line"></div>
              <h2 className="section-title">About the Test</h2>
              <p className={styles.para}>The Nihongo Ability Test (NAT-TEST) is administered by the NAT-TEST Center in Japan. It evaluates Japanese language ability across five levels (N1–N5) using four skills: vocabulary, grammar, reading, and listening.</p>
              <p className={styles.para}>One of NAT-TEST's biggest advantages over JLPT is its frequency — offered 6 times per year (every odd month), giving learners more opportunities to attempt and pass the exam quickly.</p>
              <p className={styles.para}>It is recognized by many Japanese employers and immigration offices as a valid proof of Japanese ability, especially at N3–N1 levels.</p>
            </div>
            <div className={styles.infoBox}>
              <h4 className={styles.infoBoxTitle}>NAT-TEST Levels</h4>
              {LEVELS.map((l, i) => (
                <div key={i} className={styles.levelItem}>
                  <div className={styles.levelDot}></div>
                  <div>
                    <strong>{l.name}</strong>
                    <p>{l.desc}</p>
                  </div>
                </div>
              ))}
              <div className={styles.infoNote}>
                📅 Test held every odd month (Jan, Mar, May, Jul, Sep, Nov).
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NAT vs JLPT */}
      <section className={`section ${styles.compareSection}`}>
        <div className="container">
          <span className="section-label">Comparison</span>
          <div className="red-line"></div>
          <h2 className="section-title">NAT-TEST vs JLPT</h2>
          <div className={styles.compareGrid}>
            {[
              { feature: 'Test Frequency', nat: '6 times/year', jlpt: '2 times/year' },
              { feature: 'Levels', nat: 'N1–N5', jlpt: 'N1–N5' },
              { feature: 'Recognition', nat: 'Widely accepted', jlpt: 'Globally standard' },
              { feature: 'Difficulty', nat: 'Slightly easier access', jlpt: 'More rigorous scoring' },
              { feature: 'Best For', nat: 'Quick certification', jlpt: 'International prestige' },
            ].map((row, i) => (
              <div key={i} className={styles.compareRow}>
                <div className={styles.compareFeature}>{row.feature}</div>
                <div className={styles.compareNat}><span>NAT: </span>{row.nat}</div>
                <div className={styles.compareJlpt}><span>JLPT: </span>{row.jlpt}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className={`section ${styles.darkSection}`}>
        <div className="container">
          <span className="section-label">What We Cover</span>
          <div className="red-line"></div>
          <h2 className={`section-title ${styles.white}`}>Course Curriculum</h2>
          <div className={styles.curriculumGrid}>
            {[
              { week: 'Vocabulary & Kanji', title: 'Word Foundation', items: ['Level-specific vocabulary sets', 'Kanji reading and writing', 'Word usage in context', 'Mnemonics and memory tools'] },
              { week: 'Grammar & Reading', title: 'Language Structure', items: ['All grammar points by level', 'Reading comprehension passages', 'Formal vs informal language', 'Passage analysis techniques'] },
              { week: 'Listening & Mock Tests', title: 'Exam Readiness', items: ['Authentic listening exercises', 'Speed reading practice', '4 full-length mock tests', 'Answer strategy coaching'] },
            ].map((m, i) => (
              <div key={i} className={styles.currMonth}>
                <div className={styles.currMonthLabel}>{m.week}</div>
                <h4 className={styles.currMonthTitle}>{m.title}</h4>
                <ul className={styles.currList}>
                  {m.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section">
        <div className="container">
          <span className="section-label">Batches</span>
          <div className="red-line"></div>
          <h2 className="section-title">Class Schedule</h2>
          <div className={styles.scheduleGrid}>
            {SCHEDULE.map((s, i) => (
              <div key={i} className={styles.scheduleCard}>
                <div className={styles.scheduleIcon}>📋</div>
                <div className={styles.scheduleBatch}>{s.label}</div>
                <div className={styles.scheduleDay}>{s.day}</div>
                <div className={styles.scheduleTime}>{s.time}</div>
              </div>
            ))}
          </div>
          <div className={styles.ctaRow}>
            <Button href="/contact" size="lg">Register for NAT-TEST Course</Button>
          </div>
        </div>
      </section>
    </>
  );
}
