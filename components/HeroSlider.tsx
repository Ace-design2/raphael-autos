"use client";

import React, { useState, useEffect, useId } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import {
  MenuAlt04,
  SearchMagnifyingGlass,
  User03,
  ChevronLeft,
  ChevronRight,
} from "./icons";

interface SlideData {
  id: number;
  eyebrow: string;
  headline: string;
  supportingText: string;
  primaryCta: string;
  secondaryCta: string;
  image: string;
  alt: string;
}

const SLIDE_DATA: SlideData[] = [
  {
    id: 0,
    eyebrow: "Curated Luxury Automobiles",
    headline: "Where Exceptional Automobiles Find Their Next Owner",
    supportingText:
      "At Raphael Autos, every vehicle is thoughtfully selected for its craftsmanship, provenance, and performance. From timeless grand tourers to modern supercars and luxury SUVs, our collection is curated for those who appreciate engineering without compromise.",
    primaryCta: "Explore Inventory",
    secondaryCta: "Schedule a Viewing",
    image: "/images/hero_porsche_911.png",
    alt: "Silver Porsche 911 parked outside minimalist concrete villa at twilight",
  },
  {
    id: 1,
    eyebrow: "The Pinnacle of Craftsmanship",
    headline: "Elegance and Authority in Equal Measure",
    supportingText:
      "Experience the whisper-quiet power and bespoke artistry of our premier Rolls-Royce collection. Crafted for those who understand that true luxury isn't about being noticed—it's about never being forgotten.",
    primaryCta: "View Masterpieces",
    secondaryCta: "Private Consultation",
    image: "/images/hero_rolls_royce.png",
    alt: "Dark emerald Rolls-Royce Spectre parked on cobblestone driveway of a grand manor house at sunset",
  },
  {
    id: 2,
    eyebrow: "Uncompromising Performance",
    headline: "Sculpted Power & Timeless Grand Tourers",
    supportingText:
      "Unleash raw, sophisticated power with the Aston Martin DB12. A perfect marriage of advanced British engineering and elegant design, curated specifically for the discerning driver.",
    primaryCta: "Discover GTs",
    secondaryCta: "Request Test Drive",
    image: "/images/hero_aston_martin.png",
    alt: "Satin gray Aston Martin DB12 parked in modern minimalist concrete showroom",
  },
  {
    id: 3,
    eyebrow: "Track-Bred Precision",
    headline: "The Porsche 911 GT3 RS Performance",
    supportingText:
      "Built for the racetrack, refined for the road. The GT3 RS features an aerodynamic body and a high-revving naturally-aspirated engine designed to deliver pure, unadulterated performance.",
    primaryCta: "Explore Performance",
    secondaryCta: "Inquire Now",
    image: "/images/car_porsche_gt3.png",
    alt: "Chalk gray Porsche 911 GT3 RS profile studio shot",
  },
  {
    id: 4,
    eyebrow: "Modern Sanctuary",
    headline: "The Whispered Authority of Rolls-Royce Ghost",
    supportingText:
      "A minimalist expression of ultimate luxury. The Rolls-Royce Ghost combines clean, contemporary design with a powerful V12 engine and a ride quality that feels like floating on air.",
    primaryCta: "Request Ghost",
    secondaryCta: "Private Viewing",
    image: "/images/car_rr_ghost.png",
    alt: "Tempest gray Rolls-Royce Ghost sedan profile studio shot",
  },
  {
    id: 5,
    eyebrow: "Sculpted Athlete",
    headline: "The Exhilarating British Sports Coupe",
    supportingText:
      "Engineered for real drivers. The Aston Martin Vantage is a statement of speed, style, and raw emotion, delivering an unfiltered connection between driver and tarmac.",
    primaryCta: "Request Vantage",
    secondaryCta: "Configure Build",
    image: "/images/car_aston_vantage.png",
    alt: "British Racing Green Aston Martin Vantage coupe profile studio shot",
  },
  {
    id: 6,
    eyebrow: "Ultimate Capability",
    headline: "The Refined Stature of Range Rover SV",
    supportingText:
      "Luxury that knows no bounds. The Range Rover SV Autobiography offers executive comfort, advanced off-road engineering, and a commanding presence on any terrain.",
    primaryCta: "Explore SUV",
    secondaryCta: "Bespoke Order",
    image: "/images/car_range_rover.png",
    alt: "Satin black Range Rover SV Autobiography profile studio shot",
  },
];

interface HeroSliderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const HeroSlider = ({ searchQuery, setSearchQuery }: HeroSliderProps): React.JSX.Element => {
  const [activeSlide, setActiveSlide] = useState(0);
  const searchId = useId();

  const handleNext = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setActiveSlide((prev) => (prev + 1) % SLIDE_DATA.length);
  };

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setActiveSlide((prev) => (prev - 1 + SLIDE_DATA.length) % SLIDE_DATA.length);
  };

  // Autoplay slider every 15 seconds (Instagram-story style duration)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDE_DATA.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [activeSlide]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[720px] overflow-hidden flex flex-col justify-between select-none bg-[#111111]">
      {/* Hidden Preloader Box: Forces browser & Next.js cache to immediately download all 7 luxury images */}
      <div aria-hidden="true" className="hidden">
        {SLIDE_DATA.map((slide) => (
          <Image
            key={`preload-${slide.id}`}
            src={slide.image}
            alt=""
            width={1}
            height={1}
            priority={true}
          />
        ))}
      </div>

      {/* Single-Element Keyed Background Wallpaper Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#111111]">
        <div
          key={activeSlide}
          className="absolute inset-0 animate-fade-in pointer-events-none"
        >
          <Image
            src={SLIDE_DATA[activeSlide].image}
            alt={SLIDE_DATA[activeSlide].alt}
            fill
            priority={true}
            sizes="100vw"
            className="object-cover brightness-[0.65] animate-slide-zoom"
          />
          {/* Soft dark vignette gradients for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-black/30 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/20 to-transparent" />
        </div>
      </div>

      {/* Top Header Navigation Overlay (z-30) */}
      <header className="relative z-30 w-full flex items-center justify-between px-6 md:px-16 py-6 bg-black/20 backdrop-blur-md border-b border-white/10 transition-all duration-300">
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Open navigation menu"
            className="box-border inline-flex items-center justify-center cursor-pointer text-white hover:text-cooliocns-gold transition-colors p-2 rounded-full hover:bg-white/5 active:scale-95 border-0 bg-transparent"
          >
            <MenuAlt04 className="w-7 h-7" />
          </button>
        </div>

        <div className="text-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-body font-bold text-white text-lg md:text-xl tracking-[0.25em] hover:text-cooliocns-gold transition-colors uppercase block"
          >
            RAPHAEL AUTOS
          </a>
          <span className="font-body text-[9px] text-gray-400 tracking-[0.35em] uppercase block mt-[-2px]">
            Bespoke Motorcars
          </span>
        </div>

        <nav aria-label="Primary" className="flex items-center gap-4 md:gap-8">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("inventory");
            }}
            className="hidden sm:inline-block font-body text-xs tracking-[0.2em] text-white hover:text-cooliocns-gold transition-colors cursor-pointer py-1 uppercase font-medium active:scale-95 border-0 bg-transparent p-0"
          >
            MODELS
          </button>

          {/* Search bar */}
          <form
            role="search"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/20 bg-black/40 focus-within:border-cooliocns-gold transition-all max-w-[130px] md:max-w-[210px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor={searchId} className="inline-flex items-center cursor-pointer text-white hover:text-cooliocns-gold transition-colors">
              <SearchMagnifyingGlass className="w-4 h-4" />
            </label>
            <input
              id={searchId}
              type="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value.length === 1) {
                  scrollToSection("inventory");
                }
              }}
              placeholder="SEARCH"
              aria-label="Search vehicles"
              className="bg-transparent border-none outline-none font-body text-xs text-white placeholder:text-white/40 tracking-wider w-full"
            />
          </form>

          <button
            type="button"
            aria-label="Open user account"
            className="box-border inline-flex items-center justify-center cursor-pointer text-white hover:text-cooliocns-gold transition-colors p-2 rounded-full hover:bg-white/5 active:scale-95 border-0 bg-transparent"
          >
            <User03 className="w-7 h-7" />
          </button>
        </nav>
      </header>

      {/* Main Slide Content Area (z-30) */}
      <div className="relative z-30 flex-1 flex flex-col justify-end px-6 md:px-20 pb-10 md:pb-16 pointer-events-auto">
        <div className="w-full flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-10">
          {/* Slide Text & Actions */}
          <div key={activeSlide} className="max-w-3xl flex flex-col items-start gap-5 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-cooliocns-gold animate-pulse" />
              <span className="font-body text-[11px] uppercase tracking-[0.25em] text-cooliocns-gold font-medium">
                {SLIDE_DATA[activeSlide].eyebrow}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-white leading-[1.1] font-light tracking-wide drop-shadow-md">
              {SLIDE_DATA[activeSlide].headline}
            </h1>

            <p className="font-body text-sm md:text-base text-gray-300 leading-relaxed font-light tracking-wide max-w-xl drop-shadow">
              {SLIDE_DATA[activeSlide].supportingText}
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-4 pointer-events-auto">
              <Button
                variant="solid-gold"
                label={SLIDE_DATA[activeSlide].primaryCta}
                onClick={(e) => {
                  e?.preventDefault();
                  scrollToSection("inventory");
                }}
              />
              <Button
                variant="outline-white"
                label={SLIDE_DATA[activeSlide].secondaryCta}
                onClick={(e) => {
                  e?.preventDefault();
                  scrollToSection("about");
                }}
              />
            </div>
          </div>

          {/* High-Z Navigation Chevrons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10 lg:border-t-0 pointer-events-auto">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous vehicle"
              className="box-border inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md hover:border-cooliocns-gold hover:bg-cooliocns-gold/20 hover:text-cooliocns-gold transition-all cursor-pointer text-white active:scale-90 border-solid"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next vehicle"
              className="box-border inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur-md hover:border-cooliocns-gold hover:bg-cooliocns-gold/20 hover:text-cooliocns-gold transition-all cursor-pointer text-white active:scale-90 border-solid"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Instagram Story-Style Segmented Progress Indicator Bar (z-30) */}
        <div
          className="w-full flex items-center gap-2 pt-2 pointer-events-auto"
          aria-label="Story slide duration progress"
        >
          {SLIDE_DATA.map((slide, idx) => {
            const isCompleted = idx < activeSlide;
            const isCurrent = idx === activeSlide;

            return (
              <button
                key={slide.id}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveSlide(idx);
                }}
                aria-label={`Jump to slide ${idx + 1}: ${slide.eyebrow}`}
                className="group relative flex-1 h-4 py-1.5 cursor-pointer focus:outline-none border-0 bg-transparent p-0"
              >
                {/* Background track */}
                <div className="w-full h-1 rounded-full bg-white/20 overflow-hidden group-hover:h-1.5 transition-all duration-300">
                  {/* Fill progress */}
                  {isCompleted && (
                    <div className="h-full w-full bg-cooliocns-gold" />
                  )}
                  {isCurrent && (
                    <div
                      key={activeSlide}
                      className="h-full bg-cooliocns-gold animate-story-progress"
                    />
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
