/*
  DESIGN: Industrial Precision Noir
  Waterproofing Parent Page — /waterproofing
  Target KW: Waterproofing Services Tampa Bay Florida
*/

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp, Breadcrumb, CTASection, ProcessSteps, ServiceCardsGrid } from "@/components/SharedComponents";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663703679771/ApJ6SdkeL34TeQYn6cKeZ7/hero-waterproofing-VDdMLzLAU7VHQrgE4uKmYF.webp";

const subServices = [
  { number: "01", title: "Roof Waterproofing", description: "Protective coatings and membranes for flat and low-slope roofs — built for Florida's rainfall and UV exposure.", href: "/waterproofing" },
  { number: "02", title: "Cement Waterproofing", description: "Crystalline and membrane waterproofing for concrete structures, foundations, and commercial surfaces.", href: "/cement-waterproofing" },
  { number: "03", title: "Deck & Balcony Waterproofing", description: "Prevent water intrusion through concrete decks, balconies, and parapet walls with professional-grade coatings.", href: "/waterproofing" },
];

const steps = [
  { number: "01", title: "Free Inspection & Assessment", description: "We evaluate the surface, identify existing damage, and determine the right waterproofing system for your specific structure and environment." },
  { number: "02", title: "Surface Preparation", description: "Proper prep is everything. We clean, repair cracks, and prime surfaces to ensure maximum adhesion and long-term performance." },
  { number: "03", title: "Professional Application", description: "We apply commercial-grade waterproofing materials using the correct method for your surface type — membrane, coating, or crystalline treatment." },
];

export default function Waterproofing() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Waterproofing" }]} />

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end pb-16 lg:pb-24 overflow-hidden"
        style={{ background: `linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.97) 100%), url('${HERO_BG}') center/cover no-repeat` }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
          <div className="max-w-3xl">
            <FadeUp><p className="section-label mb-4">Waterproofing</p></FadeUp>
            <FadeUp delay={80}>
              <h1 className="font-['DM_Sans'] font-700 text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5">
                Professional{" "}
                <span className="silver-underline">Waterproofing</span>{" "}
                Services in Tampa Bay
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="font-['Inter'] text-[#aaaaaa] text-lg leading-relaxed mb-8 max-w-xl">
                Expert waterproofing for roofs, decks, and structures in Tampa Bay and Brandon, FL. Stop water intrusion for good. Free inspection.
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
              <p className="section-label mb-3">Why Waterproofing Matters</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">Florida's Water Problem</h2>
              <div className="space-y-4 font-['Inter'] text-[#888888] text-base leading-relaxed">
                <p>Tampa Bay receives over 46 inches of rainfall per year — most of it concentrated in the summer months when afternoon thunderstorms are a daily occurrence. Add to that the region's high humidity, occasional flooding, and hurricane-season storm surges, and you have a climate that is uniquely hostile to unprotected structures.</p>
                <p>Water intrusion is the leading cause of structural damage in Florida homes and commercial buildings. It compromises concrete, rots wood, corrodes metal, and creates the conditions for mold growth that can make a building uninhabitable. Professional waterproofing is not optional in this climate — it's essential maintenance.</p>
                <p>Forever Home Roof Restoration provides comprehensive waterproofing services for roofs, decks, balconies, foundations, and concrete surfaces. We use commercial-grade materials and proven application methods to create barriers that last.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Sub-service Cards */}
      <ServiceCardsGrid cards={subServices} title="Waterproofing Services" />

      {/* What We Waterproof */}
      <section style={{ background: "#111111", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeUp>
              <p className="section-label mb-3">Applications</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">What We Waterproof</h2>
              <ul className="space-y-3">
                {["Flat and low-slope roofs", "Parapet walls and copings", "Concrete decks and patios", "Balconies and terraces", "Foundation walls", "Commercial surfaces and floors", "Retaining walls", "Pool surrounds and decks"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-['Inter'] text-[#cccccc] text-sm">
                    <span className="text-[#C0C0C0]">—</span> {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="section-label mb-3">The Benefits</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">Why Professional Waterproofing?</h2>
              <div className="space-y-4 font-['Inter'] text-[#888888] text-base leading-relaxed">
                <p>DIY waterproofing products rarely provide the coverage, adhesion, or longevity of professionally applied systems. Commercial-grade materials, proper surface preparation, and correct application technique are the difference between a 2-year fix and a 15-year solution.</p>
                <p>Professional waterproofing also protects your property value, reduces energy costs by preventing moisture infiltration, and provides documentation for insurance purposes.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-silver">Schedule Inspection</Link>
                <Link href="/cement-waterproofing" className="btn-outline-white">Cement Waterproofing</Link>
                <Link href="/brandon" className="btn-outline-white">Brandon, FL</Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <ProcessSteps steps={steps} title="Our Waterproofing Process" />
      <CTASection title="Stop Water Intrusion for Good." subtitle="Get a free waterproofing inspection from Tampa Bay's trusted specialists." />
      <Footer />
    </div>
  );
}
