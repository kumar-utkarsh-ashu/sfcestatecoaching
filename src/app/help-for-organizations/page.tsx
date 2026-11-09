"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Building2,
  Calendar,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Award,
  ArrowRight,
  Sparkles,
  Quote
} from "lucide-react";
import { TriangularMotif } from "@/components/TriangularMotif";
import { BookingModal } from "@/components/BookingModal";
import { ProcessStepper } from "@/components/ProcessStepper";

export default function HelpForOrganizationsPage() {
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero Header */}
      <section className="bg-gradient-to-r from-brand-navy via-brand-navy-light to-brand-slate text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
            <Building2 className="w-3.5 h-3.5" />
            <span>Non-Profit Foundation & Ministry Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Estate Planning to Help Organizations
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-3xl leading-relaxed mb-8">
            We partner with organizations as a gift to their supporters by assisting them in creating an estate plan that is of no cost to the donors. We are truly a gift to your supporters because the process is simple and we stick with them until the complete process is finished.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-brand-orange hover:bg-brand-orange-hover shadow-lg transition-all"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Schedule Partnership Call</span>
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

      {/* Main Content Preserving Exact Source Text */}
      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* The Estate Plan Problem & The Disconnect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
              <div className="flex items-center space-x-2 text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">
                <TriangularMotif size="sm" variant="orange" direction="right" />
                <span>Institutional Challenge</span>
              </div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                The Estate Plan Problem
              </h2>
              <p className="text-slate-700 text-sm leading-relaxed mb-4">
                In a typical non-profit, about 80% of current supporters desire to leave a legacy to the non-profit. Yet only about 10% actually do. That is a massive 70% gap between donor intentions and finalized legal outcomes.
              </p>
              <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs text-slate-600">
                <span className="font-bold text-brand-navy block mb-1">Average Planned Gift Impact:</span>
                Every donor who completes the estate planning process gives on average about $80,000 to non-profits!
              </div>
            </div>

            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
              <div className="flex items-center space-x-2 text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">
                <TriangularMotif size="sm" variant="coral" direction="right" />
                <span>Root Causes</span>
              </div>
              <h2 className="text-2xl font-bold text-brand-navy mb-4">
                Why the Disconnect?
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
                  <span>Most people simply do not have a current will.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
                  <span>Donors mistakenly think their 15-year-old will is still adequate.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
                  <span>Supporters do not know the tax-advantaged ways to structure gifts.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
                  <span>People underestimate their net worth and think they have nothing to leave.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2 flex-shrink-0" />
                  <span>Lawyers often rush the process without discussing charitable legacies.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Gift Planning for Estates & The Solution with 20x Guarantee */}
          <div className="bg-gradient-to-br from-brand-navy to-brand-slate text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
            <div className="max-w-3xl space-y-6">
              <div className="inline-flex items-center space-x-2 bg-brand-orange text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4 mr-1" />
                <span>Our Exclusive Commitment</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                Gift Planning for Estates & The Solution
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Sometimes the gifts are small, sometimes the gifts are large, but it is not about the dollar figure, it is about the opportunity to help people leave the legacy to you that they already desire to give but have not put down on paper.
              </p>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-3">
                <h3 className="text-lg font-bold text-brand-orange flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>The 20 Times Investment Return Guarantee</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  We are so sure estate planning works, we guarantee you will get at least 20 times your investment promised back to you from the estates we plan for you. (Honestly this is an easy guarantee for us since usually 50 times or more of your investment is usually promised in the estate plans.) Ask us about more details regarding our guarantee.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Stepper Visualizer for Organizations */}
          <div>
            <ProcessStepper initialType="organizations" onBookClick={() => setBookingOpen(true)} />
          </div>

          {/* Organization Estate Planning Reviews */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-xs font-bold text-brand-orange uppercase tracking-wider">
              <TriangularMotif size="sm" variant="orange" direction="right" />
              <span>Institutional Endorsements</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
              Organization Estate Planning Reviews
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Ken & Jill Gaschk */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "While Estate planning is not the most exciting thing to think about and one of those things you keep putting off, it is so extremely important to complete. My wife and I knew we needed to do it but just kept putting it off. Working with Craig made the process enjoyable and easy. The way that he walked us through each of the steps was great. Thanks Craig for leading us through the process. I recommend Craig to anyone who asks me about how we went about completing our estate plan."
                </p>
                <div className="pt-3 border-t border-slate-200">
                  <h3 className="text-xs font-bold text-brand-navy">Ken & Jill Gaschk</h3>
                </div>
              </div>

              {/* Lee Galien */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "It has been a pleasure to work with Craig Mellendorf through this estate planning process. He is polite, on time with all appointments, and very knowledgeable. I thought this would be a complicated process, but Craig made it very simple. I feel blessed to have had this opportunity and to be able to have peace of mind, knowing that I can leave a legacy behind to the people and organizations that have given me so much in this life. I would highly recommend Craig and the estate planning process to anyone."
                </p>
                <div className="pt-3 border-t border-slate-200">
                  <h3 className="text-xs font-bold text-brand-navy">Lee Galien</h3>
                  <p className="text-[11px] text-slate-500">Milwaukee</p>
                </div>
              </div>

              {/* C.L. Whiteside */}
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "Craig has been a pleasure to work with, not only because of his knowledge but also because he makes sure the information and suggestions he gives are best for YOU and your situation. 'One glove fits all' is not his approach. I appreciate him taking the time out to get to know me as a person. The will and estate planning has been smooth and enjoyable and that is because of Craig's approach and care."
                </p>
                <div className="pt-3 border-t border-slate-200">
                  <h3 className="text-xs font-bold text-brand-navy">C.L. Whiteside</h3>
                  <p className="text-[11px] text-slate-500">Assistant Principal, Wisconsin Lutheran High School</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why SFC Estate Coaching for Organizations */}
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-brand-navy">
              Why SFC Estate Coaching?
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              There are many benefits in choosing us to assist with creating legacy gifts through estate planning:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-brand-navy block">Maximum Supporter Participation:</span>
                <p>We have the experience to ensure you get maximum participation from your supporters.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-brand-navy block">Third-Party Neutrality:</span>
                <p>We are third party, so your donors feel more comfortable talking openly to us about their giving plans without pressure.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-brand-navy block">Creative & Tailored Solutions:</span>
                <p>We simplify the process by bringing forward only the best options for people to choose from in light of their unique situation.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                <span className="font-bold text-brand-navy block">Sole Dedication:</span>
                <p>Estate planning on behalf of organizations is all we do so we focus on doing that one thing to the best of our ability.</p>
              </div>
            </div>
          </div>

          {/* Bottom Conversion Section */}
          <div className="bg-brand-navy text-white rounded-2xl p-8 sm:p-10 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Partner with SFC Estate Coaching</h2>
            <p className="text-sm text-slate-200 max-w-xl mx-auto">
              Empower your faithful supporters and secure your foundation's future with our guaranteed estate coaching partnership.
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
                <span>Book a Consultation Call</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </div>
  );
}

