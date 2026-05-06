import Head from 'next/head';
import Button from '../../components/Button';
import styles from '../../styles/CoursePage.module.css';

const LEVELS = [
  { name: 'Section A', desc: 'Listening comprehension — understanding everyday conversations and announcements.' },
  { name: 'Section B', desc: 'Reading comprehension — understanding notices, signs, instructions, and short texts.' },
];

const SCHEDULE = [
  { day: 'Monday – Friday', time: '6:00 AM – 8:00 AM', label: 'Morning Batch' },
  { day: 'Monday – Friday', time: '4:00 PM – 6:00 PM', label: 'Evening Batch' },
  { day: 'Saturday', time: '9:00 AM – 1:00 PM', label: 'Weekend Intensive' },
];

export default function JFT() {
  return (
    <>
      <Head>
        <title>JFT-Basic Course – FUJI International Consultancy</title>
        <meta name="description" content="Prepare for the JFT-Basic (Japan Foundation Test) with expert coaching at FUJI International Consultancy." />
      </Head>

      {/* Hero */}
      <section className={styles.hero} style={{'--course-color': '#E10600'}}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroLeft}>
            <div className={styles.courseBadge}>Language Certification</div>
            <h1 className={styles.heroTitle}>JFT – Basic</h1>
            <p className={styles.heroSubtitle}>Japan Foundation Test for Basic Japanese</p>
            <p className={styles.heroPara}>
              The JFT-Basic is the primary Japanese language requirement for the Specified Skilled Worker (SSW) visa. Our structured program ensures you're fully prepared — from basics to test-day confidence.
            </p>
            <div className={styles.heroActions}>
              <Button href="/contact" size="lg">Enroll Now</Button>
              <Button href="/contact" variant="outline" size="lg">Ask a Question</Button>
            </div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.courseCard}>
              <div className={styles.courseCardEmoji}>🎌</div>
              <div className={styles.courseCardGrid}>
                {[
                  { label: 'Duration', value: '3 Months' },
                  { label: 'Level', value: 'Beginner–A2' },
                  { label: 'Format', value: 'Online + Offline' },
                  { label: 'Next Batch', value: 'June 2025' },
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

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className={styles.twoCol}>
            <div>
              <span className="section-label">What is JFT-Basic?</span>
              <div className="red-line"></div>
              <h2 className="section-title">About the Test</h2>
              <p className={styles.para}>The Japan Foundation Test for Basic Japanese (JFT-Basic) is a Computer-Based Test (CBT) administered by the Japan Foundation. It evaluates whether candidates have the Japanese language skills needed to live and work in Japan as a Specified Skilled Worker.</p>
              <p className={styles.para}>The test is taken on a computer and assesses reading and listening abilities. Passing is mandatory for many Specified Skilled Worker categories.</p>
            </div>
            <div className={styles.infoBox}>
              <h4 className={styles.infoBoxTitle}>Test Sections</h4>
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
                🎯 No passing score for individual sections — overall score determines pass/fail.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className={`section ${styles.darkSection}`}>
        <div className="container">
          <span className="section-label">Curriculum</span>
          <div className="red-line"></div>
          <h2 className={`section-title ${styles.white}`}>What You'll Learn</h2>
          <div className={styles.curriculumGrid}>
            {[
              { week: 'Month 1', title: 'Foundations', items: ['Hiragana & Katakana', 'Basic vocabulary (500 words)', 'Greetings and daily phrases', 'Numbers, dates, and time'] },
              { week: 'Month 2', title: 'Core Skills', items: ['Workplace communication', 'Reading signs and notices', 'Listening exercises (A1–A2)', 'Grammar: particles, verbs, adjectives'] },
              { week: 'Month 3', title: 'Test Preparation', items: ['Full mock exams (CBT style)', 'Section-specific drills', 'Speed and accuracy training', 'Exam strategy and time management'] },
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
                <div className={styles.scheduleIcon}>🕐</div>
                <div className={styles.scheduleBatch}>{s.label}</div>
                <div className={styles.scheduleDay}>{s.day}</div>
                <div className={styles.scheduleTime}>{s.time}</div>
              </div>
            ))}
          </div>
          <div className={styles.ctaRow}>
            <Button href="/contact" size="lg">Register for JFT Course</Button>
          </div>
        </div>
      </section>
    </>
  );
}
