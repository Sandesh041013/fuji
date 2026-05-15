import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [router.pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/universities", label: "Universities" },
    { href: "/services", label: "Services" },
    {
      href: "/courses",
      label: "Courses",
      dropdown: [
        { href: "/courses/jft", label: "JFT" },
        { href: "/courses/jlpt", label: "JLPT" },
        { href: "/courses/nat", label: "NAT" },
      ],
    },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  const isActive = (href) =>
    href === "/"
      ? router.pathname === "/"
      : router.pathname.startsWith(href);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-1000 h-20 transition-all duration-300 ${
      scrolled
        ? "bg-white/97 backdrop-blur-3xl shadow-sm border-b border-black/5"
        : "bg-transparent border-b border-white/8"
    }`}>
      <div className="container h-full flex items-center justify-between gap-5 px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center h-full flex-shrink-0">
          <Image
            src="/fujibigbg.png"
            alt="Fuji International Consultancy"
            width={220}
            height={80}
            className="w-auto h-auto max-h-16 object-contain block"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1 ml-auto">
          {links.map((item) => (
            <li key={item.href} className="relative group">
              <Link
                href={item.href}
                className={`relative px-3.5 py-2 text-sm font-semibold rounded-lg transition-all duration-75 ${
                  scrolled ? "text-dark hover:text-primary" : "text-white hover:text-primary"
                } ${isActive(item.href) ? (scrolled ? "text-primary" : "text-primary") : ""}`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0.5 left-3.5 right-3.5 h-0.5 bg-primary"></span>
                )}
              </Link>

              {item.dropdown && (
                <div className="absolute top-full left-0 min-w-max bg-dark border border-gray-700 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50">
                  {item.dropdown.map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className="block px-4 py-3 text-white text-sm hover:bg-dark-soft transition-colors duration-75"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="/contact"
          className="hidden lg:flex flex-shrink-0 px-5 py-3 bg-primary text-white rounded-lg text-xs font-bold transition-all duration-75 hover:-translate-y-0.5 hover:bg-primary-dark"
        >
          Get in Touch
        </Link>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden flex flex-col justify-center gap-1.5 w-10 h-10 bg-none border-0 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              scrolled ? "bg-dark" : ""
            } ${menuOpen ? (scrolled ? "-translate-y-2 rotate-45 bg-dark" : "-translate-y-2 rotate-45") : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              scrolled ? "bg-dark" : ""
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              scrolled ? "bg-dark" : ""
            } ${menuOpen ? (scrolled ? "translate-y-2 -rotate-45 bg-dark" : "translate-y-2 -rotate-45") : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-20 left-0 right-0 bg-white flex flex-col overflow-hidden transition-all duration-400 max-h-0 lg:hidden ${
          menuOpen ? "max-h-96" : ""
        }`}
      >
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`px-6 py-4 text-base font-semibold transition-all duration-75 border-0 ${
              isActive(href)
                ? "text-primary pl-7.5"
                : "text-dark hover:text-primary hover:pl-7.5"
            }`}
          >
            {label}
          </Link>
        ))}

        <Link
          href="/contact"
          className="mx-6 mb-6 mt-2 px-5 py-3.5 bg-primary text-white text-center font-bold rounded-lg text-sm transition-all duration-75"
        >
          Get in Touch →
        </Link>
      </div>
    </nav>
  );
}
