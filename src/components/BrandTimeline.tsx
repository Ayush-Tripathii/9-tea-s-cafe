"use strict";
import React from "react";
import Image from "next/image";
import { BRAND_MILESTONES } from "@/data/siteData";
import { Calendar, Sparkles } from "lucide-react";

export default function BrandTimeline() {
  return (
    <section className="py-24 bg-cream-50 relative overflow-hidden border-t border-espresso/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-saffron font-bold">
            <Sparkles className="w-4 h-4 text-saffron" />
            <span>JOURNEY & MILESTONES</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl font-extrabold text-espresso">
            THE 9TEAS CHRONICLES.
          </h2>

          <p className="text-base text-espresso/80 font-light leading-relaxed">
            From an initial spark in Bhayander East to a multi-state cafe movement.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRAND_MILESTONES.map((milestone, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-espresso/10 shadow-sm hover:shadow-xl hover:border-saffron/30 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Year Stamp */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-editorial text-3xl font-black text-saffron">
                    {milestone.year}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-saffron/10 text-saffron flex items-center justify-center text-xs font-bold font-mono">
                    0{idx + 1}
                  </span>
                </div>

                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-espresso/5 border border-espresso/5">
                  <Image
                    src={milestone.image}
                    alt={milestone.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="font-editorial text-xl font-bold text-espresso group-hover:text-saffron transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-espresso/70 leading-relaxed font-light">
                    {milestone.description}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-espresso/5 text-[11px] font-bold text-saffron uppercase tracking-wider">
                Milestone 0{idx + 1} Completed
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
