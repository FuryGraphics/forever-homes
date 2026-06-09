/*
  DESIGN: Industrial Precision Noir
  Storm Damage Repair Sub-Page — /roof-restoration/storm-damage
  Target KW: Storm Damage Roof Repair Tampa Bay
*/

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp, Breadcrumb, CTASection, ProcessSteps, FAQAccordion } from "@/components/SharedComponents";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663703679771/ApJ6SdkeL34TeQYn6cKeZ7/hero-waterproofing-VDdMLzLAU7VHQrgE4uKmYF.webp";

const steps = [
  { number: "01", title: "Rapid Assessment", description: "We inspect your roof immediately after the storm — documenting every area of damage with photos and written reports for your insurance claim." },
  { number: "02", title: "Emergency Tarping & Stabilization", description: "If needed, we stabilize your roof immediately to prevent further water intrusion while permanent repairs are scheduled." },
  { number: "03", title: "Full Repair & Restoration", description: "Our licensed crew completes all structural and surface repairs using materials rated for Florida's wind and weather conditions." },
];

const faqs = [
  { question: "How soon should I have my roof inspected after a storm?", answer: "As soon as possible — ideally within 24–48 hours. Delaying inspection allows water to penetrate further, mold to develop, and damage to worsen. Many insurance policies also have time limits on storm damage claims." },
  { question: "Will you help with my insurance claim?", answer: "Yes. We document all storm damage thoroughly with photos and written reports. We work alongside insurance adjusters and can explain the scope of damage clearly to support your claim." },
  { question: "What types of storm damage do you repair?", answer: "We repair damage from hurricanes, tropical storms, high winds, hail, fallen trees and branches, and heavy rain. This includes missing or damaged shingles, blown-off flashing, structural damage, and water intrusion." },
  { question: "Do I need a full replacement after storm damage?", answer: "Not necessarily. Many storm-damaged roofs can be restored rather than replaced, saving thousands of dollars. Our free inspection will give you an honest assessment of what's needed." },
  { question: "What if my roof is actively leaking after a storm?", answer: "Call us immediately at (813) 590-1892. We offer emergency response for active leaks and can provide temporary tarping to protect your home while permanent repairs are arranged." },
  { question: "Are you familiar with Florida building codes for storm repairs?", answer: "Yes. All our repairs comply with Florida Building Code requirements, including wind mitigation standards for Hillsborough County and the Tampa Bay area." },
];

export default function StormDamage() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Roof Restoration", href: "/roof-restoration" }, { label: "Storm Damage Repair" }]} />

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-end pb-16 lg:pb-24 overflow-hidden"
        style={{ background: `linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.97) 100%), url('${HERO_BG}') center/cover no-repeat` }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
          <div className="max-w-3xl">
            <FadeUp><p className="section-label mb-4">Storm Damage</p></FadeUp>
            <FadeUp delay={80}>
              <h1 className="font-['DM_Sans'] font-700 text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5">
                Storm Damage Roof Repair —{" "}
                <span className="silver-underline">Tampa Bay, FL</span>
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="font-['Inter'] text-[#aaaaaa] text-lg leading-relaxed mb-8 max-w-xl">
                Trusted storm damage roof repair in Tampa Bay, FL. We handle hurricane damage, hail, and high winds. Free inspection. Call (813) 590-1892.
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
              <p className="section-label mb-3">Florida Storm Season</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">When the Storm Passes, Act Fast</h2>
              <div className="space-y-4 font-['Inter'] text-[#888888] text-base leading-relaxed">
                <p>Tampa Bay sits squarely in Florida's hurricane corridor. From June through November, homeowners face the constant threat of tropical storms, hurricanes, and severe thunderstorms that can strip shingles, crack tiles, and compromise roofing systems in minutes.</p>
                <p>The hours and days immediately following a storm are critical. Water that enters through damaged areas can saturate insulation, rot structural wood, and trigger mold growth within 48 hours. Delaying inspection and repair compounds the damage — and the cost.</p>
                <p>Forever Home Roof Restoration responds rapidly after storm events. We assess the full extent of damage, provide detailed documentation for insurance claims, and complete repairs using materials rated for Florida's wind and weather conditions.</p>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="section-label mb-3">What We Repair</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">Types of Storm Damage We Handle</h2>
              <ul className="space-y-3">
                {[
                  "Hurricane and tropical storm damage",
                  "Wind-lifted or missing shingles",
                  "Hail impact damage",
                  "Fallen tree and debris damage",
                  "Blown-off or damaged flashing",
                  "Structural damage to decking and rafters",
                  "Water intrusion and leak development",
                  "Damaged ridge caps and valleys",
                  "Gutters and fascia damage",
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
      <ProcessSteps steps={steps} title="Our Storm Damage Response Process" />

      {/* Insurance Section */}
      <section style={{ background: "#0a0a0a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <FadeUp>
              <p className="section-label mb-3">Insurance Claims</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">We Document Everything for Your Claim</h2>
              <div className="space-y-4 font-['Inter'] text-[#888888] text-base leading-relaxed">
                <p>Navigating an insurance claim after storm damage can be overwhelming. Forever Home Roof Restoration makes it easier by providing thorough, professional documentation of all damage — photos, written reports, and scope-of-work estimates that insurance adjusters can work with directly.</p>
                <p>We've helped dozens of Tampa Bay homeowners successfully navigate storm damage claims. Our documentation is detailed, accurate, and presented in the format insurers expect. We can also be present during the adjuster's inspection to ensure nothing is missed.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="btn-silver">Schedule Inspection</Link>
                <Link href="/roof-restoration/leak-repair" className="btn-outline-white">Leak Repair</Link>
                <Link href="/roof-restoration" className="btn-outline-white">Roof Restoration</Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <FAQAccordion items={faqs} title="Storm Damage Repair FAQ" />
      <CTASection title="Storm Damage? Don't Wait." subtitle="Get a free inspection and damage report today — before the next storm season arrives." />
      <Footer />
    </div>
  );
}
