import Head from 'next/head';
import ServiceCard from '../components/ServiceCard.jsx';
import Button from '../components/Button.jsx';

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

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow animate-fadeUp">
            What We Offer
          </span>

          <h1 className="animate-fadeUp delay-1">
            Your Gateway
            <br />
            to Japan
          </h1>

          <p className="animate-fadeUp delay-2">
            From study and working visa support to documentation, placements, and arrival assistance — FUJI International Consultancy guides you through every step of your journey to Japan.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-16">
            <div>
              <span className="eyebrow">Our Services</span>
              <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">
                Complete Support
                <br />
                for Your Japan Journey
              </h2>
              <div className="divider" />
            </div>

            <div className="lg:col-span-2">
              <p className="text-base text-gray-mid leading-relaxed">
                At FUJI International Consultancy, we provide complete support for students and professionals planning to study or work in Japan. From counselling and eligibility assessment to visa processing and settlement assistance, our team ensures a smooth and guided experience at every stage.
              </p>
            </div>
          </div>

          <div className="grid-3">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <span className="eyebrow">Career Opportunities</span>
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">
              Sectors Available in Japan
            </h2>
            <div className="divider divider--center" />
            <p className="section-subtitle">
              We help candidates explore opportunities in trusted sectors across Japan based on their skills, qualifications, and career goals.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            {industries.map((ind, i) => (
              <div
                key={ind}
                className="inline-flex items-center gap-3 px-5 py-3 bg-white rounded-full border border-gray-light font-medium text-sm text-dark animate-fadeUp hover:shadow-md transition-all duration-300"
                style={{ animationDelay: `${((i % 4) + 1) * 0.1}s` }}
              >
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-20">
            <span className="eyebrow">Step-by-Step Guidance</span>
            <h2 className="section-title text-3xl md:text-4xl lg:text-5xl">
              Your Journey With FUJI
            </h2>
            <div className="divider divider--center" />
          </div>

          <div className="space-y-8">
            {[
              {
                num: '01',
                title: 'Initial Enquiry & Consultation',
                desc: 'Discuss your goals, preferred pathway, and eligibility while understanding the opportunities available in Japan.',
              },
              {
                num: '02',
                title: 'Eligibility Assessment',
                desc: 'Review academic, professional, and language qualifications to identify suitable institutions or employers.',
              },
              {
                num: '03',
                title: 'Application & Document Preparation',
                desc: 'Prepare, translate, and organize required documents for schools, employers, or visa applications.',
              },
              {
                num: '04',
                title: 'Placement & Institution/Employer Coordination',
                desc: 'We coordinate directly with universities, language schools, and employers to secure offers and COEs.',
              },
              {
                num: '05',
                title: 'Visa Submission & Processing',
                desc: 'Receive complete guidance through visa application filing and progress tracking.',
              },
              {
                num: '06',
                title: 'Pre-departure & Post-arrival Support',
                desc: 'Get orientation, accommodation guidance, and assistance for settling smoothly after arriving in Japan.',
              },
            ].map(({ num, title, desc }, i) => (
              <div
                key={num}
                className="flex gap-8 items-start animate-fadeUp"
                style={{ animationDelay: `${(i + 1) * 0.1}s` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center font-black text-2xl text-white">
                    {num}
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="text-lg font-bold text-dark mb-2">{title}</h4>
                  <p className="text-gray-mid leading-relaxed">{desc}</p>
                </div>

                {i < 5 && (
                  <div className="hidden md:flex flex-col items-center gap-4 -translate-y-8">
                    <span className="text-2xl text-primary/50">↓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <span className="eyebrow eyebrow--white">Start Today</span>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Ready to Start Your Japan Journey?
            </h2>
            <p className="text-white/75 mb-10 text-lg leading-relaxed">
              Speak with our experienced consultants and get professional guidance for study or work opportunities in Japan.
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
