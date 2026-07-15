"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Clean, high-impact Brand Logo Marks so they are clearly visible inside the size-12 box
const RollsRoyceLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 text-white group-hover:text-cooliocns-gold transition-colors">
    <rect x="4" y="4" width="32" height="32" stroke="currentColor" strokeWidth="2.5" />
    <path d="M14 14H22C24.5 14 26 15.5 26 17.5C26 19.5 24.5 21 22 21H14V14Z" stroke="currentColor" strokeWidth="2.5" />
    <path d="M20 21L26 28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
    <path d="M10 10H18C20.5 10 22 11.5 22 13.5C22 15.5 20.5 17 18 17H10V10Z" stroke="currentColor" strokeWidth="1.8" opacity="0.6" />
  </svg>
);

const PorscheLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 text-white group-hover:text-cooliocns-gold transition-colors">
    <path d="M20 3L32 9V22C32 29.5 20 37 20 37C20 37 8 29.5 8 22V9L20 3Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M14 16H26M14 21H26M20 12V26" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <rect x="17" y="16" width="6" height="7" fill="currentColor" />
  </svg>
);

const AstonMartinLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9 text-white group-hover:text-cooliocns-gold transition-colors">
    <path d="M2 21L13 16L20 12L27 16L38 21L27 23L20 26L13 23L2 21Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
    <path d="M12 20L20 16L28 20" stroke="currentColor" strokeWidth="1.8" />
    <rect x="17" y="19" width="6" height="3" fill="currentColor" />
  </svg>
);

const RangeRoverLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 text-white group-hover:text-cooliocns-gold transition-colors">
    <rect x="3" y="12" width="34" height="16" rx="8" stroke="currentColor" strokeWidth="2.5" />
    <path d="M9 20H31" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />
    <circle cx="20" cy="20" r="3.5" fill="currentColor" />
  </svg>
);

const BrowseBrandsLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8 text-white group-hover:text-cooliocns-gold transition-colors">
    <rect x="5" y="5" width="13" height="13" rx="3" stroke="currentColor" strokeWidth="2.5" />
    <rect x="22" y="5" width="13" height="13" rx="3" stroke="currentColor" strokeWidth="2.5" opacity="0.6" />
    <rect x="5" y="22" width="13" height="13" rx="3" stroke="currentColor" strokeWidth="2.5" opacity="0.6" />
    <path d="M24 28.5H34M34 28.5L29.5 24M34 28.5L29.5 33" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface BrandItem {
  id: string;
  brand: string;
  image: string;
  logo: React.JSX.Element;
}

const BRAND_MARQUES: BrandItem[] = [
  {
    id: "rolls-royce",
    brand: "Rolls-Royce",
    image: "/images/hero_rolls_royce.png",
    logo: <RollsRoyceLogo />,
  },
  {
    id: "porsche",
    brand: "Porsche",
    image: "/images/hero_porsche_911.png",
    logo: <PorscheLogo />,
  },
  {
    id: "aston-martin",
    brand: "Aston Martin",
    image: "/images/hero_aston_martin.png",
    logo: <AstonMartinLogo />,
  },
  {
    id: "range-rover",
    brand: "Range Rover",
    image: "/images/car_range_rover.png",
    logo: <RangeRoverLogo />,
  },
];

export const FeaturedCollections = (): React.JSX.Element => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start step animation right when top of section enters viewport (90% height)
      // Complete step-to-side-by-side alignment when top of section reaches near top (15% height)
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
    <section
      ref={sectionRef}
      className="relative w-full min-h-[720px] lg:min-h-[780px] flex items-center justify-center overflow-hidden bg-[#111111] pt-0 border-t-0"
      id="collections"
    >
      {/* --- BACKGROUND: 4-Column Brand Cards Grid with Dynamic Step Animation --- */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 w-full h-full">
        {BRAND_MARQUES.map((item, idx) => {
          const stepOffset = idx * 160 * (1 - scrollProgress);

          return (
            <div
              key={item.id}
              onClick={() => {
                const el = document.getElementById("inventory");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              style={{
                transform: `translateY(${stepOffset}px)`,
              }}
              className="w-full h-full relative overflow-hidden group border-r border-black/20 last:border-r-0 select-none bg-black transition-transform duration-200 ease-out cursor-pointer"
            >
              {/* Background Image */}
              <Image
                src={item.image}
                alt={item.brand}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Subtle overlay on each individual card for contrast */}
              <div className="absolute inset-0 bg-black/30 transition-opacity duration-500 group-hover:bg-black/40" />

              {/* Clean Minimalist Bottom Bar (Logo + Brand Name ONLY) */}
              <div className="w-full p-6 left-0 bottom-0 absolute bg-black/15 backdrop-blur-[50px] [-webkit-backdrop-filter:blur(50px)] inline-flex justify-start items-center gap-3.5 border-t border-white/15 z-10">
                <div className="size-12 relative overflow-hidden shrink-0 flex items-center justify-center bg-black/20 backdrop-blur-md rounded border border-white/20 group-hover:border-cooliocns-gold transition-colors">
                  {item.logo}
                </div>
                <div className="justify-start text-white text-3xl xl:text-4xl font-normal font-body tracking-tight group-hover:text-cooliocns-gold transition-colors">
                  {item.brand}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* --- OVERLAY: Dimmer to unify the background grid and ensure high readability --- */}
      <div className="absolute inset-0 bg-black/45 backdrop-blur-[2px] pointer-events-none z-10" />

      {/* --- CENTERED HERO CONTENT --- */}
      <div className="relative z-20 max-w-2xl mx-6 my-16 p-8 md:p-14 text-center rounded-3xl bg-black/65 backdrop-blur-2xl [-webkit-backdrop-filter:blur(48px)] border border-white/20 shadow-2xl pointer-events-auto transition-all duration-300 hover:border-cooliocns-gold/50">
        <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.25em] font-semibold mb-3 block">
          DISTINGUISHED MARQUES
        </span>
        <h2 className="font-display text-3xl md:text-5xl text-white font-normal tracking-tight mb-4 drop-shadow-md">
          Our Curated Brands
        </h2>
        <p className="font-body text-sm md:text-base text-gray-200 leading-relaxed tracking-wide">
          A carefully selected collection of motor cars from the world&apos;s most prestigious automotive houses.
        </p>
        
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById("inventory");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-cooliocns-gold hover:bg-[#cba135] text-white font-body text-sm uppercase tracking-widest font-semibold shadow-xl hover:shadow-cooliocns-gold/30 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
          >
            <span>View All Brands</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
