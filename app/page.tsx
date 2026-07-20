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

        {/* Gold Divider */}
        <div className="w-full bg-cooliocns-gold py-12 md:py-16 flex flex-col items-center justify-center text-center px-6 border-y border-cooliocns-gold/20 shadow-[0_0_50px_rgba(201,162,39,0.15)] relative z-20">
          <h2 className="font-display text-3xl md:text-4xl text-[#111111] tracking-widest mb-3">
            RAPHAEL AUTOS
          </h2>
          <p className="font-body text-xs md:text-sm text-[#111111]/80 uppercase tracking-[0.3em] font-bold">
            Curated Luxury Automobiles
          </p>
        </div>

        {/* Concierge Services Section */}
        <ConciergeServices />
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
