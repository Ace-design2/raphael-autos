"use client";

import React, { useState, useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";

const STEPS = [
  { number: 1, label: "Your Details" },
  { number: 2, label: "The Vehicle" },
  { number: 3, label: "Requirements" },
];

const inputClass =
  "bg-transparent border-b border-white/20 py-3 text-white focus:outline-none hover:border-cooliocns-gold/60 focus:border-cooliocns-gold transition-colors duration-300 font-body text-sm placeholder:text-white/20";
const selectClass =
  "bg-[#111111] border-b border-white/20 py-3 text-white focus:outline-none hover:border-cooliocns-gold/60 focus:border-cooliocns-gold transition-colors duration-300 font-body text-sm appearance-none cursor-pointer";
const labelClass = "font-body text-[10px] uppercase tracking-widest text-gray-500";
const fieldClass = "flex flex-col gap-2";

export const VehicleSourcingContent = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const totalSteps = STEPS.length;

  const handleNext = () => { setDirection("forward"); setCurrentStep((p) => Math.min(p + 1, totalSteps)); };
  const handleBack = () => { setDirection("back"); setCurrentStep((p) => Math.max(p - 1, 1)); };

  const stepsContainerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const container = stepsContainerRef.current;
    if (!container) return;
    const active = container.querySelector('[data-active="true"]') as HTMLElement | null;
    if (active) container.style.height = `${active.scrollHeight}px`;
  }, [currentStep]);

  return (
    <div className="w-full flex flex-col bg-white">

      {/* ── FORM SECTION ─────────────────────────────────────────── */}
      <section
        className="w-full px-6 md:px-16 lg:px-24 py-24 md:py-32 bg-[#111111] text-white"
        id="sourcing-form-container"
      >
        <div className="max-w-[860px] mx-auto">

          {isSubmitted ? (
            /* Success state */
            <div className="text-center py-20 animate-fade-in">
              <div className="inline-flex items-center justify-center w-20 h-20 border border-cooliocns-gold/50 bg-cooliocns-gold/10 text-cooliocns-gold mb-10">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-white tracking-tight leading-[1.1] mb-6">
                Request Received
              </h2>
              <p className="font-body text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
                Thank you for your sourcing request. A Raphael Autos specialist will review your submission and be in touch shortly to discuss your requirements and next steps.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-14 md:mb-18">
                <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.25em] font-semibold mb-4 block">
                  Vehicle Sourcing
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                  Tell Us What You&apos;re Looking For
                </h2>
              </div>

              {/* ── Progress Indicator ── */}
              <div className="mb-14 md:mb-20">
                {/* Step labels */}
                <div className="grid grid-cols-3 mb-5">
                  {STEPS.map((step) => {
                    const done = currentStep > step.number;
                    const active = currentStep === step.number;
                    return (
                      <div key={step.number} className="flex justify-center">
                        <span className={`font-body text-[9px] sm:text-[10px] uppercase tracking-widest text-center leading-tight transition-colors duration-300 ${
                          active ? "text-cooliocns-gold" : done ? "text-white/35" : "text-white/15"
                        }`}>
                          {step.label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Track + square nodes */}
                <div className="relative">
                  <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 h-[1px] bg-white/10" />
                  <div
                    className="absolute top-1/2 -translate-y-1/2 left-0 h-[1px] bg-cooliocns-gold transition-all duration-500 ease-out"
                    style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                  />
                  <div className="relative grid grid-cols-3">
                    {STEPS.map((step) => {
                      const done = currentStep > step.number;
                      const active = currentStep === step.number;
                      return (
                        <div key={step.number} className="flex justify-center">
                          <div className={`w-7 h-7 border flex items-center justify-center bg-[#111111] transition-all duration-300 ${
                            done
                              ? "border-cooliocns-gold bg-cooliocns-gold"
                              : active
                                ? "border-cooliocns-gold"
                                : "border-white/15"
                          }`}>
                            {done ? (
                              <svg className="w-3 h-3 text-[#111111]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <span className={`font-body text-[9px] font-bold leading-none ${active ? "text-cooliocns-gold" : "text-white/20"}`}>
                                {String(step.number).padStart(2, "0")}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* ── Form ── */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubmitted(true);
                  document.getElementById("sourcing-form-container")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {/* Step heading */}
                <div className="mb-10 pb-8 border-b border-white/10">
                  {currentStep === 1 && (
                    <div className={direction === "forward" ? "animate-step-forward" : "animate-step-back"}>
                      <h3 className="font-display text-2xl md:text-3xl text-white mb-1">Your Details</h3>
                      <p className="font-body text-sm text-gray-500">How should our team reach you with sourcing updates?</p>
                    </div>
                  )}
                  {currentStep === 2 && (
                    <div className={direction === "forward" ? "animate-step-forward" : "animate-step-back"}>
                      <h3 className="font-display text-2xl md:text-3xl text-white mb-1">The Vehicle</h3>
                      <p className="font-body text-sm text-gray-500">Describe what you&apos;re looking for as precisely as possible.</p>
                    </div>
                  )}
                  {currentStep === 3 && (
                    <div className={direction === "forward" ? "animate-step-forward" : "animate-step-back"}>
                      <h3 className="font-display text-2xl md:text-3xl text-white mb-1">Requirements &amp; Notes</h3>
                      <p className="font-body text-sm text-gray-500">Any further context will help us refine the search on your behalf.</p>
                    </div>
                  )}
                </div>

                {/* ── Steps container (animated height) ── */}
                <div
                  ref={stepsContainerRef}
                  className="relative overflow-hidden"
                  style={{ transition: "height 0.5s cubic-bezier(0.16, 1, 0.3, 1)" }}
                >

                {/* ── Step 1 — Your Details ── */}
                <div data-active={currentStep === 1} className={currentStep === 1 ? "flex flex-col gap-8" : "absolute inset-x-0 top-0 flex flex-col gap-8 invisible pointer-events-none"}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={fieldClass}>
                      <label className={labelClass}>Full Name</label>
                      <input type="text" placeholder="Enter your full name" className={inputClass} />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass}>Email Address</label>
                      <input type="email" placeholder="you@example.com" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={fieldClass}>
                      <label className={labelClass}>Phone Number</label>
                      <input type="tel" placeholder="Include your country code" className={inputClass} />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass}>Preferred Contact Method</label>
                      <select defaultValue="" className={selectClass}>
                        <option value="" disabled>Select an option...</option>
                        <option value="phone">Phone Call</option>
                        <option value="email">Email</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* ── Step 2 — The Vehicle ── */}
                <div data-active={currentStep === 2} className={currentStep === 2 ? "flex flex-col gap-8" : "absolute inset-x-0 top-0 flex flex-col gap-8 invisible pointer-events-none"}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={fieldClass}>
                      <label className={labelClass}>Manufacturer</label>
                      <input type="text" placeholder="e.g. Porsche" className={inputClass} />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass}>Model</label>
                      <input type="text" placeholder="e.g. 911 Turbo S" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={fieldClass}>
                      <label className={labelClass}>Model Year</label>
                      <input type="text" placeholder="Preferred year or range" className={inputClass} />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass}>Condition</label>
                      <select defaultValue="" className={selectClass}>
                        <option value="" disabled>Select an option...</option>
                        <option value="new">New</option>
                        <option value="cpo">Certified Pre-Owned</option>
                        <option value="pre-owned">Pre-Owned</option>
                        <option value="either">Open to Either</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={fieldClass}>
                      <label className={labelClass}>Preferred Exterior Colour <span className="normal-case tracking-normal text-white/25">(optional)</span></label>
                      <input type="text" placeholder="e.g. Chalk, Aventurine Green" className={inputClass} />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass}>Preferred Interior Colour <span className="normal-case tracking-normal text-white/25">(optional)</span></label>
                      <input type="text" placeholder="e.g. Black leather" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={fieldClass}>
                      <label className={labelClass}>Fuel Type</label>
                      <select defaultValue="" className={selectClass}>
                        <option value="" disabled>Select an option...</option>
                        <option value="petrol">Petrol</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="electric">Electric</option>
                        <option value="no-preference">No Preference</option>
                      </select>
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass}>Transmission</label>
                      <select defaultValue="" className={selectClass}>
                        <option value="" disabled>Select an option...</option>
                        <option value="automatic">Automatic</option>
                        <option value="manual">Manual</option>
                        <option value="no-preference">No Preference</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={fieldClass}>
                      <label className={labelClass}>Maximum Mileage <span className="normal-case tracking-normal text-white/25">(optional)</span></label>
                      <input type="text" placeholder="e.g. 20,000 km" className={inputClass} />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass}>Budget</label>
                      <input type="text" placeholder="Your estimated budget" className={inputClass} />
                    </div>
                  </div>
                </div>

                {/* ── Step 3 — Requirements & Notes ── */}
                <div data-active={currentStep === 3} className={currentStep === 3 ? "flex flex-col gap-8" : "absolute inset-x-0 top-0 flex flex-col gap-8 invisible pointer-events-none"}>
                  <div className={fieldClass}>
                    <label className={labelClass}>Additional Requirements</label>
                    <textarea
                      rows={5}
                      placeholder="Specific options, trim levels, performance packages, equipment, or any other preferences that are important to you."
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {/* Consent */}
                  <div className="flex items-start gap-4 p-5 border border-white/10 bg-white/[0.03]">
                    <input
                      type="checkbox"
                      id="consent"
                      required
                      className="mt-0.5 shrink-0 w-4 h-4 cursor-pointer accent-cooliocns-gold"
                    />
                    <label htmlFor="consent" className="font-body text-sm text-gray-400 leading-relaxed cursor-pointer select-none">
                      I understand that submitting this request is an inquiry only and does not guarantee vehicle availability. A Raphael Autos specialist will contact me to discuss my request in detail.
                    </label>
                  </div>
                </div>

                </div>{/* end steps container */}

                {/* ── Form Navigation ── */}
                <div className="flex items-center justify-between mt-12">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex items-center gap-2 font-body text-sm text-white/35 hover:text-white transition-all duration-200 active:scale-[0.96] tracking-wider bg-transparent border-0 cursor-pointer p-0"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                      </svg>
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  <div className="flex items-center gap-6">
                    <span className="font-body text-[10px] text-white/20 tracking-widest">
                      {currentStep} / {totalSteps}
                    </span>
                    {currentStep < totalSteps ? (
                      <Button
                        type="button"
                        variant="solid-gold"
                        label="Continue"
                        className="px-8 py-3.5 text-xs tracking-[0.2em] font-bold"
                        onClick={handleNext}
                      />
                    ) : (
                      <Button
                        type="submit"
                        variant="solid-gold"
                        label="Submit Request"
                        className="px-8 py-3.5 text-xs tracking-[0.2em] font-bold"
                      />
                    )}
                  </div>
                </div>

              </form>
            </>
          )}
        </div>
      </section>

      {/* ── SOURCING PROCESS ─────────────────────────────────────── */}
      <section className="w-full bg-white px-6 md:px-20 py-24 md:py-32 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 md:mb-20">
            <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.25em] font-semibold mb-3 block">
              How It Works
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#111111] font-normal tracking-wide">
              Our Sourcing Process
            </h2>
          </div>
          <div className="flex flex-col">
            {[
              { step: "Request Review", desc: "Our specialists carefully review your requirements and evaluate potential sourcing opportunities before any contact is made." },
              { step: "Personal Consultation", desc: "We contact you personally to discuss your preferences, availability, budget, and any additional requirements." },
              { step: "Vehicle Search", desc: "Using our trusted network, we begin identifying vehicles that closely match your requested specifications." },
              { step: "Recommendation", desc: "You receive a curated shortlist of options with clear guidance to help you make a confident, informed decision." },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group grid grid-cols-[48px_1fr] md:grid-cols-[96px_1fr_1fr] gap-x-8 md:gap-x-14 gap-y-3 items-start md:items-center py-8 md:py-10 border-t border-black/10 hover:border-cooliocns-gold/40 transition-colors duration-300 cursor-default"
              >
                <span className="row-span-2 md:row-span-1 font-display text-2xl md:text-3xl text-[#111111]/10 group-hover:text-cooliocns-gold/40 transition-colors duration-500 leading-none select-none self-center">
                  0{idx + 1}
                </span>
                <h3 className="font-display text-xl md:text-2xl lg:text-3xl text-[#111111] leading-snug">
                  {item.step}
                </h3>
                <p className="font-body text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
            <div className="border-t border-black/10" />
          </div>
        </div>
      </section>

      {/* ── WHY SOURCE WITH US ───────────────────────────────────── */}
      <section className="w-full bg-[#111111] py-24 md:py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-28 items-start">
            <div className="lg:sticky lg:top-32 flex flex-col">
              <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.25em] font-semibold mb-6 block">
                The Raphael Standard
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-white font-normal tracking-wide leading-tight mb-8">
                Why Source With Us?
              </h2>
              <p className="font-body text-sm text-gray-400 leading-relaxed tracking-wide">
                A personalized, professional sourcing service built on access, expertise, and discretion.
              </p>
              <div className="mt-10 w-10 h-[1px] bg-cooliocns-gold/50" />
            </div>
            <div className="flex flex-col">
              {[
                { title: "Global Network Access", desc: "An extensive network of trusted partners worldwide gives us access to vehicles unavailable through conventional channels." },
                { title: "Specialist Guidance", desc: "Experienced specialists who genuinely understand luxury and performance vehicles assist you personally at every stage." },
                { title: "Rare & Bespoke Vehicles", desc: "We specialize in sourcing rare, limited-production, and bespoke vehicles that demand a higher level of expertise and connections." },
                { title: "Discreet & Professional", desc: "A clear, professional experience from your initial inquiry through to final delivery, conducted with the discretion you deserve." },
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="group flex items-start gap-8 py-9 border-b border-white/10 hover:border-cooliocns-gold/30 first:border-t first:border-white/10 transition-colors duration-500 cursor-default"
                >
                  <span className="shrink-0 font-body text-xs text-white/20 tracking-widest pt-1.5 group-hover:text-cooliocns-gold/70 transition-colors duration-500">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-display text-xl md:text-2xl text-white mb-2 group-hover:text-cooliocns-gold transition-colors duration-500">
                      {point.title}
                    </h4>
                    <p className="font-body text-sm text-gray-400 leading-relaxed">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────── */}
      <section className="w-full px-6 md:px-16 lg:px-24 py-32 bg-[#050505] text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-8">
            Your Next Exceptional Automobile Starts Here
          </h2>
          <p className="font-body text-sm md:text-base text-gray-400 leading-relaxed tracking-wide mb-12">
            Whether you&apos;re searching for a modern performance icon, a luxury SUV, or a rare collector&apos;s vehicle, we&apos;re committed to finding the right automobile with the care and discretion you deserve.
          </p>
          <Button
            variant="solid-gold"
            label="Start Sourcing Request"
            className="px-10 py-4 text-xs font-bold uppercase tracking-[0.25em]"
            onClick={(e) => {
              e?.preventDefault();
              document.getElementById("sourcing-form-container")?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </section>

    </div>
  );
};
