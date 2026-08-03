import React from "react";
import VehicleDetailsHero from "@/components/VehicleDetailsHero";
import Footer from "@/components/Footer";
import { FinalCTA } from "@/components/FinalCTA";

export default function VehicleDetailsPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch vehicle details based on the id
  // const vehicleId = params.id;
  
  return (
    <div className="flex flex-col min-h-screen bg-[#050505] text-white selection:bg-cooliocns-gold selection:text-[#050505]">
      <main className="flex-1 flex flex-col">
        {/* Hero Section */}
        <VehicleDetailsHero 
          title="Porsche 911"
          subtitle={"LOREM IPSUM SIT DONOR AMET\nSFSD DSWFH SIROTGERER DOFIHWRERGSN"}
          price="$250,000"
          mainImage="/images/hero_porsche_911.png"
          thumbnails={[
            { url: "/images/car_porsche_gt3.png", category: "exterior" },
            { url: "/images/car_aston_vantage.png", category: "interior" },
            { url: "/images/car_range_rover.png", category: "exterior" }
          ]}
        />
        
        {/* Vehicle Details Content Area */}
        <div className="w-full relative bg-[#050505]">
          
          {/* Stats Grid (Full Width, Brutalist) */}
          <div className="w-full border-t border-b border-white/10 flex flex-row">
            {[
              { label: "Year", value: "2024" },
              { label: "Mileage", value: "1,200 mi" },
              { label: "Engine", value: "4.0L Flat-6" },
              { label: "0-60", value: "3.0s" },
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className={`flex-1 flex flex-col items-center justify-center py-4 sm:py-6 md:py-16 px-1 ${
                  idx !== 0 ? "border-l border-white/10" : ""
                }`}
              >
                <span className="font-body text-[8px] sm:text-[10px] md:text-sm text-cooliocns-gold uppercase tracking-wider md:tracking-[0.3em] mb-1 md:mb-2 text-center whitespace-nowrap">{stat.label}</span>
                <span className="font-body text-[11px] sm:text-sm md:text-3xl text-white tracking-widest text-center whitespace-nowrap">{stat.value}</span>
              </div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-32 overflow-hidden">
            {/* Editorial Description */}
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 mb-20 md:mb-32">
              <div className="md:w-5/12 flex flex-col justify-start">
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white font-light tracking-tight leading-[1.1] mb-6">
                  Uncompromising <br className="hidden md:block"/> <span className="text-cooliocns-gold italic">Performance.</span>
                </h2>
                <div className="w-16 h-[1px] bg-cooliocns-gold"></div>
              </div>
              <div className="md:w-7/12 flex flex-col gap-6 font-body text-white/70 text-sm sm:text-base leading-relaxed tracking-wide">
                <p>
                  <span className="float-left text-6xl sm:text-7xl font-display text-cooliocns-gold mr-4 mt-1 sm:mt-2 leading-none">T</span>
                  he Porsche 911 represents the pinnacle of German automotive engineering, blending timeless design with cutting-edge track performance. Every curve is purposeful, directing airflow to keep the vehicle planted at speeds that defy logic. This particular model has been meticulously maintained, preserving the exact factory finish and mechanical perfection expected by the most discerning collectors.
                </p>
                <p>
                  Inside, the cabin is a masterclass in driver-focused ergonomics. Premium materials surround the cockpit, stripping away distractions to leave only what matters: the pure, unadulterated connection between driver and machine. It is not merely a vehicle; it is a statement of uncompromising intent.
                </p>
              </div>
            </div>

            {/* Detailed Features / Specs List */}
            <div className="w-full">
              <div className="flex items-center gap-4 mb-8 md:mb-12">
                <h3 className="font-body text-xs sm:text-sm text-white uppercase tracking-[0.2em] font-bold shrink-0">Technical Specifications</h3>
                <div className="flex-1 h-[1px] bg-white/10"></div>
              </div>
              
              <div className="flex flex-col md:flex-row gap-x-20 gap-y-12">
                
                {/* Column 1 */}
                <div className="flex-1 flex flex-col gap-4">
                  {[
                    { label: "Drivetrain", value: "Rear-Wheel Drive" },
                    { label: "Transmission", value: "8-Speed PDK" },
                    { label: "Horsepower", value: "502 hp" },
                    { label: "Torque", value: "346 lb-ft" },
                  ].map((spec, i) => (
                    <div key={i} className="flex flex-wrap sm:flex-nowrap justify-between items-baseline gap-2 border-b border-white/10 pb-3">
                      <span className="font-body text-[10px] sm:text-xs text-white/50 uppercase tracking-widest shrink-0">{spec.label}</span>
                      <span className="font-body text-sm sm:text-base text-white text-right break-words">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex-1 flex flex-col gap-4">
                  {[
                    { label: "Exterior Color", value: "GT Silver Metallic" },
                    { label: "Interior Color", value: "Black / Guards Red" },
                    { label: "Wheels", value: "20\"/21\" 911 GT3" },
                    { label: "Brakes", value: "PCCB Ceramic" },
                  ].map((spec, i) => (
                    <div key={i} className="flex flex-wrap sm:flex-nowrap justify-between items-baseline gap-2 border-b border-white/10 pb-3">
                      <span className="font-body text-[10px] sm:text-xs text-white/50 uppercase tracking-widest shrink-0">{spec.label}</span>
                      <span className="font-body text-sm sm:text-base text-white text-right break-words">{spec.value}</span>
                    </div>
                  ))}
                </div>
                
              </div>
            </div>

          </div>
        </div>

        {/* Final CTA block */}
        <FinalCTA />
        
      </main>

      {/* Luxury Footer */}
      <Footer />
    </div>
  );
}
