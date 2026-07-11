import React from "react";

export const Footer = (): React.JSX.Element => {
  return (
    <footer className="bg-black text-gray-500 py-16 px-6 md:px-20 border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Footer Top */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="font-display text-white text-xl tracking-[0.25em] font-semibold">
              RAPHAEL AUTOS
            </span>
            <p className="font-body text-xs text-gray-400 max-w-sm leading-relaxed tracking-wide">
              Where Exceptional Automobiles Find Their Next Owner. Our collection is curated for those who appreciate engineering and luxury without compromise.
            </p>
          </div>

          {/* Nav Column 1 (2 cols) */}
          <div className="lg:col-span-2 lg:col-start-7 flex flex-col gap-3">
            <span className="font-body text-xs text-white uppercase tracking-wider font-bold">
              Collections
            </span>
            <ul className="flex flex-col gap-2 font-body text-xs">
              <li>
                <a href="#collections" className="hover:text-cooliocns-gold transition-colors">
                  Performance Icons
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-cooliocns-gold transition-colors">
                  Luxury Sedans
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-cooliocns-gold transition-colors">
                  Grand Tourers
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-cooliocns-gold transition-colors">
                  Luxury SUVs
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 2 (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-body text-xs text-white uppercase tracking-wider font-bold">
              Services
            </span>
            <ul className="flex flex-col gap-2 font-body text-xs">
              <li>
                <a href="#inventory" className="hover:text-cooliocns-gold transition-colors">
                  Inquire
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cooliocns-gold transition-colors">
                  Private Viewing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cooliocns-gold transition-colors">
                  Bespoke Sourcing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cooliocns-gold transition-colors">
                  Sell Your Vehicle
                </a>
              </li>
            </ul>
          </div>

          {/* Nav Column 3 (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="font-body text-xs text-white uppercase tracking-wider font-bold">
              Contact
            </span>
            <ul className="flex flex-col gap-2 font-body text-xs">
              <li>
                <span className="text-gray-400 block">Showroom:</span>
                100 Exclusive Drive, London
              </li>
              <li>
                <a href="mailto:concierge@raphaelautos.com" className="hover:text-cooliocns-gold transition-colors">
                  concierge@raphaelautos.com
                </a>
              </li>
              <li>
                <a href="tel:+442079460912" className="hover:text-cooliocns-gold transition-colors">
                  +44 20 7946 0912
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-white/5" />

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-body text-[10px] tracking-wider uppercase text-gray-600">
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
    </footer>
  );
};

export default Footer;
