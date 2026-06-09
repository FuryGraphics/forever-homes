/*
  DESIGN: Industrial Precision Noir
  Footer: Dark #111111 bg, 3-column layout, silver accent
*/

import { Link } from "wouter";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#111111", borderTop: "1px solid #1a1a1a" }}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="font-['DM_Sans'] font-700 text-white text-lg block leading-tight">Forever Home</span>
              <span className="font-['DM_Sans'] text-[#C0C0C0] text-xs tracking-[0.12em] uppercase">Roof Restoration LLC</span>
            </div>
            <p className="text-[#888888] text-sm font-['Inter'] leading-relaxed mb-5">
              Tampa Bay's trusted roofing restoration, waterproofing, and fence specialists. Licensed & insured in Florida.
            </p>
            <div className="space-y-2">
              <a href="tel:8135901892" className="flex items-center gap-2 text-[#C0C0C0] text-sm font-['Inter'] hover:text-white transition-colors">
                <Phone size={13} /> (813) 590-1892
              </a>
              <a href="mailto:Contact@foreverhomeroof.com" className="flex items-center gap-2 text-[#888888] text-sm font-['Inter'] hover:text-[#C0C0C0] transition-colors">
                <Mail size={13} /> Contact@foreverhomeroof.com
              </a>
              <div className="flex items-start gap-2 text-[#888888] text-sm font-['Inter']">
                <MapPin size={13} className="mt-0.5 flex-shrink-0" />
                <span>382 NE 191 St, Box 178452<br />Miami, FL 33179</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-['DM_Sans'] font-700 text-white text-xs tracking-[0.12em] uppercase mb-5">Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Roof Restoration", href: "/roof-restoration" },
                { label: "Leak Repair", href: "/roof-restoration/leak-repair" },
                { label: "Storm Damage Repair", href: "/roof-restoration/storm-damage" },
                { label: "Waterproofing", href: "/waterproofing" },
                { label: "Cement Waterproofing", href: "/cement-waterproofing" },
                { label: "Fence Installation", href: "/fence-installation" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#888888] text-sm font-['Inter'] hover:text-[#C0C0C0] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas Column */}
          <div>
            <h4 className="font-['DM_Sans'] font-700 text-white text-xs tracking-[0.12em] uppercase mb-5">Areas Served</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Tampa Bay, FL", href: "/tampa-bay" },
                { label: "Brandon, FL", href: "/brandon" },
                { label: "Hillsborough County", href: "/hillsborough-county" },
                { label: "Riverview, FL", href: "/riverview" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#888888] text-sm font-['Inter'] hover:text-[#C0C0C0] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-['DM_Sans'] font-700 text-white text-xs tracking-[0.12em] uppercase mb-5">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Reviews", href: "/testimonials" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-[#888888] text-sm font-['Inter'] hover:text-[#C0C0C0] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#555555] text-xs font-['Inter']">
            © {new Date().getFullYear()} Forever Home Roof Restoration LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-[#555555] text-xs font-['Inter'] hover:text-[#888888] transition-colors">Privacy Policy</Link>
            <span className="text-[#333333]">|</span>
            <Link href="/terms" className="text-[#555555] text-xs font-['Inter'] hover:text-[#888888] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
