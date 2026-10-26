"use strict";
import React from "react";
import { Sparkles, Coffee, Flame, Heart } from "lucide-react";

export default function MarqueeTicker() {
  const items = [
    "BACK TO THE 90s",
    "HAND-BREWED KULHAD CHAI",
    "CELEBRATING 9TEAS WEEK",
    "8+ OUTLETS ACROSS MAHARASHTRA & UP",
    "HUM UDNE KE LIYE BANE HAI",
    "ARTISAN PIZZAS & PASTAS",
    "PROFITABLE FRANCHISE PARTNERSHIPS",
    "SMOKE-FREE YOUTH & FAMILY AMBIANCE",
    "AUTHENTIC INDIAN CHAI CULTURE",
  ];

  return (
    <div className="w-full bg-espresso text-cream-100 py-3.5 border-y border-saffron/30 overflow-hidden relative shadow-inner">
      <div className="animate-marquee-track flex items-center space-x-8 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
        {[...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center space-x-6 shrink-0">
            <span className="text-white hover:text-saffron transition-colors cursor-default">
              {text}
            </span>
            {idx % 3 === 0 && <Sparkles className="w-3.5 h-3.5 text-saffron shrink-0" />}
            {idx % 3 === 1 && <Coffee className="w-3.5 h-3.5 text-saffron-light shrink-0" />}
            {idx % 3 === 2 && <Flame className="w-3.5 h-3.5 text-saffron shrink-0" />}
          </div>
        ))}
      </div>
    </div>
  );
}
