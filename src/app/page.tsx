import React from "react";
import Hero from "@/components/Hero";
import MarqueeTicker from "@/components/MarqueeTicker";
import BrandStorySection from "@/components/BrandStorySection";
import NostalgiaSection from "@/components/NostalgiaSection";
import ChaiExperience from "@/components/ChaiExperience";
import SignatureShowcase from "@/components/SignatureShowcase";
import MenuShowcase from "@/components/MenuShowcase";
import CafeExperience from "@/components/CafeExperience";
import BrandStatsSection from "@/components/BrandStatsSection";
import FoundersSection from "@/components/FoundersSection";
import BrandTimeline from "@/components/BrandTimeline";
import LocationsExplorer from "@/components/LocationsExplorer";
import FranchiseOverview from "@/components/FranchiseOverview";
import GalleryMasonry from "@/components/GalleryMasonry";
import FranchiseFAQ from "@/components/FranchiseFAQ";
import InstagramSection from "@/components/InstagramSection";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <MarqueeTicker />
      <BrandStorySection />
      <NostalgiaSection />
      <ChaiExperience />
      <SignatureShowcase />
      <MenuShowcase />
      <CafeExperience />
      <BrandStatsSection />
      <FoundersSection />
      <BrandTimeline />
      <LocationsExplorer />
      <FranchiseOverview />
      <GalleryMasonry />
      <FranchiseFAQ />
      <InstagramSection />
      <FinalCTA />
    </div>
  );
}
