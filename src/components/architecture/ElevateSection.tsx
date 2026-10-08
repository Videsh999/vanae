'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function ElevateSection() {
  const levels = [
    {
      tier: 'LEVELS 06 TO 36',
      title: 'Residences begin from the 6th floor.',
      desc: 'Lifted above the city noise into open skies, natural cross-ventilation, and 11-foot-high ceiling volumes.',
      highlight: true,
    },
    {
      tier: 'LEVELS 01 TO 05',
      title: '5 tiers of open stilt parking.',
      desc: 'Naturally ventilated parking above ground, eliminating deep soil excavation and rock disturbance.',
      highlight: false,
    },
    {
      tier: 'GROUND LEVEL',
      title: 'Living earth and landscape.',
      desc: 'Thematic evergreen plantations, butterfly corridors, and shaded pedestrian lawns.',
      highlight: false,
    },
  ];

  return (
    <section
      id="elevate"
      className="relative w-full py-36 sm:py-48 bg-[#F6F4F0] text-[#141C18] overflow-hidden border-t border-[#141C18]/5"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Editorial Heading */}
        <div className="max-w-3xl space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
            ARCHITECTURAL SECTION
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl font-light text-[#141C18] leading-tight">
            The way we elevate.
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#4A544F] font-light leading-relaxed max-w-xl">
            Rising higher while keeping the impact lower. By placing five levels of open parking stilts between the ground and residences, every home opens onto an unblocked horizon.
          </p>
        </div>

        {/* Vertical Architectural Diagram & Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Building Section Drawing */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-xs border border-[#141C18]/8 shadow-xs">
            <div className="relative aspect-4/3 sm:aspect-16/10 flex items-center justify-center overflow-hidden">
              <img
                src="/assets/elevate-diagram.jpg"
                alt="Vanae Elevation Cross-Section Diagram"
                className="max-h-full max-w-full object-contain filter contrast-105"
              />
            </div>
          </div>

          {/* Right: Vertical Stratification (GROUND → STILTS → RESIDENCES) */}
          <div className="lg:col-span-5 space-y-8 divide-y divide-[#141C18]/10">
            {levels.map((lvl) => (
              <div
                key={lvl.tier}
                className={`pt-6 first:pt-0 space-y-2 ${
                  lvl.highlight ? 'text-[#141C18]' : 'text-[#4A544F]'
                }`}
              >
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#8A7D6B]">
                  {lvl.tier}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#141C18]">
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
