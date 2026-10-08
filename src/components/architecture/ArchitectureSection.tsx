'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function ArchitectureSection() {
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

  return (
    <section
      id="architecture"
      className="relative w-full py-28 sm:py-36 bg-[#FAF9F6] text-[#141414] overflow-hidden border-t border-[#141414]/8"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-4 border-b border-[#141414]/8">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C7A65] font-medium">
              03 — ARCHITECTURAL FORM & DISCIPLINE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#141414] leading-[1.12]">
              Sculpted for wind. <br />
              <span className="italic text-[#8C7A65]">Grounded in craft.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-1">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              Rising thirty-six floors, the towers balance monolithic engineering with delicate organic fins that breathe with the sun and seasons.
            </p>
          </div>
        </div>

        {/* Asymmetrical Architectural Spread: Portrait Image + Structural Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: High-Impact Vertical Facade Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 relative aspect-4/5 sm:aspect-3/4 max-h-[720px] overflow-hidden rounded-xs border border-[#141414]/10 bg-white shadow-xs"
          >
            <img
              src="/assets/facade-vertical.jpg"
              alt="VANAE Vertical Architectural Facade and Monolithic Ribs"
              className="w-full h-full object-cover object-center filter contrast-102 hover:scale-102 transition-transform duration-1000 ease-out"
            />

            <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 px-4 py-2 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/8 text-[10px] font-mono uppercase tracking-[0.22em] text-[#141414]">
              FACADE ELEVATION · MONOLITHIC SHEAR WALL
            </div>
          </motion.div>

          {/* Right: Structural Principles & Rationale */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.26em] text-[#8C7A65]">
                ENGINEERING RATIONALE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#141414]">
                The geometry of quiet strength.
              </h3>
            </div>

            <div className="space-y-8 divide-y divide-[#141414]/8">
              {principles.map((p) => (
                <div key={p.number} className="pt-6 first:pt-0 space-y-2">
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono text-[#8C7A65] tracking-widest">
                      {p.number}
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-light text-[#141414]">
                      {p.title}
                    </h4>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed pl-8">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Architectural Rationale Callout */}
            <div className="p-6 rounded-xs bg-white border border-[#141414]/8 space-y-2">
              <span className="text-[9.5px] font-mono uppercase tracking-widest text-[#8C7A65]">
                STRUCTURAL INTEGRITY
              </span>
              <p className="font-serif italic text-base sm:text-lg text-[#141414] font-light">
                “Architecture is not merely what is built, but what is held open to the sky and breeze.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
