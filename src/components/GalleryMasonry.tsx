"use strict";
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GALLERY_PHOTOS, GalleryItem } from "@/data/siteData";
import { Camera, X, ChevronLeft, ChevronRight, Sparkles, Maximize2 } from "lucide-react";

export default function GalleryMasonry() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const tabs = [
    { id: "all", label: "All Photos" },
    { id: "cafe", label: "Cafe & Interior" },
    { id: "chai", label: "Artisanal Chai" },
    { id: "food", label: "Food & Desserts" },
    { id: "moments", label: "Moments & Events" },
  ];

  const filteredPhotos = activeTab === "all"
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeTab);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section className="py-24 bg-cream-100 relative overflow-hidden" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-saffron font-bold">
            <Camera className="w-4 h-4 text-saffron" />
            <span>VISUAL CHRONICLES</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl font-extrabold text-espresso">
            THE 9TEAS GALLERY.
          </h2>

          <p className="text-base text-espresso/80 font-light leading-relaxed">
            Authentic glimpses of our warm ambiance, steaming kulhads, mouth-watering savories, and joyful community events.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                  isActive
                    ? "bg-espresso text-cream-100 shadow-md border border-saffron"
                    : "bg-white text-espresso/80 hover:bg-espresso/5 border border-espresso/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer bg-espresso shadow-sm hover:shadow-2xl border border-espresso/10 transition-all duration-300"
            >
              <Image
                src={photo.image}
                alt={photo.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-espresso/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white">
                <div className="self-end p-2 rounded-full bg-white/20 text-white backdrop-blur-sm">
                  <Maximize2 className="w-4 h-4" />
                </div>

                <div className="space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-saffron-light">
                    {photo.category}
                  </span>
                  <h4 className="font-editorial text-lg font-bold text-white">
                    {photo.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-saffron text-white transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Image */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-saffron text-white transition-colors"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Image */}
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-white/10 hover:bg-saffron text-white transition-colors"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] w-full h-[75vh] flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={filteredPhotos[lightboxIndex].image}
                alt={filteredPhotos[lightboxIndex].title}
                fill
                className="object-contain"
              />
            </div>

            <div className="mt-4 text-center">
              <h3 className="font-editorial text-xl font-bold text-white">
                {filteredPhotos[lightboxIndex].title}
              </h3>
              <p className="text-xs text-cream-400 mt-1">
                Image {lightboxIndex + 1} of {filteredPhotos.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
