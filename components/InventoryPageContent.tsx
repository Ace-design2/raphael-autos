"use client";

import React, { useState } from "react";
import { SearchMagnifyingGlass } from "@/components/icons";
import { Button } from "@/components/ui/Button";

// Filter Data
const BRANDS = ["Porsche", "Rolls-Royce", "Ferrari", "Lamborghini", "Bentley", "Aston Martin", "McLaren", "Mercedes-Benz", "BMW", "Audi", "Land Rover", "Maserati", "Lexus"];
const CONDITIONS = ["New", "Certified Pre-Owned", "Pre-Owned"];
const BODY_STYLES = ["Coupe", "Convertible", "Sedan", "SUV", "Grand Tourer", "Supercar"];
const FUEL_TYPES = ["Petrol", "Hybrid", "Electric"];
const TRANSMISSIONS = ["Automatic", "Manual"];
const DRIVE_TYPES = ["AWD", "RWD", "FWD"];

const SORT_OPTIONS = [
  "Featured",
  "New Arrivals",
  "Price: Low to High",
  "Price: High to Low",
  "Model Year",
  "Mileage",
  "Recently Added"
];

export const InventoryPageContent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0]);

  return (
    <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 py-16">
      
      {/* Search & Filter Top Bar */}
      <div className="w-full border border-black/10 bg-[#fafafa] p-6 md:p-8 mb-12">
        
        {/* Top Row: Heading & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-black/10 pb-8">
          <h2 className="font-display text-2xl md:text-3xl text-[#111111]">
            Find Your Perfect Vehicle
          </h2>

          <div className="relative w-full md:w-[400px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by make, model, or keyword..."
              className="w-full bg-white border border-black/10 text-sm font-body px-4 py-3 pr-10 focus:outline-none focus:border-cooliocns-gold transition-colors text-[#111111] placeholder:text-gray-400"
            />
            <SearchMagnifyingGlass className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Filter Dropdowns Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
          
          <select className="bg-white border border-black/10 font-body text-xs text-[#111111] px-3 py-3 focus:outline-none focus:border-cooliocns-gold cursor-pointer">
            <option value="">Brand (All)</option>
            {BRANDS.map(brand => <option key={brand} value={brand}>{brand}</option>)}
          </select>

          <select className="bg-white border border-black/10 font-body text-xs text-[#111111] px-3 py-3 focus:outline-none focus:border-cooliocns-gold cursor-pointer">
            <option value="">Condition (All)</option>
            {CONDITIONS.map(cond => <option key={cond} value={cond}>{cond}</option>)}
          </select>

          <select className="bg-white border border-black/10 font-body text-xs text-[#111111] px-3 py-3 focus:outline-none focus:border-cooliocns-gold cursor-pointer">
            <option value="">Body Style (All)</option>
            {BODY_STYLES.map(style => <option key={style} value={style}>{style}</option>)}
          </select>

          <select className="bg-white border border-black/10 font-body text-xs text-[#111111] px-3 py-3 focus:outline-none focus:border-cooliocns-gold cursor-pointer">
            <option value="">Fuel Type (All)</option>
            {FUEL_TYPES.map(fuel => <option key={fuel} value={fuel}>{fuel}</option>)}
          </select>

          <select className="bg-white border border-black/10 font-body text-xs text-[#111111] px-3 py-3 focus:outline-none focus:border-cooliocns-gold cursor-pointer">
            <option value="">Transmission (All)</option>
            {TRANSMISSIONS.map(trans => <option key={trans} value={trans}>{trans}</option>)}
          </select>

          <select className="bg-white border border-black/10 font-body text-xs text-[#111111] px-3 py-3 focus:outline-none focus:border-cooliocns-gold cursor-pointer">
            <option value="">Drive Type (All)</option>
            {DRIVE_TYPES.map(drive => <option key={drive} value={drive}>{drive}</option>)}
          </select>

          <input type="text" placeholder="Min Price" className="bg-white border border-black/10 font-body text-xs text-[#111111] px-3 py-3 focus:outline-none focus:border-cooliocns-gold" />
          <input type="text" placeholder="Max Price" className="bg-white border border-black/10 font-body text-xs text-[#111111] px-3 py-3 focus:outline-none focus:border-cooliocns-gold" />
          
          <input type="text" placeholder="Min Year" className="bg-white border border-black/10 font-body text-xs text-[#111111] px-3 py-3 focus:outline-none focus:border-cooliocns-gold" />
          <input type="text" placeholder="Max Year" className="bg-white border border-black/10 font-body text-xs text-[#111111] px-3 py-3 focus:outline-none focus:border-cooliocns-gold" />
          
          <input type="text" placeholder="Max Mileage" className="bg-white border border-black/10 font-body text-xs text-[#111111] px-3 py-3 focus:outline-none focus:border-cooliocns-gold" />
          
          <div className="flex items-center gap-2">
            <span className="font-body text-xs text-gray-500 uppercase tracking-widest shrink-0">
              Sort By
            </span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full bg-white border border-black/10 font-body text-xs text-[#111111] px-3 py-3 focus:outline-none focus:border-cooliocns-gold cursor-pointer"
            >
              {SORT_OPTIONS.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>

        </div>

        {/* Bottom Row: Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6 border-t border-black/10">
          <p className="font-body text-sm text-gray-500 uppercase tracking-widest">
            Showing 0 Vehicles
          </p>
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <Button variant="outline-black" label="Reset Filters" className="w-full sm:w-auto px-8 py-3 text-xs tracking-widest" />
            <Button variant="solid-gold" label="Apply Filters" className="w-full sm:w-auto px-8 py-3 text-xs tracking-widest" />
          </div>
        </div>

      </div>

      {/* Main Grid Placeholder */}
      <div className="w-full min-h-[40vh] flex flex-col items-center justify-center py-20 text-center border border-black/5 bg-gray-50/50">
        <p className="font-body text-gray-500 max-w-md mx-auto">
          Our exclusive inventory is currently being updated. Please check back shortly for our latest acquisitions or contact us directly.
        </p>
      </div>

    </div>
  );
};
