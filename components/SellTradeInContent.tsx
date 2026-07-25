"use client";

import React, { useState, useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";

const STEPS = [
  { number: 1, label: "Your Details" },
  { number: 2, label: "Your Vehicle" },
  { number: 3, label: "Condition" },
  { number: 4, label: "Intent & Notes" },
];

const inputClass =
  "bg-transparent border-b border-white/20 py-3 text-white focus:outline-none hover:border-cooliocns-gold/60 focus:border-cooliocns-gold transition-colors duration-300 font-body text-sm placeholder:text-white/20";
const selectClass =
  "bg-[#111111] border-b border-white/20 py-3 text-white focus:outline-none hover:border-cooliocns-gold/60 focus:border-cooliocns-gold transition-colors duration-300 font-body text-sm appearance-none cursor-pointer";
const labelClass = "font-body text-[10px] uppercase tracking-widest text-gray-500";
const fieldClass = "flex flex-col gap-2";

export const SellTradeInContent = () => {
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
        id="evaluation-form-container"
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
                Thank you for submitting your vehicle details. A Raphael Autos specialist will review your request and be in touch shortly to discuss the next steps.
              </p>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="mb-14 md:mb-18">
                <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.25em] font-semibold mb-4 block">
                  Vehicle Evaluation
                </span>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]">
                  Tell Us About Your Vehicle
                </h2>
              </div>

              {/* ── Progress Indicator ── */}
              <div className="mb-14 md:mb-20">
                {/* Step labels */}
                <div className="grid grid-cols-4 mb-5">
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
                  {/* Background track */}
                  <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 h-[1px] bg-white/10" />
                  {/* Gold fill */}
                  <div
                    className="absolute top-1/2 -translate-y-1/2 left-0 h-[1px] bg-cooliocns-gold transition-all duration-500 ease-out"
                    style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
                  />
                  {/* Nodes */}
                  <div className="relative grid grid-cols-4">
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
                  document.getElementById("evaluation-form-container")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {/* Step heading — updates per step */}
                <div className="mb-10 pb-8 border-b border-white/10">
                  {currentStep === 1 && (
                    <div className={direction === "forward" ? "animate-step-forward" : "animate-step-back"}>
                      <h3 className="font-display text-2xl md:text-3xl text-white mb-1">Your Details</h3>
                      <p className="font-body text-sm text-gray-500">Who should our specialists contact with the evaluation?</p>
                    </div>
                  )}
                  {currentStep === 2 && (
                    <div className={direction === "forward" ? "animate-step-forward" : "animate-step-back"}>
                      <h3 className="font-display text-2xl md:text-3xl text-white mb-1">Your Vehicle</h3>
                      <p className="font-body text-sm text-gray-500">Provide details about the vehicle you&apos;d like us to evaluate.</p>
                    </div>
                  )}
                  {currentStep === 3 && (
                    <div className={direction === "forward" ? "animate-step-forward" : "animate-step-back"}>
                      <h3 className="font-display text-2xl md:text-3xl text-white mb-1">Vehicle Condition</h3>
                      <p className="font-body text-sm text-gray-500">Accurate details help our specialists prepare a more informed assessment.</p>
                    </div>
                  )}
                  {currentStep === 4 && (
                    <div className={direction === "forward" ? "animate-step-forward" : "animate-step-back"}>
                      <h3 className="font-display text-2xl md:text-3xl text-white mb-1">Intent &amp; Final Details</h3>
                      <p className="font-body text-sm text-gray-500">Let us know your goals and any additional context that may help.</p>
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
                      <input type="tel" placeholder="Include country code" className={inputClass} />
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

                {/* ── Step 2 — Your Vehicle ── */}
                <div data-active={currentStep === 2} className={currentStep === 2 ? "flex flex-col gap-8" : "absolute inset-x-0 top-0 flex flex-col gap-8 invisible pointer-events-none"}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={fieldClass}>
                      <label className={labelClass}>Manufacturer</label>
                      <input type="text" placeholder="e.g. Mercedes-Benz" className={inputClass} />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass}>Model</label>
                      <input type="text" placeholder="e.g. S-Class" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={fieldClass}>
                      <label className={labelClass}>Model Year</label>
                      <input type="text" placeholder="e.g. 2023" className={inputClass} />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass}>VIN <span className="normal-case tracking-normal text-white/25">(optional)</span></label>
                      <input type="text" placeholder="Enter if available" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={fieldClass}>
                      <label className={labelClass}>Current Mileage</label>
                      <input type="text" placeholder="e.g. 28,500 km" className={inputClass} />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass}>Exterior Colour</label>
                      <input type="text" placeholder="e.g. Obsidian Black" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={fieldClass}>
                      <label className={labelClass}>Interior Colour</label>
                      <input type="text" placeholder="e.g. Macchiato Beige" className={inputClass} />
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass}>Transmission</label>
                      <select defaultValue="" className={selectClass}>
                        <option value="" disabled>Select an option...</option>
                        <option value="automatic">Automatic</option>
                        <option value="manual">Manual</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={fieldClass}>
                      <label className={labelClass}>Fuel Type</label>
                      <select defaultValue="" className={selectClass}>
                        <option value="" disabled>Select an option...</option>
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="electric">Electric</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* ── Step 3 — Condition ── */}
                <div data-active={currentStep === 3} className={currentStep === 3 ? "flex flex-col gap-8" : "absolute inset-x-0 top-0 flex flex-col gap-8 invisible pointer-events-none"}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={fieldClass}>
                      <label className={labelClass}>Overall Condition</label>
                      <select defaultValue="" className={selectClass}>
                        <option value="" disabled>Select an option...</option>
                        <option value="excellent">Excellent</option>
                        <option value="very-good">Very Good</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                      </select>
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass}>Service History</label>
                      <select defaultValue="" className={selectClass}>
                        <option value="" disabled>Select an option...</option>
                        <option value="full">Full Service History</option>
                        <option value="partial">Partial Service History</option>
                        <option value="no-records">No Service Records</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={fieldClass}>
                      <label className={labelClass}>Accident History</label>
                      <select defaultValue="" className={selectClass}>
                        <option value="" disabled>Select an option...</option>
                        <option value="no">No Accidents</option>
                        <option value="yes">Previous Accident (detail in notes)</option>
                      </select>
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass}>Ownership</label>
                      <select defaultValue="" className={selectClass}>
                        <option value="" disabled>Select an option...</option>
                        <option value="first">First Owner</option>
                        <option value="second">Second Owner</option>
                        <option value="multiple">Multiple Owners</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* ── Step 4 — Intent & Notes ── */}
                <div data-active={currentStep === 4} className={currentStep === 4 ? "flex flex-col gap-8" : "absolute inset-x-0 top-0 flex flex-col gap-8 invisible pointer-events-none"}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className={fieldClass}>
                      <label className={labelClass}>What Would You Like to Do?</label>
                      <select defaultValue="" className={selectClass}>
                        <option value="" disabled>Select an option...</option>
                        <option value="sell">Sell My Vehicle</option>
                        <option value="trade-in">Trade In for Another Vehicle</option>
                        <option value="either">Open to Either</option>
                      </select>
                    </div>
                    <div className={fieldClass}>
                      <label className={labelClass}>Interested Vehicle <span className="normal-case tracking-normal text-white/25">(optional)</span></label>
                      <input type="text" placeholder="Which vehicle interests you for a trade-in?" className={inputClass} />
                    </div>
                  </div>

                  {/* Photo Upload */}
                  <div className={fieldClass}>
                    <label className={labelClass}>Vehicle Photos</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-1 items-start">
                      <div className="group min-h-[160px] border border-dashed border-white/15 hover:border-cooliocns-gold/50 transition-colors duration-300 flex flex-col items-center justify-center gap-3 cursor-pointer p-8 text-center">
                        <svg className="w-6 h-6 text-white/20 group-hover:text-cooliocns-gold/50 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        <p className="font-body text-xs text-white/25 group-hover:text-white/40 transition-colors">
                          Drag &amp; drop or <span className="text-cooliocns-gold">browse files</span>
                        </p>
                      </div>
                      <div className="pt-2">
                        <p className="font-body text-[10px] uppercase tracking-widest text-gray-600 mb-3">Recommended shots</p>
                        <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                          {["Front", "Rear", "Driver side", "Passenger side", "Interior", "Dashboard", "Engine bay"].map((shot) => (
                            <li key={shot} className="flex items-center gap-2">
                              <div className="w-1 h-1 bg-cooliocns-gold/50 shrink-0" />
                              <span className="font-body text-xs text-gray-600">{shot}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Notes */}
                  <div className={fieldClass}>
                    <label className={labelClass}>Additional Notes</label>
                    <textarea
                      rows={4}
                      placeholder="Modifications, recent servicing, warranty coverage, or anything else relevant to the evaluation."
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
                      I confirm the information provided is accurate to the best of my knowledge. I understand this submission is a request for evaluation only and does not constitute a purchase offer.
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

      {/* ── EVALUATION PROCESS ───────────────────────────────────── */}
      <section className="w-full bg-white px-6 md:px-20 py-24 md:py-32 border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 md:mb-20">
            <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.25em] font-semibold mb-3 block">
              How It Works
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-[#111111] font-normal tracking-wide">
              Our Evaluation Process
            </h2>
          </div>
          <div className="flex flex-col">
            {[
              { step: "Initial Review", desc: "Our specialists review the information and photographs you've submitted, assessing fit before any contact is made." },
              { step: "Personal Contact", desc: "We reach out personally to discuss your vehicle, clarify any details, and answer your questions." },
              { step: "Vehicle Assessment", desc: "Depending on the vehicle, we arrange an in-person inspection or request supporting documentation." },
              { step: "Offer or Trade-In Proposal", desc: "We present a clear valuation or trade-in proposal tailored to your situation and next steps." },
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

      {/* ── WHY SELL WITH US ─────────────────────────────────────── */}
      <section className="w-full bg-[#111111] py-24 md:py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-28 items-start">
            <div className="lg:sticky lg:top-32 flex flex-col">
              <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.25em] font-semibold mb-6 block">
                The Raphael Standard
              </span>
              <h2 className="font-display text-3xl md:text-5xl text-white font-normal tracking-wide leading-tight mb-8">
                Why Sell With Us?
              </h2>
              <p className="font-body text-sm text-gray-400 leading-relaxed tracking-wide">
                Experience a seamless, transparent, and rewarding process designed specifically for premium vehicle owners.
              </p>
              <div className="mt-10 w-10 h-[1px] bg-cooliocns-gold/50" />
            </div>
            <div className="flex flex-col">
              {[
                { title: "Expert Valuations", desc: "Every assessment is carried out with close attention to market conditions, vehicle history, and overall specification." },
                { title: "Discreet Service", desc: "We handle every inquiry with professionalism, privacy, and genuine respect for your time." },
                { title: "Luxury Expertise", desc: "Our team specializes in premium and prestige vehicles, evaluating them with the understanding they deserve." },
                { title: "Trade-In Flexibility", desc: "If you're considering your next vehicle, we'll make the transition as seamless and rewarding as possible." },
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
            Ready to Take the Next Step?
          </h2>
          <p className="font-body text-sm md:text-base text-gray-400 leading-relaxed tracking-wide mb-12">
            Submit your vehicle details today and a Raphael Autos specialist will contact you to discuss your options. Whether you&apos;re selling outright or trading in, we&apos;re here to deliver a professional and personalized experience.
          </p>
          <Button
            variant="solid-gold"
            label="Submit Your Vehicle"
            className="px-10 py-4 text-xs font-bold uppercase tracking-[0.25em]"
            onClick={(e) => {
              e?.preventDefault();
              document.getElementById("evaluation-form-container")?.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </section>

    </div>
  );
};
