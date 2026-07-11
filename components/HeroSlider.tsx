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
  DummyCircle,
  DummyCircleSmall,
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
    supportingText: "At Raphael Autos, every vehicle is thoughtfully selected for its craftsmanship, provenance, and performance. From timeless grand tourers to modern supercars and luxury SUVs, our collection is curated for those who appreciate engineering without compromise.",
    primaryCta: "Explore Inventory",
    secondaryCta: "Schedule a Viewing",
    image: "/images/hero_porsche_911.png",
    alt: "Silver Porsche 911 parked outside minimalist concrete villa at twilight",
  },
  {
    id: 1,
    eyebrow: "The Pinnacle of Craftsmanship",
    headline: "Elegance and Authority in Equal Measure",
    supportingText: "Experience the whisper-quiet power and bespoke artistry of our premier Rolls-Royce collection. Crafted for those who understand that true luxury isn't about being noticed—it's about never being forgotten.",
    primaryCta: "View Masterpieces",
    secondaryCta: "Private Consultation",
    image: "/images/hero_rolls_royce.png",
    alt: "Dark emerald Rolls-Royce Spectre parked on cobblestone driveway of a grand manor house at sunset",
  },
  {
    id: 2,
    eyebrow: "Uncompromising Performance",
    headline: "Sculpted Power & Timeless Grand Tourers",
    supportingText: "Unleash raw, sophisticated power with the Aston Martin DB12. A perfect marriage of advanced British engineering and elegant design, curated specifically for the discerning driver.",
    primaryCta: "Discover GTs",
    secondaryCta: "Request Test Drive",
    image: "/images/hero_aston_martin.png",
    alt: "Satin gray Aston Martin DB12 parked in modern minimalist concrete showroom",
  },
  {
    id: 3,
    eyebrow: "Track-Bred Precision",
    headline: "The Porsche 911 GT3 RS Performance",
    supportingText: "Built for the racetrack, refined for the road. The GT3 RS features an aerodynamic body and a high-revving naturally-aspirated engine designed to deliver pure, unadulterated performance.",
    primaryCta: "Explore Performance",
    secondaryCta: "Inquire Now",
    image: "/images/car_porsche_gt3.png",
    alt: "Chalk gray Porsche 911 GT3 RS profile studio shot",
  },
  {
    id: 4,
    eyebrow: "Modern Sanctuary",
    headline: "The Whispered Authority of Rolls-Royce Ghost",
    supportingText: "A minimalist expression of ultimate luxury. The Rolls-Royce Ghost combines clean, contemporary design with a powerful V12 engine and a ride quality that feels like floating on air.",
    primaryCta: "Request Ghost",
    secondaryCta: "Private Viewing",
    image: "/images/car_rr_ghost.png",
    alt: "Tempest gray Rolls-Royce Ghost sedan profile studio shot",
  },
  {
    id: 5,
    eyebrow: "Sculpted Athlete",
    headline: "The Exhilarating British Sports Coupe",
    supportingText: "Engineered for real drivers. The Aston Martin Vantage is a statement of speed, style, and raw emotion, delivering an unfiltered connection between driver and tarmac.",
    primaryCta: "Request Vantage",
    secondaryCta: "Configure Build",
    image: "/images/car_aston_vantage.png",
    alt: "British Racing Green Aston Martin Vantage coupe profile studio shot",
  },
  {
    id: 6,
    eyebrow: "Ultimate Capability",
    headline: "The Refined Stature of Range Rover SV",
    supportingText: "Luxury that knows no bounds. The Range Rover SV Autobiography offers executive comfort, advanced off-road engineering, and a commanding presence on any terrain.",
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

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % SLIDE_DATA.length);
  };

  const handlePrev = () => {
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
    <section className="relative w-full h-screen min-h-[700px] overflow-hidden flex flex-col justify-between">
      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {SLIDE_DATA.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeSlide ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-105 pointer-events-none"
            } transform duration-[2000ms]`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={true}
              sizes="100vw"
              className="object-cover brightness-[0.7]"
            />
            {/* Soft dark vignette gradients for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/20" />
          </div>
        ))}
      </div>

      {/* Header Overlay */}
      <header className="relative z-10 w-full flex items-center justify-between px-6 md:px-16 py-6 bg-black/10 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Open navigation menu"
            className="all-unset box-border inline-flex items-center justify-center cursor-pointer text-white hover:text-cooliocns-gold transition-colors p-1"
          >
            <MenuAlt04 className="w-8 h-8" />
          </button>
        </div>

        <div className="text-center">
          <a
            href="#"
            className="font-body-l font-[number:var(--body-l-font-weight)] text-white text-[length:var(--body-l-font-size)] tracking-[var(--body-l-letter-spacing)] leading-[var(--body-l-line-height)] [font-style:var(--body-l-font-style)] hover:text-cooliocns-gold transition-colors uppercase"
          >
            RAPHAEL AUTOS
          </a>
        </div>

        <nav aria-label="Primary" className="flex items-center gap-4 md:gap-8">
          <button
            type="button"
            onClick={() => scrollToSection("inventory")}
            className="hidden sm:inline-block all-unset box-border font-body text-xs tracking-[0.15em] text-white hover:text-cooliocns-gold transition-colors cursor-pointer"
          >
            MODELS
          </button>

          {/* Search bar */}
          <form
            role="search"
            className="flex items-center gap-2 px-2 py-1 border-b border-white/30 focus-within:border-cooliocns-gold transition-colors max-w-[120px] md:max-w-[200px]"
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
                // If user starts searching, automatically scroll to inventory to show results
                if (e.target.value.length === 1) {
                  scrollToSection("inventory");
                }
              }}
              placeholder="SEARCH"
              aria-label="Search vehicles"
              className="bg-transparent border-none outline-none font-body text-xs text-white placeholder:text-white/50 tracking-wider w-full"
            />
          </form>

          <button
            type="button"
            aria-label="Open user account"
            className="all-unset box-border inline-flex items-center justify-center cursor-pointer text-white hover:text-cooliocns-gold transition-colors p-1"
          >
            <User03 className="w-8 h-8" />
          </button>
        </nav>
      </header>

      {/* Main Slide Content Area */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-20 pb-16 md:pb-24">
        <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          {/* Slide Texts */}
          <div className="max-w-2xl flex flex-col items-start gap-6">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-cooliocns-gold font-bold animate-fade-in">
              {SLIDE_DATA[activeSlide].eyebrow}
            </span>
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl text-white leading-tight font-light select-none">
              {SLIDE_DATA[activeSlide].headline}
            </h1>
            <p className="font-body text-sm text-gray-300 leading-relaxed font-light tracking-wide max-w-xl">
              {SLIDE_DATA[activeSlide].supportingText}
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Button
                variant="solid-gold"
                label={SLIDE_DATA[activeSlide].primaryCta}
                onClick={() => scrollToSection("inventory")}
              />
              <Button
                variant="outline-white"
                label={SLIDE_DATA[activeSlide].secondaryCta}
                onClick={() => scrollToSection("about")}
              />
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex flex-col items-center gap-3 self-center md:self-end">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous vehicle"
                className="all-unset box-border inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 hover:border-cooliocns-gold hover:text-cooliocns-gold transition-all cursor-pointer text-white"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <div className="inline-flex items-center gap-1.5 h-9" aria-label="Vehicle carousel indicators">
                {SLIDE_DATA.map((slide, idx) =>
                  idx === activeSlide ? (
                    <DummyCircle
                      key={slide.id}
                      className="w-8 h-8 transition-all duration-300 transform scale-110"
                    />
                  ) : (
                    <button
                      key={slide.id}
                      onClick={() => setActiveSlide(idx)}
                      className="all-unset inline-flex items-center justify-center w-6 h-6 hover:scale-125 transition-transform"
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <DummyCircleSmall className="w-6 h-6" />
                    </button>
                  )
                )}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next vehicle"
                className="all-unset box-border inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/20 hover:border-cooliocns-gold hover:text-cooliocns-gold transition-all cursor-pointer text-white"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            {/* Instagram story-style horizontal duration line */}
            <div className="w-[140px] h-0.5 bg-white/20 relative overflow-hidden">
              <div
                key={activeSlide}
                className="absolute top-0 left-0 h-full bg-cooliocns-gold animate-story-progress"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
