"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

import { InventoryPageContent } from "@/components/InventoryPageContent";

export default function InventoryPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero_rolls_royce.png"
            alt="Inventory Background"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.35]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.4em] font-semibold mb-6 block">
            Discover Our Collection
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-tight font-normal leading-[1.05]">
            Inventory
          </h1>
          <p className="mt-6 text-gray-300 font-body text-sm md:text-base max-w-xl mx-auto leading-relaxed tracking-wide">
            Explore our curated selection of high-performance and luxury vehicles, meticulously inspected to meet the highest standards.
          </p>
        </div>
      </section>

      {/* Main Content (Stats, Filters, Sort, Grid) */}
      <InventoryPageContent />

      <Footer />
    </main>
  );
}
