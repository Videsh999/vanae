'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

export function HeroSection({ onExplore }: { onExplore: () => void }) {
  return (
    <section
      id="overview"
      className="relative w-full h-screen min-h-[700px] flex flex-col justify-between overflow-hidden bg-[#061811] text-[#FAF8F5]"
    >
      {/* Fullscreen Architectural Image (80-90% visual dominance) */}
      <motion.div
        initial={{ scale: 1.05, opacity: 0.85 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/assets/hero-cloud-towers.jpg"
          alt="VANAE — Six Towers Rising in Clouds and Light"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-100"
        />

        {/* Localized contrast gradients ONLY where text needs legibility */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#061811]/90 via-[#061811]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 bg-gradient-to-r from-black/40 via-black/10 to-transparent pointer-events-none" />
      </motion.div>

      {/* Top spacer */}
      <div className="pt-28" />

      {/* Cinematic Editorial Text Block */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-12 flex-1 flex flex-col justify-end pb-16 sm:pb-24">
        <div className="max-w-2xl space-y-6">
          {/* Location Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10px] sm:text-[11px] uppercase tracking-[0.35em] text-[#C5A880] font-sans font-light"
          >
            KOLLUR · ORR EXIT 2 · HYDERABAD
          </motion.div>

          {/* Headline & Philosophy */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-6xl sm:text-7xl lg:text-8xl tracking-[0.16em] uppercase font-light text-[#FAF8F5] leading-none"
            >
              VANAE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#FAF8F5]/90 font-light tracking-wide italic"
            >
              The Art of Rooted Living
            </motion.p>
          </div>

          {/* Single Subtle Action */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="pt-2"
          >
            <button
              onClick={onExplore}
              className="btn-editorial text-[#FAF8F5] hover:text-[#C5A880] focus:outline-hidden"
            >
              <span>Explore Vanae</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        </div>
      </div>

      {/* Understated Scroll Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
        className="relative z-10 w-full pb-8 flex justify-center"
      >
        <button
          onClick={onExplore}
          className="flex flex-col items-center gap-1.5 text-[9px] uppercase tracking-[0.3em] text-[#FAF8F5]/50 hover:text-white transition-colors focus:outline-hidden"
          aria-label="Scroll to discover"
        >
          <span>Scroll</span>
          <ArrowDown className="w-3 h-3 text-[#C5A880]/70 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
