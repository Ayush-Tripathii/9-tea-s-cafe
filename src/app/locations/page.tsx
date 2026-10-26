import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LocationsExplorer from "@/components/LocationsExplorer";
import FinalCTA from "@/components/FinalCTA";
import { SITE_CONFIG } from "@/data/siteData";
import { MapPin, Phone, Mail, Clock, Sparkles, Building, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Cafe Locations & Outlets | 9Teas Cafe",
  description: "Find 9Teas Cafe outlets in Bhayander East, Nallasopara, Virar, Vasai, and Prayagraj. Enjoy authentic kulhad chai and 90s vibes near you.",
};

export default function LocationsPage() {
  return (
    <div className="w-full">
      {/* Locations Banner */}
      <section className="relative py-20 sm:py-28 bg-espresso text-cream-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/branches-outlate.jpeg"
            alt="9Teas Cafe Locations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-espresso/85" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-saffron/40 backdrop-blur-md">
            <MapPin className="w-4 h-4 text-saffron" />
            <span className="text-xs uppercase tracking-[0.25em] text-saffron-light font-bold">
              {SITE_CONFIG.stats.outlets} OUTLETS · {SITE_CONFIG.stats.cities} CITIES
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl font-extrabold text-white leading-[1.1]">
            OUR LOCATIONS.
          </h1>

          <p className="text-base sm:text-xl text-cream-200 font-light max-w-2xl mx-auto">
            From our Mumbai flagship at Bhayander East to vibrant branches across Palghar and Prayagraj — stop by for a taste of home.
          </p>
        </div>
      </section>

      {/* Main Interactive Explorer */}
      <LocationsExplorer />

      {/* Head Office Spotlight */}
      <section className="py-16 bg-cream-50 border-t border-espresso/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-espresso text-cream-100 rounded-3xl p-8 sm:p-12 border border-saffron/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.2em] text-saffron font-bold">
                <Building className="w-4 h-4 text-saffron" />
                <span>CORPORATE HEADQUARTERS</span>
              </div>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                9Teas Cafe Corporate Office
              </h3>
              <p className="text-sm text-cream-300 font-light leading-relaxed">
                {SITE_CONFIG.headOffice.address}
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-cream-200">
                <span className="flex items-center"><Phone className="w-3.5 h-3.5 mr-1.5 text-saffron" /> {SITE_CONFIG.headOffice.phone}</span>
                <span className="flex items-center"><Mail className="w-3.5 h-3.5 mr-1.5 text-saffron" /> {SITE_CONFIG.headOffice.email}</span>
                <span className="flex items-center"><Clock className="w-3.5 h-3.5 mr-1.5 text-saffron" /> {SITE_CONFIG.headOffice.hours}</span>
              </div>
            </div>

            <Link
              href="/franchise"
              className="btn-primary-glow inline-flex items-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-saffron to-saffron-light text-white px-7 py-4 rounded-full shadow-lg group shrink-0"
            >
              <span>Bring 9Teas to Your City</span>
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
