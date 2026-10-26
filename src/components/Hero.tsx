"use strict";
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Utensils, Sparkles, MapPin, Coffee } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-[92vh] flex items-center justify-center bg-espresso overflow-hidden text-cream-100">
      {/* Background Cinematic Image with slow zoom & dark gradient overlays */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full transform scale-105 transition-transform duration-1000 ease-out">
          <Image
            src="/images/welcome.jpg"
            alt="9Teas Cafe Authentic Kulhad Chai and Ambiance"
            fill
            priority
            className="object-cover object-center opacity-40 brightness-75 contrast-125"
          />
        </div>

        {/* Multi-layered cinematic gradient overlays for editorial luxury */}
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/80 to-espresso/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-espresso/60 to-espresso" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-saffron/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-96 h-96 bg-olive/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Column: Typography & Conversion Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-saffron/40 backdrop-blur-md shadow-lg">
              <span className="w-2 h-2 rounded-full bg-saffron animate-ping" />
              <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-saffron-light font-bold">
                9TEAS CAFE · BACK TO THE 90s
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
              SOME MEMORIES <br />
              <span className="italic font-normal bg-gradient-to-r from-cream-100 via-saffron-light to-cream-300 bg-clip-text text-transparent">
                COME IN CUPS.
              </span>
            </h1>

            {/* Supporting Subtext */}
            <p className="text-base sm:text-lg md:text-xl text-cream-200 max-w-2xl font-light leading-relaxed mx-auto lg:mx-0">
              Chai, conversations and a little bit of nostalgia. Thousands of cups hand-brewed fresh every day across {SITE_CONFIG.stats.outlets} outlets in {SITE_CONFIG.stats.cities} cities.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/menu"
                className="btn-primary-glow w-full sm:w-auto inline-flex items-center justify-center text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-saffron to-saffron-light text-white px-8 py-4 rounded-full shadow-2xl transition-all group"
              >
                <Utensils className="w-4 h-4 mr-2" />
                <span>EXPLORE MENU</span>
                <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>

              <Link
                href="/franchise"
                className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-bold uppercase tracking-wider bg-white/10 hover:bg-white/15 text-cream-100 border border-cream/30 hover:border-saffron px-8 py-4 rounded-full backdrop-blur-sm transition-all"
              >
                <Coffee className="w-4 h-4 mr-2 text-saffron" />
                <span>OWN A 9TEAS CAFE</span>
              </Link>
            </div>

            {/* Live Trust Metrics Strip */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-editorial text-saffron-light">
                  {SITE_CONFIG.stats.outlets}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-cream-400 font-medium">
                  Active Outlets
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold font-editorial text-cream-100">
                  {SITE_CONFIG.stats.cities}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-cream-400 font-medium">
                  Cities & Growing
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold font-editorial text-saffron-light">
                  {SITE_CONFIG.establishedYear}
                </div>
                <div className="text-[11px] uppercase tracking-wider text-cream-400 font-medium">
                  Founded in Mumbai
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Editorial Product & Experience Card */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Frame */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden border border-white/15 shadow-2xl p-4 bg-espresso/60 backdrop-blur-xl group">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/adrak.jpg"
                  alt="Authentic 9Teas Adrak Kulhad Chai"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Simulated Rising Steam Visual Elements */}
                <div className="absolute bottom-16 left-1/2 -translate-x-1/2 pointer-events-none flex space-x-3">
                  <div className="w-4 h-16 bg-white/30 rounded-full blur-md animate-steam-rise" />
                  <div className="w-5 h-20 bg-white/20 rounded-full blur-lg animate-steam-rise-delayed" />
                  <div className="w-3 h-14 bg-white/30 rounded-full blur-md animate-steam-rise" />
                </div>

                {/* Overlay Card Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-transparent to-transparent flex flex-col justify-end p-6">
                  <div className="inline-block px-3 py-1 bg-saffron text-white text-[11px] font-bold uppercase tracking-wider rounded-full self-start mb-2">
                    Signature Kulhad Chai
                  </div>
                  <h3 className="text-xl font-editorial font-bold text-white mb-1">
                    Desi Adrak & Masala Brew
                  </h3>
                  <p className="text-xs text-cream-300 line-clamp-2">
                    Hand-crushed ginger and 9 whole spices simmered to perfection in pure clay cups.
                  </p>
                </div>
              </div>

              {/* Floating 90s Badge */}
              <div className="absolute -top-4 -left-4 bg-espresso border border-saffron/40 px-4 py-2 rounded-2xl shadow-xl flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-saffron animate-spin" />
                <span className="text-xs font-bold uppercase tracking-wider text-cream-100">
                  #humudnekeliyebanehai
                </span>
              </div>

              {/* Floating Flagship Badge */}
              <div className="absolute -bottom-4 -right-4 bg-charcoal border border-white/15 px-4 py-2.5 rounded-2xl shadow-xl flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-saffron" />
                <span className="text-xs font-medium text-cream-200">
                  Flagship: Bhayander East
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none opacity-60">
        <span className="text-[10px] uppercase tracking-[0.25em] text-cream-300 mb-1 font-medium">
          Scroll Down
        </span>
        <div className="w-4 h-7 rounded-full border border-cream/30 flex justify-center p-1">
          <div className="w-1 h-2 bg-saffron rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
