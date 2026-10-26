"use strict";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Sparkles, Coffee } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function FinalCTA() {
  return (
    <section className="py-28 bg-espresso text-cream-100 relative overflow-hidden">
      {/* Background Image with Deep Overlay */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src="/images/branches-outlate.jpeg"
          alt="9Teas Cafe Outlets"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-espresso/90" />
      </div>

      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-saffron/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-saffron/40 backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-saffron" />
          <span className="text-xs uppercase tracking-[0.25em] text-saffron-light font-bold">
            EXPANDING ACROSS INDIA
          </span>
        </div>

        <h2 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.1]">
          READY TO MAKE YOUR CITY <br />
          <span className="italic font-normal bg-gradient-to-r from-cream-100 via-saffron-light to-cream-300 bg-clip-text text-transparent">
            A LITTLE MORE 9TEAS?
          </span>
        </h2>

        <p className="text-base sm:text-lg text-cream-200 font-light leading-relaxed max-w-2xl mx-auto">
          Whether you&apos;re looking for your next favourite kulhad chai hangout or ready to build your own profitable cafe business — your journey starts here.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/franchise"
            className="btn-primary-glow w-full sm:w-auto inline-flex items-center justify-center text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-saffron to-saffron-light text-white px-9 py-4 rounded-full shadow-2xl transition-all group"
          >
            <Coffee className="w-4 h-4 mr-2" />
            <span>BECOME A FRANCHISE PARTNER</span>
            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <Link
            href="/locations"
            className="w-full sm:w-auto inline-flex items-center justify-center text-sm font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-cream-100 border border-white/20 px-8 py-4 rounded-full backdrop-blur-sm transition-all"
          >
            <MapPin className="w-4 h-4 mr-2 text-saffron" />
            <span>FIND A 9TEAS NEAR YOU</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-white/10 text-xs text-cream-400 font-mono tracking-widest uppercase">
          {SITE_CONFIG.slogan} · {SITE_CONFIG.hashtag}
        </div>

      </div>
    </section>
  );
}
