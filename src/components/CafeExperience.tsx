"use strict";
import React from "react";
import Image from "next/image";
import { Sparkles, Users, Music, Smile, ShieldCheck, Heart } from "lucide-react";

export default function CafeExperience() {
  const vibeFeatures = [
    {
      icon: ShieldCheck,
      title: "100% Smoke-Free & Welcoming",
      desc: "Hygienic, comfortable seating curated for students, families, and professionals."
    },
    {
      icon: Music,
      title: "Live Events & 90s Playlists",
      desc: "Acoustic jam sessions, nostalgic pop tracks, and celebrating 9Teas Week."
    },
    {
      icon: Smile,
      title: "Warm Hospitality",
      desc: "Our barista team ensures every cup and plate is served with genuine affection."
    },
    {
      icon: Users,
      title: "Youth Community Hub",
      desc: "The favorite hangout spot across Mira-Bhayander, Vasai, Virar & Prayagraj."
    }
  ];

  return (
    <section className="py-24 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-saffron font-bold">
            <Sparkles className="w-4 h-4 text-saffron" />
            <span>THE 9TEAS ATMOSPHERE</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl font-extrabold text-espresso">
            COME FOR THE CHAI. <br />
            <span className="italic font-normal text-saffron">STAY FOR THE VIBE.</span>
          </h2>

          <p className="text-base text-espresso/80 font-light leading-relaxed">
            More than just food and beverages — 9Teas Cafe is where memories are created, stories are shared, and laughter echoes across cozy wooden booths.
          </p>
        </div>

        {/* Dynamic Image Collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16 items-center">
          
          <div className="md:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
            <Image
              src="/images/gallerySetting.jpeg"
              alt="9Teas Cafe Interior Decor and Ambience"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs uppercase tracking-widest text-saffron font-bold mb-1">
                Modern Aesthetics × 90s Soul
              </span>
              <h4 className="font-editorial text-xl font-bold">
                Cozy Seating & Ambient Lighting
              </h4>
            </div>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-6">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white group">
              <Image
                src="/images/cafe1.jpeg"
                alt="Cafe Guests enjoying Chai"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white group">
              <Image
                src="/images/cafe2.jpeg"
                alt="Friends Hangout at 9Teas"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white group">
              <Image
                src="/images/cafe3.jpeg"
                alt="Youth Culture at 9Teas"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white group">
              <Image
                src="/images/cafe4.jpeg"
                alt="Evening Cafe Lights"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

        {/* Feature Pillars Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vibeFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-6 rounded-2xl border border-espresso/5 shadow-sm hover:shadow-md hover:border-saffron/30 transition-all space-y-3"
              >
                <div className="w-12 h-12 rounded-xl bg-saffron/10 flex items-center justify-center text-saffron">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-editorial text-lg font-bold text-espresso">
                  {feat.title}
                </h4>
                <p className="text-xs sm:text-sm text-espresso/70 leading-relaxed font-light">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
