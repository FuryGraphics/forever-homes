/*
  DESIGN: Industrial Precision Noir
  Privacy Policy — /privacy
*/

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/SharedComponents";

export default function Privacy() {
  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />
      <section style={{ background: "#0a0a0a", paddingTop: "7rem", paddingBottom: "5rem" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeUp>
              <p className="section-label mb-4">Legal</p>
              <h1 className="font-['DM_Sans'] font-700 text-white text-4xl sm:text-5xl mb-8">Privacy Policy</h1>
              <div className="space-y-8 font-['Inter'] text-[#888888] text-base leading-relaxed">
                <div>
                  <p className="font-['Inter'] text-[#555555] text-sm mb-6">Last updated: November 2024</p>
                  <p>Forever Home Roof Restoration LLC ("we," "us," or "our") operates the website foreverhomeroof.com. This page informs you of our policies regarding the collection, use, and disclosure of personal information when you use our website.</p>
                </div>
                <div>
                  <h2 className="font-['DM_Sans'] font-700 text-white text-xl mb-3">Information We Collect</h2>
                  <p>We collect information you provide directly to us, such as when you fill out a contact form, request an inspection, or communicate with us by phone or email. This may include your name, phone number, email address, and property address.</p>
                </div>
                <div>
                  <h2 className="font-['DM_Sans'] font-700 text-white text-xl mb-3">How We Use Your Information</h2>
                  <p>We use the information we collect to respond to your inquiries, schedule inspections and services, communicate with you about your project, and improve our website and services. We do not sell or share your personal information with third parties for marketing purposes.</p>
                </div>
                <div>
                  <h2 className="font-['DM_Sans'] font-700 text-white text-xl mb-3">Cookies and Analytics</h2>
                  <p>Our website may use cookies and analytics tools to understand how visitors use the site. This information is used in aggregate to improve the website experience. You can disable cookies in your browser settings.</p>
                </div>
                <div>
                  <h2 className="font-['DM_Sans'] font-700 text-white text-xl mb-3">Contact</h2>
                  <p>If you have questions about this privacy policy, contact us at <a href="mailto:Contact@foreverhomeroof.com" className="text-[#C0C0C0] hover:text-white transition-colors">Contact@foreverhomeroof.com</a> or call <a href="tel:8135901892" className="text-[#C0C0C0] hover:text-white transition-colors">(813) 590-1892</a>.</p>
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
