"use strict";
import React from "react";
import { SITE_CONFIG } from "@/data/siteData";
import { Store, Building2, Map, Coffee, Users } from "lucide-react";

export default function BrandStatsSection() {
  const statsList = [
    {
      value: SITE_CONFIG.stats.outlets,
      label: "ACTIVE OUTLETS",
      desc: "Across Maharashtra & UP",
      icon: Store,
    },
    {
      value: SITE_CONFIG.stats.cities,
      label: "CITIES SERVED",
      desc: "Mumbai, Palghar & Prayagraj",
      icon: Building2,
    },
    {
      value: SITE_CONFIG.stats.states,
      label: "STATES",
      desc: "Maharashtra & Uttar Pradesh",
      icon: Map,
    },
    {
      value: SITE_CONFIG.stats.cupsServed,
      label: "CUPS HAND-BREWED",
      desc: "Every single day with fresh ginger",
      icon: Coffee,
    },
  ];

  return (
    <section className="py-20 bg-espresso text-cream-100 relative overflow-hidden border-y border-white/10">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-saffron/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-saffron font-bold">
            PROVEN SCALE & MOMENTUM
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-extrabold text-white">
            THE 9TEAS NUMBERS.
          </h2>
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="glass-panel-dark rounded-3xl p-6 sm:p-8 text-center border border-white/10 hover:border-saffron/40 transition-all duration-300 group flex flex-col items-center justify-center space-y-3"
              >
                <div className="p-3 bg-saffron/15 rounded-2xl text-saffron group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="font-editorial text-4xl sm:text-5xl font-black text-white group-hover:text-saffron transition-colors">
                  {stat.value}
                </div>

                <div className="space-y-1">
                  <div className="text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-cream-200">
                    {stat.label}
                  </div>
                  <div className="text-[11px] sm:text-xs text-cream-400 font-light">
                    {stat.desc}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
