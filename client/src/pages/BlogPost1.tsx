/*
  DESIGN: Industrial Precision Noir
  Blog Post — /blog/roof-restoration-vs-replacement
  Target KW: Roof Restoration vs Replacement Tampa Bay
*/

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp, Breadcrumb, CTASection } from "@/components/SharedComponents";

export default function BlogPost1() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog", href: "/blog" }, { label: "Roof Restoration vs Replacement" }]} />

      {/* Hero */}
      <section style={{ background: "#0a0a0a", paddingTop: "5rem", paddingBottom: "3rem" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeUp>
              <div className="flex items-center gap-3 mb-5">
                <span className="font-['Inter'] text-[#C0C0C0] text-xs tracking-[0.1em] uppercase">Roof Restoration</span>
                <span className="text-[#333333]">·</span>
                <span className="font-['Inter'] text-[#555555] text-xs">November 2024</span>
              </div>
              <h1 className="font-['DM_Sans'] font-700 text-white text-4xl sm:text-5xl leading-[1.1] tracking-tight mb-5">
                Roof Restoration vs. Replacement: What Tampa Bay Homeowners Need to Know
              </h1>
              <p className="font-['Inter'] text-[#888888] text-lg leading-relaxed">
                Not all roof damage requires a full replacement. Here's how to make the right call for your home and budget.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Article */}
      <section style={{ background: "#0a0a0a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-3xl">
            <div className="w-full h-px bg-[#1a1a1a] mb-12" />

            <FadeUp>
              <div className="space-y-10 font-['Inter'] text-[#aaaaaa] text-base leading-[1.85]">

                <div>
                  <h2 className="font-['DM_Sans'] font-700 text-white text-2xl sm:text-3xl mb-4">What Is Roof Restoration?</h2>
                  <p>Roof restoration is the process of repairing, cleaning, and recoating an existing roof to extend its service life — typically by 10 to 15 years — without removing and replacing the entire roofing system. It involves targeted repairs to damaged areas, thorough cleaning to remove algae, moss, and debris, and the application of protective coatings or sealants that restore the roof's waterproofing properties.</p>
                  <p className="mt-4">Restoration is most effective when the underlying roof structure — the decking, rafters, and framing — is sound. If the bones of the roof are intact, restoration can deliver performance comparable to a new roof at a fraction of the cost.</p>
                </div>

                <div>
                  <h2 className="font-['DM_Sans'] font-700 text-white text-2xl sm:text-3xl mb-4">What Is Roof Replacement?</h2>
                  <p>Roof replacement involves removing the existing roofing system down to the decking and installing entirely new materials. It's the right choice when a roof has reached the end of its functional life, when structural damage is extensive, or when restoration would only delay an inevitable full replacement by a year or two.</p>
                  <p className="mt-4">In Florida, full roof replacements typically cost between $10,000 and $25,000 or more depending on the size, pitch, and material. The process takes 2–5 days and involves significant disruption to the home. It's a major investment — and one that's often unnecessary when restoration is a viable option.</p>
                </div>

                <div>
                  <h2 className="font-['DM_Sans'] font-700 text-white text-2xl sm:text-3xl mb-4">Which Option Makes Sense for Your Roof?</h2>
                  <p>The decision comes down to the age of your roof, the extent of the damage, and the condition of the underlying structure. As a general rule:</p>
                  <ul className="mt-4 space-y-2 pl-4">
                    {[
                      "If your roof is under 15–20 years old and the damage is surface-level, restoration is almost always the better choice.",
                      "If your roof has significant structural damage — rotted decking, compromised rafters, widespread shingle failure — replacement may be necessary.",
                      "If you've had repeated leaks that keep returning despite repairs, it may be time to evaluate whether the roof has reached the end of its life.",
                      "If your roof is over 25 years old, a thorough inspection will determine whether restoration can add meaningful years or whether replacement is the smarter long-term investment.",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#C0C0C0] mt-1 flex-shrink-0">—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="font-['DM_Sans'] font-700 text-white text-2xl sm:text-3xl mb-4">Cost Comparison in Florida</h2>
                  <p>The cost difference between restoration and replacement is significant. A professional roof restoration in the Tampa Bay area typically costs 40–60% less than a full replacement. For a 2,000 square foot home, that can mean the difference between a $4,000–$8,000 restoration and a $15,000–$22,000 replacement.</p>
                  <p className="mt-4">Restoration also has a faster ROI — the work is typically completed in 1–3 days, and the extended roof life means you're deferring the larger capital expense while maintaining full protection for your home.</p>
                </div>

                <div>
                  <h2 className="font-['DM_Sans'] font-700 text-white text-2xl sm:text-3xl mb-4">When to Call a Professional</h2>
                  <p>The only way to know for certain whether your roof needs restoration or replacement is a professional inspection. A qualified contractor will assess the condition of your shingles or membrane, check the decking for rot or structural compromise, evaluate flashing and penetrations, and give you an honest recommendation — not just the option that generates the most revenue.</p>
                  <p className="mt-4">At Forever Home Roof Restoration, every inspection is free and comes with a written assessment. We'll tell you exactly what your roof needs — and if restoration isn't the right call, we'll tell you that too.</p>
                </div>

              </div>
            </FadeUp>

            <FadeUp delay={100}>
              <div className="mt-12 p-7 dark-card">
                <p className="font-['DM_Sans'] font-700 text-white text-lg mb-3">Facing this decision?</p>
                <p className="font-['Inter'] text-[#888888] text-sm mb-5">Get a free roof inspection today — we'll give you an honest assessment and a clear recommendation.</p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-silver">Get a Free Inspection</Link>
                  <Link href="/roof-restoration" className="btn-outline-white">Roof Restoration Services</Link>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <CTASection title="Still Not Sure? Let Us Take a Look." subtitle="A free inspection is the fastest way to get a clear answer about your roof." />
      <Footer />
    </div>
  );
}
