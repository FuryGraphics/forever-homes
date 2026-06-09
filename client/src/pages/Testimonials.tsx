/*
  DESIGN: Industrial Precision Noir
  Testimonials Page — /testimonials
  Target KW: Forever Home Roof Restoration Reviews Tampa Bay
*/

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp, CTASection } from "@/components/SharedComponents";

const reviews = [
  { quote: "Dominique came out the same day I called and had my leak fixed by the next morning. No runaround, no surprise charges — just honest work. My roof hasn't had a problem since.", name: "Marcus T.", service: "Roof Leak Repair — Tampa, FL" },
  { quote: "After Hurricane Idalia tore through, I was worried my whole roof needed replacing. Forever Home assessed it, restored what needed fixing, and saved me thousands. Highly recommend.", name: "Sandra R.", service: "Storm Damage Repair — Brandon, FL" },
  { quote: "The waterproofing job on my flat roof was flawless. They explained every step, cleaned up completely, and the price was exactly what they quoted. Five stars without hesitation.", name: "James K.", service: "Roof Waterproofing — Riverview, FL" },
  { quote: "I've used three different fence companies over the years and none of them came close to the quality of Forever Home's installation. The aluminum fence looks incredible and was done in one day.", name: "Patricia M.", service: "Aluminum Fence Installation — Tampa, FL" },
  { quote: "Our concrete deck was cracking and letting water into the garage below. Dominique diagnosed the problem immediately and the cement waterproofing has held up perfectly through two rainy seasons.", name: "Robert L.", service: "Cement Waterproofing — Hillsborough County" },
  { quote: "Professional, punctual, and priced fairly. Dominique walked me through exactly what needed to be done and why. I felt like I was working with someone who actually cared about my home.", name: "Angela W.", service: "Roof Restoration — Brandon, FL" },
];

export default function Testimonials() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "#0a0a0a", paddingTop: "7rem", paddingBottom: "4rem" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="section-label mb-4">Client Reviews</p>
            <h1 className="font-['DM_Sans'] font-700 text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5 max-w-3xl">
              What Tampa Bay Homeowners Say About{" "}
              <span className="silver-underline">Forever Home</span>
            </h1>
            <p className="font-['Inter'] text-[#888888] text-lg max-w-xl">
              Real reviews from real clients across Tampa Bay, Brandon, and Hillsborough County.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Rating Badge */}
      <section style={{ background: "#111111", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <FadeUp>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="text-center sm:text-left">
                <div className="font-['DM_Sans'] font-700 text-[#C0C0C0] text-5xl leading-none">5.0</div>
                <div className="flex gap-1 mt-2 justify-center sm:justify-start">
                  {[...Array(5)].map((_, i) => <span key={i} className="text-[#C0C0C0] text-xl">★</span>)}
                </div>
                <div className="font-['Inter'] text-[#888888] text-sm mt-1">Google Reviews</div>
              </div>
              <div className="w-px h-12 bg-[#2a2a2a] hidden sm:block" />
              <div>
                <p className="font-['Inter'] text-[#cccccc] text-base">Consistently rated 5 stars by Tampa Bay homeowners for roof restoration, waterproofing, and fence installation.</p>
                <a
                  href="https://g.page/r/foreverhomeroof/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-silver inline-block mt-4 text-xs"
                >
                  Leave a Google Review
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Reviews Grid */}
      <section style={{ background: "#0a0a0a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <FadeUp key={i} delay={i * 70}>
                <div className="testimonial-card h-full flex flex-col">
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, j) => <span key={j} className="text-[#C0C0C0] text-base">★</span>)}
                  </div>
                  <p className="font-['Inter'] text-[#cccccc] text-sm leading-relaxed mb-5 italic flex-1">"{r.quote}"</p>
                  <div>
                    <div className="font-['DM_Sans'] font-600 text-white text-sm">{r.name}</div>
                    <div className="font-['Inter'] text-[#888888] text-xs mt-0.5">{r.service}</div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section style={{ background: "#111111", borderTop: "1px solid #1a1a1a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FadeUp>
            <p className="section-label mb-4">Explore Our Services</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/roof-restoration" className="btn-outline-white">Roof Restoration</Link>
              <Link href="/contact" className="btn-silver">Get a Free Inspection</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <CTASection title="Ready to Join Our Happy Clients?" subtitle="Schedule your free inspection today — no pressure, no obligation." />
      <Footer />
    </div>
  );
}
