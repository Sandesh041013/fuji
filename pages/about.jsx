import Head from 'next/head';
import Button from '../components/Button.jsx';
import Image from 'next/image';

const values = [
  { icon: '◈', title: 'Integrity', desc: 'We build relationships on transparency, honesty, and unwavering ethical standards in every engagement.' },
  { icon: '◉', title: 'Commitment', desc: 'We are dedicated to supporting our clients from the beginning until they achieve their goals. Our team ensures continuous guidance, timely updates, and reliable assistance throughout the entire visa process.' },
  { icon: '◇', title: 'Excellence', desc: 'We strive for the highest quality in our services. From documentation to counseling, we focus on accuracy, professionalism, and attention to detail to deliver the best possible outcomes.' },
  { icon: '◈', title: 'Client-Centered Approach', desc: 'Our clients are at the heart of everything we do. We listen, understand individual needs, and provide personalized solutions to help each person achieve their dreams of studying or working abroad.' },
];

const team = [
  { name: 'Pradip Gharti', role: 'Founder & CEO', region: 'Nepal' },
  { name: 'Binod Bc', role: 'Managing Director', region: 'Nepal' },
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

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow animate-fadeUp">Who We Are</span>
          <h1 className="animate-fadeUp delay-1">Built on Trust.<br />Driven by Results.</h1>
          <p className="animate-fadeUp delay-2">
            For over two decades, FUJI International Consultancy has been the partner of choice 
            for organizations navigating the complexities of global business.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">From Tokyo to the World</h2>
              <div className="divider" />
              <p className="text-gray-700 leading-relaxed mb-5">
                Welcome to FUJI International Consultancy, your trusted partner for student and working visa services. We are dedicated to guiding individuals who aspire to build their future abroad, especially in countries like Japan. With expert knowledge and personalized support, we ensure a smooth and reliable process from consultation to visa approval. Our goal is to make your international journey simple, transparent, and successful.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our name — FUJI — reflects our philosophy: like Mount Fuji, we stand for permanence, clarity, and the ability to see farther than others. Every engagement is guided by a commitment to long-term value over short-term gain.
              </p>
              <div className="mt-9">
                <Button href="/contact" size="md" arrow>
                  Talk to Our Team
                </Button>
              </div>
            </div>
            <div>
              <Image src='/image.png' width={500} height={500} alt="FUJI International" className="rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid-2">
            <div className="bg-white rounded-lg p-10 border border-gray-light shadow-sm">
              <span className="text-3xl mb-5 block">◎</span>
              <h3 className="text-2xl font-bold text-dark mb-5">Our Mission</h3>
              <div className="divider" />
              <p className="text-gray-700 leading-relaxed">
                Our mission is to empower students and professionals by providing accurate guidance, ethical services, and complete support throughout their visa journey. We aim to bridge the gap between dreams and opportunities by helping our clients achieve their international goals with confidence and clarity.
              </p>
            </div>
            <div className="bg-dark rounded-lg p-10 border border-gray-700">
              <span className="text-3xl mb-5 block text-primary">◈</span>
              <h3 className="text-2xl font-bold text-white mb-5">Our Vision</h3>
              <div className="w-12 h-1 bg-primary rounded-sm mb-5" />
              <p className="text-white/55 leading-relaxed">
                Our vision is to become a leading and most trusted consultancy in the field of international education and employment. We strive to build a future where every individual has access to global opportunities and the right guidance to succeed beyond borders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <span className="eyebrow">What We Stand For</span>
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">Our Core Values</h2>
            <div className="divider divider--center" />
          </div>
          <div className="grid-4">
            {values.map(({ icon, title, desc }, i) => (
              <div key={title} className="bg-light rounded-lg p-8 animate-fadeUp" style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
                <div className="text-3xl mb-5">{icon}</div>
                <h4 className="text-lg font-bold text-dark mb-3">{title}</h4>
                <p className="text-sm text-gray-mid leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-dark">
        <div className="container">
          <div className="text-center mb-14">
            <span className="eyebrow eyebrow--white">Leadership</span>
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl text-white">
              The People Behind FUJI
            </h2>
            <div className="divider divider--center" />
          </div>
          <div className="grid-4">
            {team.map(({ name, role, region }, i) => (
              <div key={name} className="text-center text-white animate-fadeUp" style={{ animationDelay: `${(i + 1) * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center font-black text-xl text-white mx-auto mb-4">
                  {name.split(' ').map(w => w[0]).join('')}
                </div>
                <div className="font-semibold text-lg mb-1">{name}</div>
                <div className="text-sm text-white/65 mb-3">{role}</div>
                <div className="text-xs text-white/50">◉ {region}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
