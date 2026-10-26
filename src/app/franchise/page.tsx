import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import FranchiseOverview from "@/components/FranchiseOverview";
import FranchiseFAQ from "@/components/FranchiseFAQ";
import FinalCTA from "@/components/FinalCTA";
import { SITE_CONFIG } from "@/data/siteData";
import { Briefcase, Download, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Franchise Opportunity & Partner Portal | 9Teas Cafe",
  description: "Explore 9Teas Cafe franchise partnership models starting from ₹7L & ₹12L. Comprehensive turnkey support, centralized recipes, R&D site survey, and rapid ROI.",
};

export default function FranchisePage() {
  return (
    <div className="w-full">
      {/* Franchise Hero Banner */}
      <section className="relative py-24 sm:py-32 bg-espresso text-cream-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/background-image.jpeg"
            alt="9Teas Cafe Franchise"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-espresso/85" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-saffron/40 backdrop-blur-md">
            <Briefcase className="w-4 h-4 text-saffron" />
            <span className="text-xs uppercase tracking-[0.25em] text-saffron-light font-bold">
              SCALABLE F&B BUSINESS OPPORTUNITY
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.1]">
            STEP INTO BUSINESS <br />
            <span className="italic font-normal bg-gradient-to-r from-cream-100 via-saffron-light to-cream-300 bg-clip-text text-transparent">
              WITH CONFIDENCE.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-cream-200 font-light max-w-3xl mx-auto leading-relaxed">
            &ldquo;Your city&apos;s next favourite cafe could have your name on it.&rdquo; Partner with a tested, youth-loved, high-margin Indian cafe brand.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href="#apply"
              className="btn-primary-glow inline-flex items-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-saffron to-saffron-light text-white px-8 py-4 rounded-full shadow-2xl"
            >
              <span>Apply for Franchise</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>

            <a
              href={SITE_CONFIG.brochureUrl}
              download="9Teas-Cafe-Franchise-Brochure.pdf"
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-cream-100 border border-white/20 px-8 py-4 rounded-full backdrop-blur-md transition-all"
            >
              <Download className="w-4 h-4 mr-2 text-saffron" />
              <span>Download Official Brochure</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Franchise Feature, Journey & Form Component */}
      <FranchiseOverview />

      {/* Model Investment Tiers Comparison */}
      <section className="py-20 bg-espresso text-cream-100 relative overflow-hidden border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-saffron font-bold">
              INVESTMENT TIERS
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-extrabold text-white">
              Flexible Franchise Formats
            </h2>
            <p className="text-xs sm:text-sm text-cream-300 font-light">
              Tailored store footprints designed for agile launches and optimized unit economics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* 7 Lakh Tier */}
            <div className="glass-panel-dark rounded-3xl p-8 border border-white/10 hover:border-saffron/40 transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-cream-300 uppercase tracking-wider">
                  Express / Kiosk Model
                </div>
                <div className="font-editorial text-4xl font-black text-white">
                  ₹7 Lakhs <span className="text-sm font-sans font-light text-cream-400">approx</span>
                </div>
                <p className="text-xs sm:text-sm text-cream-300 font-light leading-relaxed">
                  Ideal for high-footfall railway stations, corporate hubs, colleges, and commercial food courts.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-cream-200">
                  <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-saffron shrink-0" /> Compact footprint (100 - 200 sq ft)</div>
                  <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-saffron shrink-0" /> Rapid kitchen workflow & quick prep time</div>
                  <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-saffron shrink-0" /> Low operational overheads</div>
                </div>
              </div>

              <a
                href="#apply"
                className="w-full text-center py-3 rounded-full bg-white/10 hover:bg-saffron text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Select ₹7L Model
              </a>
            </div>

            {/* 12 Lakh Tier */}
            <div className="glass-panel-dark rounded-3xl p-8 border-2 border-saffron shadow-2xl relative flex flex-col justify-between space-y-6">
              <div className="absolute -top-3.5 right-6 bg-saffron text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                Most Popular Format
              </div>

              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-saffron/20 border border-saffron/40 rounded-full text-xs font-bold text-saffron-light uppercase tracking-wider">
                  Full Dine-In Cafe Model
                </div>
                <div className="font-editorial text-4xl font-black text-saffron-light">
                  ₹12 Lakhs <span className="text-sm font-sans font-light text-cream-300">approx</span>
                </div>
                <p className="text-xs sm:text-sm text-cream-300 font-light leading-relaxed">
                  Full experience destination featuring comfortable booth seating, 90s aesthetic interior, and complete multi-cuisine menu.
                </p>

                <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs text-cream-200">
                  <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-saffron shrink-0" /> Generous seating (300 - 600+ sq ft)</div>
                  <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-saffron shrink-0" /> Full Italian savories, pizzas & cooler setup</div>
                  <div className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-saffron shrink-0" /> Higher average ticket size & dwell time</div>
                </div>
              </div>

              <a
                href="#apply"
                className="btn-primary-glow w-full text-center py-3.5 rounded-full bg-gradient-to-r from-saffron to-saffron-light text-white text-xs font-bold uppercase tracking-wider shadow-lg"
              >
                Select ₹12L Model
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise FAQs */}
      <FranchiseFAQ />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
