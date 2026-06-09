/*
  DESIGN: Industrial Precision Noir
  Blog Index — /blog
  Target KW: Roofing Tips Tampa Bay Florida Blog
*/

import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp, CTASection } from "@/components/SharedComponents";

const posts = [
  {
    title: "How to Tell If Your Roof Needs Restoration or Replacement",
    excerpt: "Not all roof damage requires a full replacement. Learn the key signs that separate a restorable roof from one that needs to go.",
    href: "/blog/roof-restoration-vs-replacement",
    date: "November 2024",
    category: "Roof Restoration",
  },
  {
    title: "What to Do After a Hurricane Damages Your Roof in Florida",
    excerpt: "The hours after a storm are critical. Here's exactly what Tampa Bay homeowners should do to protect their home and their insurance claim.",
    href: "/blog",
    date: "October 2024",
    category: "Storm Damage",
  },
  {
    title: "The Complete Guide to Waterproofing Your Home in Tampa Bay",
    excerpt: "Florida's rainfall and humidity make waterproofing essential — not optional. This guide covers every surface you should protect.",
    href: "/blog",
    date: "September 2024",
    category: "Waterproofing",
  },
  {
    title: "Why Tampa Bay Homes Need Professional Fence Installation",
    excerpt: "Florida's climate is brutal on fencing. Learn why material selection and professional installation make all the difference.",
    href: "/blog",
    date: "August 2024",
    category: "Fence Installation",
  },
  {
    title: "5 Signs Your Concrete Needs Waterproofing Treatment",
    excerpt: "Cracking, staining, and efflorescence are warning signs. Here's how to identify concrete that needs professional waterproofing before damage spreads.",
    href: "/blog",
    date: "July 2024",
    category: "Cement Waterproofing",
  },
  {
    title: "How Long Does Roof Restoration Take? A Florida Homeowner's Guide",
    excerpt: "Timeline, process, and what to expect — a clear guide for Tampa Bay homeowners considering roof restoration.",
    href: "/blog",
    date: "June 2024",
    category: "Roof Restoration",
  },
];

export default function Blog() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "#0a0a0a", paddingTop: "7rem", paddingBottom: "4rem" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="section-label mb-4">Roofing Tips & Guides</p>
            <h1 className="font-['DM_Sans'] font-700 text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-5 max-w-3xl">
              Roofing & Waterproofing{" "}
              <span className="silver-underline">Tips</span>{" "}
              for Tampa Bay Homeowners
            </h1>
            <p className="font-['Inter'] text-[#888888] text-lg max-w-xl">
              Straight talk on protecting your home — from Tampa Bay's restoration specialists.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Blog Grid */}
      <section style={{ background: "#0a0a0a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <FadeUp key={i} delay={i * 70}>
                <Link href={post.href} className="block service-card group h-full">
                  <div className="p-7 flex flex-col h-full">
                    <div className="border-t-2 border-[#C0C0C0] pt-5 mb-4">
                      <span className="font-['Inter'] text-[#C0C0C0] text-xs tracking-[0.1em] uppercase">{post.category}</span>
                    </div>
                    <h2 className="font-['DM_Sans'] font-700 text-white text-lg leading-tight mb-3 group-hover:text-[#C0C0C0] transition-colors flex-1">
                      {post.title}
                    </h2>
                    <p className="font-['Inter'] text-[#888888] text-sm leading-relaxed mb-5">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-['Inter'] text-[#555555] text-xs">{post.date}</span>
                      <span className="font-['DM_Sans'] font-600 text-[#C0C0C0] text-xs tracking-[0.1em] uppercase group-hover:text-white transition-colors">
                        Read More →
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Have a Roofing Problem? Get a Free Inspection." subtitle="Our team is ready to assess your roof and give you honest answers." />
      <Footer />
    </div>
  );
}
