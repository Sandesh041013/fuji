import Head from 'next/head';
import Button from '../../components/Button';
import styles from '../../styles/CoursePage.module.css';

const LEVELS = [
  { name: 'N5', desc: 'Beginner — Basic understanding of Japanese used in everyday situations.' },
  { name: 'N4', desc: 'Elementary — Understanding basic Japanese in familiar situations.' },
  { name: 'N3', desc: 'Intermediate — Understanding Japanese used in everyday situations to a certain degree.' },
  { name: 'N2', desc: 'Upper Intermediate — Understanding Japanese in a broad range of topics.' },
  { name: 'N1', desc: 'Advanced — Ability to understand Japanese in a wide range of demanding situations.' },
];

const SCHEDULE = [
  { day: 'Sunday – Thursday', time: '7:00 AM – 9:00 AM', label: 'N5 / N4 Batch' },
  { day: 'Monday – Friday', time: '5:00 PM – 7:00 PM', label: 'N3 / N2 Batch' },
  { day: 'Saturday – Sunday', time: '10:00 AM – 2:00 PM', label: 'N1 Weekend Batch' },
];

export default function JLPT() {
  return (
    <>
      <Head>
        <title>JLPT Course – FUJI International Consultancy</title>
        <meta name="description" content="Master the Japanese Language Proficiency Test (JLPT) from N5 to N1 with FUJI International Consultancy." />
      </Head>

      <section className={styles.hero} style={{'--course-color': '#111111'}}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroLeft}>
            <div className={styles.courseBadge}>Language Certification</div>
            <h1 className={styles.heroTitle}>JLPT</h1>
            <p className={styles.heroSubtitle}>Japanese Language Proficiency Test</p>
            <p className={styles.heroPara}>
              The JLPT is the world's most recognized Japanese proficiency test. Whether you're aiming for N5 basics or the prestige of N1, our expert instructors guide you through every level with proven methods.
            </p>
            <div className={styles.heroActions}>
              <Button href="/contact" size="lg">Enroll Now</Button>
              <Button href="/contact" variant="outline" size="lg">Ask a Question</Button>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.courseCard} style={{'--course-color': '#111111'}}>
              <div className={styles.courseCardEmoji}>📚</div>
              <div className={styles.courseCardGrid}>
                {[
                  { label: 'Levels', value: 'N5 → N1' },
                  { label: 'Duration', value: '3–12 Months' },
                  { label: 'Format', value: 'Online + Offline' },
                  { label: 'Exam', value: 'Dec & July' },
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
              <span className="section-label">What is JLPT?</span>
              <div className="red-line"></div>
              <h2 className="section-title">About the Test</h2>
              <p className={styles.para}>The Japanese Language Proficiency Test (JLPT) is conducted jointly by the Japan Foundation and Japan Educational Exchanges and Services. It is the most widely accepted proof of Japanese language ability, recognized by universities, companies, and immigration authorities worldwide.</p>
              <p className={styles.para}>Tests are held twice a year (July and December) in Nepal and across the world. We provide full preparation from beginner (N5) to advanced (N1) levels.</p>
            </div>
            <div className={styles.infoBox}>
              <h4 className={styles.infoBoxTitle}>JLPT Levels</h4>
              {LEVELS.map((l, i) => (
                <div key={i} className={styles.levelItem}>
                  <div className={styles.levelDot} style={{background: i === 0 ? 'var(--primary)' : ''}}></div>
                  <div>
                    <strong>{l.name}</strong>
                    <p>{l.desc}</p>
                  </div>
                </div>
              ))}
            </div>
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
              { week: 'Vocabulary', title: 'Word Power', items: ['N5–N1 core vocabulary lists', 'Kanji by level (103 to 2000+)', 'Contextual usage practice', 'Flashcard & spaced repetition system'] },
              { week: 'Grammar', title: 'Structure Mastery', items: ['All grammar patterns by level', 'Particle usage deep dive', 'Complex sentence structures (N2–N1)', 'Error correction exercises'] },
              { week: 'Skills', title: 'Test Skills', items: ['Reading comprehension by section', 'Listening with authentic JLPT audio', 'Full-length mock exams', 'Time management strategies'] },
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
                <div className={styles.scheduleIcon}>📅</div>
                <div className={styles.scheduleBatch}>{s.label}</div>
                <div className={styles.scheduleDay}>{s.day}</div>
                <div className={styles.scheduleTime}>{s.time}</div>
              </div>
            ))}
          </div>
          <div className={styles.ctaRow}>
            <Button href="/contact" size="lg">Register for JLPT Course</Button>
          </div>
        </div>
      </section>
    </>
  );
}
