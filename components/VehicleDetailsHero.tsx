import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";
import { Navbar } from "./Navbar";

interface VehicleDetailsHeroProps {
  title?: string;
  subtitle?: string;
  price?: string; // e.g. "$120,000"
  mainImage?: string;
  thumbnails?: string[];
  specs?: { label: string; value: string }[];
}

export const VehicleDetailsHero = ({
  title = "Porsche 911",
  subtitle = "LOREM IPSUM SIT DONOR AMET\nSFSD DSWFH SIROTGERER DOFIHWRERGSN",
  price = "", // could be added to title or subtitle, or separate section if desired
  mainImage = "https://placehold.co/1537x1024/222222/555555",
  thumbnails = [
    "https://placehold.co/402x268/333333/666666",
    "https://placehold.co/402x268/444444/777777",
    "https://placehold.co/402x268/555555/888888",
  ],
  specs = [
    { label: "Year", value: "2024" },
    { label: "Mileage", value: "1,200 mi" },
    { label: "Engine", value: "4.0L Flat-6" },
    { label: "0-60 mph", value: "3.0s" },
  ],
}: VehicleDetailsHeroProps) => {
  return (
    <div className="relative w-full h-screen min-h-[800px] bg-[#111111] overflow-hidden flex flex-col justify-between">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={mainImage}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
      </div>

      {/* 3D View Badges */}
      <div className="absolute top-32 sm:top-36 md:top-28 left-0 right-0 md:left-auto md:right-20 w-full md:w-auto z-30 pointer-events-none flex justify-center md:justify-end items-center gap-6 md:gap-4">
        <button className="pointer-events-auto flex items-center gap-2 bg-transparent border-none p-0 text-white hover:text-cooliocns-gold transition-colors group cursor-pointer">
          <svg className="w-4 h-4 text-white group-hover:text-cooliocns-gold transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
            <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
            <line x1="12" y1="22.08" x2="12" y2="12"></line>
          </svg>
          <span className="font-body text-xs font-bold tracking-[0.2em] uppercase text-white group-hover:text-cooliocns-gold transition-colors">Exterior</span>
        </button>
        <div className="w-[1px] h-4 bg-white/40"></div>
        <button className="pointer-events-auto flex items-center gap-2 bg-transparent border-none p-0 text-white hover:text-cooliocns-gold transition-colors group cursor-pointer">
          <svg className="w-4 h-4 text-white group-hover:text-cooliocns-gold transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M2 12h20"></path>
            <path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"></path>
            <path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span className="font-body text-xs font-bold tracking-[0.2em] uppercase text-white group-hover:text-cooliocns-gold transition-colors">Interior</span>
        </button>
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
            <h1 className="text-white/80 text-xl sm:text-2xl md:text-3xl font-body tracking-widest uppercase mt-1">
              {title}
            </h1>
            
          </div>
          <div className="flex flex-row sm:flex-col md:flex-row justify-start sm:justify-end md:justify-end items-center sm:items-end md:items-center gap-4 w-full sm:w-auto">
            <Button
              variant="solid-gold"
              label="BUY"
              className="w-full sm:w-40 md:w-36 justify-center px-6 py-3.5 md:py-3 text-sm md:text-base font-bold tracking-wider"
            />
            <Button
              variant="outline-white"
              label="LEASE"
              className="w-full sm:w-40 md:w-36 justify-center px-6 py-3.5 md:py-3 text-sm md:text-base font-bold tracking-wider"
            />
          </div>
        </div>
        
        {/* Thumbnails & Gallery */}
        <div className="w-full max-w-7xl grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 pb-2 md:pb-4">
          {thumbnails.slice(0, 2).map((thumb, index) => (
            <div key={index} className="w-full h-24 sm:h-32 md:h-60 relative overflow-hidden rounded-sm group cursor-pointer border border-transparent hover:border-cooliocns-gold transition-colors">
              <Image 
                src={thumb} 
                alt={`Thumbnail ${index + 1}`} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          ))}
          {/* View Gallery Block */}
          <div className="w-full h-24 sm:h-32 md:h-60 relative overflow-hidden rounded-sm group cursor-pointer flex flex-col items-center justify-center border border-white/20 bg-black/40 backdrop-blur-sm hover:bg-black/60 hover:border-cooliocns-gold transition-colors">
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
    </div>
  );
};

export default VehicleDetailsHero;
