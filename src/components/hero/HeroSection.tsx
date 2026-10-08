'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onExplore: () => void;
}

export function HeroSection({ onExplore }: HeroSectionProps) {
  return (
    <section
      id="overview"
      className="relative w-full h-screen min-h-[720px] flex flex-col justify-between overflow-hidden bg-white text-[#141414]"
    >
      {/* Daytime Architectural Image with Subtle Cinematic Camera Push (1.00 → 1.05) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#FAF9F6]">
        <motion.div
          initial={{ scale: 1.0, y: 0 }}
          animate={{ scale: 1.05, y: '-1.2%' }}
          transition={{
            duration: 9,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="w-full h-full"
        >
          <img
            src="/assets/hero-cloud-towers.jpg"
            alt="VANAE — Six Architectural Towers Rising in Daylight and Clouds"
            className="w-full h-full object-cover object-center filter brightness-100 contrast-[1.02]"
          />
        </motion.div>

        {/* Very soft, ultra-subtle light vignette ONLY for text contrast — NO dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/20 to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 left-0 w-full sm:w-2/3 bg-gradient-to-r from-white/50 via-white/10 to-transparent pointer-events-none" />
      </div>

      {/* Top Spacer for Fixed Header */}
      <div className="pt-28 sm:pt-32" />

      {/* Hero Typography — Quiet, Architectural, Restrained */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-12 flex-1 flex flex-col justify-end pb-14 sm:pb-20">
        <div className="max-w-2xl space-y-5">
          {/* Location Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[10.5px] sm:text-[11.5px] uppercase tracking-[0.32em] font-mono text-[#8A7D6B]"
          >
            KOLLUR · ORR EXIT 2 · HYDERABAD
          </motion.div>

          {/* Headline & Philosophy */}
          <div className="space-y-2">
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-6xl sm:text-7xl lg:text-8xl tracking-[0.16em] uppercase font-light text-[#141414] leading-none"
            >
              VANAE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#383838] font-light tracking-wide italic"
            >
              The Art of Rooted Living
            </motion.p>
          </div>

          {/* Understated Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-xs sm:text-sm text-[#4A544F] font-light max-w-lg leading-relaxed pt-1"
          >
            A high-rise residential sanctuary of 36 floors across 6 towers, where modern engineering rises from deep botanical roots.
          </motion.p>
        </div>
      </div>

      {/* Understated Explore Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 w-full pb-6 flex justify-center"
      >
        <button
          onClick={onExplore}
          className="group flex flex-col items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.28em] text-[#141414]/60 hover:text-[#141414] transition-colors focus:outline-hidden"
          aria-label="Explore Vanae"
        >
          <span>Explore</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#8A7D6B] group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </motion.div>
    </section>
  );
}
