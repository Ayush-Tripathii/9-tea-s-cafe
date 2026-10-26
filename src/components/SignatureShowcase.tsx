"use strict";
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight, Sparkles } from "lucide-react";
import { MENU_ITEMS } from "@/data/siteData";

export default function SignatureShowcase() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const signatureItems = MENU_ITEMS.filter((item) => item.highlight);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-espresso text-cream-100 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-saffron/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-saffron font-bold">
              <Sparkles className="w-4 h-4 text-saffron" />
              <span>HANDPICKED FAVORITES</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              SIGNATURE CREATIONS.
            </h2>

            <p className="text-base text-cream-300 font-light leading-relaxed max-w-xl">
              The dishes and brews our customers order again and again. Made fresh to order with pure love and flavor.
            </p>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center space-x-3 shrink-0">
            <button
              onClick={() => handleScroll("left")}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-saffron text-white flex items-center justify-center transition-all duration-200"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/5 hover:bg-saffron text-white flex items-center justify-center transition-all duration-200"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Scrolling Track */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto pb-6 scrollbar-none scroll-smooth snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {signatureItems.map((item) => (
            <div
              key={item.id}
              className="w-[300px] sm:w-[340px] md:w-[360px] shrink-0 snap-start glass-panel-dark rounded-3xl p-6 border border-white/10 hover:border-saffron/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Product Image Box */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-6 bg-charcoal border border-white/10">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-espresso/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-saffron-light border border-white/10">
                    {item.categoryLabel}
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2">
                  <h3 className="font-editorial text-2xl font-bold text-white group-hover:text-saffron transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-cream-300 leading-relaxed font-light line-clamp-3">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-saffron font-semibold uppercase tracking-wider">
                  Freshly Prepared
                </span>

                <Link
                  href="/menu"
                  className="w-9 h-9 rounded-full bg-saffron text-white flex items-center justify-center group-hover:bg-saffron-light transition-colors"
                  aria-label={`View ${item.name}`}
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
