'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function ArchitectureSection() {
  const stats = [
    { value: '36', label: 'FLOORS' },
    { value: '6', label: 'TOWERS' },
    { value: '3 & 4', label: 'BHK' },
    { value: '50+', label: 'AMENITIES' },
    { value: '1200+', label: 'FAMILIES' },
  ];

  return (
    <section
      id="architecture"
      className="relative w-full bg-[#061811] text-[#FAF8F5] overflow-hidden py-36 sm:py-48"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Intro Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-4">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5A880]">
              THE SKYLINE
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl font-light text-[#FAF8F5] leading-tight">
              A new presence rises <br />
              <span className="italic text-[#C5A880]">above Kollur.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-2">
            <p className="font-sans text-xs sm:text-sm text-[#FAF8F5]/70 font-light leading-relaxed">
              Spread across six iconic towers, Vanae introduces an elevated residential landmark along the Outer Ring Road corridor.
            </p>
          </div>
        </div>

        {/* Wide Architectural Render */}
        <div className="relative aspect-16/9 sm:aspect-21/9 min-h-[440px] overflow-hidden rounded-xs border border-white/10">
          <motion.img
            initial={{ scale: 1.04 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            src="/assets/architecture-skyline.jpg"
            alt="Vanae Skyline Architecture"
            className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
          />
        </div>

        {/* Project Facts in Whitespace (NOT CARDS) */}
        <div className="pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 sm:gap-12">
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="space-y-1"
              >
                <div className="font-serif text-5xl sm:text-6xl text-[#FAF8F5] font-light">
                  {s.value}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C5A880]">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
