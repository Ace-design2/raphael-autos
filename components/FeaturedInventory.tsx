"use client";

import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import { CarAuto, ChevronRightDuo } from "./icons";

interface Vehicle {
  id: string;
  year: number;
  name: string;
  type: string;
  km: string;
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
    km: "1,200 KM",
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
    km: "450 KM",
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
    km: "150 KM",
    engine: "4.0L Twin-Turbo V8",
    hp: 656,
    transmission: "8-Speed Auto",
    price: 220000,
    image: "/images/car_aston_vantage.png",
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
    <section className="bg-white py-24 px-6 md:px-20 border-t border-black/10 relative z-10" id="inventory">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.25em] font-semibold mb-3 block">
              Showcase
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#111111] font-normal tracking-wide">
              Featured Inventory
            </h2>
          </div>
          <p className="font-body text-sm text-gray-600 max-w-md leading-relaxed tracking-wide">
            A handpicked selection of exceptional automobiles currently available through Raphael Autos.
          </p>
        </div>

        {/* Dynamic List */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xl:gap-8">
            {filteredVehicles.map((car) => (
              <div
                key={car.id}
                className="w-full bg-white outline outline-1 outline-offset-[-1px] outline-[#111111] flex flex-col justify-start items-start overflow-hidden group transition-colors duration-300"
              >
                {/* Image Container */}
                <div className="self-stretch aspect-[16/10] relative overflow-hidden bg-gray-100">
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                </div>

                {/* Details Container */}
                <div className="w-full p-6 md:p-8 flex flex-col justify-start items-start gap-8 flex-1">
                  {/* Top Indicators Row */}
                  <div className="inline-flex justify-start items-center gap-4 flex-wrap">
                    <div className="flex justify-center items-center gap-1.5">
                      <div className="w-3.5 h-3.5 relative overflow-hidden flex items-center justify-center">
                        <div className="w-2.5 h-2 outline outline-[1px] outline-offset-[-0.40px] outline-[#111111]" />
                      </div>
                      <div className="justify-start text-[#111111] text-xs font-normal font-body">
                        {car.year}
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-1.5">
                      <CarAuto className="w-3.5 h-3.5 text-[#111111]" />
                      <div className="justify-start text-[#111111] text-xs font-normal font-body uppercase">
                        {car.type}
                      </div>
                    </div>
                    <div className="flex justify-center items-center gap-1.5">
                      <ChevronRightDuo className="w-3.5 h-3.5 text-[#111111]" />
                      <div className="justify-start text-[#111111] text-xs font-normal font-body uppercase font-bold">
                        {car.km}
                      </div>
                    </div>
                  </div>

                  {/* Title and Price Stacked */}
                  <div className="flex flex-col justify-start items-start gap-2 w-full">
                    <h3 className="w-full justify-start text-[#111111] text-xl xl:text-2xl font-bold font-body leading-tight">
                      {car.name}
                    </h3>
                    <div className="w-full justify-start text-[#111111] text-xl xl:text-2xl font-bold font-body">
                      {formatPrice(car.price)}
                    </div>
                  </div>

                  {/* Inline Specifications */}
                  <div className="inline-flex justify-start items-center gap-6 md:gap-8 flex-wrap">
                    <div className="inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="justify-start text-[#111111]/70 text-xs font-normal font-body">
                        Engine
                      </div>
                      <div className="justify-start text-[#111111] text-sm md:text-base font-bold font-body uppercase">
                        {car.engine}
                      </div>
                    </div>
                    <div className="inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="justify-start text-[#111111]/70 text-xs font-normal font-body">
                        Transmission
                      </div>
                      <div className="justify-start text-[#111111] text-sm md:text-base font-bold font-body uppercase">
                        {car.transmission}
                      </div>
                    </div>
                    <div className="inline-flex flex-col justify-start items-start gap-1.5">
                      <div className="justify-start text-[#111111]/70 text-xs font-normal font-body">
                        Power
                      </div>
                      <div className="justify-start text-[#111111] text-sm md:text-base font-bold font-body uppercase">
                        {car.hp} HP
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons Row */}
                  <div className="self-stretch flex flex-col sm:flex-row lg:flex-col xl:flex-row justify-between items-stretch gap-3 pt-2 mt-auto">
                    <Button
                      variant="solid-gold"
                      label="Inquire"
                      className="flex-1 justify-center px-3 sm:px-4 py-2.5 text-sm sm:text-base font-bold"
                    />
                    <Button
                      variant="outline-black"
                      label="View Details"
                      className="flex-1 justify-center px-3 sm:px-4 py-2.5 text-sm sm:text-base font-bold"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-black/10 bg-gray-50">
            <p className="font-body text-gray-600 text-sm tracking-wide">
              No vehicles matched your search query. Try searching for &quot;Porsche&quot;, &quot;Rolls&quot;, &quot;Vantage&quot;, or &quot;2024&quot;.
            </p>
            <Button
              variant="outline-black"
              label="Clear Search"
              className="mt-6"
              onClick={() => (window.location.hash = "#inventory")}
            />
          </div>
        )}

        {/* View all button */}
        <div className="mt-16 text-center">
          <Button variant="outline-black" label="View Full Inventory" className="px-10" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedInventory;
