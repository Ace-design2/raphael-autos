"use client";

import React, { useState } from "react";
import { SearchMagnifyingGlass, ChevronRight } from "@/components/icons";
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
  
  // Basic states for filters to simulate UI
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState(SORT_OPTIONS[0]);

  return (
    <div className="w-full max-w-[1500px] mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
      
      {/* 3. Inventory Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
        {[
          { title: "Available Vehicles", desc: "Curated inventory updated regularly." },
          { title: "Luxury Brands", desc: "Featuring the world's most prestigious marques." },
          { title: "Vehicle Sourcing", desc: "Can't find your ideal specification? We can help source it." }
        ].map((stat, idx) => (
          <div key={idx} className="border border-black/10 p-8 flex flex-col items-start bg-[#fafafa] hover:border-cooliocns-gold/50 transition-colors duration-300">
            <span className="font-mono text-xs text-cooliocns-gold uppercase tracking-[0.2em] font-bold mb-4">
              0{idx + 1}
            </span>
            <h4 className="font-display text-2xl text-[#111111] mb-2">{stat.title}</h4>
            <p className="font-body text-sm text-gray-500 leading-relaxed tracking-wide">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Main Layout: Sidebar + Grid */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* 2. Search & Filter Section (Sidebar) */}
        <aside className="w-full lg:w-[320px] shrink-0 border border-black/10 p-8 bg-white sticky top-32">
          <h2 className="font-display text-2xl text-[#111111] mb-8">
            Find Your Perfect Vehicle
          </h2>

          {/* Search Box */}
          <div className="relative mb-10">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by make, model, or keyword..."
              className="w-full bg-[#fafafa] border border-black/10 text-sm font-body px-4 py-4 pr-12 focus:outline-none focus:border-cooliocns-gold transition-colors text-[#111111] placeholder:text-gray-400"
            />
            <SearchMagnifyingGlass className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          <div className="flex flex-col gap-8">
            {/* Brands */}
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111]">
                Brand
              </h3>
              <div className="flex flex-col gap-3 max-h-[240px] overflow-y-auto pr-2 custom-scrollbar">
                {BRANDS.map(brand => (
                  <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-black/20 flex items-center justify-center group-hover:border-cooliocns-gold transition-colors">
                      {/* Checkbox simulated */}
                    </div>
                    <span className="font-body text-sm text-gray-600 group-hover:text-[#111111] transition-colors">{brand}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Condition */}
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111]">
                Condition
              </h3>
              <div className="flex flex-col gap-3">
                {CONDITIONS.map(cond => (
                  <label key={cond} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-black/20 flex items-center justify-center group-hover:border-cooliocns-gold transition-colors" />
                    <span className="font-body text-sm text-gray-600 group-hover:text-[#111111] transition-colors">{cond}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Body Style */}
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111]">
                Body Style
              </h3>
              <div className="flex flex-col gap-3">
                {BODY_STYLES.map(style => (
                  <label key={style} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-black/20 flex items-center justify-center group-hover:border-cooliocns-gold transition-colors" />
                    <span className="font-body text-sm text-gray-600 group-hover:text-[#111111] transition-colors">{style}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Fuel Type */}
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111]">
                Fuel Type
              </h3>
              <div className="flex flex-col gap-3">
                {FUEL_TYPES.map(fuel => (
                  <label key={fuel} className="flex items-center gap-3 cursor-pointer group">
                    <div className="w-4 h-4 border border-black/20 flex items-center justify-center group-hover:border-cooliocns-gold transition-colors" />
                    <span className="font-body text-sm text-gray-600 group-hover:text-[#111111] transition-colors">{fuel}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price, Year, Mileage Placeholders */}
            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111]">
                Price Range
              </h3>
              <div className="flex items-center gap-4">
                <input type="text" placeholder="Min" className="w-full bg-[#fafafa] border border-black/10 text-xs font-body px-3 py-3 focus:outline-none focus:border-cooliocns-gold" />
                <span className="text-gray-400">-</span>
                <input type="text" placeholder="Max" className="w-full bg-[#fafafa] border border-black/10 text-xs font-body px-3 py-3 focus:outline-none focus:border-cooliocns-gold" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111]">
                Year
              </h3>
              <div className="flex items-center gap-4">
                <input type="text" placeholder="From" className="w-full bg-[#fafafa] border border-black/10 text-xs font-body px-3 py-3 focus:outline-none focus:border-cooliocns-gold" />
                <span className="text-gray-400">-</span>
                <input type="text" placeholder="To" className="w-full bg-[#fafafa] border border-black/10 text-xs font-body px-3 py-3 focus:outline-none focus:border-cooliocns-gold" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[#111111]">
                Mileage
              </h3>
              <div className="flex items-center gap-4">
                <input type="text" placeholder="Max Mileage" className="w-full bg-[#fafafa] border border-black/10 text-xs font-body px-3 py-3 focus:outline-none focus:border-cooliocns-gold" />
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col gap-3 mt-4 pt-8 border-t border-black/10">
              <Button variant="solid-gold" label="Apply Filters" className="w-full py-4 text-xs tracking-widest" />
              <Button variant="outline-black" label="Reset Filters" className="w-full py-4 text-xs tracking-widest" />
            </div>

          </div>
        </aside>

        {/* Right Side Content (Sort + Grid) */}
        <div className="flex-1 flex flex-col">
          
          {/* 4. Sort Options */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 pb-6 border-b border-black/10 gap-6">
            <p className="font-body text-sm text-gray-500 uppercase tracking-widest">
              Showing 0 Vehicles
            </p>
            <div className="flex items-center gap-4">
              <span className="font-body text-xs font-bold uppercase tracking-widest text-[#111111]">
                Sort By
              </span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent border border-black/20 font-body text-xs text-[#111111] px-4 py-3 focus:outline-none focus:border-cooliocns-gold cursor-pointer"
              >
                {SORT_OPTIONS.map(opt => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Placeholder Grid */}
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="font-body text-gray-500 max-w-md mx-auto">
              Our exclusive inventory is currently being updated. Please check back shortly for our latest acquisitions or contact us directly.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};
