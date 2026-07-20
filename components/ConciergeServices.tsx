"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start animation when top of section enters viewport (90% height)
      // Complete when top reaches near top (15% height)
      const start = windowHeight * 0.90;
      const end = windowHeight * 0.15;

      if (rect.top >= start) {
        setScrollProgress(0);
      } else if (rect.top <= end) {
        setScrollProgress(1);
      } else {
        const current = (start - rect.top) / (start - end);
        setScrollProgress(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="relative text-white py-24 md:py-32 px-6 md:px-12 lg:px-20 z-10 overflow-hidden" id="concierge">
      {/* Background Image */}
      <Image
        src="/images/about_details.png"
        alt="Concierge Services"
        fill
        sizes="100vw"
        className="object-cover object-center absolute inset-0 z-0"
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/75 z-0 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Centered Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mb-16 md:mb-20">
          <div className="inline-flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-[1px] bg-cooliocns-gold"></div>
            <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.3em] font-semibold">
              Concierge Services
            </span>
            <div className="w-8 h-[1px] bg-cooliocns-gold"></div>
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-[1.1] mb-6">
            An Ownership Experience Tailored to You
          </h2>
          
          <p className="font-body text-sm md:text-base text-gray-300 leading-relaxed tracking-wide mb-10">
            Whether you&apos;re purchasing your first luxury automobile or adding a rare collector&apos;s piece to your garage, our concierge team provides personalized assistance throughout every stage of the journey.
          </p>
          
          <Button
            variant="solid-gold"
            label="Discuss Requirements"
            className="px-8 py-3.5 text-xs font-bold uppercase tracking-[0.25em]"
            onClick={(e) => {
              e?.preventDefault();
              const el = document.getElementById("footer");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>

        {/* Services Grid (Single Row on Desktop) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {SERVICES_DATA.map((service, idx) => {
            const isHovered = hoveredIdx === idx;
            // Left to right stagger: they start shifted left, and unfold to their natural positions
            const stepOffset = idx * -240 * (1 - scrollProgress);
            
            return (
              <div
                key={service.title}
                style={{ transform: `translateX(${stepOffset}px)` }}
                className={`group relative flex flex-col items-start p-8 md:p-10 border transition-colors duration-500 transition-transform ease-out cursor-pointer backdrop-blur-md bg-black/40 ${isHovered ? 'border-cooliocns-gold/60' : 'border-white/10 hover:border-cooliocns-gold/60'}`}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Number Background Indicator */}
                <div className={`absolute top-4 right-4 text-[80px] font-display font-light pointer-events-none select-none transition-all duration-700 ease-out ${isHovered ? 'text-white/10' : 'text-transparent'}`}>
                  0{idx + 1}
                </div>

                <div className="font-body text-xs text-cooliocns-gold/60 uppercase tracking-widest mb-6 transition-opacity duration-300">
                  Service 0{idx + 1}
                </div>

                {/* Icon Container */}
                <div className={`relative z-10 shrink-0 size-16 rounded border flex items-center justify-center mb-8 transition-all duration-500 ${isHovered ? 'bg-cooliocns-gold/10 border-cooliocns-gold/50 text-cooliocns-gold' : 'bg-white/5 border-white/10 text-white/70'}`}>
                  {service.icon}
                </div>

                {/* Text Content */}
                <div className="relative z-10 flex-1">
                  <h3 className={`font-display text-xl md:text-2xl mb-4 tracking-wide transition-colors duration-300 ${isHovered ? 'text-cooliocns-gold' : 'text-white'}`}>
                    {service.title}
                  </h3>
                  <p className={`font-body text-sm leading-relaxed transition-colors duration-300 ${isHovered ? 'text-gray-200' : 'text-gray-400'}`}>
                    {service.description}
                  </p>
                </div>

                {/* Arrow Indicator at bottom */}
                <div className="mt-8 flex items-center justify-between w-full relative z-10">
                  <div className={`h-[1px] bg-cooliocns-gold transition-all duration-500 ${isHovered ? 'w-12' : 'w-0'}`} />
                  <svg className={`w-5 h-5 transition-all duration-500 transform ${isHovered ? 'text-cooliocns-gold translate-x-1' : 'text-white/30'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={isHovered ? 2 : 1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ConciergeServices;
