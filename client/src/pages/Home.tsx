/*
  DESIGN: Industrial Precision Noir
  Homepage — Forever Home Roof Restoration LLC
  H1: Protecting Tampa Bay Homes — One Roof at a Time
  Target KW: Roof Restoration Tampa Bay FL
*/

import { Link } from "wouter";
import { Phone, Shield, Star, Clock, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FadeUp,
  StatsStrip,
  CTASection,
  FAQAccordion,
  TestimonialsSection,
  ServiceCardsGrid,
} from "@/components/SharedComponents";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663703679771/ApJ6SdkeL34TeQYn6cKeZ7/hero-roof-restoration-Pa6MtvUZAXpsBpEQJUSXvJ.webp";

const services = [
  {
    number: "01",
    title: "Roof Restoration",
    description: "Extend your roof's life and stop leaks before they become disasters. Expert restoration for all roof types.",
    href: "/roof-restoration",
  },
  {
    number: "02",
    title: "Waterproofing",
    description: "Professional waterproofing for roofs, decks, and structures — built to handle Florida's relentless rain.",
    href: "/waterproofing",
  },
  {
    number: "03",
    title: "Cement Waterproofing",
    description: "Crystalline and membrane waterproofing for concrete structures, foundations, and commercial surfaces.",
    href: "/cement-waterproofing",
  },
  {
    number: "04",
    title: "Fence Installation",
    description: "Quality residential and commercial fencing built to withstand Florida's wind, weather, and time.",
    href: "/fence-installation",
  },
];

const testimonials = [
  {
    quote: "Dominique came out the same day I called and had my leak fixed by the next morning. No runaround, no surprise charges — just honest work. My roof hasn't had a problem since.",
    name: "Marcus T.",
    service: "Roof Leak Repair — Tampa",
  },
  {
    quote: "After Hurricane Idalia tore through, I was worried my whole roof needed replacing. Forever Home assessed it, restored what needed fixing, and saved me thousands. Highly recommend.",
    name: "Sandra R.",
    service: "Storm Damage Repair — Brandon, FL",
  },
  {
    quote: "The waterproofing job on my flat roof was flawless. They explained every step, cleaned up completely, and the price was exactly what they quoted. Five stars without hesitation.",
    name: "James K.",
    service: "Roof Waterproofing — Riverview, FL",
  },
];

const faqs = [
  {
    question: "How do I know if my roof needs restoration vs replacement?",
    answer: "If your roof is under 20 years old and the damage is limited to surface wear, leaks, or coating failure, restoration is typically the smarter and more cost-effective choice. A free inspection from our team will give you an honest assessment — we'll never recommend replacement when restoration will do the job.",
  },
  {
    question: "Do you offer free inspections?",
    answer: "Yes. Every job starts with a free, no-obligation on-site inspection. We assess your roof's condition, identify problem areas, and provide a transparent written estimate — no pressure, no hidden fees.",
  },
  {
    question: "What is the difference between waterproofing and roof restoration?",
    answer: "Roof restoration focuses on repairing structural damage, replacing worn materials, and resealing the roof surface. Waterproofing is a protective treatment — applied to roofs, decks, concrete, and walls — that creates a barrier against water intrusion. Many projects benefit from both.",
  },
  {
    question: "How long does roof restoration take?",
    answer: "Most residential roof restorations are completed in 1–3 days depending on the size and scope of work. We'll give you a clear timeline during your free inspection so you can plan accordingly.",
  },
  {
    question: "Are you licensed and insured in Florida?",
    answer: "Yes. Forever Home Roof Restoration LLC is fully licensed and insured in the state of Florida. We carry general liability and workers' compensation coverage on every job.",
  },
  {
    question: "Do you serve both residential and commercial properties?",
    answer: "Absolutely. We work with homeowners, property managers, and commercial clients across Tampa Bay, Brandon, and Hillsborough County. Our team is equipped to handle projects of any scale.",
  },
];

export default function Home() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-end pb-20 lg:pb-28 overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.7) 55%, rgba(10,10,10,0.97) 100%), url('${HERO_BG}') center/cover no-repeat`,
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28">
          <div className="max-w-3xl">
            <FadeUp>
              <p className="section-label mb-5">Tampa Bay, FL & Brandon, FL</p>
            </FadeUp>
            <FadeUp delay={80}>
              <h1 className="font-['DM_Sans'] font-700 text-white text-4xl sm:text-5xl lg:text-[3.75rem] leading-[1.05] tracking-tight mb-5">
                Protecting Tampa Bay Homes —{" "}
                <span className="silver-underline">One Roof at a Time</span>
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="font-['Inter'] text-[#aaaaaa] text-lg leading-relaxed mb-8 max-w-xl">
                Licensed roofing restoration, waterproofing & fence specialists serving Tampa Bay and Brandon, FL. Free inspections. No pressure.
              </p>
            </FadeUp>
            <FadeUp delay={240}>
              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/contact" className="btn-silver">Get a Free Inspection</Link>
                <a href="tel:8135901892" className="btn-outline-white flex items-center gap-2">
                  <Phone size={14} /> Call (813) 590-1892
                </a>
              </div>
            </FadeUp>
            <FadeUp delay={320}>
              <div className="flex flex-wrap gap-5">
                {[
                  { icon: <CheckCircle size={13} />, label: "500+ Roofs Restored" },
                  { icon: <Clock size={13} />, label: "10+ Years Experience" },
                  { icon: <Star size={13} />, label: "Free Inspections" },
                  { icon: <Shield size={13} />, label: "Licensed & Insured" },
                ].map((badge, i) => (
                  <div key={i} className="flex items-center gap-2 text-[#C0C0C0] text-xs font-['Inter'] font-500">
                    {badge.icon}
                    <span>{badge.label}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip />

      {/* Services Section */}
      <ServiceCardsGrid
        cards={services}
        title="Comprehensive Exterior Restoration Services"
      />

      {/* Service Area Band */}
      <section style={{ background: "#111111", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <p className="section-label mb-3">Service Area</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-5">
                Serving Greater Tampa Bay
              </h2>
              <p className="font-['Inter'] text-[#888888] text-base leading-relaxed mb-6">
                Forever Home Roof Restoration serves homeowners and businesses across Tampa, Brandon, Riverview, and all of Hillsborough County. Whether you're dealing with storm damage, aging shingles, or a leaking flat roof, we're your local experts — on-site fast and ready to work.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Tampa", "Brandon", "Riverview", "Hillsborough County", "Plant City", "Valrico", "Temple Terrace"].map((city) => (
                  <span key={city} className="px-3 py-1 border border-[#2a2a2a] text-[#888888] text-xs font-['Inter'] rounded-sm">
                    {city}
                  </span>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Shield size={20} />, title: "Licensed & Insured", desc: "Fully licensed in Florida with comprehensive coverage on every job." },
                  { icon: <Star size={20} />, title: "5-Star Rated", desc: "Consistently rated 5 stars by Tampa Bay homeowners on Google." },
                  { icon: <Clock size={20} />, title: "Fast Response", desc: "We respond within 24 hours and offer same-week inspections." },
                  { icon: <CheckCircle size={20} />, title: "Free Estimates", desc: "No-obligation written estimates — transparent pricing, always." },
                ].map((item, i) => (
                  <div key={i} className="dark-card p-5">
                    <div className="text-[#C0C0C0] mb-3">{item.icon}</div>
                    <h4 className="font-['DM_Sans'] font-700 text-white text-sm mb-2">{item.title}</h4>
                    <p className="font-['Inter'] text-[#888888] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section style={{ background: "#0a0a0a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <FadeUp>
              <div
                className="relative aspect-[4/5] rounded-sm overflow-hidden"
                style={{
                  background: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663703679771/ApJ6SdkeL34TeQYn6cKeZ7/hero-about-LWmZMzG76qTVUmpCDETzGL.webp') center/cover no-repeat`,
                  border: "1px solid #1a1a1a",
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.9), transparent)" }}>
                  <div className="font-['DM_Sans'] font-700 text-white text-lg">Dominique Joseph</div>
                  <div className="font-['Inter'] text-[#C0C0C0] text-xs tracking-[0.1em] uppercase mt-0.5">Owner, Forever Home Roof Restoration</div>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="section-label mb-3">About the Owner</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-5">
                Meet Dominique Joseph
              </h2>
              <p className="font-['Inter'] text-[#888888] text-base leading-relaxed mb-5">
                Dominique Joseph founded Forever Home Roof Restoration LLC with one goal — to give Tampa Bay homeowners a contractor they can genuinely trust. With hands-on expertise in roof restoration, waterproofing, and fence installation, Dominique takes a personal approach on every job: showing up, communicating clearly, and finishing what he starts.
              </p>
              <p className="font-['Inter'] text-[#888888] text-base leading-relaxed mb-7">
                Forever Home serves both residential and commercial clients across the Tampa Bay and Brandon area. When you call, you get Dominique — not a call center.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Licensed & Insured in Florida",
                  "Residential & Commercial certified",
                  "Free on-site inspections",
                  "Serving Tampa Bay, Brandon & surrounding areas",
                  "Transparent estimates — no hidden fees",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-['Inter'] text-[#cccccc]">
                    <span className="text-[#C0C0C0]">—</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="btn-silver">Learn More About Us</Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* FAQ */}
      <FAQAccordion items={faqs} />

      {/* CTA */}
      <CTASection
        title="Ready to Protect Your Home?"
        subtitle="Schedule your free, no-obligation roof inspection today. Tampa Bay's trusted restoration specialists are ready to help."
      />

      <Footer />
    </div>
  );
}
