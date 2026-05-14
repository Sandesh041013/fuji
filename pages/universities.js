import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Universities.module.css';

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
          <div className={styles.header}>
            <h1>Universities in Japan</h1>
            <p className={styles.lead}>Higher-ranked institutions appear first. Click any card to visit the official website.</p>
          </div>

          <div className={styles.categoryBlock}>
            <h2 className={styles.categoryTitle}>Higher Ranked Universities</h2>
            <div className={styles.cardsGrid}>
              {universities.higherRanked.map((u) => (
                <a key={u.name} href={u.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
                  <img src={u.img} alt={u.name} className={styles.cardImg} />
                  <div className={styles.cardBody}>
                    <div className={styles.cardTitle}>{u.name}</div>
                    <div className={styles.cardMeta}>{u.location}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.categoryBlock}>
            <h2 className={styles.categoryTitle}>Higher–Mid Ranked Universities</h2>
            <div className={styles.cardsGrid}>
              {universities.higherMid.map((u) => (
                <a key={u.name} href={u.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
                  <img src={u.img} alt={u.name} className={styles.cardImg} />
                  <div className={styles.cardBody}>
                    <div className={styles.cardTitle}>{u.name}</div>
                    <div className={styles.cardMeta}>{u.location}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.categoryBlock}>
            <h2 className={styles.categoryTitle}>Regional & Specialist Universities</h2>
            <div className={styles.cardsGrid}>
              {universities.regional.map((u) => (
                <a key={u.name} href={u.url} target="_blank" rel="noopener noreferrer" className={styles.card}>
                  <img src={u.img} alt={u.name} className={styles.cardImg} />
                  <div className={styles.cardBody}>
                    <div className={styles.cardTitle}>{u.name}</div>
                    <div className={styles.cardMeta}>{u.location}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className={styles.header}>
            <h1>International Schools</h1>
            <p className={styles.lead}>A curated list of international schools. Click to visit the school's site.</p>
          </div>

          <div className={styles.cardsGridWrapper}>
            <div className={styles.cardsGridFull}>
              {universities.schools.map((s) => (
                <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className={styles.cardSchool}>
                  <img src={s.img} alt={s.name} className={styles.cardImg} />
                  <div className={styles.cardBody}>
                    <div className={styles.cardTitle}>{s.name}</div>
                    <div className={styles.cardMeta}>{s.location}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
