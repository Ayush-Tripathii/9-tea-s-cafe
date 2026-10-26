"use strict";
import React from "react";
import Image from "next/image";
import { FOUNDERS, SITE_CONFIG } from "@/data/siteData";
import { Sparkles, Quote } from "lucide-react";

export default function FoundersSection() {
  return (
    <section className="py-24 bg-cream-100 relative overflow-hidden" id="leadership">
      {/* Background Decor */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-olive/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-saffron font-bold">
            <Sparkles className="w-4 h-4 text-saffron" />
            <span>LEADERSHIP & VISION</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl font-extrabold text-espresso">
            BUILT WITH A LOVE FOR CHAI.
          </h2>

          <p className="text-base text-espresso/80 font-light leading-relaxed">
            The visionary minds leading 9Teas Cafe from a beloved Mumbai twin-city cafe into a rapidly expanding national F&B brand.
          </p>
        </div>

        {/* Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {FOUNDERS.map((founder, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-espresso/10 shadow-sm hover:shadow-2xl hover:border-saffron/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo container */}
                <div className="relative w-full aspect-[4/5] bg-gradient-to-b from-cream-200 to-cream-300 overflow-hidden flex items-end justify-center">
                  <div className="relative w-[85%] h-[90%]">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      fill
                      className="object-contain object-bottom group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-espresso/90 text-saffron-light text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                    {founder.title}
                  </div>
                </div>

                {/* Bio & Details */}
                <div className="p-6 space-y-2">
                  <h3 className="font-editorial text-2xl font-bold text-espresso group-hover:text-saffron transition-colors">
                    {founder.name}
                  </h3>
                  <div className="text-xs font-bold uppercase tracking-wider text-saffron">
                    {founder.role}
                  </div>
                  <p className="text-xs sm:text-sm text-espresso/70 leading-relaxed font-light pt-2">
                    {founder.bio}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="pt-4 border-t border-espresso/5 flex items-center justify-between text-xs text-espresso/60">
                  <span>9Teas Leadership</span>
                  <span className="text-saffron font-bold">#humudnekeliyebanehai</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mentorship & Core Philosophy Highlight */}
        <div className="bg-espresso text-cream-100 rounded-3xl p-8 sm:p-12 border border-saffron/20 shadow-2xl relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-saffron/10 rounded-full blur-2xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="w-20 h-20 rounded-full bg-saffron/20 border border-saffron/40 flex items-center justify-center text-saffron">
                <Quote className="w-10 h-10" />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-3 text-center lg:text-left">
              <span className="text-xs uppercase tracking-[0.2em] text-saffron font-bold">
                GUIDING MENTORSHIP & PHILOSOPHY
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                “As said, behind every good player is a coach.”
              </h3>
              <p className="text-sm text-cream-300 font-light leading-relaxed">
                Founders Amit Yadav and Rupesh Pendhari were guided under the mentorship of <strong>{SITE_CONFIG.mentorName}</strong>. Inspired by their shared love for 90s heritage and authentic Indian tea, they launched 9TEA&apos;S CAFE with the unwavering conviction:
              </p>
            </div>

            <div className="lg:col-span-3 flex flex-col items-center justify-center text-center p-6 bg-white/5 rounded-2xl border border-white/10">
              <span className="text-xs text-saffron-light uppercase tracking-widest font-semibold mb-1">
                Our Guiding Slogan
              </span>
              <span className="font-editorial text-xl sm:text-2xl font-extrabold text-white tracking-wide">
                &ldquo;HUM UDNE KE LIYE BANE HAI&rdquo;
              </span>
              <span className="text-xs text-cream-400 mt-2 font-mono">
                {SITE_CONFIG.hashtag}
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
