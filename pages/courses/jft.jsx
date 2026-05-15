import Head from 'next/head';
import Button from '../../components/Button';

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
      <section className="bg-primary text-white py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-semibold mb-6 text-white/80">
                Language Certification
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-display text-white mb-3">JFT – Basic</h1>
              <p className="text-3xl md:text-4xl text-white/80 mb-6 font-semibold">Japan Foundation Test for Basic Japanese</p>
              <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-lg">
                The JFT-Basic is the primary Japanese language requirement for the Specified Skilled Worker (SSW) visa. Our structured program ensures you&apos;re fully prepared — from basics to test-day confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg" variant="secondary">Enroll Now</Button>
                <Button href="/contact" variant="ghost" size="lg">Ask a Question</Button>
              </div>
            </div>

            <div className="bg-white/8 border border-white/15 rounded-2xl p-10 backdrop-blur-sm">
              <div className="text-6xl mb-8">🎌</div>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Duration', value: '3 Months' },
                  { label: 'Level', value: 'Beginner–A2' },
                  { label: 'Format', value: 'Online + Offline' },
                  { label: 'Next Batch', value: 'June 2025' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-2">{item.label}</div>
                    <div className="text-xl font-bold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
              <Button href="/contact" size="md" className="w-full mt-10 justify-center" variant="secondary">
                Reserve Your Spot
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="eyebrow">What is JFT-Basic?</span>
              <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">About the Test</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                The Japan Foundation Test for Basic Japanese (JFT-Basic) is a Computer-Based Test (CBT) administered by the Japan Foundation. It evaluates whether candidates have the Japanese language skills needed to live and work in Japan as a Specified Skilled Worker.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The test is taken on a computer and assesses reading and listening abilities. Passing is mandatory for many Specified Skilled Worker categories.
              </p>
            </div>

            <div className="bg-light rounded-lg p-8">
              <h4 className="font-bold text-dark font-display text-lg mb-6">Test Sections</h4>
              <div className="space-y-5 mb-6">
                {LEVELS.map((l, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-3 h-3 rounded-full bg-primary mt-2" />
                    <div>
                      <strong className="text-dark block mb-1">{l.name}</strong>
                      <p className="text-sm text-gray-mid">{l.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white p-4 rounded-lg text-sm text-gray-mid">
                🎯 No passing score for individual sections — overall score determines pass/fail.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section bg-dark text-white">
        <div className="container">
          <span className="eyebrow eyebrow--white">Curriculum</span>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-white">What You&apos;ll Learn</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { week: 'Month 1', title: 'Foundations', items: ['Hiragana & Katakana', 'Basic vocabulary (500 words)', 'Greetings and daily phrases', 'Numbers, dates, and time'] },
              { week: 'Month 2', title: 'Core Skills', items: ['Workplace communication', 'Reading signs and notices', 'Listening exercises (A1–A2)', 'Grammar: particles, verbs, adjectives'] },
              { week: 'Month 3', title: 'Test Preparation', items: ['Full mock exams (CBT style)', 'Section-specific drills', 'Speed and accuracy training', 'Exam strategy and time management'] },
            ].map((m, i) => (
              <div key={i} className="bg-white/8 border border-white/15 rounded-lg p-8">
                <div className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-2">{m.week}</div>
                <h4 className="text-xl font-bold text-white mb-6">{m.title}</h4>
                <ul className="space-y-3">
                  {m.items.map((item, j) => (
                    <li key={j} className="flex gap-3 text-white/80 text-sm">
                      <span className="flex-shrink-0 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Batches</span>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">Class Schedule</h2>
          <div className="divider" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {SCHEDULE.map((s, i) => (
              <div key={i} className="bg-light rounded-lg p-8 text-center">
                <div className="text-4xl mb-4">🕐</div>
                <div className="font-bold text-dark font-display text-lg mb-3">{s.label}</div>
                <div className="text-gray-mid text-sm font-semibold mb-2">{s.day}</div>
                <div className="text-primary font-bold text-base">{s.time}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/contact" size="lg">
              Register for JFT Course
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
