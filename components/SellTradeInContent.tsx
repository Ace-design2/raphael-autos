"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

export const SellTradeInContent = () => {
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
                Thank you for your vehicle evaluation request. A Raphael Autos specialist will review your submission and contact you shortly to discuss your requirements and the next steps.
              </p>
            </div>
          ) : (
            <>
              {/* Introduction */}
              <div className="text-center mb-16 md:mb-24">
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-8">
                  Tell Us About Your Vehicle
                </h2>
                <div className="max-w-3xl mx-auto text-left">
                  <p className="font-body text-sm md:text-base text-gray-400 leading-relaxed mb-6">
                    Complete the form with as much information as possible. Providing accurate details and clear photographs helps our specialists prepare an informed initial assessment before contacting you.
                  </p>
                </div>
              </div>

              {/* Vehicle Evaluation Form */}
              <form 
                className="flex flex-col gap-16" 
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubmitted(true);
                  window.scrollTo({ top: document.getElementById('evaluation-form-container')?.offsetTop || 0, behavior: 'smooth' });
                }}
                id="evaluation-form-container"
              >
                
                {/* Section 1: Your Information */}
                <div className="flex flex-col gap-8">
                  <h3 className="font-display text-2xl md:text-3xl text-cooliocns-gold mb-2 pb-4 border-b border-white/10">
                    Section 1 &mdash; Your Information
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
                      <input type="tel" required placeholder="Include country code" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
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

                {/* Section 2: Vehicle Information */}
                <div className="flex flex-col gap-8">
                  <h3 className="font-display text-2xl md:text-3xl text-cooliocns-gold mb-2 pb-4 border-b border-white/10">
                    Section 2 &mdash; Vehicle Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Manufacturer</label>
                      <input type="text" required placeholder="e.g. Mercedes-Benz" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Model</label>
                      <input type="text" required placeholder="e.g. S-Class" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Model Year</label>
                      <input type="text" placeholder="e.g. 2023" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Vehicle Identification Number (VIN) (Optional)</label>
                      <input type="text" placeholder="Enter VIN if available" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Current Mileage</label>
                      <input type="text" placeholder="e.g. 28,500 km" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Exterior Colour</label>
                      <input type="text" placeholder="e.g. Obsidian Black" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Interior Colour</label>
                      <input type="text" placeholder="e.g. Macchiato Beige" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Transmission</label>
                      <select defaultValue="" className="bg-[#111111] border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm appearance-none cursor-pointer">
                        <option value="" disabled className="text-white/20">Select an option...</option>
                        <option value="automatic">Automatic</option>
                        <option value="manual">Manual</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Fuel Type</label>
                      <select defaultValue="" className="bg-[#111111] border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm appearance-none cursor-pointer">
                        <option value="" disabled className="text-white/20">Select an option...</option>
                        <option value="petrol">Petrol</option>
                        <option value="diesel">Diesel</option>
                        <option value="hybrid">Hybrid</option>
                        <option value="electric">Electric</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 3: Vehicle Condition */}
                <div className="flex flex-col gap-8">
                  <h3 className="font-display text-2xl md:text-3xl text-cooliocns-gold mb-2 pb-4 border-b border-white/10">
                    Section 3 &mdash; Vehicle Condition
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Overall Condition</label>
                      <select defaultValue="" className="bg-[#111111] border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm appearance-none cursor-pointer">
                        <option value="" disabled className="text-white/20">Select an option...</option>
                        <option value="excellent">Excellent</option>
                        <option value="very-good">Very Good</option>
                        <option value="good">Good</option>
                        <option value="fair">Fair</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Service History</label>
                      <select defaultValue="" className="bg-[#111111] border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm appearance-none cursor-pointer">
                        <option value="" disabled className="text-white/20">Select an option...</option>
                        <option value="full">Full Service History</option>
                        <option value="partial">Partial Service History</option>
                        <option value="no-records">No Service Records</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Accident History</label>
                      <select defaultValue="" className="bg-[#111111] border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm appearance-none cursor-pointer">
                        <option value="" disabled className="text-white/20">Select an option...</option>
                        <option value="no">No</option>
                        <option value="yes">Yes (Please provide details below)</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Ownership</label>
                      <select defaultValue="" className="bg-[#111111] border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm appearance-none cursor-pointer">
                        <option value="" disabled className="text-white/20">Select an option...</option>
                        <option value="first">First Owner</option>
                        <option value="second">Second Owner</option>
                        <option value="multiple">Multiple Owners</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 4: Your Intent */}
                <div className="flex flex-col gap-8">
                  <h3 className="font-display text-2xl md:text-3xl text-cooliocns-gold mb-2 pb-4 border-b border-white/10">
                    Section 4 &mdash; Your Intent
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">What would you like to do?</label>
                      <select defaultValue="" className="bg-[#111111] border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm appearance-none cursor-pointer">
                        <option value="" disabled className="text-white/20">Select an option...</option>
                        <option value="sell">Sell My Vehicle</option>
                        <option value="trade-in">Trade In for Another Vehicle</option>
                        <option value="either">Open to Either</option>
                      </select>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-body text-xs uppercase tracking-widest text-gray-400">Interested Vehicle (Optional)</label>
                      <input type="text" placeholder="If trading in, tell us which vehicle you're interested in" className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20" />
                    </div>
                  </div>
                </div>

                {/* Section 5: Upload Photos */}
                <div className="flex flex-col gap-8">
                  <h3 className="font-display text-2xl md:text-3xl text-cooliocns-gold mb-2 pb-4 border-b border-white/10">
                    Section 5 &mdash; Upload Photos
                  </h3>
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-full md:w-1/2 flex flex-col gap-4">
                      <div className="p-8 border border-white/20 border-dashed rounded-sm bg-white/5 flex flex-col items-center justify-center text-center cursor-pointer hover:border-cooliocns-gold transition-colors min-h-[200px]">
                        <svg className="w-8 h-8 text-white/50 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        <p className="font-body text-sm text-white/70">Drag & drop images here or <span className="text-cooliocns-gold">browse</span></p>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2">
                      <p className="font-body text-sm text-gray-400 mb-4">Recommended Images:</p>
                      <ul className="grid grid-cols-2 gap-2 mb-6">
                        {["Front view", "Rear view", "Both sides", "Interior", "Dashboard", "Wheels", "Engine bay (optional)"].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-cooliocns-gold" />
                            <span className="font-body text-xs text-gray-400">{item}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="p-4 bg-cooliocns-gold/10 border-l-2 border-cooliocns-gold">
                        <p className="font-body text-xs text-cooliocns-gold/80 italic">
                          High-quality photographs allow our specialists to provide a more accurate initial assessment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Section 6: Additional Information */}
                <div className="flex flex-col gap-8">
                  <h3 className="font-display text-2xl md:text-3xl text-cooliocns-gold mb-2 pb-4 border-b border-white/10">
                    Section 6 &mdash; Additional Information
                  </h3>
                  <div className="flex flex-col gap-2">
                    <label className="font-body text-xs uppercase tracking-widest text-gray-400">Message</label>
                    <textarea 
                      rows={5}
                      placeholder="Tell us anything else that may help with your evaluation, such as optional equipment, recent servicing, modifications, warranty coverage, or any unique features." 
                      className="bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-cooliocns-gold transition-colors font-body text-sm placeholder:text-white/20 resize-none"
                    />
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-4 p-6 bg-white/5 border border-white/10">
                  <input type="checkbox" id="consent" required className="mt-1 cursor-pointer w-4 h-4 accent-cooliocns-gold bg-transparent border-white/20" />
                  <label htmlFor="consent" className="font-body text-sm text-gray-400 leading-relaxed cursor-pointer select-none">
                    I confirm that the information provided is accurate to the best of my knowledge. I understand that this submission is a request for evaluation only and does not constitute a purchase offer.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center md:justify-end mt-4">
                  <Button 
                    type="submit"
                    variant="solid-gold"
                    label="Request Vehicle Evaluation"
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
              Our Evaluation Process
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              {
                step: "Initial Review",
                desc: "Our specialists review the information and photographs you&apos;ve submitted."
              },
              {
                step: "Personal Contact",
                desc: "We'll reach out to discuss your vehicle, answer any questions, and gather any additional details if needed."
              },
              {
                step: "Vehicle Assessment",
                desc: "Depending on the vehicle, we may arrange an in-person inspection or request additional documentation."
              },
              {
                step: "Offer or Trade-In Proposal",
                desc: "Once the evaluation is complete, we'll present a valuation or discuss suitable trade-in opportunities based on your preferences."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="font-display text-3xl md:text-4xl text-gray-300 mb-6 transition-colors duration-500 group-hover:text-cooliocns-gold">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-2xl text-[#111111] mb-4">
                  {item.step}
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
              Why Sell with Raphael Autos?
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <ul className="flex flex-col gap-8">
              {[
                { title: "Expert Valuations", desc: "Every assessment is carried out with attention to market conditions, vehicle history, and overall specification." },
                { title: "Discreet Service", desc: "We handle every inquiry with professionalism, privacy, and respect for your time." },
                { title: "Luxury Market Expertise", desc: "Our team specializes in premium and prestige vehicles, ensuring your automobile is evaluated by people who understand its value." },
                { title: "Trade-In Flexibility", desc: "If you&apos;re considering your next vehicle, we'll help make the transition as seamless as possible." }
              ].map((point, idx) => (
                <li key={idx} className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-cooliocns-gold shrink-0" />
                    <h4 className="font-display text-xl text-[#111111]">{point.title}</h4>
                  </div>
                  <p className="font-body text-sm md:text-base text-gray-600 leading-relaxed pl-4 border-l border-black/10 ml-0.5">
                    {point.desc}
                  </p>
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
            Ready to Take the Next Step?
          </h2>
          <p className="font-body text-sm md:text-base text-gray-400 leading-relaxed tracking-wide mb-12">
            Submit your vehicle details today, and a Raphael Autos specialist will contact you to discuss your options. Whether you&apos;re selling outright or trading in, we&apos;re here to provide a professional, transparent, and personalized experience.
          </p>
          <Button
            variant="solid-gold"
            label="Submit Your Vehicle"
            className="px-10 py-4 text-xs font-bold uppercase tracking-[0.25em]"
            onClick={(e) => {
              e?.preventDefault();
              window.scrollTo({ top: document.getElementById('evaluation-form-container')?.offsetTop || 0, behavior: 'smooth' });
            }}
          />
        </div>
      </section>

    </div>
  );
};
