/*
  DESIGN: Industrial Precision Noir
  Shared reusable components for Forever Home Roof Restoration
  Silver accent #C0C0C0, dark backgrounds, DM Sans headings
*/

import { useEffect, useRef, ReactNode, useState } from "react";
import { Link } from "wouter";
import { ChevronDown, Phone } from "lucide-react";

// ─── Fade-Up Animation Hook ───────────────────────────────────────────────────
export function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

// ─── FadeUp Wrapper ────────────────────────────────────────────────────────────
export function FadeUp({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDelay = `${delay}ms`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`fade-up ${className}`}>
      {children}
    </div>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
interface HeroProps {
  title: ReactNode;
  subtitle?: string;
  bgImage?: string;
  showCTAs?: boolean;
  minHeight?: string;
}

export function HeroSection({ title, subtitle, bgImage, showCTAs = true, minHeight = "min-h-[70vh]" }: HeroProps) {
  return (
    <section
      className={`relative ${minHeight} flex items-end pb-16 lg:pb-24 overflow-hidden`}
      style={{
        background: bgImage
          ? `linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.95) 100%), url('${bgImage}') center/cover no-repeat`
          : "#0a0a0a",
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28">
        <div className="max-w-3xl">
          <h1 className="font-['DM_Sans'] font-700 text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5">
            {title}
          </h1>
          {subtitle && (
            <p className="font-['Inter'] text-[#aaaaaa] text-lg leading-relaxed mb-8 max-w-xl">
              {subtitle}
            </p>
          )}
          {showCTAs && (
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-silver">Get a Free Inspection</Link>
              <a href="tel:8135901892" className="btn-outline-white">Call (813) 590-1892</a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────
interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <div style={{ background: "#111111", borderBottom: "1px solid #1a1a1a" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav className="breadcrumb flex items-center gap-2 flex-wrap">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-[#333333]">/</span>}
              {item.href ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span className="text-[#C0C0C0]">{item.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </div>
  );
}

// ─── Stats Strip ──────────────────────────────────────────────────────────────
const DEFAULT_STATS = [
  { value: "500+", label: "Roofs Restored" },
  { value: "10+", label: "Years in Business" },
  { value: "Free", label: "Inspections" },
  { value: "5-Star", label: "Rated" },
];

export function StatsStrip({ stats = DEFAULT_STATS }: { stats?: { value: string; label: string }[] }) {
  return (
    <div className="stats-strip">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div className="text-center">
                <div className="font-['DM_Sans'] font-700 text-[#C0C0C0] text-2xl lg:text-3xl leading-none mb-1">
                  {stat.value}
                </div>
                <div className="font-['Inter'] text-[#888888] text-xs tracking-[0.08em] uppercase">
                  {stat.label}
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────
export function CTASection({
  title = "Ready to Protect Your Home?",
  subtitle = "Get a free, no-obligation roof inspection from Tampa Bay's trusted restoration specialists.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section style={{ background: "#111111", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <FadeUp>
          <p className="section-label mb-4">Take Action</p>
          <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-4 max-w-2xl mx-auto">
            {title}
          </h2>
          <p className="font-['Inter'] text-[#888888] text-base mb-8 max-w-lg mx-auto">{subtitle}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-silver">Get a Free Inspection</Link>
            <a href="tel:8135901892" className="btn-outline-white flex items-center gap-2">
              <Phone size={14} /> (813) 590-1892
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

// ─── FAQ Accordion ────────────────────────────────────────────────────────────
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQAccordion({ items, title = "Frequently Asked Questions" }: { items: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section style={{ background: "#0a0a0a" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeUp>
          <p className="section-label mb-3">FAQ</p>
          <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-12">{title}</h2>
        </FadeUp>
        <div className="max-w-3xl">
          {items.map((item, i) => (
            <FadeUp key={i} delay={i * 60}>
              <div className="faq-item">
                <button
                  className="w-full flex items-center justify-between py-5 text-left group"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="font-['DM_Sans'] font-600 text-white text-base group-hover:text-[#C0C0C0] transition-colors pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-[#C0C0C0] flex-shrink-0 transition-transform duration-200 ${openIndex === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openIndex === i && (
                  <div className="pb-5 pr-8">
                    <p className="font-['Inter'] text-[#888888] text-sm leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Process Steps ────────────────────────────────────────────────────────────
interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export function ProcessSteps({ steps, title = "Our Process" }: { steps: ProcessStep[]; title?: string }) {
  return (
    <section style={{ background: "#111111", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeUp>
          <p className="section-label mb-3">How It Works</p>
          <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-12">{title}</h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <FadeUp key={i} delay={i * 100}>
              <div className="flex gap-5">
                <div className="process-step-number">{step.number}</div>
                <div>
                  <h3 className="font-['DM_Sans'] font-700 text-white text-lg mb-2">{step.title}</h3>
                  <p className="font-['Inter'] text-[#888888] text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Service Cards Grid ───────────────────────────────────────────────────────
interface ServiceCard {
  number: string;
  title: string;
  description: string;
  href: string;
}

export function ServiceCardsGrid({ cards, title = "Our Services" }: { cards: ServiceCard[]; title?: string }) {
  return (
    <section style={{ background: "#0a0a0a" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeUp>
          <p className="section-label mb-3">What We Do</p>
          <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-12">{title}</h2>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <FadeUp key={i} delay={i * 80}>
              <Link href={card.href} className="service-card block p-7 group">
                <div className="font-['DM_Sans'] font-700 text-[#C0C0C0] text-3xl mb-4 leading-none">{card.number}</div>
                <h3 className="font-['DM_Sans'] font-700 text-white text-lg mb-3 leading-tight">{card.title}</h3>
                <p className="font-['Inter'] text-[#888888] text-sm leading-relaxed mb-5">{card.description}</p>
                <span className="font-['DM_Sans'] font-600 text-[#C0C0C0] text-xs tracking-[0.1em] uppercase group-hover:text-white transition-colors">
                  Learn More →
                </span>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ─────────────────────────────────────────────────────
interface Testimonial {
  quote: string;
  name: string;
  service: string;
}

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section style={{ background: "#111111", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <FadeUp>
          <p className="section-label mb-3">Client Reviews</p>
          <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-12">What Our Clients Say</h2>
        </FadeUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeUp key={i} delay={i * 80}>
              <div className="testimonial-card">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-[#C0C0C0] text-base">★</span>
                  ))}
                </div>
                <p className="font-['Inter'] text-[#cccccc] text-sm leading-relaxed mb-5 italic">"{t.quote}"</p>
                <div>
                  <div className="font-['DM_Sans'] font-600 text-white text-sm">{t.name}</div>
                  <div className="font-['Inter'] text-[#888888] text-xs mt-0.5">{t.service}</div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
