import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';

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

      {/* Hero Section */}
      <section className="min-h-screen bg-dark flex flex-col items-center justify-center relative overflow-hidden pt-32 pb-20 md:pt-40">
        {/* Background with zoom animation */}
        <div
          className="absolute inset-0 pointer-events-none z-0 animate-heroZoom"
          style={{
            backgroundImage:
              'linear-gradient(rgba(10,10,10,0.65), rgba(10,10,10,0.85)), url("/fuji bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          aria-hidden
        />

        {/* Glow effect */}
        <div
          className="absolute top-[-20%] left-[-10%] w-80 h-80 md:w-96 md:h-96 rounded-full pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle, rgba(225,6,0,0.12) 0%, transparent 65%)',
          }}
          aria-hidden
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage:
              'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
          }}
          aria-hidden
        />

        {/* Content */}
        <div className="container relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/6 border border-white/10 rounded-full px-4.5 py-2 mb-8 animate-fadeUp">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-white/65">
              Trusted Guidance for Study & Work in Japan
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-7 leading-tight animate-fadeUp delay-1">
            Your Journey
            <br />
            <span className="text-primary">To Study & Work</span>
            <br />
            In Japan
          </h1>

          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed animate-fadeUp delay-2">
            FUJI International Consultancy helps students and professionals achieve their dream of studying and working in Japan through trusted guidance, visa support, and complete relocation assistance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap mb-14 animate-fadeUp delay-3">
            <Button href="/services" size="lg" arrow>
              Explore Services
            </Button>
            <Button href="/about" variant="ghost" size="lg">
              Why Choose Us
            </Button>
          </div>

          <div className="flex flex-col items-center gap-2.5 text-xs text-white/35 animate-fadeUp delay-4">
            <span>Helping students & professionals build futures through</span>
            <div className="flex gap-4 font-semibold text-white/55">
              <span>Japan</span>
              <span aria-hidden>·</span>
              <span>Education</span>
              <span aria-hidden>·</span>
              <span>Employment</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
          aria-hidden
        >
          <span className="w-0.5 h-12 bg-gradient-to-b from-white/40 to-transparent animate-scrollLine" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid-4">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className="text-center py-8 animate-fadeUp"
                style={{ animationDelay: `${(i + 1) * 0.1}s` }}
              >
                <div className="font-display font-black text-3xl md:text-4xl text-primary mb-2.5 leading-none">
                  {value}
                </div>
                <div className="text-sm font-medium text-gray-mid uppercase tracking-widest">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow">Why Students Trust FUJI</span>

            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">
              Built on Guidance,<br />
              Trust & Results
            </h2>

            <div className="divider" />

            <p className="text-gray-mid max-w-xl leading-relaxed">
              We are more than a consultancy — we are a support system for students and professionals who want to build their future in Japan with confidence.
            </p>
          </div>

          <div className="grid-3 mb-10">
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

          <div className="text-center">
            <Button href="/about" variant="secondary" size="md" arrow>
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-dark">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="eyebrow eyebrow--white">About FUJI</span>

              <h2 className="text-white text-3xl md:text-4xl lg:text-5xl mb-5 font-bold font-display">
                Your Trusted Partner
                <br />
                <span className="text-primary">
                  for Japan Opportunities
                </span>
              </h2>

              <div className="w-12 h-1 bg-primary rounded-sm mb-7" />

              <p className="text-white/55 leading-relaxed mb-9 max-w-xl">
                FUJI International Consultancy is committed to helping students and professionals build successful futures in Japan. We provide expert support for study opportunities, employment pathways, visa processing, and relocation guidance every step of the way.
              </p>

              <Button href="/about" variant="ghost" size="md" arrow>
                Learn More About Us
              </Button>
            </div>

            {/* Visual Element */}
            <div className="hidden lg:flex justify-center relative" aria-hidden>
              <div className="w-64 h-96 bg-white/4 border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-14 relative">
                <div className="w-20 h-20 bg-primary rounded-lg font-display font-black text-3xl text-white flex items-center justify-center flex-shrink-0">
                  F
                </div>

                <div className="flex flex-col gap-2 w-32">
                  <span className="block h-0.5 bg-white/15 rounded-full"></span>
                  <span className="block h-0.5 bg-white/15 rounded-full w-3/4"></span>
                  <span className="block h-0.5 bg-white/15 rounded-full w-1/2"></span>
                </div>
              </div>

              <div className="absolute -bottom-3 -right-8 bg-primary rounded-lg p-4 shadow-red">
                <div className="font-display font-black text-2xl text-white leading-none mb-1">
                  100+
                </div>
                <div className="text-xs uppercase tracking-wider text-white/70 font-medium">
                  Success Stories
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 md:py-24">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold font-display mb-2">
                Ready to Start Your Japan Journey?
              </h2>
              <p className="text-white/75 text-base">
                Speak with our consultants and get professional guidance today.
              </p>
            </div>

            <Button href="/contact" variant="secondary" size="lg" arrow>
              Book a Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
