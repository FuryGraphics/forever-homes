/*
  DESIGN: Industrial Precision Noir
  Fence Installation — /fence-installation
  Target KW: Fence Installation Tampa Bay Florida
*/

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp, Breadcrumb, CTASection, ProcessSteps, FAQAccordion } from "@/components/SharedComponents";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663703679771/ApJ6SdkeL34TeQYn6cKeZ7/hero-fence-W82wNmCo4FibejnDSc4QaG.webp";

const steps = [
  { number: "01", title: "Free Estimate", description: "We visit your property, take measurements, discuss your goals and budget, and provide a detailed written estimate — no pressure." },
  { number: "02", title: "Material Selection", description: "We help you choose the right fence type and material for your needs, property style, and Florida's weather conditions." },
  { number: "03", title: "Professional Installation", description: "Our crew installs your fence efficiently and cleanly, with proper post setting, alignment, and finishing for a result that lasts." },
];

const faqs = [
  { question: "What types of fences do you install?", answer: "We install wood, vinyl/PVC, chain link, aluminum, privacy fencing, and commercial-grade fencing. We can help you choose the right type for your property, budget, and Florida's climate conditions." },
  { question: "How long does fence installation take?", answer: "Most residential fence installations are completed in 1–2 days. Larger commercial projects may take longer. We'll give you a clear timeline during your free estimate." },
  { question: "What fence type is best for Florida weather?", answer: "Vinyl/PVC and aluminum are the most weather-resistant options — they won't rot, rust, or require painting. Wood fencing can work well with proper treatment and maintenance. We'll recommend the best option for your specific situation." },
  { question: "Do I need a permit for fence installation in Tampa Bay?", answer: "In most cases, yes. Permit requirements vary by municipality. We're familiar with local requirements in Tampa, Brandon, and Hillsborough County and can advise you on the process." },
  { question: "Do you install commercial fencing?", answer: "Yes. We install commercial-grade chain link, aluminum, and privacy fencing for businesses, warehouses, and commercial properties throughout the Tampa Bay area." },
  { question: "Can you repair an existing fence?", answer: "Yes. We can repair damaged sections, replace posts, fix gates, and restore fencing that has been damaged by storms, age, or impact. Contact us for a free assessment." },
];

const fenceTypes = [
  { title: "Wood Fencing", desc: "Classic privacy and picket styles. Treated for Florida's humidity and UV exposure." },
  { title: "Vinyl / PVC", desc: "Low-maintenance, weather-resistant. Never rots, rusts, or needs painting." },
  { title: "Chain Link", desc: "Durable and cost-effective for residential and commercial applications." },
  { title: "Aluminum", desc: "Elegant and rust-proof. Ideal for pool enclosures and decorative applications." },
  { title: "Privacy Fencing", desc: "Full-height panels for maximum privacy and security." },
  { title: "Commercial Fencing", desc: "Heavy-duty solutions for businesses, warehouses, and commercial properties." },
];

export default function FenceInstallation() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Fence Installation" }]} />

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end pb-16 lg:pb-24 overflow-hidden"
        style={{ background: `linear-gradient(to bottom, rgba(10,10,10,0.4) 0%, rgba(10,10,10,0.7) 55%, rgba(10,10,10,0.97) 100%), url('${HERO_BG}') center/cover no-repeat` }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
          <div className="max-w-3xl">
            <FadeUp><p className="section-label mb-4">Fence Installation</p></FadeUp>
            <FadeUp delay={80}>
              <h1 className="font-['DM_Sans'] font-700 text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5">
                Fence Installation{" "}
                <span className="silver-underline">Tampa Bay, FL</span>
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="font-['Inter'] text-[#aaaaaa] text-lg leading-relaxed mb-8 max-w-xl">
                Quality fence installation for residential and commercial properties in Tampa Bay and Brandon, FL. Free estimates. Call (813) 590-1892.
              </p>
            </FadeUp>
            <FadeUp delay={240}>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-silver">Get a Free Estimate</Link>
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
              <p className="section-label mb-3">Why Quality Fencing Matters</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">Built for Florida's Climate</h2>
              <div className="space-y-4 font-['Inter'] text-[#888888] text-base leading-relaxed">
                <p>A fence is more than a boundary marker — it's a structural element that must withstand Florida's intense sun, heavy rainfall, high humidity, and hurricane-force winds. Poorly installed fencing fails quickly in this climate, leaving properties exposed and homeowners facing costly repairs.</p>
                <p>Forever Home Roof Restoration installs fencing with the same attention to detail we bring to every roofing and waterproofing job. We use properly treated materials, set posts to the correct depth, and ensure every installation is built to last in Tampa Bay's demanding conditions.</p>
                <p>Whether you need a privacy fence for your backyard, a decorative aluminum fence around your pool, or heavy-duty commercial fencing for your business, our team delivers quality work at honest prices.</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Fence Types */}
      <section style={{ background: "#111111", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <FadeUp>
            <p className="section-label mb-3">Fence Types</p>
            <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-10">Fence Types We Install</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {fenceTypes.map((type, i) => (
              <FadeUp key={i} delay={i * 70}>
                <div className="dark-card p-6">
                  <h3 className="font-['DM_Sans'] font-700 text-white text-base mb-2">{type.title}</h3>
                  <p className="font-['Inter'] text-[#888888] text-sm leading-relaxed">{type.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Residential vs Commercial */}
      <section style={{ background: "#0a0a0a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <FadeUp>
              <div className="dark-card p-8">
                <p className="section-label mb-3">Residential</p>
                <h3 className="font-['DM_Sans'] font-700 text-white text-2xl mb-4">For Homeowners</h3>
                <p className="font-['Inter'] text-[#888888] text-sm leading-relaxed mb-5">Privacy, security, and curb appeal for your home. We install wood, vinyl, aluminum, and chain link fencing for backyards, pool enclosures, and property boundaries.</p>
                <Link href="/contact" className="btn-silver">Get a Free Estimate</Link>
              </div>
            </FadeUp>
            <FadeUp delay={100}>
              <div className="dark-card p-8">
                <p className="section-label mb-3">Commercial</p>
                <h3 className="font-['DM_Sans'] font-700 text-white text-2xl mb-4">For Businesses</h3>
                <p className="font-['Inter'] text-[#888888] text-sm leading-relaxed mb-5">Heavy-duty fencing solutions for commercial properties, warehouses, parking lots, and industrial facilities. Security and durability built for professional use.</p>
                <Link href="/contact" className="btn-silver">Get a Free Estimate</Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <ProcessSteps steps={steps} title="Our Fence Installation Process" />
      <FAQAccordion items={faqs} title="Fence Installation FAQ" />

      <section style={{ background: "#111111", borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FadeUp>
            <p className="section-label mb-4">Related Services</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/roof-restoration" className="btn-outline-white">Roof Restoration</Link>
              <Link href="/waterproofing" className="btn-outline-white">Waterproofing</Link>
              <Link href="/contact" className="btn-silver">Contact Us</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTASection title="Ready for a New Fence?" subtitle="Get a free, no-obligation estimate from Tampa Bay's trusted fence installation team." />
      <Footer />
    </div>
  );
}
