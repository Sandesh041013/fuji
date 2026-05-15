import Head from 'next/head';
import { useState } from 'react';
import Button from '../components/Button.jsx';

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
        <meta name="description" content="Get in touch with FUJI International Consultancy. Our senior consultants are ready to discuss your visa needs." />
      </Head>

      {/* Page Hero */}
      <div className="page-hero">
        <div className="container">
          <span className="eyebrow animate-fadeUp">Get in Touch</span>
          <h1 className="animate-fadeUp delay-1">Let&apos;s Start the<br />Conversation</h1>
          <p className="animate-fadeUp delay-2">
            Tell us about your goals and we&apos;ll connect you with the right specialist. Responses within one business day.
          </p>
        </div>
      </div>

      {/* Contact Body */}
      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2 animate-fadeUp">
              {!submitted ? (
                <>
                  <h2 className="text-3xl font-bold text-dark mb-3">Send Us a Message</h2>
                  <p className="text-gray-mid mb-8">Fill in the details below and a consultant will follow up promptly.</p>

                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    {/* Name & Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-dark mb-2">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Jane Smith"
                          value={form.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-light rounded-lg text-dark placeholder-gray-mid focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-dark mb-2">
                          Company
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Acme Corporation"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-light rounded-lg text-dark placeholder-gray-mid focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-dark mb-2">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="jane@acme.com"
                          value={form.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-light rounded-lg text-dark placeholder-gray-mid focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-dark mb-2">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={form.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-light rounded-lg text-dark placeholder-gray-mid focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                        />
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-dark mb-2">
                        Area of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-light rounded-lg text-dark focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                      >
                        <option value="">Select a service…</option>
                        <option>Study Visa Guidance</option>
                        <option>Working Visa Guidance</option>
                        <option>Visa Documentation</option>
                        <option>Career Placement</option>
                        <option>Language Prep</option>
                        <option>Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-dark mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        placeholder="Please describe your situation or question…"
                        value={form.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-light rounded-lg text-dark placeholder-gray-mid focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full btn btn-primary py-3 text-base font-bold hover:bg-primary-dark transition-all duration-300"
                    >
                      {loading ? (
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>Send Message <span>→</span></>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-dark mb-3">Message Received</h3>
                  <p className="text-gray-mid mb-8">
                    Thank you, {form.name.split(' ')[0]}. A senior consultant will be in touch at&nbsp;
                    <strong>{form.email}</strong> within one business day.
                  </p>
                  <Button href="/services" variant="secondary" size="md">
                    Explore Our Services
                  </Button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8 animate-fadeUp" style={{ animationDelay: '0.2s' }}>
              {/* Direct Contact Card */}
              <div className="bg-light rounded-lg p-8">
                <h4 className="font-bold text-dark text-lg mb-6">Direct Contact</h4>

                <div className="space-y-6">
                  <a
                    href="mailto:fujiinternationalconsultancy@gmail.com"
                    className="flex items-start gap-3 hover:text-primary transition-colors duration-75"
                  >
                    <span className="text-primary font-semibold flex-shrink-0 w-5">✉</span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-mid font-semibold">Email Address</div>
                      <div className="text-dark font-semibold">fujiinternationalconsultancy@gmail.com</div>
                    </div>
                  </a>

                  <a
                    href="tel:+9779800000000"
                    className="flex items-start gap-3 hover:text-primary transition-colors duration-75"
                  >
                    <span className="text-primary font-semibold flex-shrink-0 w-5">✆</span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-mid font-semibold">Contact Number</div>
                      <div className="text-dark font-semibold">+977 98XXXXXXXX</div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3">
                    <span className="text-primary font-semibold flex-shrink-0 w-5">📍</span>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-gray-mid font-semibold">Office Location</div>
                      <div className="text-dark font-semibold">Butwal, Rupandehi, Nepal</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Card */}
              <div className="bg-light rounded-lg p-8 overflow-hidden">
                <h4 className="font-bold text-dark text-lg mb-4">Our Location</h4>
                <div className="w-full h-64 rounded-lg overflow-hidden">
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
