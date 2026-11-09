"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FAQS_DATA } from "@/data/siteData";
import {
  User,
  Calendar,
  CheckCircle2,
  ShieldCheck,
  DollarSign,
  BookOpen,
  ArrowRight,
  Clock,
  HelpCircle,
  FileCheck
} from "lucide-react";
import { TriangularMotif } from "@/components/TriangularMotif";
import { BookingModal } from "@/components/BookingModal";
import { ProcessStepper } from "@/components/ProcessStepper";

export default function HelpForIndividualsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero Header */}
      <section className="bg-gradient-to-r from-brand-navy to-brand-slate text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
            <User className="w-3.5 h-3.5" />
            <span>Donor & Individual Guidance</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Estate Planning to Help Individuals
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed mb-8">
            We walk you through the completion of a personalized estate plan. We have the knowledge to guide you through all the questions that you will need to answer regarding your estate and we stick with you until the complete process is finished.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-hover shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Schedule Free Appointment</span>
            </button>
            <Link
              href="/contact-us"
              className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
            >
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Narrative & FAQ Content Preserving Exact Wording */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* What is Estate Planning */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <div className="flex items-center space-x-2 text-xs font-bold text-brand-orange uppercase tracking-wider">
                <TriangularMotif size="sm" variant="orange" direction="right" />
                <span>Foundational Understanding</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
                What is Estate Planning?
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Estate Planning is simply writing down answers to important decisions regarding end-of-life issues. It normally includes preparing a will and covers what happens to your estate, gift planning, guardianship desires if you are currently a parent or guardian of minors, and other important decisions. When you are done, you will have all the information together for the decisions you have made in one place ready to be finalized by a lawyer into legally binding documents.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                <Image
                  src="/assets/couple_planning.jpg"
                  alt="Couple reviewing estate planning"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* How Does the Estate Planning Process Work */}
          <div className="bg-slate-50 rounded-2xl p-8 sm:p-10 border border-slate-200 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-bold text-brand-orange uppercase tracking-wider">
              <TriangularMotif size="sm" variant="coral" direction="right" />
              <span>Step-by-Step Overview</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              How Does the Estate Planning Process Work?
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Every donor will go through a two-step process to become attorney ready. You will still want to meet with an attorney to finalize your will and estate plan (and we can recommend one for you too).
            </p>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              We have two appointments with you that will be approximately 60-90 minutes in length. It is important to note that each meeting will be completely confidential. We will also make any necessary follow up phone calls or emails to ensure you are ready for each step of the way.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center space-x-2 text-brand-orange font-bold text-sm mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Confidentiality Guaranteed</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The information gathered and presented will be kept confidential between your Estate Coach and you the donor. Potential gifts will only be shared with organization after/if the Donor signs Permission Form if the donor desires to share his or her decision.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center space-x-2 text-brand-navy font-bold text-sm mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>No Pressure Tactics</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No pressure tactics to give, you give only by choice. Our job is to guide you through the process of estate planning, not tell you what to do with your estate. We let you know the pros and cons of any potential decision but you stay in complete control of your estate.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center space-x-2 text-brand-navy font-bold text-sm mb-2">
                  <User className="w-4 h-4 text-brand-slate" />
                  <span>Works for Anyone</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The program works regardless of age, income, or estate value. Whether you are 18 or 81, wealthy or just getting by, you can still be a blessing by planning your estate. Most people are surprised at all their options and how much they have available to pass on to the next generation.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-center space-x-2 text-brand-orange font-bold text-sm mb-2">
                  <BookOpen className="w-4 h-4" />
                  <span>Educational Approach</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We are big on educating you on your will, trust and estate plans...at least as much as you want to learn. We were founded by a career educator and his passion to teach carries on throughout the organization. What this means is we will spend the time with you to help you understand your options, you will never be asked to just "trust us." Instead you will understand every aspect of estate planning you would like to know about.
                </p>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-xs text-amber-900 leading-relaxed">
              <span className="font-bold block mb-1">Unlocking Surprising Giving Potential:</span>
              Your potential to give far beyond most imagination. There have been many people we have helped plan their estate whom thought they were worth "nothing," yet found out they had over $500,000 to pass on after they die. You have many options to ensure your money goes to the people and organizations you care about instead of the government...but only if you plan and put everything in place. Ensure you leave a legacy instead of paying taxes on the money you earned twice. You usually save time and attorney costs because the documentation is all ready to drop into a formalized will.
            </div>
          </div>

          {/* Interactive Stepper Visualizer */}
          <div className="pt-4">
            <ProcessStepper initialType="individuals" onBookClick={() => setBookingOpen(true)} />
          </div>

          {/* Why Work with SFC Estate Coaching */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-xs font-bold text-brand-orange uppercase tracking-wider">
              <TriangularMotif size="sm" variant="orange" direction="right" />
              <span>Core Benefits</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Why Work with SFC Estate Coaching for Estate Planning?
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              We walk you through completion of a personalized estate plan and legacy gift planning. We have the knowledge to guide you through all the questions that you will need to answer regarding your estate and we stick with you until the complete process is finished.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <span className="text-brand-orange font-bold text-xs uppercase block mb-1">Benefit 1</span>
                <h3 className="font-bold text-brand-navy text-sm mb-2">The Service is Free for Donors</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We get paid by sponsoring agencies (normally the nonprofit or church who told you about this opportunity).
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <span className="text-brand-orange font-bold text-xs uppercase block mb-1">Benefit 2</span>
                <h3 className="font-bold text-brand-navy text-sm mb-2">Nothing to Buy or Sell</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Our sole focus is guiding you through the estate plan without selling financial products or taking commissions.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <span className="text-brand-orange font-bold text-xs uppercase block mb-1">Benefit 3</span>
                <h3 className="font-bold text-brand-navy text-sm mb-2">A Gift to Supporters</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  This is a gift from the organization to thank you for your support over the years.
                </p>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <span className="text-brand-orange font-bold text-xs uppercase block mb-1">Benefit 4</span>
                <h3 className="font-bold text-brand-navy text-sm mb-2">Complete Confidentiality</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  No one will find out anything we discuss without your permission, including the sponsoring agency.
                </p>
              </div>
            </div>
          </div>

          {/* Detailed Step 1 & Step 2 Sections Preserving Text */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-brand-navy shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center font-bold text-base mb-4">
                1
              </div>
              <h2 className="text-xl font-bold text-brand-navy mb-1">Step 1</h2>
              <h3 className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-4">
                Data Gathering - Disclosure
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                The first appointment will be to gather all the necessary information to create the Personal Plan. We will gather Family Information, Professional Advisors Information, Providing for Children, Power of Attorneys, Gift Planning Information and Financial Information.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                After receiving this information our team will produce a plan based on the goals and wishes of the Donor.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 sm:p-8 border-2 border-brand-orange shadow-sm relative">
              <div className="w-10 h-10 rounded-xl bg-brand-orange text-white flex items-center justify-center font-bold text-base mb-4">
                2
              </div>
              <h2 className="text-xl font-bold text-brand-navy mb-1">Step 2</h2>
              <h3 className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-4">
                Plan Presentation - The Personal Estate Plan
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                In the second meeting we review with you the Personal Estate Plan our team produced from the information you gave us in the first meeting. Our goal is to ensure you feel comfortable with the plan we suggest and answer any questions you have.
              </p>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                When finished, we will summarize the plan in a booklet you can take to your lawyer to finalize.
              </p>
            </div>
          </div>

          {/* Bottom CTA Block with Exact Buttons */}
          <div className="bg-gradient-to-r from-brand-navy to-brand-slate rounded-2xl p-8 sm:p-10 text-white text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Begin Your Estate Plan?</h2>
            <p className="text-sm text-slate-200 max-w-xl mx-auto">
              Schedule your confidential consultation today with Craig Mellendorf and ensure your legacy reaches the people and causes you love.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-hover shadow-lg transition-all"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <button
                onClick={() => setBookingOpen(true)}
                className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
              >
                <Calendar className="w-4 h-4 mr-2" />
                <span>Book Online Appointment</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

