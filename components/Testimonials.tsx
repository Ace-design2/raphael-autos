"use client";

import React from "react";

const testimonials = [
  {
    quote: "From the first inquiry to delivery, every interaction reflected professionalism, transparency, and genuine attention to detail. Raphael Autos exceeded every expectation.",
    author: "Michael A.",
    car: "Porsche 911 Owner",
  },
  {
    quote: "The team located the exact specification I had been searching for and managed every detail with exceptional care. A truly first-class experience.",
    author: "Sarah L.",
    car: "Range Rover Owner",
  }
];

export const Testimonials = (): React.JSX.Element => {
  return (
    <section className="relative w-full bg-white py-24 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden" id="testimonials">


      <div className="max-w-[1400px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mb-20 md:mb-28">
          <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.3em] font-semibold mb-6 block">
            Client Experiences
          </span>
          
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111111] font-normal tracking-tight leading-[1.1]">
            Trusted by Discerning Clients
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {testimonials.map((item, idx) => (
            <div 
              key={idx}
              className="relative p-8 md:p-10 lg:p-12 border border-black/10 bg-[#fafafa] flex flex-col justify-between"
            >
              {/* Large Quote SVG Mark */}
              <div className="absolute top-6 left-6 text-cooliocns-gold/20">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" />
                </svg>
              </div>

              {/* Quote Text */}
              <div className="relative z-10 pt-6 mb-8">
                <p className="font-display text-lg md:text-xl lg:text-2xl text-gray-800 leading-snug tracking-wide">
                  &quot;{item.quote}&quot;
                </p>
              </div>

              {/* Author Details */}
              <div className="relative z-10 flex items-center mt-auto">
                <div>
                  <h4 className="font-mono text-sm md:text-base text-cooliocns-gold uppercase tracking-[0.2em] font-bold mb-1">
                    {item.author}
                  </h4>
                  <p className="font-body text-xs md:text-sm text-gray-500 uppercase tracking-widest">
                    {item.car}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
