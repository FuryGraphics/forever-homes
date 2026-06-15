/*
  DESIGN: Industrial Precision Noir
  Contact Page — /contact
  Target KW: Free Roof Inspection Tampa Bay FL
*/

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FadeUp } from "@/components/SharedComponents";
import { Phone, Mail, MapPin, Clock, CheckCircle, Star } from "lucide-react";

const FORM_EMBED_SCRIPT_ID = "leadconnector-form-embed";

export default function Contact() {
  // Load the LeadConnector form embed script (handles iframe auto-resizing).
  useEffect(() => {
    if (document.getElementById(FORM_EMBED_SCRIPT_ID)) return;
    const script = document.createElement("script");
    script.id = FORM_EMBED_SCRIPT_ID;
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>
      <Navbar />

      {/* Hero */}
      <section style={{ background: "#0a0a0a", paddingTop: "7rem", paddingBottom: "3rem" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <p className="section-label mb-4">Contact Us</p>
            <h1 className="font-['DM_Sans'] font-700 text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-4 max-w-2xl">
              Get Your{" "}
              <span className="silver-underline">Free Roof Inspection</span>{" "}
              Today
            </h1>
            <p className="font-['Inter'] text-[#888888] text-lg max-w-lg">
              No pressure. No obligation. Just honest answers about your roof.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Form + Contact Details */}
      <section style={{ background: "#0a0a0a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeUp>
              <div className="dark-card p-8">
                <h2 className="font-['DM_Sans'] font-700 text-white text-2xl mb-6">Send Us a Message</h2>
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/HtxhvqxJj4Ol1hE6bO5T"
                  style={{ width: "100%", height: "503px", border: "none", borderRadius: "10px" }}
                  id="inline-HtxhvqxJj4Ol1hE6bO5T"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Website Form (Forever Home Roof Restoration LLC)"
                  data-height="503"
                  data-layout-iframe-id="inline-HtxhvqxJj4Ol1hE6bO5T"
                  data-form-id="HtxhvqxJj4Ol1hE6bO5T"
                  title="Website Form (Forever Home Roof Restoration LLC)"
                />
              </div>
            </FadeUp>

            {/* Contact Details */}
            <FadeUp delay={120}>
              <div className="space-y-5">
                <div className="dark-card p-7">
                  <h3 className="font-['DM_Sans'] font-700 text-white text-lg mb-5">Contact Information</h3>
                  <div className="space-y-4">
                    <a href="tel:8135901892" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center flex-shrink-0 group-hover:border-[#C0C0C0] transition-colors">
                        <Phone size={16} className="text-[#C0C0C0]" />
                      </div>
                      <div>
                        <div className="font-['Inter'] text-[#888888] text-xs uppercase tracking-wide mb-0.5">Phone</div>
                        <div className="font-['DM_Sans'] font-600 text-white text-base">(813) 590-1892</div>
                      </div>
                    </a>
                    <a href="mailto:Contact@foreverhomeroof.com" className="flex items-center gap-4 group">
                      <div className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center flex-shrink-0 group-hover:border-[#C0C0C0] transition-colors">
                        <Mail size={16} className="text-[#C0C0C0]" />
                      </div>
                      <div>
                        <div className="font-['Inter'] text-[#888888] text-xs uppercase tracking-wide mb-0.5">Email</div>
                        <div className="font-['DM_Sans'] font-600 text-white text-sm">Contact@foreverhomeroof.com</div>
                      </div>
                    </a>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                        <MapPin size={16} className="text-[#C0C0C0]" />
                      </div>
                      <div>
                        <div className="font-['Inter'] text-[#888888] text-xs uppercase tracking-wide mb-0.5">Address</div>
                        <div className="font-['Inter'] text-[#cccccc] text-sm">382 NE 191 St, Box 178452<br />Miami, FL 33179</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 border border-[#2a2a2a] flex items-center justify-center flex-shrink-0">
                        <Clock size={16} className="text-[#C0C0C0]" />
                      </div>
                      <div>
                        <div className="font-['Inter'] text-[#888888] text-xs uppercase tracking-wide mb-0.5">Hours</div>
                        <div className="font-['Inter'] text-[#cccccc] text-sm">Mon–Sat 7am–6pm</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Area */}
                <div className="dark-card p-6">
                  <h4 className="font-['DM_Sans'] font-700 text-white text-sm mb-2">Service Area</h4>
                  <p className="font-['Inter'] text-[#888888] text-sm">Tampa Bay & Brandon, FL — including Hillsborough County, Riverview, Plant City, and surrounding areas.</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section style={{ background: "#111111", borderTop: "1px solid #1a1a1a", borderBottom: "1px solid #1a1a1a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <FadeUp>
            <h2 className="font-['DM_Sans'] font-700 text-white text-2xl mb-6">Our Service Area</h2>
            <div className="w-full rounded-sm overflow-hidden" style={{ height: "350px", border: "1px solid #2a2a2a" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225688.8185!2d-82.4571!3d27.9506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b782b3b9d1e1%3A0xa75f1389af96b463!2sTampa%2C%20FL!5e0!3m2!1sen!2sus!4v1699999999999"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Forever Home Roof Restoration Service Area — Tampa Bay, FL"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Info Cards */}
      <section style={{ background: "#0a0a0a" }}>
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { icon: <Clock size={20} />, title: "Response Time", desc: "We respond to all inquiries within 24 hours. Urgent calls get same-day response." },
              { icon: <CheckCircle size={20} />, title: "Inspections: Always Free", desc: "Every job starts with a free, no-obligation on-site inspection and written estimate." },
              { icon: <Star size={20} />, title: "Service Area", desc: "Tampa Bay & Brandon, FL — serving all of Hillsborough County and surrounding areas." },
            ].map((card, i) => (
              <FadeUp key={i} delay={i * 80}>
                <div className="dark-card p-6">
                  <div className="text-[#C0C0C0] mb-3">{card.icon}</div>
                  <h4 className="font-['DM_Sans'] font-700 text-white text-sm mb-2">{card.title}</h4>
                  <p className="font-['Inter'] text-[#888888] text-xs leading-relaxed">{card.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
