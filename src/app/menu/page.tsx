"use strict";
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MENU_ITEMS, MenuItem } from "@/data/siteData";
import { Search, Sparkles, Utensils, CheckCircle2, Flame, MapPin, ArrowRight } from "lucide-react";
import FinalCTA from "@/components/FinalCTA";

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    { id: "all", label: "All Items" },
    { id: "chai", label: "Artisanal Chai" },
    { id: "coffee-coolers", label: "Coffee & Coolers" },
    { id: "snacks-pizza", label: "Pizzas & Savories" },
    { id: "pasta-maggie", label: "Pastas & Maggi" },
    { id: "burgers-fries", label: "Burgers & Fries" },
    { id: "desserts", label: "Desserts & Bakes" },
  ];

  const filteredItems = MENU_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full">
      {/* Menu Header Banner */}
      <section className="relative py-20 sm:py-28 bg-espresso text-cream-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/welcome.jpg"
            alt="9Teas Menu Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-espresso/85" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-saffron/40 backdrop-blur-md">
            <Utensils className="w-4 h-4 text-saffron" />
            <span className="text-xs uppercase tracking-[0.25em] text-saffron-light font-bold">
              HAND-BREWED & MADE FRESH
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl font-extrabold text-white leading-[1.1]">
            THE 9TEAS MENU.
          </h1>

          <p className="text-base sm:text-xl text-cream-200 font-light max-w-2xl mx-auto">
            From steaming earthen Kulhad Chai to stone-baked artisan pizzas and comfort noodles — just choose from the best.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto relative pt-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-saffron" />
            <input
              type="text"
              placeholder="Search chai, pizza, pasta, burger..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 focus:border-saffron focus:ring-2 focus:ring-saffron/30 rounded-full pl-12 pr-6 py-3.5 text-sm text-white placeholder-cream-400 outline-none backdrop-blur-md transition-all"
            />
          </div>
        </div>
      </section>

      {/* Main Menu Grid Area */}
      <section className="py-20 bg-cream-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2.5 mb-14">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                    isActive
                      ? "bg-espresso text-cream-100 shadow-md border border-saffron scale-105"
                      : "bg-white text-espresso/80 hover:bg-espresso/5 border border-espresso/10"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Items Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-espresso/10 max-w-lg mx-auto p-8">
              <p className="text-espresso/70 font-light text-base mb-4">
                No menu items found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                className="text-xs uppercase font-bold text-saffron hover:underline"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden border border-espresso/10 shadow-sm hover:shadow-2xl hover:border-saffron/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image */}
                    <div className="relative w-full aspect-[4/3] bg-espresso/5 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />

                      <div className="absolute top-4 left-4 bg-espresso/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-saffron-light border border-white/10 shadow-md">
                        {item.categoryLabel}
                      </div>

                      {item.highlight && (
                        <div className="absolute top-4 right-4 bg-saffron text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center shadow-md">
                          <Sparkles className="w-3 h-3 mr-1" />
                          Signature
                        </div>
                      )}
                    </div>

                    {/* Details */}
                    <div className="p-6 space-y-2">
                      <div className="flex flex-wrap gap-1.5 mb-1">
                        {item.tags?.map((tag, i) => (
                          <span key={i} className="text-[10px] uppercase font-bold text-saffron px-2 py-0.5 bg-saffron/10 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <h3 className="font-editorial text-2xl font-bold text-espresso group-hover:text-saffron transition-colors">
                        {item.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-espresso/70 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-espresso/5 flex items-center justify-between">
                    <span className="text-xs text-olive font-semibold flex items-center">
                      <Flame className="w-3.5 h-3.5 mr-1 text-saffron" />
                      Fresh to Order
                    </span>

                    <Link
                      href="/locations"
                      className="text-xs font-bold uppercase tracking-wider text-saffron hover:text-saffron-dark inline-flex items-center"
                    >
                      <span>Find In Store</span>
                      <MapPin className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Authentic "Why Choose Our Food" Section from 9teascafe.com */}
      <section className="py-20 bg-espresso text-cream-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] text-saffron font-bold">
                QUALITY & HYGIENE COMMITMENT
              </span>

              <h2 className="font-editorial text-3xl sm:text-5xl font-extrabold text-white">
                Why Choose Our Food?
              </h2>

              <p className="text-sm sm:text-base text-cream-300 font-light leading-relaxed">
                We focus on quality, hygiene, and authentic taste to give you a food experience you&apos;ll always love.
              </p>

              <ul className="space-y-3 pt-2">
                {[
                  "Fresh & Premium Quality Ingredients",
                  "Authentic Taste & Rich Kadak Spices",
                  "100% Hygienic & Safe Food Preparation",
                  "Affordable Everyday Pricing for Youth & Families",
                  "Loved & Trusted by Thousands of Regulars Daily",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-center text-sm text-cream-200">
                    <CheckCircle2 className="w-4 h-4 mr-3 text-saffron shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                <Image
                  src="/images/margita.png"
                  alt="Delicious 9Teas Food"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
