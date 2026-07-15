"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";

export const AboutPreview = (): React.JSX.Element => {
  return (
    <section
      id="about"
      className="relative w-full min-h-[580px] md:min-h-[660px] flex items-center overflow-hidden bg-[#111111] py-24 px-6 md:px-20 border-t border-white/10 select-none"
    >
      {/* Background Image with Dark Vignette Gradients (Hero Section Styling) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/about_details.png"
          alt="Luxury car interior detail stitching and engineering"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.4] contrast-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/75 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/85 to-transparent" />
      </div>

      {/* Ultra-Minimalist Rolls-Royce Style Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start gap-6 sm:gap-7">
        <span className="font-body text-[11px] sm:text-xs uppercase tracking-[0.3em] text-cooliocns-gold font-bold">
          PHILOSOPHY
        </span>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] font-light tracking-tight max-w-3xl">
          Defined by Excellence.
        </h2>

        {/* Shorter, high-impact copy prioritizing minimalism */}
        <p className="font-body text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed font-light tracking-wide max-w-xl">
          Connecting discerning collectors with motor cars of timeless design and exceptional engineering. Curated without compromise.
        </p>

        <div className="mt-4 flex items-center gap-4 pointer-events-auto">
          <Button
            variant="outline-white"
            label="DISCOVER RAPHAEL AUTOS"
            className="px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
