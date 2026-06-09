/*
  DESIGN: Industrial Precision Noir
  Terms of Service — /terms
*/

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/SharedComponents";

export default function Terms() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <section style={{ background: "#0a0a0a", paddingTop: "7rem", paddingBottom: "5rem" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeUp>
              <p className="section-label mb-4">Legal</p>
              <h1 className="font-['DM_Sans'] font-700 text-white text-4xl sm:text-5xl mb-8">Terms of Service</h1>
              <div className="space-y-8 font-['Inter'] text-[#888888] text-base leading-relaxed">
                <div>
                  <p className="font-['Inter'] text-[#555555] text-sm mb-6">Last updated: November 2024</p>
                  <p>By accessing and using the Forever Home Roof Restoration LLC website (foreverhomeroof.com), you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this website.</p>
                </div>
                <div>
                  <h2 className="font-['DM_Sans'] font-700 text-white text-xl mb-3">Use of Website</h2>
                  <p>This website is provided for informational purposes about our roofing restoration, waterproofing, and fence installation services. You may use this website to learn about our services, contact us for estimates, and access educational content about roofing and home maintenance.</p>
                </div>
                <div>
                  <h2 className="font-['DM_Sans'] font-700 text-white text-xl mb-3">Service Estimates</h2>
                  <p>Information provided on this website, including general cost ranges and timelines, is for informational purposes only. Actual estimates are provided in writing following an on-site inspection. All estimates are subject to change based on the actual scope of work required.</p>
                </div>
                <div>
                  <h2 className="font-['DM_Sans'] font-700 text-white text-xl mb-3">Intellectual Property</h2>
                  <p>All content on this website, including text, images, and design, is the property of Forever Home Roof Restoration LLC and is protected by applicable copyright and trademark laws. You may not reproduce or distribute any content without written permission.</p>
                </div>
                <div>
                  <h2 className="font-['DM_Sans'] font-700 text-white text-xl mb-3">Limitation of Liability</h2>
                  <p>Forever Home Roof Restoration LLC makes no warranties about the accuracy or completeness of information on this website. We are not liable for any damages arising from your use of this website or reliance on its content.</p>
                </div>
                <div>
                  <h2 className="font-['DM_Sans'] font-700 text-white text-xl mb-3">Contact</h2>
                  <p>Questions about these terms? Contact us at <a href="mailto:Contact@foreverhomeroof.com" className="text-[#C0C0C0] hover:text-white transition-colors">Contact@foreverhomeroof.com</a>.</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
