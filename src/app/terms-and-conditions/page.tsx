"use client";

import React from "react";
import Link from "next/link";
import { FileText, ArrowRight } from "lucide-react";

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-brand-navy to-brand-slate text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
            <FileText className="w-3.5 h-3.5" />
            <span>Legal Notice</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Website Terms of Use
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            Please read these terms carefully before using the SFC Estate Coaching website.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8 text-slate-700 text-sm sm:text-base leading-relaxed">
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-brand-navy">No warranties</h2>
            <p>
              SFC Estate Planning makes no representations or warranties in relation to this website or the information and materials provided on this website. This website is provided "as is" without any representations or warranties, express or implied.
            </p>
            <p>
              SFC Estate Planning also does not warrant this website will be constantly available, or available at all nor is there a promise that the information on this website is complete or without error.
            </p>
            <p className="font-semibold text-brand-navy">
              Nothing on this website constitutes or is meant to constitute advice of any kind.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-brand-navy">Limitations of liability</h2>
            <p>
              SFC Estate Planning will not be liable to you in relation to the contents or use of this website or in any other connection with this website including but not limited to any direct loss, any loss be it indirect, special, or consequential loss; or any non-tangible losses including reputation, goodwill, etc.
            </p>
            <p>
              These limitations of liability apply even if SFC Estate Planning has been expressly advised of the potential loss.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-brand-navy">Exceptions</h2>
            <p>
              Nothing in this website disclaimer will exclude or limit any warranty mandated by law.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-brand-navy">Reasonableness</h2>
            <p>
              By using this website, you agree that the exclusions and limitations of liability set out in this website disclaimer are reasonable. If you do not think these exclusions or limitations are reasonable, you must not use this website in any way.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-brand-navy">Other parties</h2>
            <p>
              You accept that, as a limited liability entity, SFC Estate Planning has an interest in limiting the personal liability of its officers and employees. You agree that you will not bring any claim personally against SFC Estate Planning's officers or employees in respect of any losses you suffer in connection with the website. You agree that the limitations of warranties and liability set out in this website disclaimer will protect SFC Estate Planning's officers, employees, agents, subsidiaries, successors, assigns and sub-contractors as well as SFC Estate Planning.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-brand-navy">Unenforceable provisions</h2>
            <p>
              If any provision of this website disclaimer is, or is found to be, unenforceable under applicable law, that will not affect the enforceability of the other provisions of this website disclaimer.
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

