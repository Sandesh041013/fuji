import Head from 'next/head';
import Image from 'next/image';

const universities = {
  higherRanked: [
    { name: 'University of Tokyo', url: 'https://www.u-tokyo.ac.jp', img: '/fujibigbg.png', location: 'Tokyo' },
    { name: 'Kyoto University', url: 'https://www.kyoto-u.ac.jp', img: '/fujibigbg.png', location: 'Kyoto' },
    { name: 'Osaka University', url: 'https://www.osaka-u.ac.jp', img: '/fujibigbg.png', location: 'Osaka' },
    { name: 'Tohoku University', url: 'https://www.tohoku.ac.jp', img: '/fujibigbg.png', location: 'Sendai' },
    { name: 'Nagoya University', url: 'https://www.nagoya-u.ac.jp', img: '/fujibigbg.png', location: 'Nagoya' },
  ],
  higherMid: [
    { name: 'Hokkaido University', url: 'https://www.hokudai.ac.jp', img: '/fujibigbg.png', location: 'Sapporo' },
    { name: 'Kyushu University', url: 'https://www.kyushu-u.ac.jp', img: '/fujibigbg.png', location: 'Fukuoka' },
    { name: 'Waseda University', url: 'https://www.waseda.jp', img: '/fujibigbg.png', location: 'Tokyo' },
    { name: 'Keio University', url: 'https://www.keio.ac.jp', img: '/fujibigbg.png', location: 'Tokyo' },
  ],
  regional: [
    { name: 'Kobe University', url: 'https://www.kobe-u.ac.jp', img: '/fujibigbg.png', location: 'Kobe' },
    { name: 'Tokyo Institute of Technology', url: 'https://www.titech.ac.jp', img: '/fujibigbg.png', location: 'Tokyo' },
    { name: 'University of the Ryukyus', url: 'https://www.u-ryukyu.ac.jp', img: '/fujibigbg.png', location: 'Okinawa' },
  ],
  schools: [
    { name: 'Tokyo International School', url: 'https://www.tisjapan.org', img: '/fujibigbg.png', location: 'Tokyo' },
    { name: 'K. International School Tokyo', url: 'https://www.kist.ed.jp', img: '/fujibigbg.png', location: 'Tokyo' },
    { name: 'British School in Tokyo', url: 'https://www.bst.ac.jp', img: '/fujibigbg.png', location: 'Tokyo' },
    { name: 'Canadian International School Tokyo', url: 'https://www.cistokyo.jp', img: '/fujibigbg.png', location: 'Tokyo' },
    { name: 'American School in Japan', url: 'https://www.asij.ac.jp', img: '/fujibigbg.png', location: 'Chiba' },
  ],
};

export default function Universities() {
  return (
    <>
      <Head>
        <title>Universities & Schools — FUJI International Consultancy</title>
      </Head>

      <section className="section">
        <div className="container">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-dark mb-4">Universities in Japan</h1>
            <p className="text-gray-mid text-lg">Higher-ranked institutions appear first. Click any card to visit the official website.</p>
          </div>

          {/* Higher Ranked */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold font-display text-dark mb-8">Higher Ranked Universities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universities.higherRanked.map((u) => (
                <a
                  key={u.name}
                  href={u.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-gray-light rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative w-full h-40 bg-gray-light overflow-hidden">
                    <Image
                      src={u.img}
                      alt={u.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">{u.name}</div>
                    <div className="text-sm text-gray-mid">{u.location}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Higher-Mid Ranked */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold font-display text-dark mb-8">Higher–Mid Ranked Universities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universities.higherMid.map((u) => (
                <a
                  key={u.name}
                  href={u.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-gray-light rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative w-full h-40 bg-gray-light overflow-hidden">
                    <Image
                      src={u.img}
                      alt={u.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">{u.name}</div>
                    <div className="text-sm text-gray-mid">{u.location}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Regional & Specialist */}
          <div>
            <h2 className="text-2xl font-bold font-display text-dark mb-8">Regional & Specialist Universities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universities.regional.map((u) => (
                <a
                  key={u.name}
                  href={u.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white border border-gray-light rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative w-full h-40 bg-gray-light overflow-hidden">
                    <Image
                      src={u.img}
                      alt={u.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">{u.name}</div>
                    <div className="text-sm text-gray-mid">{u.location}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-dark mb-4">International Schools</h1>
            <p className="text-gray-mid text-lg">A curated list of international schools. Click to visit the school&apos;s site.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {universities.schools.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-gray-light rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="relative w-full h-40 bg-gray-light overflow-hidden">
                  <Image
                    src={s.img}
                    alt={s.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <div className="font-bold text-dark mb-1 group-hover:text-primary transition-colors">{s.name}</div>
                  <div className="text-sm text-gray-mid">{s.location}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
