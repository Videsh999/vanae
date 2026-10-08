'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export function ArchitectureSection() {
  const [activePrinciple, setActivePrinciple] = useState<number>(0);

  const principles = [
    {
      number: '01',
      title: 'Biophilic Facade Ribs',
      desc: 'Sculpted architectural fins engineered to provide passive solar shading while framing cascading green terraces on every level.',
    },
    {
      number: '02',
      title: 'Aerodynamic Separation',
      desc: 'Six towers positioned with calculated distance to maximize natural Deccan cross-breezes and offer uninterrupted 270° skyward horizons.',
    },
    {
      number: '03',
      title: 'Zero Common Walls',
      desc: 'Every home is sculpted as an independent corner residence, eliminating structural vibration and guaranteeing absolute acoustic privacy.',
    },
  ];

  const tiers = [
    {
      range: 'LEVELS 06 TO 36',
      title: 'Sky Residences Begin From Floor 6',
      desc: 'Lifted entirely above ground noise into unobstructed 270° horizons, natural cross-ventilation, and 11-foot clear volumes.',
      tag: 'RESIDENTIAL LIVING',
    },
    {
      range: 'LEVELS 01 TO 05',
      title: '5 Tiers of Open Stilt Parking',
      desc: 'Naturally ventilated above-ground parking tiers, eliminating deep underground excavation and preserving natural hydrology.',
      tag: 'STILT PARKING',
    },
    {
      range: 'GROUND LEVEL',
      title: 'Living Earth & Botanical Forest',
      desc: 'Continuous pedestrian realm, thematic tree canopies, contemplative water courts, and native butterfly corridors.',
      tag: 'BIOPHILIC LANDSCAPE',
    },
  ];

  return (
    <section
      id="architecture"
      className="relative w-full py-16 sm:py-20 bg-[#FAF9F6] text-[#141414] overflow-hidden border-t border-[#141414]/8 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end pb-4 border-b border-[#141414]/8">
          <div className="lg:col-span-8 space-y-2.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C7A65] font-medium">
              02 — ARCHITECTURAL ELEVATION & STRATIFICATION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#141414] leading-[1.14]">
              Sculpted for wind. <br />
              <span className="italic text-[#8C7A65]">Grounded in craft.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-1">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              Rising thirty-six floors, the towers balance monolithic engineering with five tiers of open stilt parking. All residences begin on Floor 6, elevated into clear skies.
            </p>
          </div>
        </div>

        {/* Dual Architectural Stage: Facade Elevation + Cross-Section Stratification */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: High-Impact Vertical Facade Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative aspect-4/5 sm:aspect-3/4 lg:aspect-auto min-h-[460px] lg:min-h-[580px] overflow-hidden rounded-xs border border-[#141414]/10 bg-white shadow-xs flex flex-col justify-end"
          >
            <img
              src="/assets/facade-vertical.jpg"
              alt="VANAE Vertical Architectural Facade and Monolithic Ribs"
              className="absolute inset-0 w-full h-full object-cover object-center filter contrast-102 hover:scale-101 transition-transform duration-700 ease-out"
            />
            <div className="relative z-10 m-5 sm:m-6 px-4 py-2 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/8 text-[10px] font-mono uppercase tracking-[0.22em] text-[#141414] self-start">
              FACADE ELEVATION · MONOLITHIC SHEAR WALL
            </div>
          </motion.div>

          {/* Right: Elevation Stratification Cross-Section */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-xs border border-[#141414]/10 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-1.5 pb-3 border-b border-[#141414]/8">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65]">
                CROSS-SECTION LOGIC · LEVELS 00 – 36
              </span>
              <h3 className="font-serif text-2xl font-light text-[#141414]">
                The Way We Elevate
              </h3>
            </div>

            {/* Diagram Drawing */}
            <div className="relative aspect-16/10 flex items-center justify-center overflow-hidden bg-[#FAF9F6] p-4 rounded-xs border border-[#141414]/6">
              <img
                src="/assets/elevate-diagram.jpg"
                alt="VANAE Architectural Elevation Cross-Section Diagram"
                className="max-h-full max-w-full object-contain filter contrast-105"
              />
            </div>

            {/* Three Stratified Tiers */}
            <div className="space-y-4 divide-y divide-[#141414]/8 pt-1">
              {tiers.map((t) => (
                <div key={t.range} className="pt-3 first:pt-0 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-[9.5px] font-mono uppercase tracking-widest text-[#8C7A65]">
                      {t.range}
                    </span>
                    <span className="text-[9px] font-mono uppercase px-2 py-0.5 bg-[#FAF9F6] border border-[#141414]/6 rounded-xs text-[#141414]">
                      {t.tag}
                    </span>
                  </div>
                  <h4 className="font-serif text-base sm:text-lg font-normal text-[#141414]">
                    {t.title}
                  </h4>
                  <p className="font-sans text-xs text-[#4A544F] font-light leading-relaxed">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3-Column Engineering Principles Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-[#141414]/8">
          {principles.map((p, idx) => {
            const isActive = activePrinciple === idx;
            return (
              <div
                key={p.number}
                onClick={() => setActivePrinciple(idx)}
                onMouseEnter={() => setActivePrinciple(idx)}
                className={`p-6 rounded-xs transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-white border-[#141414]/20 shadow-xs'
                    : 'bg-white/60 border-[#141414]/8 hover:border-[#141414]/15'
                }`}
              >
                <div className="flex items-center gap-3 pb-2">
                  <span className="text-xs font-mono tracking-widest text-[#8C7A65] font-semibold">
                    {p.number}
                  </span>
                  <h4 className="font-serif text-lg font-light text-[#141414]">
                    {p.title}
                  </h4>
                </div>
                <p className="font-sans text-xs text-[#4A544F] font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
