import React from "react";

interface CollectionItem {
  id: string;
  num: string;
  title: string;
  description: string;
}

const COLLECTIONS: CollectionItem[] = [
  {
    id: "performance",
    num: "I",
    title: "Performance Icons",
    description: "Legendary machines built for exhilarating driving experiences.",
  },
  {
    id: "sedans",
    num: "II",
    title: "Luxury Sedans",
    description: "Elegant comfort, refined craftsmanship, and executive presence.",
  },
  {
    id: "gt",
    num: "III",
    title: "Grand Tourers",
    description: "Designed for effortless journeys with uncompromising performance.",
  },
  {
    id: "suv",
    num: "IV",
    title: "Luxury SUVs",
    description: "Versatility, capability, and sophistication in equal measure.",
  },
  {
    id: "arrivals",
    num: "V",
    title: "New Arrivals",
    description: "Recently acquired vehicles awaiting their next owner.",
  },
  {
    id: "limited",
    num: "VI",
    title: "Limited Editions",
    description: "Rare automobiles distinguished by exclusivity and heritage.",
  },
];

export const FeaturedCollections = (): React.JSX.Element => {
  return (
    <section className="bg-black py-24 px-6 md:px-20 border-t border-white/5 relative z-10" id="collections">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="font-body text-xs text-cooliocns-gold uppercase tracking-[0.25em] font-semibold mb-3 block">
              Selection
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white font-light tracking-wide">
              Curated Collections
            </h2>
          </div>
          <p className="font-body text-sm text-gray-400 max-w-md leading-relaxed tracking-wide">
            Browse vehicles thoughtfully grouped to help you discover the perfect balance of performance, luxury, and lifestyle.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COLLECTIONS.map((col) => (
            <div
              key={col.id}
              className="group border border-white/10 bg-gray-900/20 p-8 flex flex-col justify-between min-h-[220px] transition-all duration-500 ease-in-out hover:border-cooliocns-gold hover:bg-neutral-900/50 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Decorative faint Roman numeral background on hover */}
              <span className="absolute right-4 top-2 text-8xl font-display text-white/[0.02] select-none group-hover:text-white/[0.05] transition-colors duration-500">
                {col.num}
              </span>

              <div className="flex flex-col gap-4">
                <span className="font-body text-xs text-cooliocns-gold tracking-widest block font-bold">
                  {col.num}
                </span>
                <h3 className="font-display text-xl text-white group-hover:text-cooliocns-gold transition-colors duration-300">
                  {col.title}
                </h3>
                <p className="font-body text-xs text-gray-400 leading-relaxed max-w-[280px]">
                  {col.description}
                </p>
              </div>

              {/* Action indicator at bottom */}
              <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="font-body text-[10px] text-white/50 tracking-[0.2em] group-hover:text-white transition-colors">
                  EXPLORE CATEGORY
                </span>
                {/* Thin gold slide-in animation line */}
                <div className="w-0 h-[1px] bg-cooliocns-gold group-hover:w-16 transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
