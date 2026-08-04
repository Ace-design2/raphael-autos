"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

const SERVICES = [
  {
    title: "Bespoke Sourcing",
    description: "Leveraging our global network to locate and acquire some of the world's most exclusive, low-production vehicles on your behalf."
  },
  {
    title: "White-Glove Delivery",
    description: "Secured, fully-enclosed transport ensuring your vehicle arrives at your estate in the exact flawless condition it left our showroom."
  },
  {
    title: "Consignment",
    description: "A discreet, highly targeted approach to selling your exotic or luxury vehicle to our private network of serious collectors."
  },
  {
    title: "Concierge & Management",
    description: "Comprehensive post-purchase care, including storage solutions, scheduled maintenance logistics, and complete collection management."
  }
];

export const AboutPageContent = () => {
  return (
    <div className="w-full flex flex-col">
      
      {/* ── EDITORIAL / PHILOSOPHY (White) ── */}
      <section className="w-full bg-white px-6 md:px-20 py-24 md:py-32 flex justify-center">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 md:gap-24 items-start">
          {/* Left: Minimal Heading */}
          <div className="w-full md:w-1/3 flex flex-col items-start pt-2">
            <div className="w-8 h-[1px] bg-black mb-6" />
            <h2 className="font-display text-3xl md:text-5xl text-black tracking-tight leading-[1.1]">
              Curated<br /> Without<br /> Compromise.
            </h2>
          </div>

          {/* Right: Editorial Copy with Drop Cap */}
          <div className="w-full md:w-2/3">
            <p className="font-body text-base md:text-lg text-gray-800 leading-relaxed font-light first-letter:text-6xl first-letter:font-display first-letter:float-left first-letter:mr-3 first-letter:mt-2 first-letter:leading-none first-letter:text-black">
              Raphael Autos was founded on a singular principle: connecting the most discerning collectors and enthusiasts with motor cars of unparalleled pedigree. We do not simply sell cars; we curate an experience that honors the engineering, history, and artistry of the vehicles we represent.
            </p>
            <p className="font-body text-base md:text-lg text-gray-800 leading-relaxed font-light mt-6">
              Every vehicle that enters our showroom undergoes a rigorous vetting process. From provenance and service history to flawless aesthetic condition, we ensure that only the most exceptional examples are offered to our clients. 
            </p>
            <p className="font-body text-base md:text-lg text-gray-800 leading-relaxed font-light mt-6">
              Our team consists of lifelong automotive purists who understand that acquiring a supercar or classic is an emotional investment. We operate with complete transparency, absolute discretion, and a commitment to perfection that extends far beyond the point of sale.
            </p>
          </div>
        </div>
      </section>

      {/* ── THE EXPERIENCE (Dark Brutalist Grid) ── */}
      <section className="w-full bg-[#111111] px-6 md:px-20 py-24 md:py-32">
        <div className="w-full max-w-7xl mx-auto flex flex-col">
          <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.4em] font-bold mb-4 block">
                The Experience
              </span>
              <h2 className="font-display text-4xl md:text-6xl text-white tracking-tight leading-[1.1]">
                Uncompromising<br />Service.
              </h2>
            </div>
            <p className="font-body text-sm md:text-base text-gray-400 font-light max-w-sm leading-relaxed">
              We provide a suite of highly specialized services designed to make ownership effortless and rewarding.
            </p>
          </div>

          {/* Brutalist Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-white/10">
            {SERVICES.map((service, index) => (
              <div 
                key={index}
                className="border-r border-b border-white/10 p-8 md:p-16 flex flex-col group hover:bg-white/5 transition-colors duration-500"
              >
                <div className="text-cooliocns-gold font-mono text-xs opacity-50 mb-8">
                  / 0{index + 1}
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-4 group-hover:text-cooliocns-gold transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="font-body text-sm md:text-base text-gray-400 font-light leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
};
