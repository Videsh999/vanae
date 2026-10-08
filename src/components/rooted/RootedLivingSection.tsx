'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function RootedLivingSection() {
  return (
    <section className="relative w-full py-32 sm:py-44 bg-[#F7F5F0] text-[#141C18] overflow-hidden border-t border-[#141C18]/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Editorial Heading Block */}
        <div className="max-w-3xl space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
            BIOPHILIC HARMONY
          </div>

          <h2 className="font-serif text-5xl sm:text-7xl font-light text-[#141C18] leading-tight">
            ROOTED IN NATURE.
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#4A544F] font-light leading-relaxed max-w-xl pt-1">
            Vertical garden terraces weave through the towers, creating a living ecosystem that ascends with you at every floor.
          </p>
        </div>

        {/* Large Editorial Photography Spread */}
        <div className="relative aspect-16/9 sm:aspect-21/10 min-h-[420px] overflow-hidden rounded-xs border border-[#141C18]/8">
          <motion.img
            initial={{ scale: 1.04 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
            src="/assets/nature-leaf-clouds.jpg"
            alt="Vanae Nature and Skies"
            className="w-full h-full object-cover object-center filter contrast-100"
          />
        </div>
      </div>
    </section>
  );
}
