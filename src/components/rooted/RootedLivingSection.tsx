'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function RootedLivingSection() {
  return (
    <section
      id="rooted"
      className="relative w-full py-32 sm:py-44 bg-white text-[#141414] overflow-hidden border-t border-[#141414]/6"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Editorial Heading Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]"
            >
              02 — THE ART OF ROOTED LIVING
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#141414] leading-[1.12]"
            >
              Rooted in nature. <br />
              <span className="italic text-[#8A7D6B]">Elevated by architecture.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 pb-2">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed"
            >
              Vanae is an architectural sanctuary where thirty-six floors of vertical elegance remain deeply anchored to the earth below. A continuous rhythm of terraced gardens, natural light, and quiet privacy across 6 soaring towers.
            </motion.p>
          </div>
        </div>

        {/* Large Editorial Architectural & Nature Spread */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-16/9 sm:aspect-21/9 min-h-[420px] overflow-hidden rounded-xs border border-[#141414]/8 bg-[#F8F7F4]"
        >
          <img
            src="/assets/living-elevation.jpg"
            alt="Vanae Terraced Living and Architecture"
            className="w-full h-full object-cover object-center filter contrast-100"
          />

          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 px-4 py-2 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/6 text-[10.5px] font-mono uppercase tracking-widest text-[#141414]">
            BIOPHILIC TERRACES · 11-FOOT VOLUMES
          </div>
        </motion.div>
      </div>
    </section>
  );
}
