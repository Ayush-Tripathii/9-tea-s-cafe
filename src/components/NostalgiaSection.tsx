"use strict";
import React from "react";
import Image from "next/image";
import { Disc, Radio, Film, Sparkles, Heart, Coffee } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function NostalgiaSection() {
  const nostalgiaCards = [
    {
      icon: Radio,
      title: "Cassettes & Late Night Anthems",
      desc: "Remember rewriting mixtapes with a ballpen? We created 9Teas to bring back that era of unhurried soundtracks and real chatter.",
      badge: "Pure 90s Soul"
    },
    {
      icon: Coffee,
      title: "Chai & Endless Tapri Talks",
      desc: "Clay kulhads in hand, debating everything from cricket to college dreams with friends who felt like family.",
      badge: "Kulhad Culture"
    },
    {
      icon: Film,
      title: "Before Screens Stole Memories",
      desc: "A genuine space without the digital rush — where laughing together across a wooden table is the main event.",
      badge: "Real Connections"
    }
  ];

  return (
    <section className="py-24 bg-espresso text-cream-100 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-olive/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/5 border border-saffron/30">
            <Sparkles className="w-4 h-4 text-saffron" />
            <span className="text-xs uppercase tracking-[0.25em] text-saffron-light font-bold">
              SIGNATURE BRAND IDENTITY
            </span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
            BACK TO THE 90s.
          </h2>

          <p className="text-base sm:text-lg text-cream-300 font-light leading-relaxed">
            A celebration of simpler times, golden friendships, and slow sips. We designed 9Teas Cafe as an homage to the unforgettable 90s Indian spirit.
          </p>
        </div>

        {/* Nostalgia Grid with Polaroid Frame visual cues */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nostalgiaCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="glass-panel-dark rounded-3xl p-8 border border-white/10 hover:border-saffron/40 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Vintage Top Stamp */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-saffron/15 rounded-2xl text-saffron group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-saffron-light px-3 py-1 bg-white/5 rounded-full border border-white/10">
                    {card.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="font-editorial text-2xl font-bold text-white group-hover:text-saffron transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-cream-300 leading-relaxed font-light">
                    {card.desc}
                  </p>
                </div>

                {/* Bottom decorative cassette strip */}
                <div className="pt-8 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-cream-400">
                  <span className="font-mono tracking-widest text-[10px] text-cream-400">
                    SIDE-A · TRACK 0{idx + 1}
                  </span>
                  <span className="text-saffron text-[11px] font-semibold">
                    #humudnekeliyebanehai
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Nostalgia Polaroid Gallery Feature */}
        <div className="mt-16 bg-white/5 rounded-3xl p-8 sm:p-12 border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4 text-center lg:text-left">
              <span className="text-xs uppercase tracking-[0.2em] text-saffron font-bold">
                COMMUNITY & CULTURE
              </span>
              <h3 className="font-editorial text-3xl font-bold text-white">
                The Vibe You Can Never Fake.
              </h3>
              <p className="text-sm text-cream-300 leading-relaxed font-light">
                From board games and acoustic strums to birthday surprises and study dates — every corner of 9Teas is crafted to make memories that outlast the day.
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center text-xs font-semibold text-saffron-light">
                  <Heart className="w-4 h-4 mr-2 text-saffron fill-saffron" />
                  Mira Bhayander’s & Prayagraj’s Favorite Youth Destination
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/20 rotate-[-2deg] shadow-lg group">
                <Image 
                  src="/images/cafe1.jpeg" 
                  alt="Cafe Vibe 1" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/20 rotate-[3deg] shadow-lg group">
                <Image 
                  src="/images/cafe2.jpeg" 
                  alt="Cafe Vibe 2" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/20 rotate-[-1deg] shadow-lg group col-span-2 sm:col-span-1">
                <Image 
                  src="/images/cafe3.jpeg" 
                  alt="Cafe Vibe 3" 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
