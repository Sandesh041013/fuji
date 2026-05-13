import Head from 'next/head';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import styles from '../styles/Services.module.css';

const services = [
  {
    icon: '🎓',
    title: 'Study Visa Guidance',
    description:
      'Course selection, university application support, scholarship advice and admission counselling for study in Japan.',
  },
  {
    icon: '💼',
    title: 'Working Visa Guidance',
    description:
      'Employer matching, contract review and step-by-step support through work visa applications.',
  },
  {
    icon: '🛂',
    title: 'Visa Documentation & Submission',
    description:
      'Complete document preparation, certified translation, notarization and application filing with authorities.',
  },
  {
    icon: '🏠',
    title: 'Pre-departure & Arrival Support',
    description:
      'Orientation, accommodation assistance, local registration and early onboarding support after arrival.',
    featured: true,
  },
  {
    icon: '📋',
    title: 'Career & Job Placement Assistance',
    description:
      'Job search support, CV coaching and interview preparation with partner employers in Japan.',
  },
  {
    icon: '🧑‍🏫',
    title: 'Language & Exam Prep',
    description:
      'JLPT/JFT preparation, partner tutors and study plans to meet institution or employer language requirements.',
  },
  {
    icon: '🧾',
    title: 'Employer & Institution Liaison',
    description:
      'We coordinate directly with universities and employers to secure offers, COEs and necessary endorsements.',
  },
];

const industries = [
  'Agriculture & Farming',
  'Caregiving & Healthcare',
  'Manufacturing & Skilled Trades',
  'Hospitality & Service',
  'Construction & Infrastructure',
  'IT & Technical',
  'Fisheries & Marine',
  'Food Processing',
];

export default function Services() {
  return (
    <>
      <Head>
        <title>Services — FUJI International Consultancy</title>
        <meta
          name="description"
          content="Explore FUJI International Consultancy services including study visa guidance, work visa support, documentation, career assistance, and Japan relocation support."
        />
      </Head>

      {/* ── Page Hero ── */}
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow animate-fade-up">
            What We Offer
          </span>

          <h1 className="animate-fade-up delay-1">
            Your Gateway
            <br />
            to Japan
          </h1>

          <p className="animate-fade-up delay-2">
            From study and working visa support to documentation,
            placements, and arrival assistance — FUJI International
            Consultancy guides you through every step of your journey
            to Japan.
          </p>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <section className="section">
        <div className="container">
          <div className={styles.introRow}>
            <div>
              <span className="eyebrow">Our Services</span>

              <h2 className="section-title">
                Complete Support
                <br />
                for Your Japan Journey
              </h2>

              <div className="divider" />
            </div>

            <p className={styles.introPara}>
              At FUJI International Consultancy, we provide complete
              support for students and professionals planning to study
              or work in Japan. From counselling and eligibility
              assessment to visa processing and settlement assistance,
              our team ensures a smooth and guided experience at every
              stage.
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
            <span className="eyebrow">
              Career Opportunities
            </span>

            <h2 className="section-title">
              Sectors Available
              <br />
              in Japan
            </h2>

            <div className="divider divider--center" />

            <p className="section-subtitle">
              We help candidates explore opportunities in trusted
              sectors across Japan based on their skills,
              qualifications, and career goals.
            </p>
          </div>

          <div className={styles.industries}>
            {industries.map((ind, i) => (
              <div
                key={ind}
                className={`${styles.industryChip} animate-fade-up delay-${
                  (i % 4) + 1
                }`}
              >
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
            <span className="eyebrow">
              Step-by-Step Guidance
            </span>

            <h2 className="section-title">
              Your Journey
              <br />
              With FUJI
            </h2>

            <div className="divider divider--center" />
          </div>

          <div className={styles.process}>
            {[
              {
                num: '01',
                title: 'Initial Enquiry & Consultation',
                desc:
                  'Discuss your goals, preferred pathway, and eligibility while understanding the opportunities available in Japan.',
              },
              {
                num: '02',
                title: 'Eligibility Assessment',
                desc:
                  'Review academic, professional, and language qualifications to identify suitable institutions or employers.',
              },
              {
                num: '03',
                title: 'Application & Document Preparation',
                desc:
                  'Prepare, translate, and organize required documents for schools, employers, or visa applications.',
              },
              {
                num: '04',
                title: 'Placement & Institution/Employer Coordination',
                desc:
                  'We coordinate directly with universities, language schools, and employers to secure offers and COEs.',
              },
              {
                num: '05',
                title: 'Visa Submission & Processing',
                desc:
                  'Receive complete guidance through visa application filing and progress tracking.',
              },
              {
                num: '06',
                title: 'Pre-departure & Post-arrival Support',
                desc:
                  'Get orientation, accommodation guidance, and assistance for settling smoothly after arriving in Japan.',
              },
            ].map(({ num, title, desc }, i) => (
              <div
                key={num}
                className={`${styles.step} animate-fade-up delay-${i + 1}`}
              >
                <div className={styles.stepNum}>
                  {num}
                </div>

                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>
                    {title}
                  </h4>

                  <p className={styles.stepDesc}>
                    {desc}
                  </p>
                </div>

                {i < 5 && (
                  <div
                    className={styles.stepArrow}
                    aria-hidden
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <span className="eyebrow eyebrow--white">
              Start Today
            </span>

            <h2 className={styles.ctaTitle}>
              Ready to Start
              <br />
              Your Japan Journey?
            </h2>

            <p className={styles.ctaSub}>
              Speak with our experienced consultants and get
              professional guidance for study or work opportunities in
              Japan.
            </p>

            <Button href="/contact" size="lg" arrow>
              Request a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}