/*
  DESIGN: Industrial Precision Noir
  Brandon, FL Service Area Page — /brandon
  Target KW: Roof Restoration Brandon Florida
*/

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp, Breadcrumb, CTASection } from "@/components/SharedComponents";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663703679771/ApJ6SdkeL34TeQYn6cKeZ7/hero-roof-restoration-Pa6MtvUZAXpsBpEQJUSXvJ.webp";

export default function Brandon() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Brandon" }]} />

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
                <span className="silver-underline">Brandon, FL</span>
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="font-['Inter'] text-[#aaaaaa] text-lg leading-relaxed mb-8 max-w-xl">
                Expert roof restoration, waterproofing, and fence installation in Brandon, FL. Free inspection. Call (813) 590-1892.
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
              <p className="section-label mb-3">Brandon, FL</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">Your Brandon Roofing Specialists</h2>
              <div className="space-y-4 font-['Inter'] text-[#888888] text-base leading-relaxed">
                <p>Brandon is one of the fastest-growing communities in the Tampa Bay area, and its rapid residential development means thousands of homes that are aging into their first major maintenance cycles. Roofs installed in the 1990s and 2000s are now reaching the age where restoration or replacement decisions need to be made.</p>
                <p>Brandon's location in eastern Hillsborough County puts it squarely in the path of Tampa Bay's afternoon storm systems. The combination of intense summer heat, daily thunderstorms, and occasional tropical systems creates significant wear on roofing systems that aren't properly maintained.</p>
                <p>Forever Home Roof Restoration serves Brandon homeowners with the same quality and honesty we bring to every job. We're familiar with the neighborhoods, the home styles, and the specific challenges Brandon's climate presents.</p>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="section-label mb-3">Services in Brandon</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">What We Offer in Brandon</h2>
              <ul className="space-y-3 mb-8">
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
              <div className="flex flex-wrap gap-3">
                <Link href="/tampa-bay" className="btn-outline-white">Tampa Bay</Link>
                <Link href="/roof-restoration" className="btn-outline-white">Roof Restoration</Link>
                <Link href="/contact" className="btn-silver">Contact Us</Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <section style={{ background: "#111111", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FadeUp>
            <div className="w-full rounded-sm overflow-hidden" style={{ height: "280px", border: "1px solid #2a2a2a" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56363.2!2d-82.2859!3d27.9378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c4a0b0f1f1f1%3A0x1234567890abcdef!2sBrandon%2C%20FL!5e0!3m2!1sen!2sus!4v1699999999999"
                width="100%" height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                title="Brandon FL Service Area"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      <CTASection title="Need Roofing Help in Brandon, FL?" subtitle="Get a free inspection from your local Brandon restoration specialists." />
      <Footer />
    </div>
  );
}
