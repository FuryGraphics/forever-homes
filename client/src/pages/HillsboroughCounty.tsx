/*
  DESIGN: Industrial Precision Noir
  Hillsborough County Service Area Page — /hillsborough-county
  Target KW: Roof Restoration Hillsborough County Florida
*/

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp, Breadcrumb, CTASection } from "@/components/SharedComponents";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663703679771/ApJ6SdkeL34TeQYn6cKeZ7/hero-roof-restoration-Pa6MtvUZAXpsBpEQJUSXvJ.webp";

export default function HillsboroughCounty() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Hillsborough County" }]} />

      <section
        className="relative min-h-[55vh] flex items-end pb-16 overflow-hidden"
        style={{ background: `linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.97) 100%), url('${HERO_BG}') center/cover no-repeat` }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
          <div className="max-w-3xl">
            <FadeUp><p className="section-label mb-4">Service Area</p></FadeUp>
            <FadeUp delay={80}>
              <h1 className="font-['DM_Sans'] font-700 text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5">
                Roof Restoration in{" "}
                <span className="silver-underline">Hillsborough County, FL</span>
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="font-['Inter'] text-[#aaaaaa] text-lg leading-relaxed mb-8 max-w-xl">
                Serving all of Hillsborough County with expert roof restoration, waterproofing, and fence installation. Free inspection.
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

      <section style={{ background: "#0a0a0a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeUp>
              <p className="section-label mb-3">Hillsborough County</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">Serving All of Hillsborough County</h2>
              <div className="space-y-4 font-['Inter'] text-[#888888] text-base leading-relaxed">
                <p>Hillsborough County is home to over 1.5 million residents and encompasses Tampa, Brandon, Plant City, Temple Terrace, Riverview, Valrico, and dozens of other communities. It's one of Florida's most populous counties — and one of its most storm-exposed.</p>
                <p>The county sits at the convergence of Tampa Bay's sea breezes and Florida's inland heat, creating the conditions for intense afternoon thunderstorms throughout the summer months. Combined with the region's hurricane exposure, Hillsborough County homeowners face some of the most demanding conditions for roofing and structural maintenance in the state.</p>
                <p>Forever Home Roof Restoration serves the entire county, from the urban neighborhoods of Tampa to the suburban communities of eastern Hillsborough. We bring the same quality and honesty to every job, regardless of location.</p>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="section-label mb-3">Communities We Serve</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">Hillsborough County Communities</h2>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {["Tampa", "Brandon", "Riverview", "Plant City", "Temple Terrace", "Valrico", "Seffner", "Gibsonton", "Ruskin", "Sun City Center", "Apollo Beach", "Lutz"].map((city, i) => (
                  <div key={i} className="px-3 py-2 border border-[#2a2a2a] text-[#888888] text-xs font-['Inter']">{city}</div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/tampa-bay" className="btn-outline-white">Tampa Bay</Link>
                <Link href="/brandon" className="btn-outline-white">Brandon</Link>
                <Link href="/contact" className="btn-silver">Contact Us</Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <CTASection title="Serving All of Hillsborough County" subtitle="Get a free inspection from your local Hillsborough County restoration specialists." />
      <Footer />
    </div>
  );
}
