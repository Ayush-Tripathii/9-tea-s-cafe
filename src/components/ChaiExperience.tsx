"use strict";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Flame, Sparkles, CheckCircle2 } from "lucide-react";
import { MENU_ITEMS } from "@/data/siteData";

export default function ChaiExperience() {
  const chaiItems = MENU_ITEMS.filter((item) => item.category === "chai");

  return (
    <section className="py-24 bg-cream-50 relative overflow-hidden">
      {/* Background Decorative Rings */}
      <div className="absolute -top-24 right-10 w-96 h-96 border border-saffron/10 rounded-full pointer-events-none" />
      <div className="absolute -top-36 right-0 w-[500px] h-[500px] border border-saffron/10 rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-saffron font-bold">
              <span className="w-8 h-[2px] bg-saffron" />
              <span>THE CHAI EXPERIENCE</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-extrabold text-espresso">
              THE CUP THAT STARTED IT ALL.
            </h2>

            <p className="text-base text-espresso/80 font-light leading-relaxed">
              Traditional at heart. Modern by experience. Handcrafted using premium Assam tea, fresh crushed spices, and served in earthen clay kulhads for an authentic aroma.
            </p>
          </div>

          <Link
            href="/menu"
            className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-saffron hover:text-saffron-dark group shrink-0 transition-colors"
          >
            <span>EXPLORE FULL TEA MENU</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

        {/* Featured Showcase: Big Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Main Hero Kulhad Card (5 cols) */}
          <div className="lg:col-span-5 bg-espresso text-cream-100 rounded-3xl p-8 relative overflow-hidden flex flex-col justify-between shadow-2xl border border-saffron/20 group">
            <div className="relative z-10 space-y-4">
              <div className="inline-flex items-center space-x-2 px-3 py-1 bg-saffron/20 border border-saffron/40 rounded-full text-xs font-bold text-saffron-light uppercase tracking-wider">
                <Flame className="w-3.5 h-3.5 text-saffron" />
                <span>Hand-Brewed In Clay Kulhads</span>
              </div>
              
              <h3 className="font-editorial text-3xl font-bold text-white">
                Fresh Adrak & 9-Spice Kadak Chai
              </h3>
              
              <p className="text-sm text-cream-300 font-light leading-relaxed">
                Boiled slow in brass cauldrons to extract maximum warmth, natural ginger zing, and earthy kulhad essence.
              </p>

              <div className="space-y-2 pt-2 text-xs text-cream-200">
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-saffron shrink-0" />
                  <span>100% Pure Milk & Assam Whole-Leaf Tea</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-saffron shrink-0" />
                  <span>Fresh Ginger Crushed Per Kettle</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-saffron shrink-0" />
                  <span>Eco-Friendly Natural Clay Kulhads</span>
                </div>
              </div>
            </div>

            {/* Feature Image with Steam */}
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mt-6 border border-white/10">
              <Image
                src="/images/adrak.jpg"
                alt="Adrak Kulhad Chai"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Steam FX */}
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 pointer-events-none flex space-x-2">
                <div className="w-3 h-12 bg-white/30 rounded-full blur-md animate-steam-rise" />
                <div className="w-4 h-16 bg-white/20 rounded-full blur-lg animate-steam-rise-delayed" />
              </div>
            </div>
          </div>

          {/* Grid of Authentic Chai Varieties (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {chaiItems.slice(1, 7).map((item) => (
              <div 
                key={item.id}
                className="bg-white rounded-2xl p-5 border border-espresso/5 shadow-sm hover:shadow-xl hover:border-saffron/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="flex items-start space-x-4">
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-espresso/10">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap gap-1">
                      {item.tags?.map((t, idx) => (
                        <span key={idx} className="text-[10px] uppercase tracking-wider font-semibold text-saffron px-1.5 py-0.5 bg-saffron/10 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h4 className="font-editorial text-lg font-bold text-espresso group-hover:text-saffron transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-xs text-espresso/70 line-clamp-2 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-espresso/5 flex items-center justify-between text-xs">
                  <span className="font-medium text-espresso/60">Served Fresh & Hot</span>
                  <Link href="/menu" className="text-saffron font-bold hover:underline flex items-center">
                    <span>View</span>
                    <ArrowRight className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
