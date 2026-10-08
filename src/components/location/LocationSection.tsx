'use client';

import React from 'react';

export function LocationSection() {
  const nodes = [
    { name: 'Neopolis', desc: 'Central Business Hub of West Hyderabad' },
    { name: 'Kokapet', desc: 'Commercial & Financial High-Rise Zone' },
    { name: 'The Gaudium School', desc: 'Global Standard International Campus' },
    { name: 'Samisti International', desc: 'Premier Academic Institution' },
    { name: 'Financial District', desc: 'Corporate & Global Capability Centers' },
    { name: 'Meru International', desc: 'Holistic K-12 World School' },
  ];

  return (
    <section
      id="location"
      className="relative w-full py-32 sm:py-44 bg-white text-[#141414] overflow-hidden border-t border-[#141414]/6"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-4 border-b border-[#141414]/8">
          <div className="lg:col-span-8 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
              08 — LOCATION & CONNECTIVITY
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#141414] leading-[1.1]">
              KOLLUR · ORR EXIT 2 <br />
              <span className="italic text-[#8A7D6B]">HYDERABAD</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-2">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              Direct multi-lane frontage onto the Nehru Outer Ring Road corridor, moments from Neopolis, Kokapet, and West Hyderabad’s finest educational institutions.
            </p>
          </div>
        </div>

        {/* Large Editorial Map Visual */}
        <div className="relative aspect-16/9 sm:aspect-21/10 min-h-[440px] overflow-hidden rounded-xs border border-[#141414]/8 bg-[#FAF9F6] shadow-xs">
          <img
            src="/assets/location-map.jpg"
            alt="VANAE Location Map — Kollur ORR Exit 2 Hyderabad"
            className="w-full h-full object-cover object-center filter contrast-100"
          />

          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 px-4 py-2 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/6 text-[10.5px] font-mono uppercase tracking-widest text-[#141414]">
            VANAE · NEHRU OUTER RING ROAD EXIT 2 · KOLLUR
          </div>
        </div>

        {/* Selected Connectivity Information in Whitespace */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-4">
          {nodes.map((n, idx) => (
            <div key={n.name} className="space-y-1">
              <span className="text-[10px] font-mono text-[#8A7D6B] tracking-widest">
                0{idx + 1}
              </span>
              <h4 className="font-serif text-base text-[#141414]">
                {n.name}
              </h4>
              <p className="text-xs text-[#4A544F] font-sans font-light leading-relaxed">
                {n.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
