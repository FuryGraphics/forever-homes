/*
  DESIGN: Industrial Precision Noir
  Roof Leak Repair Sub-Page — /roof-restoration/leak-repair
  Target KW: Roof Leak Repair Tampa Bay
*/

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp, Breadcrumb, CTASection, ProcessSteps, FAQAccordion } from "@/components/SharedComponents";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663703679771/ApJ6SdkeL34TeQYn6cKeZ7/hero-roof-restoration-Pa6MtvUZAXpsBpEQJUSXvJ.webp";

const steps = [
  { number: "01", title: "Leak Detection", description: "We use systematic inspection techniques to trace leaks to their true source — not just where the water shows up inside." },
  { number: "02", title: "Targeted Repair", description: "We repair only what's damaged — no unnecessary tear-offs or upsells. Flashing, underlayment, shingles, or membrane as needed." },
  { number: "03", title: "Seal & Protect", description: "Every repair is sealed and waterproofed to prevent recurrence. We document the work so you have a clear record." },
];

const faqs = [
  { question: "How do I know if I have a roof leak?", answer: "Common signs include water stains on ceilings or walls, peeling paint near rooflines, damp attic insulation, missing or curled shingles, and granules in your gutters. If you notice any of these, call us for a free inspection." },
  { question: "Can a small leak wait?", answer: "No. Even a minor leak can cause mold growth within 24–48 hours and lead to structural wood rot over time. Florida's humidity accelerates the damage significantly. Early repair is always less expensive than delayed repair." },
  { question: "Do you repair all types of roofs?", answer: "Yes. We repair shingle, tile, flat (TPO, modified bitumen, built-up), and metal roofs. Our team has experience with all common residential and commercial roof types in the Tampa Bay area." },
  { question: "Will you work with my insurance company?", answer: "Yes. If your leak was caused by a storm or covered event, we document the damage thoroughly to support your insurance claim. We work alongside adjusters and provide detailed written reports." },
  { question: "How long does a leak repair take?", answer: "Most targeted leak repairs are completed in a single day. More extensive damage may require 2–3 days. We'll give you a clear timeline during your free inspection." },
  { question: "What causes most roof leaks in Tampa Bay?", answer: "The most common causes are storm damage (wind-lifted shingles, debris impact), failed flashing around chimneys and vents, aging sealants, and improper installation. Florida's intense UV also degrades roofing materials faster than in cooler climates." },
];

export default function LeakRepair() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Roof Restoration", href: "/roof-restoration" }, { label: "Leak Repair" }]} />

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end pb-16 lg:pb-24 overflow-hidden"
        style={{ background: `linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.97) 100%), url('${HERO_BG}') center/cover no-repeat` }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
          <div className="max-w-3xl">
            <FadeUp><p className="section-label mb-4">Leak Repair</p></FadeUp>
            <FadeUp delay={80}>
              <h1 className="font-['DM_Sans'] font-700 text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5">
                Roof Leak Repair in{" "}
                <span className="silver-underline">Tampa Bay, FL</span>
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="font-['Inter'] text-[#aaaaaa] text-lg leading-relaxed mb-8 max-w-xl">
                Fast, reliable roof leak repair in Tampa Bay and Brandon, FL. We find leaks others miss. Free inspection. Call (813) 590-1892.
              </p>
            </FadeUp>
            <FadeUp delay={240}>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-silver">Get a Free Inspection</Link>
                <a href="tel:8135901892" className="btn-outline-white">Call (813) 590-1892</a>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ background: "#0a0a0a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeUp>
              <p className="section-label mb-3">The Risk of Waiting</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">Why Roof Leaks in Florida Can't Wait</h2>
              <div className="space-y-4 font-['Inter'] text-[#888888] text-base leading-relaxed">
                <p>In Florida's subtropical climate, a roof leak is never just a minor inconvenience. The combination of intense heat, near-daily summer rainfall, and high humidity creates the perfect conditions for rapid mold growth — often within 24 to 48 hours of water intrusion.</p>
                <p>Left unaddressed, even a small leak can rot roof decking, compromise structural rafters, ruin insulation, and create health hazards from black mold. What starts as a $500 repair can become a $10,000 structural problem within a single rainy season.</p>
                <p>Forever Home Roof Restoration responds quickly because we understand the urgency. We locate the true source of the leak — not just where the water appears inside — and repair it right the first time.</p>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="section-label mb-3">Warning Signs</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">Signs You Have a Roof Leak</h2>
              <ul className="space-y-3">
                {[
                  "Water stains or discoloration on ceilings",
                  "Peeling or bubbling paint near rooflines",
                  "Damp or compressed attic insulation",
                  "Musty odors in upper rooms or attic",
                  "Visible daylight through roof boards",
                  "Missing, curled, or cracked shingles",
                  "Granules accumulating in gutters",
                  "Sagging or soft spots on the roof surface",
                  "Rust stains around flashing or vents",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-['Inter'] text-[#cccccc] text-sm">
                    <span className="text-[#C0C0C0]">—</span> {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSteps steps={steps} title="Our Leak Repair Process" />

      {/* FAQ */}
      <FAQAccordion items={faqs} title="Roof Leak Repair FAQ" />

      {/* Internal Links */}
      <section style={{ background: "#111111", borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FadeUp>
            <p className="section-label mb-4">Related Services</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/roof-restoration" className="btn-outline-white">Roof Restoration</Link>
              <Link href="/roof-restoration/storm-damage" className="btn-outline-white">Storm Damage Repair</Link>
              <Link href="/contact" className="btn-silver">Contact Us</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTASection title="Found a Leak? Don't Wait." subtitle="Get a free inspection today — we'll find the source and fix it right." />
      <Footer />
    </div>
  );
}
