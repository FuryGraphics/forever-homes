/*
  DESIGN: Industrial Precision Noir
  Tampa Bay Service Area Page — /tampa-bay
  Target KW: Roof Restoration Tampa Bay Florida
*/

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp, Breadcrumb, CTASection } from "@/components/SharedComponents";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663703679771/ApJ6SdkeL34TeQYn6cKeZ7/hero-roof-restoration-Pa6MtvUZAXpsBpEQJUSXvJ.webp";

export default function TampaBay() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Tampa Bay" }]} />

      {/* Hero */}
      <section
        className="relative min-h-[55vh] flex items-end pb-16 overflow-hidden"
        style={{ background: `linear-gradient(to bottom, rgba(10,10,10,0.5) 0%, rgba(10,10,10,0.75) 60%, rgba(10,10,10,0.97) 100%), url('${HERO_BG}') center/cover no-repeat` }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
          <div className="max-w-3xl">
            <FadeUp><p className="section-label mb-4">Service Area</p></FadeUp>
            <FadeUp delay={80}>
              <h1 className="font-['DM_Sans'] font-700 text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5">
                Roof Restoration & Waterproofing in{" "}
                <span className="silver-underline">Tampa Bay, FL</span>
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="font-['Inter'] text-[#aaaaaa] text-lg leading-relaxed mb-8 max-w-xl">
                Forever Home Roof Restoration serves all of Tampa Bay, FL with expert roof restoration, waterproofing, and fence installation.
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

      {/* Content */}
      <section style={{ background: "#0a0a0a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            <FadeUp>
              <p className="section-label mb-3">Local Expertise</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">Serving Tampa Bay Homeowners</h2>
              <div className="space-y-4 font-['Inter'] text-[#888888] text-base leading-relaxed">
                <p>Tampa Bay is one of Florida's most vibrant and growing metro areas — and one of its most weather-challenged. From the historic neighborhoods of South Tampa and Hyde Park to the newer developments in New Tampa and Westchase, homes throughout the region face the same relentless combination of intense UV, high humidity, and seasonal storms that accelerate roof and structure deterioration.</p>
                <p>Forever Home Roof Restoration has been serving Tampa Bay homeowners with expert roof restoration, waterproofing, and fence installation. We understand the local climate, the building styles common to the area, and the specific challenges that Tampa Bay's weather presents to residential and commercial structures.</p>
                <p>Whether you're in South Tampa, North Tampa, East Tampa, or the surrounding communities, our team provides the same quality workmanship and honest pricing on every job.</p>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="section-label mb-3">Tampa Bay Storm Risk</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">Hillsborough County Homeowners</h2>
              <div className="space-y-4 font-['Inter'] text-[#888888] text-base leading-relaxed">
                <p>Hillsborough County sits in the heart of Florida's lightning capital and hurricane corridor. The combination of afternoon thunderstorms, tropical systems, and the occasional direct hurricane hit means Tampa Bay roofs face more stress than almost anywhere else in the country.</p>
                <p>Regular inspection and proactive maintenance are the most cost-effective ways to protect your home. A small issue caught early — a cracked shingle, a failing sealant, a compromised flashing — costs a fraction of the damage that results from ignoring it through a storm season.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/roof-restoration" className="btn-outline-white">Roof Restoration</Link>
                <Link href="/waterproofing" className="btn-outline-white">Waterproofing</Link>
                <Link href="/brandon" className="btn-outline-white">Brandon, FL</Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ background: "#111111", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FadeUp>
            <h2 className="font-['DM_Sans'] font-700 text-white text-2xl mb-6">Tampa Bay Service Area</h2>
            <div className="w-full rounded-sm overflow-hidden" style={{ height: "300px", border: "1px solid #2a2a2a" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225688.8185!2d-82.4571!3d27.9506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1699999999999"
                width="100%" height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Tampa Bay Service Area"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Services */}
      <section style={{ background: "#0a0a0a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FadeUp>
            <p className="section-label mb-3">Available in Tampa Bay</p>
            <h2 className="font-['DM_Sans'] font-700 text-white text-2xl mb-6">Services We Provide in Tampa Bay</h2>
            <ul className="space-y-3">
              {[
                { label: "Roof Restoration", href: "/roof-restoration" },
                { label: "Roof Leak Repair", href: "/roof-restoration/leak-repair" },
                { label: "Storm Damage Repair", href: "/roof-restoration/storm-damage" },
                { label: "Waterproofing", href: "/waterproofing" },
                { label: "Cement Waterproofing", href: "/cement-waterproofing" },
                { label: "Fence Installation", href: "/fence-installation" },
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="flex items-center gap-3 font-['Inter'] text-[#cccccc] text-sm hover:text-[#C0C0C0] transition-colors">
                    <span className="text-[#C0C0C0]">—</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </section>

      <CTASection title="Need Roofing Help in Tampa Bay?" subtitle="Get a free inspection from your local Tampa Bay restoration specialists." />
      <Footer />
    </div>
  );
}
