import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white border-t-4 border-primary">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-16 pb-12 px-4 sm:px-6">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 bg-primary text-white font-black text-lg flex items-center justify-center rounded-sm flex-shrink-0">
              F
            </div>
            <div>
              <div className="font-black text-base uppercase tracking-widest text-white">
                FUJI
              </div>
              <div className="text-xs font-medium uppercase tracking-wider text-white/40">
                Study & Work Visa Services
              </div>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-white/50 max-w-sm">
            Specialist support for students and professionals relocating to Japan
            and beyond. Admissions, employer matching, visa processing and
            post-arrival support.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-5">
            Navigation
          </h4>

          <ul className="flex flex-col gap-3 space-y-0">
            {["Home", "About", "Services", "Universities", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-sm text-white/65 hover:text-primary transition-colors duration-75"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-5">
            Our Services
          </h4>

          <ul className="flex flex-col gap-3 space-y-0">
            {[
              "Study Visa Guidance",
              "Working Visa Guidance",
              "Document Translation & Certification",
              "Pre-departure & Arrival Support",
              "Job Placement Assistance",
            ].map((s) => (
              <li key={s}>
                <Link
                  href="/services"
                  className="text-sm text-white/65 hover:text-primary transition-colors duration-75"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-5">
            Contact
          </h4>

          <ul className="flex flex-col gap-3 space-y-0 mb-8">
            <li className="flex items-start gap-2.5">
              <span className="text-primary text-sm flex-shrink-0 w-4">✉</span>
              <a
                href="mailto:info@fuji-consultancy.com"
                className="text-sm text-white/65 hover:text-primary transition-colors duration-75"
              >
                info@fuji-consultancy.com
              </a>
            </li>

            <li className="flex items-start gap-2.5">
              <span className="text-primary text-sm flex-shrink-0 w-4">✆</span>
              <a
                href="tel:+977014123456"
                className="text-sm text-white/65 hover:text-primary transition-colors duration-75"
              >
                Butwal: +977-1-4123456
              </a>
            </li>

            <li className="flex items-start gap-2.5">
              <span className="text-primary text-sm flex-shrink-0 w-4">◉</span>
              <span className="text-sm text-white/65">
                Kathmandu · Tokyo · Singapore
              </span>
            </li>
          </ul>

          <h4 className="font-bold text-xs uppercase tracking-widest text-white/40 mb-4">
            Follow Us
          </h4>

          <div className="flex gap-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61556999377426"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-11 h-11 items-center justify-center bg-white/6 rounded-lg text-white/90 hover:bg-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="Facebook"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12C22 6.477 17.523 2 12 2S2 6.477 2 12c0 4.99 3.657 9.128 8.438 9.878v-6.99H7.898v-2.888h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.888h-2.33V21.878C18.343 21.128 22 16.99 22 12z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-11 h-11 items-center justify-center bg-white/6 rounded-lg text-white/90 hover:bg-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="Instagram"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6a5 5 0 100 10 5 5 0 000-10zm6.5-3a1.5 1.5 0 11.001 3.001A1.5 1.5 0 0118.5 5z"
                  fill="currentColor"
                />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@fuji.international"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-11 h-11 items-center justify-center bg-white/6 rounded-lg text-white/90 hover:bg-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="TikTok"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.589 6.686a4.793 4.793 0 01-3.77-4.115V2h-3.193v13.766c0 1.338-1.066 2.434-2.403 2.465a2.432 2.432 0 01-2.495-2.431 2.433 2.433 0 012.431-2.431c.269 0 .527.044.768.124v-3.25a5.728 5.728 0 00-.768-.053A5.684 5.684 0 004.48 15.874 5.684 5.684 0 0010.164 21.56a5.684 5.684 0 005.684-5.684V9.356a7.977 7.977 0 004.66 1.497V7.66a4.77 4.77 0 01-.919-.974z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-3 py-5 px-4 sm:px-6 text-center md:text-left text-xs text-white/35">
          <span>© {year} FUJI International Consultancy. All rights reserved.</span>

          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-primary transition-colors duration-75">
              Privacy Policy
            </Link>

            <Link href="/contact" className="hover:text-primary transition-colors duration-75">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
