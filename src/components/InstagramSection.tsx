"use strict";
import React from "react";
import Image from "next/image";
import { Instagram, ArrowUpRight, Heart, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function InstagramSection() {
  const socialPosts = [
    { image: "/images/cafe1.jpeg", caption: "Evening vibes at our Mira Bhayander flagship! ☕✨", likes: "482" },
    { image: "/images/adrak.jpg", caption: "Hand-crushed ginger, whole spices & pure love in every kulhad.", likes: "729" },
    { image: "/images/9teaspizza.png", caption: "Crispy stone-baked pizza goodness. Tag your foodie crew! 🍕", likes: "614" },
    { image: "/images/cafe2.jpeg", caption: "Celebrating 9Teas Week moments with the best community. 🎉", likes: "951" },
    { image: "/images/GreenMojitopreview.png", caption: "Cool down with our sparkling Mint Mojito! 🍃", likes: "398" },
    { image: "/images/welcome.jpg", caption: "#humudnekeliyebanehai — A journey of taste & ambition.", likes: "1,204" },
  ];

  return (
    <section className="py-24 bg-espresso text-cream-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-saffron font-bold">
              <Instagram className="w-4 h-4 text-saffron" />
              <span>COMMUNITY FEED</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
              GOOD CHAI. GOOD PEOPLE. <br />
              <span className="italic font-normal text-saffron">GOOD VIBES.</span>
            </h2>

            <p className="text-base text-cream-300 font-light leading-relaxed max-w-xl">
              Follow our daily journey on Instagram. Join over {SITE_CONFIG.stats.community} tea enthusiasts celebrating the 90s spirit.
            </p>
          </div>

          <a
            href={SITE_CONFIG.socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-glow inline-flex items-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-saffron to-saffron-light text-white px-6 py-3.5 rounded-full shadow-lg group shrink-0"
          >
            <Instagram className="w-4 h-4 mr-2" />
            <span>FOLLOW @9TEAS_CAFE_</span>
            <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Social Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {socialPosts.map((post, idx) => (
            <a
              key={idx}
              href={SITE_CONFIG.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-charcoal border border-white/10 shadow-md block"
            >
              <Image
                src={post.image}
                alt={`Instagram Post ${idx + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-espresso/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3.5 text-white">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-saffron" />
                </div>
                <div className="space-y-1">
                  <p className="text-[11px] text-cream-200 line-clamp-2 leading-snug">
                    {post.caption}
                  </p>
                  <div className="flex items-center text-[10px] text-saffron font-bold">
                    <Heart className="w-3 h-3 mr-1 fill-saffron" />
                    <span>{post.likes}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
