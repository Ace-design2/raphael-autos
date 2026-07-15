"use client";

import React from "react";
import { Button } from "./ui/Button";

// High-impact SVG icons designed specifically for Raphael Autos Concierge Services
const SourcingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>
);

const ViewingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M12 5C7 5 2.73 8.11 1 12C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 12C21.27 8.11 17 5 12 5ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="12" r="2.5" fill="currentColor" />
  </svg>
);

const DeliveryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M14 18V6C14 4.89543 13.1046 4 12 4H4C2.89543 4 2 4.89543 2 6V18H14ZM14 18H22L19 11H14V18Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="6.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
    <circle cx="17.5" cy="18.5" r="2.5" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);

const DocumentationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
    <path
      d="M9 12H15M9 16H13M19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H14L21 10V19C21 20.1046 20.1046 21 19 21Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M14 3V10H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface ServiceItem {
  title: string;
  description: string;
  icon: React.JSX.Element;
}

const SERVICES_DATA: ServiceItem[] = [
  {
    title: "Vehicle Sourcing",
    description: "Looking for a specific model? We'll help locate it.",
    icon: <SourcingIcon />,
  },
  {
    title: "Private Viewings",
    description: "Experience selected vehicles in a relaxed and personalized setting.",
    icon: <ViewingIcon />,
  },
  {
    title: "Delivery Coordination",
    description: "Nationwide and international delivery arranged with care.",
    icon: <DeliveryIcon />,
  },
  {
    title: "Documentation Support",
    description: "Professional assistance with registration and ownership paperwork.",
    icon: <DocumentationIcon />,
  },
];

export const ConciergeServices = (): React.JSX.Element => {
  return (
    <section className="bg-white py-24 px-6 md:px-20 border-t border-black/10 relative z-10" id="concierge">
      <div className="max-w-7xl mx-auto">
        {/* Section Header - Perfectly aligned with all previous sections */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.25em] font-semibold mb-3 block">
              Concierge Services
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#111111] font-normal tracking-wide leading-tight">
              An Ownership Experience Tailored to You
            </h2>
          </div>
          <p className="font-body text-sm md:text-base text-gray-600 max-w-lg leading-relaxed tracking-wide">
            Whether you&apos;re purchasing your first luxury automobile or adding a rare collector&apos;s piece to your garage, our concierge team provides personalized assistance throughout every stage of the journey.
          </p>
        </div>

        {/* 4-Column Luxury Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 mb-14">
          {SERVICES_DATA.map((service, idx) => (
            <div
              key={service.title}
              className="bg-[#fafafa] hover:bg-white p-8 border border-black/10 hover:border-cooliocns-gold/60 transition-all duration-300 flex flex-col justify-between gap-8 group shadow-sm hover:shadow-xl cursor-pointer"
            >
              <div>
                <div className="size-12 rounded bg-black/5 group-hover:bg-[#111111] flex items-center justify-center text-[#111111] group-hover:text-cooliocns-gold transition-colors duration-300 mb-6 border border-black/10 group-hover:border-[#111111]">
                  {service.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-[#111111] mb-3 tracking-tight group-hover:text-cooliocns-gold transition-colors">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-black/5 flex items-center justify-between text-xs uppercase font-body font-semibold tracking-widest text-gray-400 group-hover:text-[#111111] transition-colors">
                <span>Service 0{idx + 1}</span>
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Dark Luxury CTA Banner */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-8 md:p-12 bg-[#111111] text-white border border-black/10 gap-6">
          <div className="max-w-xl text-center sm:text-left">
            <h3 className="font-display text-2xl md:text-3xl font-light tracking-wide mb-2">
              Bespoke Automotive Consultations
            </h3>
            <p className="font-body text-xs md:text-sm text-gray-400 leading-relaxed">
              Speak directly with a dedicated private client advisor today to discuss your exact collection aspirations.
            </p>
          </div>
          <Button
            variant="solid-gold"
            label="Discover Concierge Services"
            className="px-8 py-4 text-xs font-bold uppercase tracking-widest whitespace-nowrap shrink-0 shadow-lg hover:-translate-y-0.5 transition-transform"
            onClick={(e) => {
              e?.preventDefault();
              const el = document.getElementById("footer");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ConciergeServices;
