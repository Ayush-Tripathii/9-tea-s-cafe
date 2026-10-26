"use strict";
"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Utensils, MapPin, Briefcase, PhoneCall } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteData";

export default function MobileActionBar() {
  const pathname = usePathname();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-espresso/95 backdrop-blur-xl border-t border-cream/15 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-4 gap-1 items-center">
        <Link
          href="/menu"
          className={`flex flex-col items-center justify-center py-1 rounded-lg transition-colors ${
            pathname === "/menu" ? "text-saffron" : "text-cream-300 hover:text-white"
          }`}
        >
          <Utensils className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Menu</span>
        </Link>

        <Link
          href="/locations"
          className={`flex flex-col items-center justify-center py-1 rounded-lg transition-colors ${
            pathname === "/locations" ? "text-saffron" : "text-cream-300 hover:text-white"
          }`}
        >
          <MapPin className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Outlets</span>
        </Link>

        <Link
          href="/franchise"
          className={`flex flex-col items-center justify-center py-1 rounded-lg transition-colors ${
            pathname === "/franchise"
              ? "text-saffron bg-saffron/15"
              : "text-saffron-light font-bold"
          }`}
        >
          <div className="relative">
            <Briefcase className="w-5 h-5 mb-0.5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-saffron rounded-full animate-ping" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">Franchise</span>
        </Link>

        <a
          href={`tel:${SITE_CONFIG.headOffice.phone}`}
          className="flex flex-col items-center justify-center py-1 rounded-lg text-cream-300 hover:text-white transition-colors"
        >
          <PhoneCall className="w-5 h-5 mb-0.5 text-saffron" />
          <span className="text-[10px] font-semibold uppercase tracking-wider">Call Now</span>
        </a>
      </div>
    </div>
  );
}
