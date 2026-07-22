import React from "react";

export const Footer = (): React.JSX.Element => {
  return (
    <footer className="bg-cooliocns-gold text-[#111111]/80 pt-16 pb-8 px-6 md:px-20 border-t border-black/20 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Nav Column 1 */}
          <div className="flex flex-col gap-3">
            <span className="font-body text-xs text-[#111111] uppercase tracking-wider font-bold">
              Collections
            </span>
            <ul className="flex flex-col gap-2 font-body text-xs">
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Performance Icons
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Luxury Sedans
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Grand Tourers
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-white transition-colors">
                  Luxury SUVs
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2 */}
          <div className="flex flex-col gap-3">
            <span className="font-body text-xs text-[#111111] uppercase tracking-wider font-bold">
              Services
            </span>
            <ul className="flex flex-col gap-2 font-body text-xs">
              <li>
                <a href="#inventory" className="hover:text-white transition-colors">
                  Inquire
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Private Viewing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Bespoke Sourcing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sell Your Vehicle
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 3 */}
          <div className="flex flex-col gap-3">
            <span className="font-body text-xs text-[#111111] uppercase tracking-wider font-bold">
              Contact
            </span>
            <ul className="flex flex-col gap-2 font-body text-xs">
              <li>
                <span className="text-[#111111] font-semibold block">Showroom:</span>
                100 Exclusive Drive, London
              </li>
              <li>
                <a href="mailto:concierge@raphaelautos.com" className="hover:text-white transition-colors">
                  concierge@raphaelautos.com
                </a>
              </li>
              <li>
                <a href="tel:+442079460912" className="hover:text-white transition-colors">
                  +44 20 7946 0912
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-black/20" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-[10px] tracking-wider uppercase text-[#111111]/70">
          <span>&copy; {new Date().getFullYear()} Raphael Autos. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>

      {/* Giant Monospace Text at the Bottom */}
      <div className="w-full flex items-center justify-center mt-12 md:mt-20 pointer-events-none select-none px-4">
        <span className="font-body text-[12vw] sm:text-[14vw] leading-[0.8] font-black text-[#111111] tracking-tighter whitespace-nowrap">
          RAPHAEL AUTOS
        </span>
      </div>
    </footer>
  );
};

export default Footer;
