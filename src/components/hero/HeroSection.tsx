'use client';

import React from 'react';

interface HeroSectionProps {
  onExplore: () => void;
}

export function HeroSection({ onExplore }: HeroSectionProps) {
  return (
    <section
      id="overview"
      className="relative w-full h-screen min-h-[640px] sm:min-h-[700px] flex flex-col justify-between overflow-hidden bg-[#FAF9F6] text-[#141414]"
    >
      {/* 
        CINEMATIC ARCHITECTURAL CAMERA VIEWPORT:
        - Bright daytime warm morning sunlight hitting towers
        - Cleaned photographic render (zero brochure text, zero dark sky)
        - Very slow cinematic camera push (1.00 → 1.048) with subtle drift
        - Finish naturally with ease-out curve
      */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#FAF9F6]">
        <div className="relative w-full h-full hero-cinematic-camera">
          <img
            src="/assets/hero-daytime-pure.jpg"
            alt="VANAE — Architectural Landmark in Kollur, Hyderabad"
            className="absolute inset-0 w-full h-full object-cover object-[25%_center] sm:object-[58%_center] lg:object-[68%_center] filter contrast-[1.02]"
            loading="eager"
            decoding="sync"
          />
        </div>

        {/* 
          NATURAL DAYLIGHT SCRIM:
          - Ultra-soft, delicate daylight veil on left so typography floats effortlessly over sky
          - ZERO dark overlays, ZERO black gradients, ZERO artificial shading
        */}
        <div className="absolute inset-y-0 left-0 w-full sm:w-1/2 lg:w-2/5 bg-gradient-to-r from-white/40 via-white/10 to-transparent pointer-events-none" />
      </div>

      {/* 
        COMPOSITION & RESTRAINED EDITORIAL TYPOGRAPHY:
        Order:
        1. VANAE
        2. The Art of Rooted Living
        3. KOLLUR · ORR EXIT 2 · HYDERABAD

        Positioned strictly in the golden-ratio morning sky on the left.
        Building remains the primary visual, completely unobstructed.
      */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between pt-24 sm:pt-32 pb-8 px-6 sm:px-10 md:px-12 lg:px-16 xl:px-24">
        {/* Spacer to push title block toward optical vertical center */}
        <div className="flex-1" />

        {/* Restrained Editorial Typography Block */}
        <div className="max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-xl space-y-3 sm:space-y-4 my-auto">
          {/* Primary Architectural Brand Mark */}
          <div className="overflow-hidden">
            <h1 className="hero-reveal-title font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[0.2em] sm:tracking-[0.24em] text-[#141414] uppercase leading-none">
              VANAE
            </h1>
          </div>

          {/* Philosophical Subtitle */}
          <div className="overflow-hidden">
            <p className="hero-reveal-sub font-serif italic text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#2C2824] font-light tracking-wide leading-snug">
              The Art of Rooted Living
            </p>
          </div>

          {/* Location & Descriptor */}
          <div className="hero-reveal-location pt-1">
            <span className="sm:hidden text-[8.5px] font-mono uppercase tracking-[0.2em] text-[#8C7A65] font-medium leading-relaxed block">
              KOLLUR · ORR EXIT 2 <br />HYDERABAD
            </span>
            <span className="hidden sm:block text-[10px] md:text-[10.5px] lg:text-[11.5px] font-mono uppercase tracking-[0.32em] text-[#8C7A65] font-medium">
              KOLLUR · ORR EXIT 2 · HYDERABAD
            </span>
          </div>
        </div>

        {/* Spacer below typography */}
        <div className="flex-1" />

        {/* Understated Editorial Capsule Scroll / Transition Cue */}
        <div className="hero-reveal-explore w-full flex justify-center pb-2">
          <button
            onClick={onExplore}
            className="group flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/85 hover:bg-white backdrop-blur-md border border-[#141414]/10 shadow-xs text-[#141414] transition-all duration-300 hover:shadow-md cursor-pointer"
            aria-label="Explore Vanae — Scroll to Architecture & Philosophy"
          >
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.26em] text-[#141414] font-medium">
              EXPLORE
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#8C7A65] group-hover:scale-125 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
