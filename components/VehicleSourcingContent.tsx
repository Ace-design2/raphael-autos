"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export const VehicleSourcingContent = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="w-full flex flex-col bg-white">
      
      {/* FORM SECTION (Dark Aesthetic) */}
      <section className="w-full px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-[#111111] text-white">
        <div className="max-w-[1000px] mx-auto">
          
          {isSubmitted ? (
            // Success Message
            <div className="text-center py-20 animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-cooliocns-gold/50 bg-cooliocns-gold/10 text-cooliocns-gold mb-8">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight leading-[1.1] mb-6">
                Request Received
              </h2>
              <p className="font-body text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Thank you for your vehicle sourcing request. A Raphael Autos specialist will review your submission and contact you shortly to discuss your requirements and the next steps.
              </p>
            </div>
          ) : (
            <>
              {/* Introduction */}
              <div className="text-center mb-16 md:mb-24">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-8">
                  Tell Us What You&apos;re Looking For
                </h2>
                <div className="max-w-3xl mx-auto text-left">
                  <p className="font-body text-sm md:text-base text-gray-400 leading-relaxed mb-6">
                    Complete the form below with as much detail as possible. The more information you provide, the better we can understand your requirements and begin the search through our trusted network of dealers, collectors, and industry partners.
                  </p>
                  <p className="font-body text-sm md:text-base text-gray-400 leading-relaxed">
                    Our team will review your request and contact you personally to discuss availability, timelines, and suitable options.
                  </p>
                </div>
              </div>

              {/* Vehicle Sourcing Form */}
              <form 
                className="flex flex-col gap-16" 
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubmitted(true);
                  window.scrollTo({ top: document.getElementById('sourcing-form-container')?.offsetTop || 0, behavior: 'smooth' });
                }}
                id="sourcing-form-container"
              >
                
                {/* Section 1: Your Details */}
                <div className="flex flex-col gap-8">
                  <h3 className="font-display text-2xl md:text-3xl text-cooliocns-gold mb-2 pb-4 border-b border-white/10">
                    1. Your Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Full Name</label>
                      <input type="text" required placeholder="Enter your full name" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Email Address</label>
                      <input type="email" required placeholder="you@example.com" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Phone Number</label>
                      <input type="tel" required placeholder="Include your country code" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Preferred Contact Method</label>
                      <select required defaultValue="" className="bg-[#111111] border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm appearance-none cursor-pointer">
                        <option value="" disabled className="text-white/20">Select an option...</option>
                        <option value="phone">Phone Call</option>
                        <option value="email">Email</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 2: Desired Vehicle */}
                <div className="flex flex-col gap-8">
                  <h3 className="font-display text-2xl md:text-3xl text-cooliocns-gold mb-2 pb-4 border-b border-white/10">
                    2. Desired Vehicle
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Manufacturer</label>
                      <input type="text" required placeholder="e.g. Porsche" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Model</label>
                      <input type="text" required placeholder="e.g. 911 Turbo S" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Model Year</label>
                      <input type="text" placeholder="Preferred year or year range" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Condition</label>
                      <select required defaultValue="" className="bg-[#111111] border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm appearance-none cursor-pointer">
                        <option value="" disabled className="text-white/20">Select an option...</option>
                        <option value="new">New</option>
                        <option value="cpo">Certified Pre-Owned</option>
                        <option value="pre-owned">Pre-Owned</option>
                        <option value="either">Open to Either</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Preferred Exterior Colour</label>
                      <input type="text" placeholder="Optional" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Preferred Interior Colour</label>
                      <input type="text" placeholder="Optional" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                  </div>
                </div>

                {/* Section 3: Specifications */}
                <div className="flex flex-col gap-8">
                  <h3 className="font-display text-2xl md:text-3xl text-cooliocns-gold mb-2 pb-4 border-b border-white/10">
                    3. Specifications
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Fuel Type</label>
                      <select defaultValue="" className="bg-[#111111] border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm appearance-none cursor-pointer">
                        <option value="" disabled className="text-white/20">Select an option...</option>
                        <option value="petrol">Petrol</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="electric">Electric</option>
                        <option value="no-preference">No Preference</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Transmission</label>
                      <select defaultValue="" className="bg-[#111111] border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm appearance-none cursor-pointer">
                        <option value="" disabled className="text-white/20">Select an option...</option>
                        <option value="automatic">Automatic</option>
                        <option value="manual">Manual</option>
                        <option value="no-preference">No Preference</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Mileage Preference</label>
                      <input type="text" placeholder="Maximum preferred mileage" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Budget</label>
                      <input type="text" placeholder="Your estimated budget" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                  </div>
                </div>

                {/* Section 4: Additional Requirements */}
                <div className="flex flex-col gap-8">
                  <h3 className="font-display text-2xl md:text-3xl text-cooliocns-gold mb-2 pb-4 border-b border-white/10">
                    4. Additional Requirements
                  </h3>
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-xs uppercase tracking-widest text-gray-400">Message</label>
                    <textarea 
                      rows={5}
                      placeholder="Tell us about any specific features, packages, trim levels, performance options, or other preferences that are important to you." 
                      className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20 resize-none"
                    />
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10">
                  <input type="checkbox" id="consent" required className="mt-1 cursor-pointer w-4 h-4 accent-cooliocns-gold bg-transparent border-white/20" />
                  <label htmlFor="consent" className="font-body text-sm text-gray-400 leading-relaxed cursor-pointer select-none">
                    I understand that submitting this request is an inquiry only and does not guarantee vehicle availability. A Raphael Autos specialist will contact me to discuss my request.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center md:justify-end mt-4">
                  <Button 
                    type="submit"
                    variant="solid-gold"
                    label="Submit Sourcing Request"
                    className="px-12 py-4 text-sm tracking-[0.2em] font-bold w-full md:w-auto"
                  />
                </div>

              </form>
            </>
          )}

        </div>
      </section>

      {/* WHAT HAPPENS NEXT SECTION */}
      <section className="w-full px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-[#fafafa]">
        <div className="max-w-[1400px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#111111] tracking-tight leading-[1.1] mb-6">
              What Happens After You Submit?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              {
                step: "Step 1",
                title: "Request Review",
                desc: "Our specialists carefully review your requirements and evaluate potential sourcing opportunities."
              },
              {
                step: "Step 2",
                title: "Personal Consultation",
                desc: "We'll contact you to discuss your preferences, availability, budget, and any additional requirements."
              },
              {
                step: "Step 3",
                title: "Vehicle Search",
                desc: "Using our trusted network, we begin identifying vehicles that closely match your requested specifications."
              },
              {
                step: "Step 4",
                title: "Recommendation",
                desc: "You&apos;ll receive carefully selected options along with guidance to help you make an informed decision."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="font-display text-3xl md:text-4xl text-gray-300 mb-6 transition-colors duration-500 group-hover:text-cooliocns-gold">
                  0{idx + 1}
                </div>
                <div className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.2em] font-semibold mb-4">
                  {item.step}
                </div>
                <h3 className="font-display text-2xl text-[#111111] mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REASSURANCE SECTION */}
      <section className="w-full px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-white border-t border-black/5">
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <h2 className="font-display text-4xl md:text-5xl text-[#111111] tracking-tight leading-[1.1] mb-8">
              Why Choose Raphael Autos for Vehicle Sourcing?
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <ul className="flex flex-col gap-6">
              {[
                "Access to an extensive network of trusted automotive partners",
                "Personalized assistance from experienced specialists",
                "Support for rare, bespoke, and limited-production vehicles",
                "Clear communication throughout the sourcing process",
                "A discreet and professional experience from inquiry to delivery"
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 w-2 h-2 rounded-full bg-cooliocns-gold" />
                  <span className="font-body text-sm md:text-base text-gray-600 leading-relaxed">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section className="w-full px-6 md:px-16 lg:px-24 py-32 bg-[#050505] text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-8">
            Your Next Exceptional Automobile Starts Here
          </h2>
          <p className="font-body text-sm md:text-base text-gray-400 leading-relaxed tracking-wide mb-12">
            Whether you&apos;re searching for a modern performance icon, a luxury SUV, or a rare collector's vehicle, we're committed to helping you find the right automobile with the attention to detail and personalized service you deserve.
          </p>
          <Button
            variant="solid-gold"
            label="Start Sourcing Request"
            className="px-10 py-4 text-xs font-bold uppercase tracking-[0.25em]"
            onClick={(e) => {
              e?.preventDefault();
              window.scrollTo({ top: document.getElementById('sourcing-form-container')?.offsetTop || 0, behavior: 'smooth' });
            }}
          />
        </div>
      </section>

    </div>
  );
};
