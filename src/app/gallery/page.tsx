import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import GalleryMasonry from "@/components/GalleryMasonry";
import InstagramSection from "@/components/InstagramSection";
import FinalCTA from "@/components/FinalCTA";
import { Camera, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Photo Gallery & Cafe Moments | 9Teas Cafe",
  description: "Browse authentic photos of 9Teas Cafe interiors, hand-brewed kulhad chai, stone-baked pizzas, and lively community gatherings.",
};

export default function GalleryPage() {
  return (
    <div className="w-full">
      {/* Gallery Hero Banner */}
      <section className="relative py-20 sm:py-28 bg-espresso text-cream-100 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image
            src="/images/gallerySetting.jpeg"
            alt="9Teas Cafe Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-espresso/85" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/10 border border-saffron/40 backdrop-blur-md">
            <Camera className="w-4 h-4 text-saffron" />
            <span className="text-xs uppercase tracking-[0.25em] text-saffron-light font-bold">
              MEMORIES & MOMENTS
            </span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl font-extrabold text-white leading-[1.1]">
            OUR GALLERY.
          </h1>

          <p className="text-base sm:text-xl text-cream-200 font-light max-w-2xl mx-auto">
            A visual stroll through our cozy cafe corners, fresh culinary creations, and the vibrant youth that makes 9Teas special.
          </p>
        </div>
      </section>

      {/* Masonry Filterable Gallery */}
      <GalleryMasonry />

      {/* Instagram Feed */}
      <InstagramSection />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
