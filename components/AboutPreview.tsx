import React from "react";
import Image from "next/image";
import { Button } from "./ui/Button";

export const AboutPreview = (): React.JSX.Element => {
  return (
    <section className="bg-black py-24 px-6 md:px-20 border-t border-white/5 relative z-10" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Text Content - 7 cols on large screens */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8">
            <div>
              <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.25em] font-semibold mb-3 block">
                Heritage
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-white font-light tracking-wide leading-tight">
                A Collection Defined by Quality
              </h2>
            </div>

            <div className="flex flex-col gap-6 font-body text-sm text-gray-300 leading-relaxed tracking-wide font-light max-w-2xl">
              <p>
                Raphael Autos is dedicated to connecting discerning clients with luxury automobiles that embody exceptional engineering, timeless design, and enduring value. Every vehicle is carefully evaluated to ensure it meets our standards for quality, condition, and authenticity.
              </p>
              <p>
                Rather than offering the largest inventory, we focus on presenting a thoughtfully curated selection that reflects our commitment to excellence.
              </p>
            </div>

            <div className="mt-4">
              <Button variant="outline-white" label="Learn About Raphael Autos" className="px-8" />
            </div>
          </div>

          {/* High-quality detail image - 5 cols on large screens */}
          <div className="lg:col-span-5 relative aspect-square w-full bg-zinc-950 overflow-hidden border border-white/10 group">
            <Image
              src="/images/about_details.png"
              alt="Luxury car steering wheel and tan leather interior detail stitching"
              fill
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
            {/* Soft highlight border on hover */}
            <div className="absolute inset-0 border border-white/0 group-hover:border-cooliocns-gold/20 transition-colors duration-700 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
