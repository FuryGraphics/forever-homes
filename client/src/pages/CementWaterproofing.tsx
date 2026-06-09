/*
  DESIGN: Industrial Precision Noir
  Cement Waterproofing — /cement-waterproofing
  Target KW: Cement Waterproofing Tampa Bay
*/

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp, Breadcrumb, CTASection, ProcessSteps, FAQAccordion } from "@/components/SharedComponents";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663703679771/ApJ6SdkeL34TeQYn6cKeZ7/hero-waterproofing-VDdMLzLAU7VHQrgE4uKmYF.webp";

const steps = [
  { number: "01", title: "Surface Assessment", description: "We evaluate the concrete's condition, identify cracks, voids, and existing damage, and determine the right waterproofing system." },
  { number: "02", title: "Preparation & Repair", description: "Cracks are filled, surfaces are cleaned and profiled to ensure maximum adhesion of the waterproofing treatment." },
  { number: "03", title: "Application & Curing", description: "We apply crystalline or membrane waterproofing systems using professional techniques and allow proper curing time for maximum effectiveness." },
];

const faqs = [
  { question: "What is cement waterproofing?", answer: "Cement waterproofing involves applying specialized coatings or treatments to concrete and masonry surfaces to prevent water penetration. Methods include crystalline waterproofing (which penetrates the concrete and forms crystals that block water) and membrane systems (which create a physical barrier on the surface)." },
  { question: "What's the difference between crystalline and membrane waterproofing?", answer: "Crystalline waterproofing penetrates the concrete and reacts chemically to form crystals that fill capillaries and micro-cracks — it becomes part of the concrete. Membrane waterproofing creates a flexible barrier on the surface. The right choice depends on the substrate, application, and exposure conditions." },
  { question: "What surfaces can be cement waterproofed?", answer: "Concrete roofs, retaining walls, foundations, pool surrounds, driveways, commercial floors, and any concrete or masonry surface exposed to water or moisture." },
  { question: "How long does cement waterproofing last?", answer: "Professional crystalline waterproofing can last the lifetime of the concrete structure when properly applied. Surface membrane systems typically last 10–20 years depending on exposure and maintenance." },
  { question: "Is cement waterproofing necessary in Florida?", answer: "Yes. Florida's rainfall, humidity, and occasional flooding create constant hydrostatic pressure on concrete structures. Without proper waterproofing, concrete absorbs water, which leads to spalling, rebar corrosion, and structural failure over time." },
  { question: "Can you waterproof a concrete roof?", answer: "Absolutely. Concrete flat roofs are one of our most common applications. We assess the existing surface, repair any damage, and apply the appropriate waterproofing system to create a durable, watertight barrier." },
];

export default function CementWaterproofing() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cement Waterproofing" }]} />

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end pb-16 lg:pb-24 overflow-hidden"
        style={{ background: `linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.97) 100%), url('${HERO_BG}') center/cover no-repeat` }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
          <div className="max-w-3xl">
            <FadeUp><p className="section-label mb-4">Cement Waterproofing</p></FadeUp>
            <FadeUp delay={80}>
              <h1 className="font-['DM_Sans'] font-700 text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5">
                Cement{" "}
                <span className="silver-underline">Waterproofing</span>{" "}
                Specialists — Tampa Bay, FL
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="font-['Inter'] text-[#aaaaaa] text-lg leading-relaxed mb-8 max-w-xl">
                Professional cement waterproofing services in Tampa Bay, FL. Protect your concrete structures from water damage. Free inspection.
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
              <p className="section-label mb-3">What Is It?</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">Cement Waterproofing Explained</h2>
              <div className="space-y-4 font-['Inter'] text-[#888888] text-base leading-relaxed">
                <p>Cement waterproofing is a specialized treatment applied to concrete and masonry surfaces to prevent water from penetrating the material. Unlike surface sealers, professional cement waterproofing systems — particularly crystalline treatments — work at the molecular level, becoming a permanent part of the concrete structure.</p>
                <p>In Florida, concrete faces unique challenges: constant moisture exposure, thermal cycling from extreme heat, and the corrosive effects of salt air in coastal areas. Without proper waterproofing, concrete absorbs water, which expands and contracts with temperature changes, causing cracking, spalling, and eventually structural failure.</p>
                <p>Forever Home Roof Restoration applies both crystalline and membrane waterproofing systems, selecting the right approach based on your specific structure, exposure conditions, and performance requirements.</p>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="section-label mb-3">Applications</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">Where We Apply It</h2>
              <ul className="space-y-3">
                {["Concrete roofs and flat surfaces", "Retaining walls", "Foundations and basement walls", "Pool surrounds and decks", "Commercial floors and warehouses", "Driveways and parking structures", "Balconies and terraces", "Parapet walls"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-['Inter'] text-[#cccccc] text-sm">
                    <span className="text-[#C0C0C0]">—</span> {item}
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      <ProcessSteps steps={steps} title="Our Cement Waterproofing Process" />
      <FAQAccordion items={faqs} title="Cement Waterproofing FAQ" />

      <section style={{ background: "#111111", borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FadeUp>
            <p className="section-label mb-4">Related Services</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/waterproofing" className="btn-outline-white">Waterproofing Services</Link>
              <Link href="/fence-installation" className="btn-outline-white">Fence Installation</Link>
              <Link href="/contact" className="btn-silver">Contact Us</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTASection title="Protect Your Concrete Structures." subtitle="Get a free cement waterproofing assessment from Tampa Bay's specialists." />
      <Footer />
    </div>
  );
}
