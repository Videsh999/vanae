'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ResidencesSectionProps {
  onSelectConfig: (config: '3-bhk' | '4-bhk') => void;
}

export function ResidencesSection({ onSelectConfig }: ResidencesSectionProps) {
  return (
    <section
      id="residences"
      className="relative w-full py-36 sm:py-48 bg-[#FAF8F5] text-[#141C18] overflow-hidden border-t border-[#141C18]/5"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Editorial Heading Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
              THE RESIDENCES
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl font-light text-[#141C18] leading-tight">
              Space to live <br />
              <span className="italic text-[#8A7D6B]">beautifully.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-2">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              Thoughtfully sculpted homes where 11-foot ceiling volumes and private sky terraces dissolve the boundary between indoors and horizon.
            </p>
          </div>
        </div>

        {/* Large Interior/Elevation Image */}
        <div className="relative aspect-16/9 sm:aspect-21/10 min-h-[420px] overflow-hidden rounded-xs border border-[#141C18]/8">
          <img
            src="/assets/living-elevation.jpg"
            alt="Vanae Living Terraces and Residences"
            className="w-full h-full object-cover object-center filter contrast-100"
          />
        </div>

        {/* 3 BHK / 4 BHK Large Typography Selector (NO CARDS) */}
        <div className="pt-8 border-t border-[#141C18]/10 grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
          {/* 3 BHK */}
          <button
            onClick={() => onSelectConfig('3-bhk')}
            className="group text-left space-y-3 focus:outline-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-5xl sm:text-7xl font-light text-[#141C18] group-hover:text-[#8A7D6B] transition-colors">
                3 BHK
              </span>
              <ArrowRight className="w-5 h-5 text-[#8A7D6B] transition-transform duration-300 group-hover:translate-x-2" />
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#8A7D6B]">
              1765 · 2165 · 2315 · 2555 SFT
            </div>
            <p className="font-sans text-xs text-[#4A544F] font-light leading-relaxed">
              Expansive drawing and living spaces with private sit-out balconies and morning east or evening west orientations.
            </p>
          </button>

          {/* 4 BHK */}
          <button
            onClick={() => onSelectConfig('4-bhk')}
            className="group text-left space-y-3 focus:outline-hidden"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-5xl sm:text-7xl font-light text-[#141C18] group-hover:text-[#8A7D6B] transition-colors">
                4 BHK
              </span>
              <ArrowRight className="w-5 h-5 text-[#8A7D6B] transition-transform duration-300 group-hover:translate-x-2" />
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#8A7D6B]">
              4400 SFT · SIGNATURE GRAND RESIDENCES
            </div>
            <p className="font-sans text-xs text-[#4A544F] font-light leading-relaxed">
              Palatial layouts featuring formal drawing, family lounge, dry and wet kitchens, multipurpose salon, and private maid suite.
            </p>
          </button>
        </div>
      </div>
    </section>
  );
}
