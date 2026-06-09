/*
  DESIGN: Industrial Precision Noir
  Navbar: Transparent on top → solid #111111 on scroll
  Silver accent (#C0C0C0), DM Sans font, uppercase tracking
*/

import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const PHONE = "(813) 590-1892";
const PHONE_HREF = "tel:8135901892";

const services = [
  { label: "Roof Restoration", href: "/roof-restoration" },
  { label: "Leak Repair", href: "/roof-restoration/leak-repair" },
  { label: "Storm Damage Repair", href: "/roof-restoration/storm-damage" },
  { label: "Waterproofing", href: "/waterproofing" },
  { label: "Cement Waterproofing", href: "/cement-waterproofing" },
  { label: "Fence Installation", href: "/fence-installation" },
];

const areas = [
  { label: "Tampa Bay", href: "/tampa-bay" },
  { label: "Brandon, FL", href: "/brandon" },
  { label: "Hillsborough County", href: "/hillsborough-county" },
  { label: "Riverview, FL", href: "/riverview" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const [location] = useLocation();

  const servicesRef = useRef<HTMLDivElement>(null);
  const areasRef = useRef<HTMLDivElement>(null);
  const legalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setAreasOpen(false);
    setLegalOpen(false);
  }, [location]);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) setServicesOpen(false);
      if (areasRef.current && !areasRef.current.contains(e.target as Node)) setAreasOpen(false);
      if (legalRef.current && !legalRef.current.contains(e.target as Node)) setLegalOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navBg = scrolled
    ? "bg-[#111111] shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
    : "bg-transparent";

  const navLinkClass =
    "font-['DM_Sans'] font-semibold text-[0.7rem] tracking-[0.12em] uppercase text-white hover:text-[#C0C0C0] transition-colors duration-150";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
        style={{ backdropFilter: scrolled ? "blur(8px)" : "none" }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0">
              <img
                src="/logo.jpg"
                alt="Forever Home Roof Restoration Logo"
                className="h-9 w-auto"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div className="flex flex-col leading-tight">
                <span className="font-['DM_Sans'] font-700 text-white text-sm tracking-tight leading-none">
                  Forever Home
                </span>
                <span className="font-['DM_Sans'] text-[#C0C0C0] text-[0.65rem] tracking-[0.1em] uppercase leading-none mt-0.5">
                  Roof Restoration
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-7">
              <Link href="/" className={navLinkClass}>Home</Link>

              {/* Services Dropdown */}
              <div ref={servicesRef} className="relative">
                <button
                  className={`${navLinkClass} flex items-center gap-1`}
                  onClick={() => { setServicesOpen(!servicesOpen); setAreasOpen(false); setLegalOpen(false); }}
                >
                  Services <ChevronDown size={12} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-[#111111] border border-[#2a2a2a] shadow-xl">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2.5 text-[0.75rem] font-['Inter'] text-[#cccccc] hover:text-[#C0C0C0] hover:bg-[#1a1a1a] transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Areas Dropdown */}
              <div ref={areasRef} className="relative">
                <button
                  className={`${navLinkClass} flex items-center gap-1`}
                  onClick={() => { setAreasOpen(!areasOpen); setServicesOpen(false); setLegalOpen(false); }}
                >
                  Areas Served <ChevronDown size={12} className={`transition-transform duration-200 ${areasOpen ? "rotate-180" : ""}`} />
                </button>
                {areasOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-[#111111] border border-[#2a2a2a] shadow-xl">
                    {areas.map((a) => (
                      <Link
                        key={a.href}
                        href={a.href}
                        className="block px-4 py-2.5 text-[0.75rem] font-['Inter'] text-[#cccccc] hover:text-[#C0C0C0] hover:bg-[#1a1a1a] transition-colors"
                      >
                        {a.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className={navLinkClass}>About</Link>
              <Link href="/testimonials" className={navLinkClass}>Reviews</Link>
              <Link href="/contact" className={navLinkClass}>Contact</Link>

              {/* Legal Dropdown */}
              <div ref={legalRef} className="relative">
                <button
                  className={`${navLinkClass} flex items-center gap-1`}
                  onClick={() => { setLegalOpen(!legalOpen); setServicesOpen(false); setAreasOpen(false); }}
                >
                  Legal <ChevronDown size={12} className={`transition-transform duration-200 ${legalOpen ? "rotate-180" : ""}`} />
                </button>
                {legalOpen && (
                  <div className="absolute top-full left-0 mt-2 w-44 bg-[#111111] border border-[#2a2a2a] shadow-xl">
                    {legal.map((l) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        className="block px-4 py-2.5 text-[0.75rem] font-['Inter'] text-[#cccccc] hover:text-[#C0C0C0] hover:bg-[#1a1a1a] transition-colors"
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Right: Phone + CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a href={PHONE_HREF} className="flex items-center gap-2 text-[#C0C0C0] font-['DM_Sans'] font-600 text-sm hover:text-white transition-colors">
                <Phone size={14} />
                {PHONE}
              </a>
              <Link href="/contact" className="btn-silver text-[0.7rem] py-2.5 px-5">
                Free Inspection
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[#111111] border-t border-[#1a1a1a]">
            <div className="px-4 py-4 space-y-1">
              <Link href="/" className="block py-2.5 text-white font-['DM_Sans'] font-600 text-sm tracking-wide">Home</Link>
              
              <div>
                <button
                  className="flex items-center justify-between w-full py-2.5 text-white font-['DM_Sans'] font-600 text-sm tracking-wide"
                  onClick={() => setServicesOpen(!servicesOpen)}
                >
                  Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-1 pb-2">
                    {services.map((s) => (
                      <Link key={s.href} href={s.href} className="block py-1.5 text-[#888888] text-sm hover:text-[#C0C0C0]">{s.label}</Link>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <button
                  className="flex items-center justify-between w-full py-2.5 text-white font-['DM_Sans'] font-600 text-sm tracking-wide"
                  onClick={() => setAreasOpen(!areasOpen)}
                >
                  Areas Served <ChevronDown size={14} className={`transition-transform ${areasOpen ? "rotate-180" : ""}`} />
                </button>
                {areasOpen && (
                  <div className="pl-4 space-y-1 pb-2">
                    {areas.map((a) => (
                      <Link key={a.href} href={a.href} className="block py-1.5 text-[#888888] text-sm hover:text-[#C0C0C0]">{a.label}</Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/about" className="block py-2.5 text-white font-['DM_Sans'] font-600 text-sm tracking-wide">About</Link>
              <Link href="/testimonials" className="block py-2.5 text-white font-['DM_Sans'] font-600 text-sm tracking-wide">Reviews</Link>
              <Link href="/contact" className="block py-2.5 text-white font-['DM_Sans'] font-600 text-sm tracking-wide">Contact</Link>
              
              <div className="pt-3 pb-1 border-t border-[#1a1a1a]">
                <a href={PHONE_HREF} className="flex items-center gap-2 text-[#C0C0C0] font-['DM_Sans'] font-600 text-sm py-2">
                  <Phone size={14} /> {PHONE}
                </a>
                <Link href="/contact" className="btn-silver block text-center mt-2">Free Inspection</Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Floating Call Button (mobile only) */}
      <a href={PHONE_HREF} className="floating-call" aria-label="Call Now">
        <Phone size={14} />
        Call Now
      </a>
    </>
  );
}
