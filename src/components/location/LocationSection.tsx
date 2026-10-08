'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function LocationSection() {
  const nodes = [
    { name: 'Neopolis', desc: 'Central Business Hub of West Hyderabad' },
    { name: 'Kokapet', desc: 'Commercial & Financial Towers' },
    { name: 'The Gaudium School', desc: 'International School Campus' },
    { name: 'Samisti International', desc: 'Reputed Academic Institution' },
    { name: 'Meru International', desc: 'Global Standard Curriculum' },
    { name: 'Candidus International', desc: 'Modern Learning Environment' },
  ];

  return (
    <section
      id="location"
      className="relative w-full py-36 sm:py-48 bg-[#F7F5F0] text-[#141C18] overflow-hidden border-t border-[#141C18]/5"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-4 border-b border-[#141C18]/10">
          <div className="lg:col-span-8 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
              GEOGRAPHY & ACCESS
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#141C18]">
              KOLLUR · ORR EXIT 2 <br />
              <span className="italic text-[#8A7D6B]">HYDERABAD</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-2">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              Direct multi-lane frontage onto the Nehru Outer Ring Road, moments from Neopolis and West Hyderabad’s premier educational campuses.
            </p>
          </div>
        </div>

        {/* Beautiful Map Composition */}
        <div className="relative aspect-16/9 sm:aspect-21/10 min-h-[440px] overflow-hidden rounded-xs border border-[#141C18]/8 bg-white shadow-xs">
          <img
            src="/assets/location-map.jpg"
            alt="Vanae Location Map"
            className="w-full h-full object-cover object-center filter contrast-100"
          />

          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 px-4 py-2 bg-white/95 backdrop-blur-md rounded-xs border border-[#141C18]/8 text-[11px] font-mono uppercase tracking-widest text-[#141C18]">
            VANAE · NEHRU OUTER RING ROAD EXIT 2
          </div>
        </div>

        {/* Selected Connectivity Information in Whitespace */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-4">
          {nodes.map((n, idx) => (
            <div key={n.name} className="space-y-1">
              <span className="text-[10px] font-mono text-[#8A7D6B] tracking-widest">
                0{idx + 1}
              </span>
              <h4 className="font-serif text-base text-[#141C18]">
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
