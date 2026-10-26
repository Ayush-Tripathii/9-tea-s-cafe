"use strict";
import React from "react";
import Image from "next/image";
import { FRANCHISE_PILLARS, FRANCHISE_STEPS, SITE_CONFIG } from "@/data/siteData";
import FranchiseForm from "./FranchiseForm";
import { 
  Download, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Target, 
  TrendingUp, 
  Briefcase,
  Wallet,
  MapPin,
  LayoutDashboard,
  Store,
  GraduationCap,
  Rocket
} from "lucide-react";

export default function FranchiseOverview() {
  const stepIcons = [Wallet, MapPin, LayoutDashboard, Store, GraduationCap, Rocket];
  const pillarIcons = [Target, TrendingUp, ShieldCheck, Briefcase];

  return (
    <section className="py-24 bg-cream-50 relative overflow-hidden" id="franchise">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-saffron/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-saffron font-bold">
            <Sparkles className="w-4 h-4 text-saffron" />
            <span>FRANCHISE PARTNERSHIP</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-extrabold text-espresso leading-[1.1]">
            YOUR CITY&apos;S NEXT FAVOURITE CAFE <br />
            <span className="italic font-normal text-saffron">COULD HAVE YOUR NAME ON IT.</span>
          </h2>

          <p className="text-base sm:text-lg text-espresso/80 font-light leading-relaxed">
            Step into India&apos;s fastest-growing chai and lifestyle cafe segment with a time-tested, youth-loved, profitable brand model.
          </p>

          <div className="pt-2 flex justify-center">
            <a
              href={SITE_CONFIG.brochureUrl}
              download="9Teas-Cafe-Franchise-Brochure.pdf"
              className="inline-flex items-center text-xs font-bold uppercase tracking-wider bg-espresso hover:bg-espresso-800 text-cream-100 border border-saffron/40 px-6 py-3.5 rounded-full shadow-lg transition-all"
            >
              <Download className="w-4 h-4 mr-2 text-saffron" />
              <span>Download Official Franchise Brochure (PDF)</span>
            </a>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-xs uppercase tracking-[0.2em] text-saffron font-bold">
              THE 9TEAS ADVANTAGE
            </span>
            <h3 className="font-editorial text-3xl font-bold text-espresso mt-1">
              Why Partner With 9Teas Cafe?
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FRANCHISE_PILLARS.map((pillar, idx) => {
              const Icon = pillarIcons[idx % pillarIcons.length];
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-espresso/10 shadow-sm hover:shadow-2xl hover:border-saffron/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 rounded-2xl bg-saffron/10 text-saffron flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>

                    <h4 className="font-editorial text-xl font-bold text-espresso group-hover:text-saffron transition-colors">
                      {pillar.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-espresso/70 leading-relaxed font-light">
                      {pillar.description}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-espresso/5">
                      {pillar.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-start text-xs text-espresso/80 font-normal">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-2 text-saffron shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-espresso/5 text-[10px] font-bold uppercase tracking-widest text-saffron">
                    Pillar 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6-Step Franchise Journey */}
        <div className="mb-24 bg-espresso text-cream-100 rounded-3xl p-8 sm:p-14 border border-saffron/30 shadow-2xl relative overflow-hidden">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-saffron font-bold">
              THE ROADMAP
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-white">
              Your 6-Step Journey To Store Opening
            </h3>
            <p className="text-xs sm:text-sm text-cream-300 font-light">
              A structured, transparent turnkey process from reservation to inaugural brew.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FRANCHISE_STEPS.map((step, idx) => {
              const Icon = stepIcons[idx % stepIcons.length];
              return (
                <div
                  key={idx}
                  className="glass-panel-dark rounded-2xl p-6 border border-white/10 hover:border-saffron/40 transition-all flex flex-col justify-between space-y-4 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="p-3 bg-saffron/15 rounded-xl text-saffron group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="font-editorial text-2xl font-black text-saffron-light">
                        STEP {step.stepNumber}
                      </span>
                    </div>

                    <h4 className="font-editorial text-xl font-bold text-white group-hover:text-saffron transition-colors">
                      {step.title}
                    </h4>

                    <p className="text-xs text-cream-300 font-light leading-relaxed">
                      {step.details}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 text-[10px] uppercase tracking-wider text-saffron font-semibold">
                    {step.shortDesc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Application Section (Split: Copy & Multi-Step Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="apply">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-saffron font-bold">
              <Sparkles className="w-4 h-4 text-saffron" />
              <span>APPLY FOR FRANCHISE</span>
            </div>

            <h3 className="font-editorial text-3xl sm:text-4xl font-extrabold text-espresso">
              Start Brewing In Your City.
            </h3>

            <p className="text-sm text-espresso/80 leading-relaxed font-light">
              Whether you are an aspiring entrepreneur or an established retail investor, our corporate team provides complete end-to-end guidance to launch your profitable 9Teas Cafe.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-espresso/80">
              <div className="flex items-center p-3.5 bg-white rounded-2xl border border-espresso/5 shadow-sm">
                <CheckCircle2 className="w-5 h-5 mr-3 text-saffron shrink-0" />
                <span>Transparent initial investment tiers (₹7L & ₹12L)</span>
              </div>
              <div className="flex items-center p-3.5 bg-white rounded-2xl border border-espresso/5 shadow-sm">
                <CheckCircle2 className="w-5 h-5 mr-3 text-saffron shrink-0" />
                <span>On-site market survey & footfall feasibility</span>
              </div>
              <div className="flex items-center p-3.5 bg-white rounded-2xl border border-espresso/5 shadow-sm">
                <CheckCircle2 className="w-5 h-5 mr-3 text-saffron shrink-0" />
                <span>Centralized standardized recipe ingredients</span>
              </div>
            </div>

            <div className="p-6 bg-saffron/10 rounded-2xl border border-saffron/20 text-espresso space-y-2">
              <h5 className="font-editorial text-base font-bold text-saffron-dark">
                Direct Corporate Inquiries:
              </h5>
              <p className="text-xs text-espresso/70">
                Call: <strong>{SITE_CONFIG.headOffice.phone}</strong>
              </p>
              <p className="text-xs text-espresso/70">
                Email: <strong>{SITE_CONFIG.headOffice.email}</strong>
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <FranchiseForm />
          </div>

        </div>

      </div>
    </section>
  );
}
