import React from "react";
import Link from "next/link";
import Image from "next/image";
import { SITE_INFO, FOOTER_QUICK_LINKS } from "@/data/siteData";
import { Phone, Mail, MapPin, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";
import { TriangularMotif, GeometricDivider } from "@/components/TriangularMotif";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-slate-300 relative overflow-hidden">
      <GeometricDivider />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand & Mission */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white tracking-tight">
                {SITE_INFO.name}
              </span>
              <TriangularMotif size="sm" variant="coral" direction="up" />
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {SITE_INFO.mission}
            </p>
            <div className="pt-2">
              <h5 className="text-xs font-semibold text-brand-orange uppercase tracking-wider mb-2">
                Core Values
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {SITE_INFO.coreValues.map((val) => (
                  <span
                    key={val}
                    className="inline-flex items-center text-xs bg-slate-800 text-slate-200 px-2.5 py-1 rounded-full border border-slate-700"
                  >
                    <CheckCircle2 className="w-3 h-3 text-brand-orange mr-1" />
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-1.5">
              <span>Quick Navigation</span>
              <TriangularMotif size="sm" variant="orange" direction="right" />
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {FOOTER_QUICK_LINKS.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:underline transition-colors flex items-center space-x-1"
                  >
                    <span className="text-brand-orange font-mono text-xs">&gt;</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Resources & Compliance */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-1.5">
              <span>Guidance & Legal</span>
              <TriangularMotif size="sm" variant="orange" direction="right" />
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {FOOTER_QUICK_LINKS.slice(6).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:underline transition-colors flex items-center space-x-1"
                  >
                    <span className="text-brand-orange font-mono text-xs">&gt;</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Accreditation */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center space-x-1.5">
              <span>Direct Contact</span>
              <TriangularMotif size="sm" variant="coral" direction="down" />
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start space-x-2.5">
                <Phone className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <a
                  href={`tel:${SITE_INFO.phone}`}
                  className="hover:text-white font-medium transition-colors"
                >
                  {SITE_INFO.phoneFormatted}
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <Mail className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_INFO.email}
                </a>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-brand-orange mt-0.5 flex-shrink-0" />
                <span>
                  {SITE_INFO.address}, {SITE_INFO.cityStateZip}
                </span>
              </li>
            </ul>

            <div className="pt-2 flex items-center space-x-4">
              <a
                href="https://www.bbb.org/us/wi/thiensville/profile/estate-planning/sfc-estate-coaching-llc-0694-1000053556"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity"
              >
                <div className="relative w-36 h-9 bg-slate-800 rounded p-1 border border-slate-700">
                  <Image
                    src="/assets/bbb_seal.png"
                    alt="Better Business Bureau Accredited Business"
                    fill
                    sizes="144px"
                    className="object-contain"
                  />
                </div>
              </a>
              <div className="relative w-16 h-9 rounded bg-slate-800 p-1 border border-slate-700">
                <Image
                  src="/assets/cfre_badge.png"
                  alt="Certified Gift Planning Professional"
                  fill
                  sizes="64px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            Copyright {new Date().getFullYear()} {SITE_INFO.legalName}. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy & ADA
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms and Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

