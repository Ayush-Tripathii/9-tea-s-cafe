"use strict";
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { OUTLETS, LocationItem, SITE_CONFIG } from "@/data/siteData";
import { MapPin, Phone, Mail, Clock, Navigation, ArrowUpRight, Sparkles, Building } from "lucide-react";

export default function LocationsExplorer() {
  const [selectedCity, setSelectedCity] = useState<string>("all");
  const [selectedOutlet, setSelectedOutlet] = useState<LocationItem>(OUTLETS[0]);

  const cities = [
    { id: "all", label: "All Outlets (8+)" },
    { id: "Maharashtra", label: "Maharashtra (Mumbai / Palghar)" },
    { id: "Uttar Pradesh", label: "Uttar Pradesh (Prayagraj)" },
  ];

  const filteredOutlets = selectedCity === "all"
    ? OUTLETS
    : OUTLETS.filter((o) => o.state === selectedCity);

  return (
    <section className="py-24 bg-cream-100 relative overflow-hidden" id="locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-saffron font-bold">
            <MapPin className="w-4 h-4 text-saffron" />
            <span>OUTLET DIRECTORY</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl font-extrabold text-espresso">
            FIND YOUR 9TEAS.
          </h2>

          <p className="text-base text-espresso/80 font-light leading-relaxed">
            Locate your nearest 9Teas Cafe for steaming kulhad chai, tasty bites, and an unforgettable 90s atmosphere.
          </p>
        </div>

        {/* City Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-3 mb-12">
          {cities.map((city) => {
            const isActive = selectedCity === city.id;
            return (
              <button
                key={city.id}
                onClick={() => setSelectedCity(city.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                  isActive
                    ? "bg-espresso text-cream-100 shadow-md border border-saffron"
                    : "bg-white text-espresso/80 hover:bg-espresso/5 border border-espresso/10"
                }`}
              >
                {city.label}
              </button>
            );
          })}
        </div>

        {/* Location Explorer Split (Left: List, Right: Active Outlet Feature Card) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Interactive List (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {filteredOutlets.map((outlet) => {
              const isSelected = selectedOutlet.id === outlet.id;
              return (
                <div
                  key={outlet.id}
                  onClick={() => setSelectedOutlet(outlet)}
                  className={`p-6 rounded-3xl border transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-white border-saffron shadow-xl ring-2 ring-saffron/20"
                      : "bg-white/70 hover:bg-white border-espresso/10 hover:border-saffron/40"
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2.5 rounded-xl ${isSelected ? "bg-saffron text-white" : "bg-saffron/10 text-saffron"}`}>
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-editorial text-xl font-bold text-espresso">
                          {outlet.name}
                        </h3>
                        <span className="text-xs text-saffron font-semibold uppercase tracking-wider">
                          {outlet.city} · {outlet.state}
                        </span>
                      </div>
                    </div>

                    {outlet.isHeadOffice && (
                      <span className="self-start sm:self-auto text-[10px] font-bold uppercase tracking-wider bg-espresso text-cream-100 px-3 py-1 rounded-full border border-white/10">
                        Flagship & Head Office
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-espresso/70 leading-relaxed font-light mb-4">
                    {outlet.address}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-espresso/80 pt-3 border-t border-espresso/5">
                    <a
                      href={`tel:${outlet.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center hover:text-saffron font-medium"
                    >
                      <Phone className="w-3.5 h-3.5 mr-1.5 text-saffron" />
                      <span>{outlet.phone}</span>
                    </a>

                    <a
                      href={`mailto:${outlet.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center hover:text-saffron font-medium"
                    >
                      <Mail className="w-3.5 h-3.5 mr-1.5 text-saffron" />
                      <span>{outlet.email}</span>
                    </a>

                    <a
                      href={outlet.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="ml-auto flex items-center font-bold text-saffron hover:text-saffron-dark uppercase tracking-wider text-[11px]"
                    >
                      <span>Get Directions</span>
                      <Navigation className="w-3.5 h-3.5 ml-1" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Selected Outlet Spotlight Details (5 cols) */}
          <div className="lg:col-span-5 bg-espresso text-cream-100 rounded-3xl p-8 border border-saffron/30 shadow-2xl space-y-6 sticky top-28">
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-charcoal border border-white/10">
              <Image
                src={selectedOutlet.image || "/images/welcome.jpg"}
                alt={selectedOutlet.name}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-espresso/90 text-saffron text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/10">
                {selectedOutlet.city}
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-saffron font-bold">
                OUTLET SPOTLIGHT
              </span>
              <h3 className="font-editorial text-2xl font-bold text-white">
                {selectedOutlet.name}
              </h3>
              <p className="text-xs sm:text-sm text-cream-300 font-light leading-relaxed">
                {selectedOutlet.address}
              </p>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-cream-200 border-y border-white/10 py-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-3 text-saffron shrink-0" />
                <span>{selectedOutlet.timing}</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-saffron shrink-0" />
                <a href={`tel:${selectedOutlet.phone}`} className="hover:text-white transition-colors">
                  {selectedOutlet.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-saffron shrink-0" />
                <a href={`mailto:${selectedOutlet.email}`} className="hover:text-white transition-colors">
                  {selectedOutlet.email}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={selectedOutlet.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-glow flex-1 inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-saffron to-saffron-light text-white py-3.5 px-4 rounded-xl shadow-lg"
              >
                <span>Open in Google Maps</span>
                <Navigation className="w-4 h-4 ml-2" />
              </a>

              <a
                href={`tel:${selectedOutlet.phone}`}
                className="inline-flex items-center justify-center text-xs font-bold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-cream-100 py-3.5 px-4 rounded-xl border border-white/20"
              >
                <Phone className="w-4 h-4 mr-1.5 text-saffron" />
                <span>Call Branch</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
