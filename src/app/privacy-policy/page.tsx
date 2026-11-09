"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, ArrowRight } from "lucide-react";
import { TriangularMotif } from "@/components/TriangularMotif";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-brand-navy to-brand-slate text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Compliance &amp; Data Rights</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Privacy Policy &amp; Accessibility Features (ADA)
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            This privacy statement provides information about how and why SFC Estate Coaching collects information about you via this website and the ways in which we use that personal information.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-10 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-navy">Personal information collection</h2>
            <p>SFC Estate Coaching may collect and use the following kinds of personal information:</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 text-xs sm:text-sm">
              <li>information you provide through the website (like a contact form)</li>
              <li>information about your use of this website</li>
              <li>information about transactions carried out over this website</li>
              <li>any other information that you send to SFC Estate Coaching</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-navy">Using personal information</h2>
            <p>SFC Estate Coaching may use your personal information to:</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 text-xs sm:text-sm">
              <li>administer this website</li>
              <li>enable you to access and use the website services</li>
              <li>supply services or send you products that you purchased/requested</li>
              <li>send to you any documents including statements and invoices</li>
              <li>collect payments from you</li>
              <li>send you communications (like emails or mailings)</li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-600">
              Where SFC Estate Coaching discloses your personal information to its agents or sub-contractors, the agent or sub-contractor in question will be obligated to use that personal information in accordance with the terms of this privacy statement.
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              SFC Estate Coaching will disclose your personal information to the extent that it is required to do so by law, in connection with any legal proceedings or prospective legal proceedings, and in order to establish, exercise, or defend its legal rights.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-navy">Securing your data</h2>
            <p>
              SFC Estate Coaching will to the best of our ability safely store all the personal information you provide. SFC Estate Coaching will take reasonable precautions to prevent the loss, misuse, or alteration of your personal information.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-navy">Privacy Statement Updates</h2>
            <p>
              SFC Estate Coaching will occasionally update this privacy policy. We will post a new version on this website when our privacy policies change. Please check this page occasionally so you are aware of any changes.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-brand-navy">Other websites</h2>
            <p>
              This website contains links to other websites and SFC Estate Coaching is not responsible for the privacy policies or practices of any third party.
            </p>
          </div>

          <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
            <h2 className="text-2xl font-bold text-brand-navy">ADA Accessibility Statement</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              SFC Estate Coaching is dedicated to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone, applying relevant accessibility standards (WCAG 2.1 Level AA). If you experience difficulty accessing any content on this website, please contact us at 414-885-4587 or info@sfcestatecoaching.com and we will assist you.
            </p>
          </div>

          <div className="pt-4">
            <Link
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-hover shadow transition-all"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

