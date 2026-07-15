"use client";

import { useState } from "react";
import HeroSlider from "@/components/HeroSlider";
import FeaturedCollections from "@/components/FeaturedCollections";
import FeaturedInventory from "@/components/FeaturedInventory";
import AboutPreview from "@/components/AboutPreview";
import ConciergeServices from "@/components/ConciergeServices";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#111111] selection:bg-cooliocns-gold selection:text-white">
      <ScrollIndicator />
      <main className="flex-1 flex flex-col">
        {/* Header & Hero Carousel Slider */}
        <HeroSlider searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {/* Curated Collections Section */}
        <FeaturedCollections />

        {/* Featured Inventory Section */}
        <FeaturedInventory searchQuery={searchQuery} />

        {/* About Preview Section */}
        <AboutPreview />

        {/* Concierge Services Section */}
        <ConciergeServices />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
