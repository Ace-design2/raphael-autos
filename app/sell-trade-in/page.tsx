"use client";

import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SellTradeInContent } from "@/components/SellTradeInContent";

export default function SellTradeInPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#050505] pt-24">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="/images/about_details.png"
            alt="Vehicle Inspection"
            fill
            sizes="100vw"
            className="object-cover object-center brightness-[0.35]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/60" />
        </div>
        
        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.4em] font-semibold mb-6 block">
            Sell & Trade-In
          </span>
          <h1 className="font-display text-5xl md:text-7xl text-white tracking-tight font-normal leading-[1.05]">
            Receive a Professional Vehicle Evaluation
          </h1>
          <p className="mt-6 text-gray-300 font-body text-sm md:text-base max-w-xl mx-auto leading-relaxed tracking-wide">
            Whether you&apos;re looking to sell your current vehicle or trade it toward your next luxury automobile, Raphael Autos offers a straightforward and discreet evaluation process. Share your vehicle details below, and one of our specialists will contact you with the next steps.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <SellTradeInContent />

      <Footer />
    </main>
  );
}
