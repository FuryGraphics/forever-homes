/*
  DESIGN: Industrial Precision Noir
  Riverview, FL Service Area Page — /riverview
  Target KW: Roof Restoration Riverview Florida
*/

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp, Breadcrumb, CTASection } from "@/components/SharedComponents";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663703679771/ApJ6SdkeL34TeQYn6cKeZ7/hero-waterproofing-VDdMLzLAU7VHQrgE4uKmYF.webp";

export default function Riverview() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Riverview" }]} />

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
                <span className="silver-underline">Riverview, FL</span>
              </h1>
            </FadeUp>
            <FadeUp delay={160}>
              <p className="font-['Inter'] text-[#aaaaaa] text-lg leading-relaxed mb-8 max-w-xl">
                Expert roof restoration, waterproofing, and fence installation in Riverview, FL. Free inspection. Call (813) 590-1892.
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
              <p className="section-label mb-3">Riverview, FL</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">Riverview's Trusted Roofing Contractor</h2>
              <div className="space-y-4 font-['Inter'] text-[#888888] text-base leading-relaxed">
                <p>Riverview is one of the fastest-growing communities in Hillsborough County, with thousands of new homes built over the past decade alongside established neighborhoods that are now reaching critical maintenance milestones. Whether your home is newly built or approaching its second decade, professional roof inspection and maintenance is essential in Florida's climate.</p>
                <p>Riverview's proximity to the Alafia River and Tampa Bay means it's exposed to significant moisture and occasional flooding risk. Proper waterproofing and roof maintenance are especially important for homes in this area.</p>
                <p>Forever Home Roof Restoration serves Riverview homeowners with the same quality and honesty we bring to every job across the Tampa Bay area. We're on-site fast, we communicate clearly, and we stand behind our work.</p>
              </div>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="section-label mb-3">Services in Riverview</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">What We Offer in Riverview</h2>
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
                <Link href="/hillsborough-county" className="btn-outline-white">Hillsborough County</Link>
                <Link href="/brandon" className="btn-outline-white">Brandon</Link>
                <Link href="/contact" className="btn-silver">Contact Us</Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <CTASection title="Need Roofing Help in Riverview, FL?" subtitle="Get a free inspection from your local Riverview restoration specialists." />
      <Footer />
    </div>
  );
}
