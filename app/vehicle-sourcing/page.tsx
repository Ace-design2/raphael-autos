"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { VehicleSourcingContent } from "@/components/VehicleSourcingContent";
import { Button } from "@/components/ui/Button";

export default function VehicleSourcingPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[580px] sm:min-h-[650px] md:min-h-[700px] overflow-hidden flex flex-col justify-between select-none bg-[#111111]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/hero_aston_martin.png"
            alt="Vehicle Sourcing"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.7]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/20" />
        </div>

        {/* Content — bottom-left aligned, matching home hero */}
        <div className="relative z-10 flex-1 flex flex-col justify-end px-4 sm:px-8 md:px-20 pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8 md:pb-12 gap-6 sm:gap-8 md:gap-12">
          <div className="max-w-2xl flex flex-col items-start gap-3 sm:gap-5 md:gap-6 animate-fade-in">
            <span className="font-body text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-cooliocns-gold font-bold">
              Vehicle Sourcing
            </span>
            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] sm:leading-tight font-light tracking-tight sm:tracking-normal">
              Acquire the Unobtainable
            </h1>
            <p className="font-body text-xs sm:text-sm text-gray-300 leading-relaxed font-light tracking-wide max-w-xl">
              Our global network provides exclusive access to the world&apos;s most sought-after luxury and performance vehicles.
            </p>
            <div className="grid grid-cols-2 sm:flex items-center gap-2.5 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto">
              <Button
                variant="solid-gold"
                label="Start a Request"
                className="w-full sm:w-[180px] md:w-[200px] justify-center px-2 sm:px-6 py-2.5 text-xs sm:text-base font-bold"
                onClick={(e) => {
                  e?.preventDefault();
                  document.getElementById("sourcing-form-container")?.scrollIntoView({ behavior: "smooth" });
                }}
              />
              <Button
                variant="outline-white"
                label="Learn More"
                className="w-full sm:w-[180px] md:w-[200px] justify-center px-2 sm:px-6 py-2.5 text-xs sm:text-base font-bold"
                onClick={(e) => {
                  e?.preventDefault();
                  document.getElementById("footer")?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <VehicleSourcingContent />

      <Footer />
    </main>
  );
}
