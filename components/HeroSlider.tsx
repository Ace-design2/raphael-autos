"use client";

import React, { useState, useEffect, useId } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "./ui/Button";
import {
  MenuAlt04,
  CloseMD,
  SearchMagnifyingGlass,
  User03,
  ChevronLeft,
  ChevronRight,
  MailIcon,
  PhoneIcon,
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
    eyebrow: "Featured Selection",
    headline: "Porsche 911 Carrera",
    supportingText:
      "Timeless silhouette. Exhilarating flat-six performance engineered for everyday perfection.",
    primaryCta: "Explore 911",
    secondaryCta: "Inquire Now",
    image: "/images/hero_porsche_911.png",
    alt: "Silver Porsche 911 parked outside minimalist concrete villa at twilight",
  },
  {
    id: 1,
    eyebrow: "Electric Ultra-Luxury",
    headline: "Rolls-Royce Spectre",
    supportingText:
      "The world's first ultra-luxury electric super coupe. Whisper-quiet power meets bespoke luxury.",
    primaryCta: "Discover Spectre",
    secondaryCta: "Private Viewing",
    image: "/images/hero_rolls_royce.png",
    alt: "Dark emerald Rolls-Royce Spectre parked on cobblestone driveway of a grand manor house at sunset",
  },
  {
    id: 2,
    eyebrow: "The Super Tourer",
    headline: "Aston Martin DB12",
    supportingText:
      "Raw British V8 power matched with uncompromising grand touring refinement.",
    primaryCta: "Discover DB12",
    secondaryCta: "Inquire Now",
    image: "/images/hero_aston_martin.png",
    alt: "Satin gray Aston Martin DB12 parked in modern minimalist concrete showroom",
  },
  {
    id: 3,
    eyebrow: "Track-Bred Precision",
    headline: "Porsche 911 GT3 RS",
    supportingText:
      "Born on the racetrack. Aerodynamic mastery and high-revving naturally aspirated adrenaline.",
    primaryCta: "Explore GT3 RS",
    secondaryCta: "Inquire Now",
    image: "/images/car_porsche_gt3.png",
    alt: "Chalk gray Porsche 911 GT3 RS profile studio shot",
  },
  {
    id: 4,
    eyebrow: "Minimalist Sanctuary",
    headline: "Rolls-Royce Ghost",
    supportingText:
      "Effortless V12 serenity and supreme bespoke serenity in its purest form.",
    primaryCta: "Inquire Ghost",
    secondaryCta: "Private Viewing",
    image: "/images/car_rr_ghost.png",
    alt: "Tempest gray Rolls-Royce Ghost sedan profile studio shot",
  },
  {
    id: 5,
    eyebrow: "Pure Sports Coupe",
    headline: "Aston Martin Vantage",
    supportingText:
      "Engineered for real drivers. Unfiltered connection, agility, and iconic British presence.",
    primaryCta: "Inquire Vantage",
    secondaryCta: "Configure",
    image: "/images/car_aston_vantage.png",
    alt: "British Racing Green Aston Martin Vantage coupe profile studio shot",
  },
  {
    id: 6,
    eyebrow: "Executive Flagship",
    headline: "Range Rover SV",
    supportingText:
      "First-class cabin comfort combined with supreme all-terrain dominance.",
    primaryCta: "Explore SV",
    secondaryCta: "Inquire Now",
    image: "/images/car_range_rover.png",
    alt: "Satin black Range Rover SV Autobiography profile studio shot",
  },
];

interface HeroSliderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const HeroSlider = ({ searchQuery, setSearchQuery }: HeroSliderProps): React.JSX.Element => {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchId = useId();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroSectionHeight = window.innerHeight - 80;

      // Check if the top navbar (approx 0-80px from top of window) is currently over the #about section
      const aboutEl = document.getElementById("about");
      let isOverAbout = false;
      if (aboutEl) {
        const aboutRect = aboutEl.getBoundingClientRect();
        if (aboutRect.top <= 80 && aboutRect.bottom >= 80) {
          isOverAbout = true;
        }
      }

      if (currentScrollY > heroSectionHeight && !isOverAbout) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Autoplay slider every 15 seconds (Instagram story duration)
  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDE_DATA.length);
    }, 15000);

    return () => clearTimeout(timer);
  }, [activeSlide]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getWaterfallClass = (index: number) => {
    const openDelays = [
      "delay-[100ms]",
      "delay-[180ms]",
      "delay-[260ms]",
      "delay-[340ms]",
      "delay-[420ms]",
      "delay-[500ms]",
      "delay-[580ms]",
      "delay-[660ms]",
      "delay-[740ms]",
      "delay-[820ms]",
      "delay-[900ms]",
    ];
    const closeDelays = [
      "delay-[300ms]",
      "delay-[270ms]",
      "delay-[240ms]",
      "delay-[210ms]",
      "delay-[180ms]",
      "delay-[150ms]",
      "delay-[120ms]",
      "delay-[90ms]",
      "delay-[60ms]",
      "delay-[30ms]",
      "delay-[0ms]",
    ];
    const openDelay = openDelays[index] || "delay-[900ms]";
    const closeDelay = closeDelays[index] || "delay-[0ms]";
    return `transition-all transform ${
      isMenuOpen
        ? `duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] translate-x-0 opacity-100 ${openDelay}`
        : `duration-[350ms] ease-in -translate-x-24 sm:-translate-x-32 opacity-0 ${closeDelay}`
    }`;
  };

  return (
    <section id="hero" className="relative w-full h-screen min-h-[580px] sm:min-h-[650px] md:min-h-[700px] overflow-hidden flex flex-col justify-between select-none bg-[#111111]">
      {/* Preload all 7 vehicle images instantly into browser memory */}
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

      {/* Background Images with Crossfade */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {SLIDE_DATA.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none ${
              idx === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
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

      {/* Top Header Navigation Overlay (fixed z-40) */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 w-full flex items-center justify-between px-6 md:px-16 transition-all duration-300 ease-in-out translate-y-0 opacity-100 pointer-events-auto ${
          isScrolled
            ? "py-6 bg-black/40 backdrop-blur-[100px] [-webkit-backdrop-filter:blur(100px)] border-b border-white/10 shadow-lg"
            : "py-6 bg-transparent border-b border-transparent shadow-none"
        }`}
      >
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setIsMenuOpen(true)}
            className="box-border inline-flex items-center gap-2.5 cursor-pointer text-white hover:text-cooliocns-gold transition-colors p-1 bg-transparent border-0"
          >
            <MenuAlt04 className="w-8 h-8" />
            <span className="hidden sm:inline text-white text-sm sm:text-base font-bold font-body tracking-[0.2em] uppercase">
              MENU
            </span>
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-body-l font-semibold text-white text-sm sm:text-base md:text-lg tracking-[0.2em] leading-tight hover:text-cooliocns-gold transition-colors uppercase block whitespace-nowrap"
          >
            RAPHAEL AUTOS
          </a>
        </div>

        <nav aria-label="Primary" className="flex items-center gap-4 md:gap-8 ml-auto">
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("inventory");
            }}
            className="hidden sm:inline-block box-border font-body text-xs tracking-[0.15em] text-white hover:text-cooliocns-gold transition-colors cursor-pointer bg-transparent border-0 p-0"
          >
            MODELS
          </button>

          {/* Original search bar design - hidden on mobile */}
          <form
            role="search"
            className="hidden md:flex items-center gap-2 px-2 py-1 border-b border-white/30 focus-within:border-cooliocns-gold transition-colors max-w-[120px] md:max-w-[200px]"
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
              className="bg-transparent border-none outline-none font-body text-xs text-white placeholder:text-white/50 tracking-wider w-full"
            />
          </form>

          <button
            type="button"
            aria-label="Open user account"
            className="box-border inline-flex items-center justify-center cursor-pointer text-white hover:text-cooliocns-gold transition-colors p-1 bg-transparent border-0"
          >
            <User03 className="w-8 h-8" />
          </button>
        </nav>
      </header>

      {/* Sliding Navigation Container (z-50) */}
      <div
        className={`fixed inset-0 z-50 flex justify-start ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Fading Background Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Sliding Drawer */}
        <div
          className={`relative w-full max-w-[580px] lg:max-w-[640px] xl:max-w-[720px] h-full min-h-screen px-6 md:px-16 py-6 bg-black/40 backdrop-blur-[100px] [-webkit-backdrop-filter:blur(100px)] [transform:translateZ(0)] [backface-visibility:hidden] flex flex-col justify-between items-start text-white border-r border-white/15 transition-all duration-500 ease-out overflow-y-auto ${
            isMenuOpen 
              ? "translate-x-0 shadow-[0_0_80px_rgba(0,0,0,0.9)]" 
              : "-translate-x-full shadow-[0_0_80px_rgba(0,0,0,0)]"
          }`}
          style={{ transitionDelay: isMenuOpen ? "0ms" : "0ms" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Section */}
          <div className="self-stretch flex flex-col justify-start items-start gap-9">
            {/* Close Button exactly aligned with top navbar Menu button */}
            <div className={`self-stretch flex items-center justify-start ${isScrolled ? "-mt-3 pb-3" : ""} ${getWaterfallClass(0)}`}>
              <button
                type="button"
                aria-label="Close navigation menu"
                onClick={() => setIsMenuOpen(false)}
                className="box-border inline-flex items-center gap-2.5 cursor-pointer text-white hover:text-cooliocns-gold transition-colors p-1 bg-transparent border-0"
              >
                <CloseMD className="w-8 h-8" />
                <span className="hidden sm:inline text-white text-sm sm:text-base font-bold font-body tracking-[0.2em] uppercase">
                  CLOSE
                </span>
              </button>
            </div>

            {/* Main Links */}
            <nav className="self-stretch flex flex-col justify-start items-start gap-3 mt-2">
              {[
                { label: "HOME", id: "hero" },
                { label: "INVENTORY", href: "/inventory" },
                { label: "VEHICLE SOURCING", href: "/vehicle-sourcing" },
                { label: "SELL & TRADE IN", id: "about" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href || `#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    if (item.href) {
                      router.push(item.href);
                    } else if (item.id) {
                      scrollToSection(item.id);
                    }
                  }}
                  className={`self-stretch inline-flex justify-start items-center gap-6 group py-1.5 cursor-pointer ${getWaterfallClass(idx + 1)}`}
                >
                  <span className="flex-1 text-right justify-start text-white group-hover:text-cooliocns-gold transition-colors text-lg font-normal font-body tracking-wider">
                    {item.label}
                  </span>
                  <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center">
                    <ChevronRight className="w-6 h-6 text-white group-hover:text-cooliocns-gold transition-colors" />
                  </div>
                </a>
              ))}
            </nav>
          </div>

          {/* Middle Section: ABOUT / CONTACT */}
          <div className="self-stretch flex flex-col justify-start items-start gap-3 my-6">
            {[
              { label: "ABOUT", id: "about" },
              { label: "CONTACT", id: "footer" },
            ].map((item, idx) => (
              <a
                key={idx}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  scrollToSection(item.id);
                }}
                className={`self-stretch inline-flex justify-start items-center gap-6 group py-1 cursor-pointer ${getWaterfallClass(idx + 6)}`}
              >
                <span className="flex-1 text-right justify-start text-white group-hover:text-cooliocns-gold transition-colors text-lg font-normal font-body tracking-wider">
                  {item.label}
                </span>
              </a>
            ))}
          </div>

          {/* Bottom Info Section */}
          <div className="self-stretch pb-6 md:pb-9 flex flex-col justify-start items-start gap-3 border-t border-white/10 pt-6">
            <div className={`self-stretch flex flex-col justify-start items-start gap-1 ${getWaterfallClass(8)}`}>
              <div className="self-stretch inline-flex justify-start items-center gap-6">
                <div className="flex-1 text-right justify-start text-white text-lg font-normal font-body">
                  VISIT OUR SHOWROOM
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-6">
                <div className="flex-1 text-right justify-start text-white text-xs font-normal font-body">
                  By appointment - Monday - Saturday
                </div>
              </div>
            </div>

            <div className={`self-stretch flex flex-col justify-start items-start gap-1 ${getWaterfallClass(9)}`}>
              <div className="self-stretch inline-flex justify-start items-center gap-6">
                <div className="flex-1 justify-end flex items-center gap-2 text-white text-lg font-normal font-body">
                  <MailIcon className="w-5 h-5 text-cooliocns-gold" />
                  <span>Email</span>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-6">
                <a
                  href="mailto:hello@raphaelautos.com"
                  className="flex-1 text-right justify-start text-white/70 hover:text-cooliocns-gold transition-colors text-xs font-normal font-body"
                >
                  hello@raphaelautos.com
                </a>
              </div>
            </div>

            <div className={`self-stretch flex flex-col justify-start items-start gap-1 ${getWaterfallClass(10)}`}>
              <div className="self-stretch inline-flex justify-start items-center gap-6">
                <div className="flex-1 justify-end flex items-center gap-2 text-white text-lg font-normal font-body">
                  <PhoneIcon className="w-5 h-5 text-cooliocns-gold" />
                  <span>Phone</span>
                </div>
              </div>
              <div className="self-stretch inline-flex justify-start items-center gap-6">
                <a
                  href="tel:+2340000000000"
                  className="flex-1 text-right justify-start text-white/70 hover:text-cooliocns-gold transition-colors text-xs font-normal font-body"
                >
                  +234 (000) 000 0000
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Slide Content Area (z-30) */}
      <div className="relative z-30 flex-1 flex flex-col justify-end px-4 sm:px-8 md:px-20 pt-20 sm:pt-24 md:pt-28 pb-6 sm:pb-8 md:pb-12 pointer-events-auto gap-6 sm:gap-8 md:gap-12">
        <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-6 sm:gap-8">
          {/* Slide Text & Actions */}
          <div key={activeSlide} className="max-w-2xl flex flex-col items-start gap-3 sm:gap-5 md:gap-6 animate-fade-in w-full">
            <span className="font-body text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-cooliocns-gold font-bold">
              {SLIDE_DATA[activeSlide].eyebrow}
            </span>

            <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] sm:leading-tight font-light select-none tracking-tight sm:tracking-normal">
              {SLIDE_DATA[activeSlide].headline}
            </h1>

            <p className="font-body text-xs sm:text-sm text-gray-300 leading-relaxed font-light tracking-wide max-w-xl">
              {SLIDE_DATA[activeSlide].supportingText}
            </p>

            <div className="grid grid-cols-2 sm:flex items-center gap-2.5 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto pointer-events-auto">
              <Button
                variant="solid-gold"
                label={SLIDE_DATA[activeSlide].primaryCta}
                className="w-full sm:w-[180px] md:w-[200px] justify-center px-2 sm:px-6 py-2.5 text-xs sm:text-base font-bold"
                onClick={(e) => {
                  e?.preventDefault();
                  scrollToSection("inventory");
                }}
              />
              <Button
                variant="outline-white"
                label={SLIDE_DATA[activeSlide].secondaryCta}
                className="w-full sm:w-[180px] md:w-[200px] justify-center px-2 sm:px-6 py-2.5 text-xs sm:text-base font-bold"
                onClick={(e) => {
                  e?.preventDefault();
                  scrollToSection("about");
                }}
              />
            </div>
          </div>

          {/* Chevron Buttons (icons on the right beside each other in the same position) */}
          <div className="flex items-center gap-3 sm:gap-4 self-end md:self-end pointer-events-auto pt-2 sm:pt-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous vehicle"
              className="box-border inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 hover:border-cooliocns-gold hover:text-cooliocns-gold transition-all cursor-pointer text-white bg-transparent active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next vehicle"
              className="box-border inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/20 hover:border-cooliocns-gold hover:text-cooliocns-gold transition-all cursor-pointer text-white bg-transparent active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Segmented Instagram-story horizontal loaders spanning full width across the bottom */}
        <div className="flex items-center gap-2 w-full h-1 pointer-events-auto" aria-label="Story slide duration progress">
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
                aria-label={`Jump to slide ${idx + 1}`}
                className="group relative flex-1 h-3 py-1 cursor-pointer focus:outline-none border-0 bg-transparent p-0 flex items-center"
              >
                <div className="w-full h-1 rounded-full bg-white/20 overflow-hidden group-hover:h-1.5 transition-all duration-300">
                  {isCompleted && (
                    <div className="w-full h-full bg-cooliocns-gold" />
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
