import Head from 'next/head';
import Button from '../../components/Button';

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

      {/* Hero */}
      <section className="bg-dark text-white py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-white/10 rounded-full text-sm font-semibold mb-6 text-white/80">
                Language Certification
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black font-display text-white mb-3">JLPT</h1>
              <p className="text-3xl md:text-4xl text-white/80 mb-6 font-semibold">Japanese Language Proficiency Test</p>
              <p className="text-lg text-white/65 leading-relaxed mb-8 max-w-lg">
                The JLPT is the world&apos;s most recognized Japanese proficiency test. Whether you&apos;re aiming for N5 basics or the prestige of N1, our expert instructors guide you through every level with proven methods.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/contact" size="lg">Enroll Now</Button>
                <Button href="/contact" variant="ghost" size="lg">Ask a Question</Button>
              </div>
            </div>

            <div className="bg-white/8 border border-white/15 rounded-2xl p-10 backdrop-blur-sm">
              <div className="text-6xl mb-8">📚</div>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Levels', value: 'N5 → N1' },
                  { label: 'Duration', value: '3–12 Months' },
                  { label: 'Format', value: 'Online + Offline' },
                  { label: 'Exam', value: 'Dec & July' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-2">{item.label}</div>
                    <div className="text-xl font-bold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
              <Button href="/contact" size="md" className="w-full mt-10 justify-center">
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
              <span className="eyebrow">What is JLPT?</span>
              <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">About the Test</h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                The Japanese Language Proficiency Test (JLPT) is conducted jointly by the Japan Foundation and Japan Educational Exchanges and Services. It is the most widely accepted proof of Japanese language ability, recognized by universities, companies, and immigration authorities worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Tests are held twice a year (July and December) in Nepal and across the world. We provide full preparation from beginner (N5) to advanced (N1) levels.
              </p>
            </div>

            <div className="bg-light rounded-lg p-8">
              <h4 className="font-bold text-dark font-display text-lg mb-6">JLPT Levels</h4>
              <div className="space-y-5">
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
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="section bg-dark text-white">
        <div className="container">
          <span className="eyebrow eyebrow--white">What We Cover</span>
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-white">Course Curriculum</h2>
          <div className="divider" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { week: 'Vocabulary', title: 'Word Power', items: ['N5–N1 core vocabulary lists', 'Kanji by level (103 to 2000+)', 'Contextual usage practice', 'Flashcard & spaced repetition system'] },
              { week: 'Grammar', title: 'Structure Mastery', items: ['All grammar patterns by level', 'Particle usage deep dive', 'Complex sentence structures (N2–N1)', 'Error correction exercises'] },
              { week: 'Skills', title: 'Test Skills', items: ['Reading comprehension by section', 'Listening with authentic JLPT audio', 'Full-length mock exams', 'Time management strategies'] },
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
                <div className="text-4xl mb-4">📅</div>
                <div className="font-bold text-dark font-display text-lg mb-3">{s.label}</div>
                <div className="text-gray-mid text-sm font-semibold mb-2">{s.day}</div>
                <div className="text-primary font-bold text-base">{s.time}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/contact" size="lg">
              Register for JLPT Course
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
