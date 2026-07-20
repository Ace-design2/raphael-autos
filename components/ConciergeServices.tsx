"use client";

import React, { useState } from "react";
import { Button } from "./ui/Button";

// High-impact SVG icons designed specifically for Raphael Autos Concierge Services
const SourcingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <path
      d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
  </svg>
);

const ViewingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <path
      d="M12 5C7 5 2.73 8.11 1 12C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 12C21.27 8.11 17 5 12 5ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
  </svg>
);

const DeliveryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <path
      d="M14 18V6C14 4.89543 13.1046 4 12 4H4C2.89543 4 2 4.89543 2 6V18H14ZM14 18H22L19 11H14V18Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="6.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const DocumentationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8">
    <path
      d="M9 12H15M9 16H13M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H14L21 10V19C21 20.1046 20.1046 21 19 21Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M14 3V10H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface ServiceItem {
  title: string;
  description: string;
  icon: React.JSX.Element;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    title: "Vehicle Sourcing",
    description: "Looking for a specific model? We'll help locate it globally through our extensive network.",
    icon: <SourcingIcon />,
  },
  {
    title: "Private Viewings",
    description: "Experience selected vehicles in a relaxed, personalized setting without distraction.",
    icon: <ViewingIcon />,
  },
  {
    title: "Delivery Coordination",
    description: "Nationwide and international delivery arranged with white-glove, enclosed transport.",
    icon: <DeliveryIcon />,
  },
  {
    title: "Documentation Support",
    description: "Professional assistance with registration, import/export, and ownership paperwork.",
    icon: <DocumentationIcon />,
  },
];

export const ConciergeServices = (): React.JSX.Element => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section className="bg-[#0a0a0a] text-white py-24 md:py-32 px-6 md:px-12 lg:px-20 relative z-10 overflow-hidden" id="concierge">
      {/* Decorative Abstract Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-cooliocns-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-white/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Sticky Header Section */}
        <div className="lg:w-5/12 flex flex-col justify-start">
          <div className="lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-cooliocns-gold"></div>
              <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.3em] font-semibold">
                Concierge Services
              </span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] mb-8">
              An Ownership Experience Tailored to You
            </h2>
            
            <p className="font-body text-sm md:text-base text-gray-400 leading-relaxed tracking-wide mb-12">
              Whether you&apos;re purchasing your first luxury automobile or adding a rare collector&apos;s piece to your garage, our concierge team provides personalized assistance throughout every stage of the journey.
            </p>
            
            <div className="hidden lg:block">
              <Button
                variant="solid-gold"
                label="Discuss Requirements"
                className="px-10 py-5 text-sm font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(201,162,39,0.2)] hover:shadow-[0_0_30px_rgba(201,162,39,0.4)] transition-shadow duration-500"
                onClick={(e) => {
                  e?.preventDefault();
                  const el = document.getElementById("footer");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
          </div>
        </div>

        {/* Services Interactive List */}
        <div className="lg:w-7/12 flex flex-col">
          {SERVICES_DATA.map((service, idx) => {
            const isHovered = hoveredIdx === idx;
            
            return (
              <div
                key={service.title}
                className={`group relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 py-10 md:py-14 border-t border-white/10 last:border-b transition-colors duration-500 cursor-pointer ${isHovered ? 'border-cooliocns-gold/40' : 'hover:border-cooliocns-gold/40'}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Number Background Indicator */}
                <div className={`absolute left-0 md:-left-8 top-1/2 -translate-y-1/2 text-[120px] md:text-[160px] font-display font-light pointer-events-none select-none transition-all duration-700 ease-out ${isHovered ? 'text-white/5 md:-translate-x-4' : 'text-transparent md:translate-x-0'}`}>
                  0{idx + 1}
                </div>

                {/* Number (visible on mobile or when not hovered as massive) */}
                <div className="font-body text-xs text-cooliocns-gold/60 uppercase tracking-widest w-12 md:hidden">
                  0{idx + 1}
                </div>

                {/* Icon Container */}
                <div className={`relative z-10 shrink-0 size-16 md:size-24 rounded border flex items-center justify-center transition-all duration-500 ${isHovered ? 'bg-cooliocns-gold/10 border-cooliocns-gold/50 text-cooliocns-gold scale-110' : 'bg-white/5 border-white/10 text-white/70'}`}>
                  {service.icon}
                </div>

                {/* Text Content */}
                <div className="relative z-10 flex-1 md:pl-4">
                  <div className="hidden md:block font-body text-xs text-cooliocns-gold/60 uppercase tracking-widest mb-3 transition-opacity duration-300">
                    0{idx + 1} // Phase
                  </div>
                  <h3 className={`font-display text-2xl md:text-3xl mb-3 tracking-wide transition-colors duration-300 ${isHovered ? 'text-cooliocns-gold' : 'text-white'}`}>
                    {service.title}
                  </h3>
                  <p className={`font-body text-sm md:text-base leading-relaxed max-w-lg transition-colors duration-300 ${isHovered ? 'text-gray-300' : 'text-gray-500'}`}>
                    {service.description}
                  </p>
                </div>

                {/* Arrow Indicator */}
                <div className={`hidden md:flex relative z-10 shrink-0 w-12 h-12 rounded-full border items-center justify-center transition-all duration-500 transform ${isHovered ? 'border-cooliocns-gold bg-cooliocns-gold text-[#111111] translate-x-2' : 'border-white/10 text-white/30'}`}>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isHovered ? 2 : 1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            );
          })}

          {/* Mobile CTA */}
          <div className="mt-16 lg:hidden">
            <Button
              variant="solid-gold"
              label="Discuss Requirements"
              className="w-full px-8 py-5 text-sm font-bold uppercase tracking-widest"
              onClick={(e) => {
                e?.preventDefault();
                const el = document.getElementById("footer");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ConciergeServices;

