"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";

interface Vehicle {
  id: string;
  year: number;
  name: string;
  type: string;
  engine: string;
  hp: number;
  transmission: string;
  price: number;
  image: string;
  link: string;
}

const VEHICLES_MOCK: Vehicle[] = [
  {
    id: "porsche-gt3",
    year: 2024,
    name: "Porsche 911 GT3 RS",
    type: "Performance Icon",
    engine: "4.0L Flat-6",
    hp: 518,
    transmission: "7-Speed PDK",
    price: 310000,
    image: "/images/car_porsche_gt3.png",
    link: "#",
  },
  {
    id: "rr-ghost",
    year: 2023,
    name: "Rolls-Royce Ghost",
    type: "Luxury Sedan",
    engine: "6.75L V12",
    hp: 563,
    transmission: "8-Speed Auto",
    price: 395000,
    image: "/images/car_rr_ghost.png",
    link: "#",
  },
  {
    id: "aston-vantage",
    year: 2025,
    name: "Aston Martin Vantage",
    type: "Grand Tourer",
    engine: "4.0L Twin-Turbo V8",
    hp: 656,
    transmission: "8-Speed Auto",
    price: 220000,
    image: "/images/car_aston_vantage.png",
    link: "#",
  },
  {
    id: "range-rover-sv",
    year: 2024,
    name: "Range Rover SV Autobiography",
    type: "Luxury SUV",
    engine: "4.4L Twin-Turbo V8",
    hp: 606,
    transmission: "8-Speed Auto",
    price: 245000,
    image: "/images/car_range_rover.png",
    link: "#",
  },
];

interface FeaturedInventoryProps {
  searchQuery: string;
}

export const FeaturedInventory = ({ searchQuery }: FeaturedInventoryProps): React.JSX.Element => {
  // Simple case-insensitive filtering
  const filteredVehicles = VEHICLES_MOCK.filter(
    (car) =>
      car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.engine.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.year.toString().includes(searchQuery)
  );

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="bg-black py-24 px-6 md:px-20 border-t border-white/5 relative z-10" id="inventory">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.25em] font-semibold mb-3 block">
              Showcase
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white font-light tracking-wide">
              Featured Inventory
            </h2>
          </div>
          <p className="font-body text-sm text-gray-400 max-w-md leading-relaxed tracking-wide">
            A handpicked selection of exceptional automobiles currently available through Raphael Autos.
          </p>
        </div>

        {/* Dynamic List */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredVehicles.map((car) => (
              <div
                key={car.id}
                className="group flex flex-col bg-gray-900/10 border border-white/5 hover:border-white/10 transition-colors duration-500 overflow-hidden"
              >
                {/* Image Container with Hover zoom */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle hover gradient overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                </div>

                {/* Details Container */}
                <div className="p-6 md:p-8 flex flex-col gap-6 flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-body text-[10px] text-cooliocns-gold tracking-widest block uppercase mb-1">
                        {car.type}
                      </span>
                      <h3 className="font-display text-2xl text-white font-light">
                        {car.name}
                      </h3>
                      <span className="font-body text-xs text-gray-500">
                        Model Year {car.year}
                      </span>
                    </div>
                    <span className="font-display text-xl text-white font-medium">
                      {formatPrice(car.price)}
                    </span>
                  </div>

                  {/* Divider line */}
                  <div className="h-[1px] bg-white/10" />

                  {/* Specifications */}
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <span className="font-body text-[9px] text-gray-500 tracking-wider block uppercase">
                        Engine
                      </span>
                      <span className="font-body text-xs text-white/90">
                        {car.engine}
                      </span>
                    </div>
                    <div>
                      <span className="font-body text-[9px] text-gray-500 tracking-wider block uppercase">
                        Power
                      </span>
                      <span className="font-body text-xs text-white/90">
                        {car.hp} HP
                      </span>
                    </div>
                    <div>
                      <span className="font-body text-[9px] text-gray-500 tracking-wider block uppercase">
                        Gearbox
                      </span>
                      <span className="font-body text-xs text-white/90">
                        {car.transmission}
                      </span>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex items-center gap-4 mt-2">
                    <Button variant="solid-gold" label="Inquire" className="flex-1" />
                    <Button variant="outline-white" label="Details" className="flex-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-white/5 bg-gray-900/10">
            <p className="font-body text-gray-400 text-sm tracking-wide">
              No vehicles matched your search query. Try searching for "Porsche", "Rolls", "Vantage", or "2024".
            </p>
            <Button
              variant="outline-white"
              label="Clear Search"
              className="mt-6"
              onClick={() => (window.location.hash = "#inventory")}
            />
          </div>
        )}

        {/* View all button */}
        <div className="mt-16 text-center">
          <Button variant="outline-white" label="View Full Inventory" className="px-10" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedInventory;
