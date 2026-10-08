'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function LivingTerracesSection() {
  return (
    <section
      id="terraces"
      className="relative w-full py-28 sm:py-36 bg-[#FAF9F6] text-[#141414] overflow-hidden border-t border-[#141414]/8"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-4 border-b border-[#141414]/8">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C7A65] font-medium">
              05 — BIOPHILIC LIVING & TERRACES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#141414] leading-[1.12]">
              The garden that rises <br />
              <span className="italic text-[#8C7A65]">thirty-six floors.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-1">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              Private sky terraces sculpted as seamless extensions of the living room. 11-foot clear ceiling volumes open into cascading flora and infinite open horizons.
            </p>
          </div>
        </div>

        {/* Large Cinema-Scale Photographic Spread */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-16/9 sm:aspect-21/9 min-h-[440px] sm:min-h-[520px] overflow-hidden rounded-xs border border-[#141414]/10 bg-white shadow-xs group"
        >
          <img
            src="/assets/living-terraces-pure.jpg"
            alt="VANAE Biophilic Sky Terraces and Elevated Indoor-Outdoor Living"
            className="w-full h-full object-cover object-center filter contrast-102 group-hover:scale-101 transition-transform duration-1000 ease-out"
          />

          {/* Floating Architectural Badge */}
          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 px-4 py-2 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/8 text-[10px] font-mono uppercase tracking-[0.24em] text-[#141414]">
            BIOPHILIC LIVING TERRACES · 11-FOOT CLEAR VOLUMES
          </div>
        </motion.div>

        {/* Terraced Architecture Specifications Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {[
            { label: 'HORIZON SWEEP', value: '270°', desc: 'Uninterrupted panorama across the Kollur greenery' },
            { label: 'VERTICAL CLEARANCE', value: '11 FT', desc: 'Extended floor-to-ceiling volumes in every residence' },
            { label: 'MICROCLIMATE', value: 'PASSIVE AIR', desc: 'Engineered orientation channeling Deccan breezes' },
            { label: 'BOTANICAL SHADING', value: 'FACADE FINS', desc: 'Sculpted organic ribs sheltering each terrace' },
          ].map((item) => (
            <div key={item.label} className="p-5 rounded-xs bg-white border border-[#141414]/8 space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#8C7A65]">
                {item.label}
              </span>
              <div className="font-serif text-xl sm:text-2xl text-[#141414] font-light">
                {item.value}
              </div>
              <p className="text-[11px] font-sans text-[#4A544F] font-light leading-snug">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
