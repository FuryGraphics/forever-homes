/*
  DESIGN: Industrial Precision Noir
  About Page — /about
  Target KW: Forever Home Roof Restoration Tampa Bay Owner
*/

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp, CTASection } from "@/components/SharedComponents";

const ABOUT_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663703679771/ApJ6SdkeL34TeQYn6cKeZ7/hero-about-LWmZMzG76qTVUmpCDETzGL.webp";

const values = [
  { title: "Quality Workmanship", desc: "Every job is completed to the highest standard — no shortcuts, no cutting corners. We use professional-grade materials and proven techniques on every project." },
  { title: "Honest Pricing", desc: "You get a transparent written estimate before we start. The price you're quoted is the price you pay. No surprises, no hidden fees." },
  { title: "Long-Term Protection", desc: "We don't just fix the immediate problem — we assess the full picture and make sure your home is protected for the long term." },
];

export default function About() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section
        className="relative min-h-[50vh] flex items-end pb-16 overflow-hidden"
        style={{ background: `linear-gradient(to bottom, rgba(10,10,10,0.55) 0%, rgba(10,10,10,0.8) 60%, rgba(10,10,10,0.97) 100%), url('${ABOUT_BG}') center 20%/cover no-repeat` }}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28">
          <div className="max-w-2xl">
            <FadeUp><p className="section-label mb-4">About the Owner</p></FadeUp>
            <FadeUp delay={80}>
              <h1 className="font-['DM_Sans'] font-700 text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight">
                Meet{" "}
                <span className="silver-underline">Dominique Joseph</span>
                <br />
                — Owner, Forever Home Roof Restoration
              </h1>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section style={{ background: "#0a0a0a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <FadeUp>
              <div
                className="relative rounded-sm overflow-hidden"
                style={{
                  aspectRatio: "4/5",
                  background: `url('${ABOUT_BG}') center/cover no-repeat`,
                  border: "1px solid #1a1a1a",
                }}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.95), transparent)" }}>
                  <div className="font-['DM_Sans'] font-700 text-white text-xl">Dominique Joseph</div>
                  <div className="font-['Inter'] text-[#C0C0C0] text-xs tracking-[0.1em] uppercase mt-1">Owner & Lead Contractor</div>
                  <div className="font-['Inter'] text-[#888888] text-xs mt-0.5">Forever Home Roof Restoration LLC</div>
                </div>
              </div>
            </FadeUp>

            <FadeUp delay={120}>
              <p className="section-label mb-3">The Story</p>
              <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-6">A Contractor You Can Trust</h2>
              <div className="space-y-4 font-['Inter'] text-[#888888] text-base leading-relaxed mb-8">
                <p>
                  Dominique Joseph founded Forever Home Roof Restoration LLC with one goal — to give Tampa Bay homeowners a contractor they can genuinely trust. With hands-on expertise in roof restoration, waterproofing, and fence installation, Dominique takes a personal approach on every job: showing up, communicating clearly, and finishing what he starts.
                </p>
                <p>
                  Too many homeowners have been burned by contractors who disappear after the deposit, deliver substandard work, or pad estimates with unnecessary repairs. Dominique built Forever Home as a direct response to that experience — a company where the owner is personally involved in every project and stands behind every job.
                </p>
                <p>
                  Forever Home serves both residential and commercial clients across the Tampa Bay and Brandon area. When you call, you get Dominique — not a call center, not a subcontractor, not a salesperson. Just an experienced professional who takes pride in protecting your home.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="font-['DM_Sans'] font-700 text-white text-lg mb-4">Credentials & Commitments</h3>
                <ul className="space-y-3">
                  {[
                    "Licensed & Insured in Florida",
                    "Residential & Commercial certified",
                    "Free on-site inspections — always",
                    "Serving Tampa Bay, Brandon & surrounding areas",
                    "Transparent estimates — no hidden fees",
                    "Personal involvement on every project",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 font-['Inter'] text-[#cccccc] text-sm">
                      <span className="text-[#C0C0C0] font-700">—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-silver">Get a Free Inspection</Link>
                <Link href="/testimonials" className="btn-outline-white">Read Client Reviews</Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section style={{ background: "#111111", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <FadeUp>
            <p className="section-label mb-3">Our Values</p>
            <h2 className="font-['DM_Sans'] font-700 text-white text-3xl sm:text-4xl mb-12">Our Commitment</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeUp key={i} delay={i * 100}>
                <div className="dark-card p-8">
                  <div className="font-['DM_Sans'] font-700 text-[#C0C0C0] text-3xl mb-4 leading-none">0{i + 1}</div>
                  <h3 className="font-['DM_Sans'] font-700 text-white text-lg mb-3">{v.title}</h3>
                  <p className="font-['Inter'] text-[#888888] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section style={{ background: "#0a0a0a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FadeUp>
            <p className="section-label mb-4">Explore Our Work</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/roof-restoration" className="btn-outline-white">Roof Restoration</Link>
              <Link href="/testimonials" className="btn-outline-white">Client Reviews</Link>
              <Link href="/contact" className="btn-silver">Contact Us</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTASection title="Ready to Work with a Contractor You Can Trust?" subtitle="Schedule your free inspection with Dominique today." />
      <Footer />
    </div>
  );
}
