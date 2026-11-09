"use client";

import React from "react";
import Link from "next/link";
import { FOOTER_QUICK_LINKS } from "@/data/siteData";
import { Map, ArrowRight, ChevronRight, CheckCircle } from "lucide-react";
import { TriangularMotif } from "@/components/TriangularMotif";

export default function SitemapPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-gradient-to-r from-brand-navy to-brand-slate text-white py-16 px-4 sm:px-8 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-brand-orange/20 text-brand-orange px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-brand-orange/30">
            <Map className="w-3.5 h-3.5" />
            <span>Site Navigation Index</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Sitemap
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed">
            A comprehensive, clean index of all pages, resources, and coaching touchpoints across the SFC Estate Coaching website.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <div className="flex items-center space-x-2 text-xs font-bold text-brand-orange uppercase tracking-wider mb-2">
              <TriangularMotif size="sm" variant="orange" direction="right" />
              <span>Full Directory</span>
            </div>
            <h2 className="text-2xl font-bold text-brand-navy mb-6">
              Pages
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FOOTER_QUICK_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-brand-orange hover:shadow-md transition-all group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-lg bg-brand-navy/5 text-brand-navy group-hover:bg-brand-orange group-hover:text-white flex items-center justify-center transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-slate-800 group-hover:text-brand-orange transition-colors">
                        {item.label}
                      </span>
                      <p className="text-[11px] text-slate-500 font-mono">
                        {item.href}
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-orange transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>
              All broken Divi shortcodes from the legacy implementation have been resolved into clean semantic Next.js routes.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

