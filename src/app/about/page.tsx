import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FoundersSection from "@/components/FoundersSection";
import BrandTimeline from "@/components/BrandTimeline";
import BrandStatsSection from "@/components/BrandStatsSection";
import FinalCTA from "@/components/FinalCTA";
import { SITE_CONFIG } from "@/data/siteData";
import { Sparkles, Heart, Coffee, Users, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story & Founders | 9Teas Cafe",
  description: "Learn the inspiring story of 9Teas Cafe, founded in 2019 by Amit Yadav & Rupesh Pendhari in Bhayander East. Bringing back 90s Indian nostalgia and authentic hand-brewed kulhad chai.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Page Hero Banner */}
      <section className="relative py-24 sm:py-32 bg-espresso text-cream-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/welcome.jpg"
            alt="9Teas Cafe Heritage"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-espresso/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-saffron/40 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-saffron" />
            <span className="text-xs uppercase tracking-[0.25em] text-saffron-light font-bold">
              ESTABLISHED IN 2019 · MUMBAI
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.1]">
            OUR HERITAGE & VISION.
          </h1>

          <p className="text-base sm:text-xl text-cream-200 font-light max-w-3xl mx-auto leading-relaxed">
            Crafting warm conversations, hand-brewed tea memories, and bringing back the soul of 90s India one clay cup at a time.
          </p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-24 bg-cream-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-saffron font-bold">
                WHERE IT ALL BEGAN
              </span>

              <h2 className="font-editorial text-3xl sm:text-5xl font-extrabold text-espresso leading-[1.15]">
                Mira-Bhayander&apos;s Most Loved Tea Destination.
              </h2>

              <div className="space-y-4 text-espresso/80 text-base leading-relaxed font-light">
                <p>
                  <strong>&ldquo;9 Tea&apos;s Cafe&rdquo;</strong> was founded in 2019 at Bhayander East, Thane by passionate young entrepreneurs <strong>{SITE_CONFIG.foundersNames}</strong>. Driven by the deep-rooted cultural love for Indian tea and the carefree warmth of the 90s, the cafe immediately resonated with the local youth, students, and working professionals.
                </p>

                <p>
                  Guided by the mentorship of <strong>{SITE_CONFIG.mentorName}</strong>, the founders set out to build a scalable, standardized, and high-quality Indian cafe brand that elevates everyday street chai into a premium, hygienic, smoke-free cafe experience without losing its authentic soul.
                </p>

                <p>
                  Today, 9Tea&apos;s Cafe operates <strong>{SITE_CONFIG.stats.outlets} thriving outlets across {SITE_CONFIG.stats.cities} cities in Maharashtra and Uttar Pradesh</strong>, serving thousands of handcrafted cups daily.
                </p>
              </div>

              <blockquote className="border-l-4 border-saffron pl-4 py-3 bg-cream-200/60 rounded-r-xl">
                <p className="font-editorial text-xl italic text-espresso font-bold">
                  “Our Goal is to serve the best quality food with Uniqueness & Love.”
                </p>
                <p className="text-xs uppercase tracking-wider text-saffron font-semibold mt-1">
                  — The 9Teas Founding Principle
                </p>
              </blockquote>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/branches-outlate.jpeg"
                  alt="9Teas Outlets and Journey"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Celebrating 9Teas Week Box */}
              <div className="bg-espresso text-cream-100 p-8 rounded-3xl border border-saffron/30 shadow-xl space-y-3">
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-5 h-5 text-saffron animate-pulse" />
                  <h3 className="font-editorial text-xl font-bold text-white">
                    Celebrating 9Tea&apos;s Week
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-cream-300 font-light leading-relaxed">
                  Every last week of the month, all 9Teas outlets host our trademark &ldquo;Celebrating 9Tea&apos;s Week&rdquo; — bringing live acoustic music, student combo discounts, friendly contests, and festive cheer to our entire community!
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Brand Stats */}
      <BrandStatsSection />

      {/* Founders & Leadership */}
      <FoundersSection />

      {/* Timeline */}
      <BrandTimeline />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
