"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";
import { Navbar } from "./Navbar";
import { CloseMD, ChevronLeft, ChevronRight } from "./icons";

export type GalleryImageDef = string | { url: string; category: "exterior" | "interior" };

interface VehicleDetailsHeroProps {
  title?: string;
  subtitle?: string;
  price?: string; // e.g. "$120,000"
  mainImage?: string;
  thumbnails?: GalleryImageDef[];
  specs?: { label: string; value: string }[];
}

export const VehicleDetailsHero = ({
  title = "Porsche 911",
  subtitle = "LOREM IPSUM SIT DONOR AMET\nSFSD DSWFH SIROTGERER DOFIHWRERGSN",
  price = "", // could be added to title or subtitle, or separate section if desired
  mainImage = "https://placehold.co/1537x1024/222222/555555",
  thumbnails = [
    { url: "https://placehold.co/402x268/333333/666666", category: "exterior" },
    { url: "https://placehold.co/402x268/444444/777777", category: "interior" },
    { url: "https://placehold.co/402x268/555555/888888", category: "exterior" },
  ],
  specs = [
    { label: "Year", value: "2024" },
    { label: "Mileage", value: "1,200 mi" },
    { label: "Engine", value: "4.0L Flat-6" },
    { label: "0-60 mph", value: "3.0s" },
  ],
}: VehicleDetailsHeroProps) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [galleryFilter, setGalleryFilter] = useState<"all" | "exterior" | "interior">("all");

  const getUrl = (thumb: GalleryImageDef) => typeof thumb === 'string' ? thumb : thumb.url;
  const getCategory = (thumb: GalleryImageDef, idx: number) => typeof thumb === 'string' ? (idx % 2 === 0 ? "exterior" : "interior") : thumb.category;

  const filteredThumbnails = thumbnails.map((t, idx) => ({ item: t, originalIndex: idx })).filter(
    (t) => galleryFilter === "all" || getCategory(t.item, t.originalIndex) === galleryFilter
  );

  const openGallery = (index: number) => {
    setGalleryFilter("all");
    setCurrentImageIndex(index);
    setIsGalleryOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (filteredThumbnails.length === 0) return;
    const currentIndex = filteredThumbnails.findIndex(t => t.originalIndex === currentImageIndex);
    const nextIdx = currentIndex === -1 ? 0 : (currentIndex + 1) % filteredThumbnails.length;
    setCurrentImageIndex(filteredThumbnails[nextIdx].originalIndex);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (filteredThumbnails.length === 0) return;
    const currentIndex = filteredThumbnails.findIndex(t => t.originalIndex === currentImageIndex);
    const prevIdx = currentIndex === -1 ? 0 : (currentIndex - 1 + filteredThumbnails.length) % filteredThumbnails.length;
    setCurrentImageIndex(filteredThumbnails[prevIdx].originalIndex);
  };

  return (
    <div className="relative w-full h-screen min-h-[800px] bg-[#111111] overflow-hidden flex flex-col justify-between">
      <style>{`
        @keyframes heroZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-hero-zoom {
          animation: heroZoom 30s ease-out forwards;
        }
      `}</style>
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src={mainImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.55] animate-hero-zoom"
        />
        {/* Ambient Gold Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0804] via-[#111111]/40 to-transparent" />
      </div>

      {/* Technical Blueprint Accents (Left/Right Edges) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:flex flex-col gap-40">
        <div className="font-mono text-[10px] text-white/40 tracking-[0.3em] -rotate-90 origin-left whitespace-nowrap">
          VIN // WP0AC2Y324BS12
        </div>
        <div className="font-mono text-[10px] text-white/40 tracking-[0.3em] -rotate-90 origin-left whitespace-nowrap">
          STOCK // R-911-GT3
        </div>
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:flex flex-col gap-40">
        <div className="font-mono text-[10px] text-white/40 tracking-[0.3em] rotate-90 origin-right whitespace-nowrap">
          LAT 48.8353° N
        </div>
        <div className="font-mono text-[10px] text-white/40 tracking-[0.3em] rotate-90 origin-right whitespace-nowrap">
          LON 9.1526° E
        </div>
      </div>

      <Navbar />

      {/* Bottom Content Area */}
      <div className="w-full px-6 md:px-20 pb-8 relative z-30 flex flex-col justify-end items-center gap-6 mt-auto">
        <div className="w-full max-w-7xl flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 pt-16 md:pt-0">
          <div className="flex-1 flex flex-col justify-start items-start gap-1 w-full">
            {price && (
              <div className="text-cooliocns-gold text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light leading-none">
                {price}
              </div>
            )}
            <h1 className="text-white/90 text-xl sm:text-2xl md:text-3xl font-body tracking-widest uppercase mt-2">
              {title}
            </h1>
            
          </div>
          <div className="flex flex-row justify-center items-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              variant="solid-gold"
              label="BUY"
              className="flex-1 sm:flex-none sm:w-36 md:w-36 justify-center px-4 sm:px-6 py-3.5 md:py-3 text-sm md:text-base font-bold tracking-wider"
            />
            <Button
              variant="outline-white"
              label="LEASE"
              className="flex-1 sm:flex-none sm:w-36 md:w-36 justify-center px-4 sm:px-6 py-3.5 md:py-3 text-sm md:text-base font-bold tracking-wider"
            />
          </div>
        </div>
        
        {/* Thumbnails & Gallery */}
        <div className="w-full max-w-7xl grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 pb-2 md:pb-4">
          {thumbnails.slice(0, 2).map((thumb, index) => (
            <div 
              key={index} 
              onClick={() => openGallery(index)}
              className="w-full h-24 sm:h-32 md:h-60 relative overflow-hidden group cursor-pointer border border-transparent hover:border-cooliocns-gold transition-colors"
            >
              <Image 
                src={getUrl(thumb)} 
                alt={`Thumbnail ${index + 1}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          ))}
          {/* View Gallery Block */}
          <div 
            onClick={() => openGallery(0)}
            className="w-full h-24 sm:h-32 md:h-60 relative overflow-hidden group cursor-pointer flex flex-col items-center justify-center border border-white/20 bg-black/40 backdrop-blur-sm hover:bg-black/60 hover:border-cooliocns-gold transition-colors"
          >
            <svg className="w-5 h-5 md:w-8 md:h-8 text-white group-hover:text-cooliocns-gold transition-colors mb-1 md:mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <span className="font-body text-[10px] md:text-sm font-bold tracking-[0.15em] uppercase text-white group-hover:text-cooliocns-gold transition-colors text-center px-1">
              View Gallery
            </span>
            <span className="font-body text-[8px] md:text-xs text-white/50 mt-0 md:mt-1">12+ Photos</span>
          </div>
        </div>
      </div>

      {/* Full-Screen Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-black/95 backdrop-blur-2xl">
          {/* Top Bar */}
          <div className="w-full flex justify-between items-center px-4 md:px-12 py-6 absolute top-0 z-10 pointer-events-none">
            <div className="text-white font-body text-xs md:text-sm tracking-widest uppercase w-16 md:w-24">
              {filteredThumbnails.findIndex(t => t.originalIndex === currentImageIndex) + 1} / {filteredThumbnails.length}
            </div>

            {/* Filter Buttons */}
            <div className="pointer-events-auto flex items-center gap-1 md:gap-2 bg-black/40 backdrop-blur-md border border-white/20 p-1">
              {(["all", "exterior", "interior"] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={(e) => {
                    e.stopPropagation();
                    setGalleryFilter(filter);
                    // Reset index to first of new filter
                    const newFiltered = thumbnails.map((t, idx) => ({ item: t, originalIndex: idx })).filter(
                      (t) => filter === "all" || getCategory(t.item, t.originalIndex) === filter
                    );
                    if (newFiltered.length > 0) setCurrentImageIndex(newFiltered[0].originalIndex);
                  }}
                  className={`px-3 md:px-4 py-1.5 font-body text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors ${
                    galleryFilter === filter 
                      ? "bg-cooliocns-gold text-black" 
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="w-16 md:w-24 flex justify-end">
              <button 
                onClick={closeGallery}
                className="pointer-events-auto text-white hover:text-cooliocns-gold transition-colors flex items-center justify-center p-2 cursor-pointer"
              >
                <CloseMD className="w-6 h-6 md:w-8 md:h-8" />
              </button>
            </div>
          </div>

          {/* Main Image Area */}
          <div className="flex-1 relative flex items-center justify-center w-full px-4 md:px-20 select-none" onClick={closeGallery}>
            {/* Prev Arrow */}
            <button 
              onClick={prevImage}
              className="absolute left-4 md:left-12 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/40 border border-white/20 text-white hover:border-cooliocns-gold hover:text-cooliocns-gold transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* Current Image */}
            <div 
              className="relative w-full max-w-6xl h-[50vh] md:h-[75vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image 
                src={getUrl(thumbnails[currentImageIndex])} 
                alt={`Gallery image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>

            {/* Next Arrow */}
            <button 
              onClick={nextImage}
              className="absolute right-4 md:right-12 z-20 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/40 border border-white/20 text-white hover:border-cooliocns-gold hover:text-cooliocns-gold transition-colors cursor-pointer"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            {/* CTAs in Gallery */}
            <div className="absolute bottom-6 md:bottom-8 left-4 right-4 md:left-0 md:right-0 z-30 flex flex-row justify-center gap-3 md:gap-4 pointer-events-auto">
              <Button
                variant="solid-gold"
                label="BUY"
                className="flex-1 md:flex-none w-auto md:w-32 justify-center px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-bold tracking-wider shadow-xl shadow-black/50"
              />
              <Button
                variant="outline-white"
                label="LEASE"
                className="flex-1 md:flex-none w-auto md:w-32 justify-center px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-bold tracking-wider bg-black/40 backdrop-blur-md"
              />
            </div>
          </div>

          {/* Bottom Thumbnails */}
          <div className="w-full h-24 md:h-32 border-t border-white/10 bg-black/50 flex items-center justify-center px-6 overflow-x-auto">
            <div className="flex items-center gap-4 py-4">
              {filteredThumbnails.map((t) => (
                <div 
                  key={t.originalIndex}
                  onClick={() => setCurrentImageIndex(t.originalIndex)}
                  className={`relative w-20 h-14 md:w-32 md:h-20 shrink-0 cursor-pointer overflow-hidden transition-all duration-300 ${
                    t.originalIndex === currentImageIndex 
                      ? "border-2 border-cooliocns-gold opacity-100" 
                      : "border border-transparent opacity-40 hover:opacity-100"
                  }`}
                >
                  <Image src={getUrl(t.item)} alt={`Thumb`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VehicleDetailsHero;
