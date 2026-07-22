"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { VehicleSourcingContent } from "@/components/VehicleSourcingContent";

export default function VehicleSourcingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#050505] pt-24">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero_aston_martin.png"
            alt="Vehicle Sourcing"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.35]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.4em] font-semibold mb-6 block">
            Vehicle Sourcing
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-tight font-normal leading-[1.05]">
            Acquire the Unobtainable
          </h1>
          <p className="mt-6 text-gray-300 font-body text-sm md:text-base max-w-xl mx-auto leading-relaxed tracking-wide">
            Our global network provides exclusive access to the world's most sought-after luxury and performance vehicles.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <VehicleSourcingContent />

      <Footer />
    </main>
  );
}
