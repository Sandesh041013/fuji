import Head from 'next/head';
import { useState } from 'react';
import Button from '../components/Button';
import styles from '../styles/Contact.module.css';

const offices = [
  { city: 'Tokyo', address: 'Marunouchi 1-1-1, Chiyoda-ku, Tokyo 100-0005', flag: '🇯🇵' },
  { city: 'London', address: '30 St Mary Axe (The Gherkin), London EC3A 8EP', flag: '🇬🇧' },
  { city: 'Singapore', address: '1 Raffles Place, #20-61 One Raffles Place, 048616', flag: '🇸🇬' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <>
      <Head>
        <title>Contact — FUJI International Consultancy</title>
        <meta name="description" content="Get in touch with FUJI International Consultancy. Our senior consultants are ready to discuss your global advisory needs." />
      </Head>

      {/* ── Page Hero ── */}
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow animate-fade-up">Get in Touch</span>
          <h1 className="animate-fade-up delay-1">Let's Start the<br />Conversation</h1>
          <p className="animate-fade-up delay-2">
            Tell us about your goals and we'll connect you with the right specialist. 
            Responses within one business day.
          </p>
        </div>
      </div>

      {/* ── Contact Body ── */}
      <section className="section">
        <div className="container">
          <div className={styles.layout}>

            {/* ── Form ── */}
            <div className={`${styles.formWrap} animate-fade-up`}>
              {!submitted ? (
                <>
                  <h2 className={styles.formTitle}>Send Us a Message</h2>
                  <p className={styles.formSub}>Fill in the details below and a consultant will follow up promptly.</p>

                  <form className={styles.form} onSubmit={handleSubmit} noValidate>
                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label htmlFor="name" className={styles.label}>Full Name *</label>
                        <input
                          id="name" name="name" type="text"
                          required className={styles.input}
                          placeholder="Jane Smith"
                          value={form.name} onChange={handleChange}
                        />
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="company" className={styles.label}>Company</label>
                        <input
                          id="company" name="company" type="text"
                          className={styles.input}
                          placeholder="Acme Corporation"
                          value={form.company} onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className={styles.row}>
                      <div className={styles.field}>
                        <label htmlFor="email" className={styles.label}>Email Address *</label>
                        <input
                          id="email" name="email" type="email"
                          required className={styles.input}
                          placeholder="jane@acme.com"
                          value={form.email} onChange={handleChange}
                        />
                      </div>
                      <div className={styles.field}>
                        <label htmlFor="phone" className={styles.label}>Phone Number</label>
                        <input
                          id="phone" name="phone" type="tel"
                          className={styles.input}
                          placeholder="+1 (555) 000-0000"
                          value={form.phone} onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="service" className={styles.label}>Area of Interest</label>
                      <select
                        id="service" name="service"
                        className={`${styles.input} ${styles.select}`}
                        value={form.service} onChange={handleChange}
                      >
                        <option value="">Select a service…</option>
                        <option>Market Entry Strategy</option>
                        <option>Regulatory & Compliance</option>
                        <option>Cross-border M&A</option>
                        <option>Trade & Export Advisory</option>
                        <option>Government Relations</option>
                        <option>International HR & Talent</option>
                        <option>Corporate Restructuring</option>
                        <option>Risk & Due Diligence</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <div className={styles.field}>
                      <label htmlFor="message" className={styles.label}>Your Message *</label>
                      <textarea
                        id="message" name="message"
                        required rows={5}
                        className={`${styles.input} ${styles.textarea}`}
                        placeholder="Please describe your situation or question…"
                        value={form.message} onChange={handleChange}
                      />
                    </div>

                    <button
                      type="submit"
                      className={`${styles.submitBtn} ${loading ? styles.loading : ''}`}
                      disabled={loading}
                    >
                      {loading ? (
                        <span className={styles.spinner} />
                      ) : (
                        <>Send Message <span>→</span></>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className={styles.success}>
                  <div className={styles.successIcon}>✓</div>
                  <h3 className={styles.successTitle}>Message Received</h3>
                  <p className={styles.successMsg}>
                    Thank you, {form.name.split(' ')[0]}. A senior consultant will be in touch 
                    at <strong>{form.email}</strong> within one business day.
                  </p>
                  <Button href="/services" variant="secondary" size="md">
                    Explore Our Services
                  </Button>
                </div>
              )}
            </div>

            {/* ── Sidebar ── */}
            <div className={`${styles.sidebar} animate-fade-up delay-2`}>
              {/* Direct contact */}
              <div className={styles.sideCard}>
                <h4 className={styles.sideTitle}>Direct Contact</h4>
                <div className={styles.contactList}>
                  <a href="mailto:info@fuji-consultancy.com" className={styles.contactRow}>
                    <span className={styles.contactIconWrap}>✉</span>
                    <div>
                      <div className={styles.contactLabel}>Email</div>
                      <div className={styles.contactVal}>info@fuji-consultancy.com</div>
                    </div>
                  </a>
                  <a href="tel:+81000000000" className={styles.contactRow}>
                    <span className={styles.contactIconWrap}>✆</span>
                    <div>
                      <div className={styles.contactLabel}>Global HQ (Tokyo)</div>
                      <div className={styles.contactVal}>+81 (0) 000 000 0000</div>
                    </div>
                  </a>
                  <div className={styles.contactRow}>
                    <span className={styles.contactIconWrap}>⏰</span>
                    <div>
                      <div className={styles.contactLabel}>Response Time</div>
                      <div className={styles.contactVal}>Within 1 business day</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Offices */}
           {/* Map */}
<div className={styles.sideCard}>
  <h4 className={styles.sideTitle}>Our Location</h4>

  <div style={{
    width: '100%',
    height: '300px',
    borderRadius: '10px',
    overflow: 'hidden'
  }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7065.765044405892!2d83.462710019117!3d27.69002557785575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3996870050fd64cb%3A0x3423c86c678d0c08!2sFuji%20International%20Consultancy!5e0!3m2!1sen!2snp!4v1778056301455!5m2!1sen!2snp"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
    ></iframe>
  </div>
</div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
