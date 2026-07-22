"use client";

import React, { useState, useEffect, useId } from "react";
import { useRouter, usePathname } from "next/navigation";
import { MenuAlt04, CloseMD, SearchMagnifyingGlass, User03, ChevronRight, MailIcon, PhoneIcon, HomeIcon } from "./icons";
import { Button } from "./ui/Button";

export const Navbar = ({ searchQuery = "", setSearchQuery }: { searchQuery?: string; setSearchQuery?: (query: string) => void }): React.JSX.Element => {
  const router = useRouter();
  const pathname = usePathname();
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

      if (pathname !== "/") {
        setIsScrolled(true);
      } else if (currentScrollY > heroSectionHeight && !isOverAbout) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  const handleLinkClick = (id: string | undefined, href?: string) => {
    setIsMenuOpen(false);
    
    if (href) {
      router.push(href);
      return;
    }

    if (id) {
      if (pathname === "/") {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(`/#${id}`);
      }
    }
  };

  return (
    <>
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
              if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                router.push("/");
              }
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
              if (pathname !== "/") {
                router.push("/");
              } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="hidden sm:inline-block box-border font-body text-xs tracking-[0.15em] text-white hover:text-cooliocns-gold transition-colors cursor-pointer bg-transparent border-0 p-1"
          >
            <HomeIcon className="w-7 h-7" />
          </button>

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
                { label: "HOME", id: "hero", href: "/" },
                { label: "INVENTORY", id: "inventory", href: "/inventory" },
                { label: "VEHICLE SOURCING", id: "sourcing", href: "/vehicle-sourcing" },
                { label: "SELL & TRADE IN", id: "about" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href || `#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id, item.href);
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
                  handleLinkClick(item.id);
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
    </>
  );
};
