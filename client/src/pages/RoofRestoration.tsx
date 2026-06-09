/*
  DESIGN: Industrial Precision Noir
  Roof Restoration Parent Page — /roof-restoration
  Target KW: Roof Restoration Tampa Bay Florida
*/

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FadeUp,
  Breadcrumb,
  CTASection,
  ProcessSteps,
  ServiceCardsGrid,
} from "@/components/SharedComponents";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663703679771/ApJ6SdkeL34TeQYn6cKeZ7/hero-roof-restoration-Pa6MtvUZAXpsBpEQJUSXvJ.webp";

const subServices = [
  { number: "01", title: "Roof Leak Repair", description: "Fast, accurate leak detection and repair before water damage spreads through your home.", href: "/roof-restoration/leak-repair" },
  { number: "02", title: "Storm Damage Repair", description: "Hurricane and storm damage assessment, documentation, and expert repair for Tampa Bay homes.", href: "/roof-restoration/storm-damage" },
  { number: "03", title: "Roof Coating & Sealing", description: "Protective coatings that extend roof life and improve energy efficiency in Florida's heat.", href: "/roof-restoration" },
  { number: "04", title: "Flat Roof Restoration", description: "TPO, modified bitumen, and built-up flat roof restoration for residential and commercial properties.", href: "/roof-restoration" },
];

const steps = [
  { number: "01", title: "Free Inspection", description: "We come to you — no charge, no obligation. Our team assesses your roof's condition and identifies every problem area." },
  { number: "02", title: "Custom Restoration Plan", description: "You receive a transparent written estimate with a clear scope of work, materials, and timeline. No surprises." },
  { number: "03", title: "Expert Repair & Seal", description: "Our licensed crew completes the restoration using professional-grade materials built for Florida's climate." },
];

export default function RoofRestoration() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Roof Restoration" }]} />

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end pb-16 lg:pb-24 overflow-hidden"
        style={{
          background: `linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.97) 100%), url('${HERO_BG}') center/cover no-repeat`,
        }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
          <div className="max-w-3xl">
            <FadeUp><p className="section-label mb-4">Roof Restoration</p></FadeUp>
            <FadeUp delay={80}>
              <h1 className="font-['DM_Sans'] font-700 text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5">
                Tampa Bay{" "}
                <span className="silver-underline">Roof Restoration</span>{" "}
                Specialists
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="font-['Inter'] text-[#aaaaaa] text-lg leading-relaxed mb-8 max-w-xl">
                Expert roof restoration in Tampa Bay and Brandon, FL. Extend your roof's life and stop leaks — free inspection, honest pricing.
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
          <div className="max-w-3xl">
            <FadeUp>
              <p className="section-label mb-3">Why Restore?</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">What Is Roof Restoration?</h2>
              <div className="space-y-4 font-['Inter'] text-[#888888] text-base leading-relaxed">
                <p>
                  Roof restoration is the process of repairing, cleaning, and recoating an existing roof to extend its service life — often by 10 to 15 years — without the cost and disruption of a full replacement. For Tampa Bay homeowners, restoration is frequently the smarter financial decision.
                </p>
                <p>
                  Florida's climate is uniquely demanding. Intense UV exposure degrades roofing materials faster than in most states. Humidity promotes algae, mold, and moss growth that accelerate surface breakdown. And hurricane season brings wind, rain, and debris that can compromise even a well-maintained roof in a single storm.
                </p>
                <p>
                  Forever Home Roof Restoration specializes in identifying exactly what your roof needs — and doing only that work. We restore shingles, flat roofs, tile roofs, and TPO membranes, and we back every job with honest pricing and a clear scope of work before we start.
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Sub-service Cards */}
      <ServiceCardsGrid cards={subServices} title="Roof Restoration Services" />

      {/* What We Handle */}
      <section style={{ background: "#111111", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeUp>
              <p className="section-label mb-3">Scope of Work</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">What We Handle</h2>
              <ul className="space-y-3">
                {[
                  "Shingle damage and replacement",
                  "Flat / TPO roof restoration",
                  "Tile roof restoration and re-bedding",
                  "Leak detection and targeted repair",
                  "Roof recoating and resealing",
                  "Post-storm damage assessment",
                  "Flashing repair and replacement",
                  "Ridge cap and valley repair",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-['Inter'] text-[#cccccc] text-sm">
                    <span className="text-[#C0C0C0] font-700">—</span> {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="section-label mb-3">The Case for Restoration</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">Why Restore vs Replace?</h2>
              <div className="space-y-4 font-['Inter'] text-[#888888] text-base leading-relaxed">
                <p>A full roof replacement in Florida can cost $10,000–$25,000 or more. Restoration typically costs 50–70% less and delivers comparable protection when the underlying structure is sound.</p>
                <p>Restoration also means less waste, less disruption to your home, and a faster turnaround. Most restoration jobs are completed in 1–3 days.</p>
                <p>Our free inspection will tell you honestly whether restoration or replacement is the right call for your specific situation.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-silver">Schedule Free Inspection</Link>
                <Link href="/waterproofing" className="btn-outline-white">Waterproofing Services</Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSteps steps={steps} title="Our Restoration Process" />

      {/* CTA */}
      <CTASection
        title="Is Your Roof Ready for Florida's Next Storm?"
        subtitle="Don't wait for a leak to find out. Get a free inspection from Tampa Bay's trusted restoration team."
      />

      <Footer />
    </div>
  );
}
