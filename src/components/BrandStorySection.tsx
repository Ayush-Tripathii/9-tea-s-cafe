"use strict";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles, Heart, Award, Users } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function BrandStorySection() {
  return (
    <section className="py-24 bg-cream-100 relative overflow-hidden">
      {/* Background Subtle Decors */}
      <div className="absolute top-1/2 -left-32 w-80 h-80 bg-saffron/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Authentic Imagery & Retro Accent */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] bg-espresso">
              <Image
                src="/images/welcome.jpg"
                alt="Welcome to 9Teas Cafe"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase tracking-[0.2em] text-saffron-light font-bold">
                  Since {SITE_CONFIG.establishedYear} · Bhayander East
                </span>
                <p className="font-editorial text-lg italic text-cream-100 mt-1">
                  “A sip that takes you back to the golden 90s.”
                </p>
              </div>
            </div>

            {/* Overlapping Small Accent Box */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 z-20 bg-espresso text-cream-100 p-6 rounded-2xl shadow-2xl border border-saffron/30 max-w-xs">
              <div className="flex items-center space-x-3 mb-2">
                <Sparkles className="w-5 h-5 text-saffron" />
                <span className="text-xs font-bold uppercase tracking-wider text-saffron">
                  Celebrating 9Tea's Week
                </span>
              </div>
              <p className="text-xs text-cream-300 leading-relaxed font-light">
                Every last week of the month, our cafes come alive with live events, combo treats, and music!
              </p>
            </div>

            {/* Retro Stamp */}
            <div className="absolute -top-6 -left-6 z-20 bg-saffron text-white w-24 h-24 rounded-full flex flex-col items-center justify-center p-2 shadow-xl border-2 border-white rotate-[-8deg]">
              <span className="text-[10px] font-bold tracking-widest uppercase">Est.</span>
              <span className="font-editorial text-xl font-black">2019</span>
              <span className="text-[8px] tracking-wider uppercase">Mumbai</span>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-saffron font-bold">
              <span className="w-8 h-[2px] bg-saffron" />
              <span>THE 9TEAS STORY</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-extrabold text-espresso leading-[1.15]">
              MORE THAN A CUP OF CHAI. <br />
              <span className="italic font-normal text-saffron">A Place To Connect.</span>
            </h2>

            <div className="space-y-4 text-espresso/80 text-base leading-relaxed font-normal">
              <p>
                Founded in <strong>2019</strong> at Bhayander East, Thane by young entrepreneurs <strong>{SITE_CONFIG.foundersNames}</strong> and guided by mentor <strong>{SITE_CONFIG.mentorName}</strong>, 9Tea’s Cafe was born from a singular passion: reviving the pure nostalgia of Indian tea culture in a vibrant, youth-centric cafe environment.
              </p>
              
              <p>
                What started as a cherished local haven quickly grew into Mira-Bhayander&apos;s most loved tea destination. With thousands of cups hand-brewed fresh daily across <strong>{SITE_CONFIG.stats.outlets} outlets in {SITE_CONFIG.stats.cities} cities</strong>, we blend age-old kadak kulhad chai traditions with contemporary cafe delights — from stone-baked pizzas to sizzling pastas and coolers.
              </p>
            </div>

            {/* Blockquote with brand mission */}
            <blockquote className="border-l-4 border-saffron pl-4 py-2 my-4 bg-cream-200/60 rounded-r-xl">
              <p className="font-editorial text-lg italic text-espresso font-semibold">
                “Our Goal is to serve the best quality food with Uniqueness & Love.”
              </p>
              <footer className="text-xs uppercase tracking-wider text-saffron font-bold mt-1">
                — {SITE_CONFIG.slogan} ({SITE_CONFIG.hashtag})
              </footer>
            </blockquote>

            {/* Key Value Badges */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-xl bg-saffron/10 text-saffron shrink-0 mt-0.5">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-espresso">Hand-Brewed Daily</h4>
                  <p className="text-xs text-espresso/70">Fresh crushed ginger & whole spices in every kettle.</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 rounded-xl bg-olive/10 text-olive shrink-0 mt-0.5">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-espresso">Smoke-Free Vibes</h4>
                  <p className="text-xs text-espresso/70">Inviting spaces built for students, friends & families.</p>
                </div>
              </div>
            </div>

            {/* Read Our Story Link */}
            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-saffron hover:text-saffron-dark group transition-colors"
              >
                <span>DISCOVER OUR FULL STORY</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
