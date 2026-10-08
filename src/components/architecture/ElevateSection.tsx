'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function ElevateSection() {
  const levels = [
    {
      tier: 'LEVELS 06 TO 36',
      title: 'Residences begin from the 6th floor.',
      desc: 'Lifted completely above city noise into open skies, natural cross-ventilation, unhindered horizons, and 11-foot clear ceiling volumes.',
      highlight: true,
    },
    {
      tier: 'LEVELS 01 TO 05',
      title: '5 tiers of open stilt parking.',
      desc: 'Naturally ventilated parking tiers above ground, eliminating deep sub-surface rock excavation and groundwater disturbance.',
      highlight: false,
    },
    {
      tier: 'GROUND LEVEL',
      title: 'Living earth and landscape.',
      desc: 'Thematic evergreen tree canopies, organic butterfly corridors, shaded pedestrian walkways, and contemplative water courts.',
      highlight: false,
    },
  ];

  return (
    <section
      id="experience"
      className="relative w-full py-32 sm:py-44 bg-white text-[#141414] overflow-hidden border-t border-[#141414]/6"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Editorial Heading Block */}
        <div className="max-w-3xl space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
            05 — THE EXPERIENCE
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#141414] leading-[1.1]">
            The way we elevate.
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed max-w-xl pt-1">
            Rising higher while keeping the footprint grounded. By placing five levels of open parking stilts between the earth and the first home, every single residence starts at the 6th floor with an unblocked horizon.
          </p>
        </div>

        {/* Vertical Architectural Diagram & Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Building Section Drawing */}
          <div className="lg:col-span-7 bg-[#FAF9F6] p-6 sm:p-10 rounded-xs border border-[#141414]/8 shadow-xs">
            <div className="relative aspect-4/3 sm:aspect-16/10 flex items-center justify-center overflow-hidden">
              <motion.img
                initial={{ opacity: 0.9 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                src="/assets/elevate-diagram.jpg"
                alt="VANAE Architectural Elevation Cross-Section Diagram"
                className="max-h-full max-w-full object-contain filter contrast-105"
              />
            </div>
            <div className="pt-4 text-center text-[10.5px] font-mono uppercase tracking-widest text-[#8A7D6B]">
              ARCHITECTURAL CROSS-SECTION · STRATIFIED ELEVATION
            </div>
          </div>

          {/* Right: Vertical Stratification (GROUND → STILTS → RESIDENCES) */}
          <div className="lg:col-span-5 space-y-8 divide-y divide-[#141414]/8">
            {levels.map((lvl) => (
              <div
                key={lvl.tier}
                className={`pt-6 first:pt-0 space-y-2 ${
                  lvl.highlight ? 'text-[#141414]' : 'text-[#4A544F]'
                }`}
              >
                <div className="text-[10.5px] font-mono uppercase tracking-widest text-[#8A7D6B]">
                  {lvl.tier}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#141414]">
                  {lvl.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
                  {lvl.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
