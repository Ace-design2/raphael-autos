"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";

export const FinalCTA = (): React.JSX.Element => {
  return (
    <section className="relative w-full py-32 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden bg-[#050505] border-t border-white/5" id="contact">
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/hero_aston_martin.png"
          alt="Luxury car abstract background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30 brightness-50 contrast-125"
        />
        {/* Gradients to fade into dark */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-transparent to-[#050505]/90" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Eyebrow */}
        <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.4em] font-semibold mb-8 block">
          Take the Next Step
        </span>

        {/* Heading */}
        <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-normal tracking-tight leading-[1.05] mb-8">
          Begin Your Journey
        </h2>

        {/* Body Text */}
        <p className="font-body text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed tracking-wide max-w-2xl mx-auto mb-12">
          Whether you&apos;re searching for your next luxury automobile, exploring leasing options, or looking to sell or trade your current vehicle, our team is ready to assist with a personalized experience tailored to your needs.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full">
          <Button
            variant="solid-gold"
            label="Enquire About a Vehicle"
            className="w-full sm:w-auto px-10 py-4 text-xs font-bold uppercase tracking-[0.25em]"
            onClick={(e) => {
              e?.preventDefault();
              // Replace with appropriate logic later
              console.log("Enquire clicked");
            }}
          />
          <Button
            variant="outline-white"
            label="Contact Raphael Autos"
            className="w-full sm:w-auto px-10 py-4 text-xs font-bold uppercase tracking-[0.25em]"
            onClick={(e) => {
              e?.preventDefault();
              const el = document.getElementById("footer");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
        
      </div>
    </section>
  );
};

export default FinalCTA;
