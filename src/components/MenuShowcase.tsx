"use strict";
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Utensils, Sparkles, Coffee, Pizza, Flame } from "lucide-react";
import { MENU_ITEMS, MenuItem } from "@/data/siteData";

export default function MenuShowcase() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Delights" },
    { id: "chai", label: "Artisanal Chai" },
    { id: "coffee-coolers", label: "Coffee & Coolers" },
    { id: "snacks-pizza", label: "Pizzas & Savories" },
    { id: "pasta-maggie", label: "Pastas & Maggi" },
    { id: "burgers-fries", label: "Burgers & Fries" },
    { id: "desserts", label: "Desserts & Bakes" },
  ];

  const filteredItems = activeCategory === "all"
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section className="py-24 bg-cream-100 relative overflow-hidden" id="menu-showcase">
      {/* Background radial glow */}
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-saffron/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-saffron font-bold">
            <Utensils className="w-4 h-4 text-saffron" />
            <span>CURATED FOOD & BEVERAGES</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl font-extrabold text-espresso">
            COME FOR THE CHAI. <br />
            <span className="italic font-normal text-saffron">STAY FOR THE CRAVINGS.</span>
          </h2>

          <p className="text-base text-espresso/80 font-light leading-relaxed">
            Every recipe is prepared fresh to order. From steaming earthen kulhads to artisan pizzas and comfort noodles — authentic flavor meets unbeatable value.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 ${
                  isActive
                    ? "bg-espresso text-cream-100 shadow-lg scale-105 border border-saffron"
                    : "bg-white text-espresso/80 hover:bg-espresso/5 border border-espresso/10"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.slice(0, 9).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-espresso/10 shadow-sm hover:shadow-2xl hover:border-saffron/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Frame with zoom on hover */}
                <div className="relative w-full aspect-[4/3] bg-espresso/5 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-espresso/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-saffron-light border border-white/10 shadow-md">
                    {item.categoryLabel}
                  </div>

                  {item.highlight && (
                    <div className="absolute top-4 right-4 bg-saffron text-white px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider flex items-center shadow-md">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Popular
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 space-y-2">
                  <div className="flex flex-wrap gap-1.5 mb-1">
                    {item.tags?.map((tag, i) => (
                      <span key={i} className="text-[10px] uppercase font-bold text-saffron px-2 py-0.5 bg-saffron/10 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="font-editorial text-xl font-bold text-espresso group-hover:text-saffron transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-espresso/70 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom footer inside card */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-espresso/5">
                <span className="text-xs text-olive font-semibold flex items-center">
                  <Flame className="w-3.5 h-3.5 mr-1 text-saffron" />
                  Made Fresh To Order
                </span>

                <Link
                  href="/menu"
                  className="text-xs font-bold uppercase tracking-wider text-saffron hover:text-saffron-dark inline-flex items-center"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu CTA button */}
        <div className="mt-14 text-center">
          <Link
            href="/menu"
            className="btn-primary-glow inline-flex items-center text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-saffron to-saffron-light text-white px-8 py-4 rounded-full shadow-xl transition-all group"
          >
            <span>VIEW COMPLETE MENU & CATEGORIES</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
