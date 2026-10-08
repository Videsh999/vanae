'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function StorySection() {
  return (
    <section
      id="story"
      className="relative w-full py-36 sm:py-48 bg-[#FAF8F5] text-[#141C18] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-20">
        {/* Editorial Text Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <div className="lg:col-span-8 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]"
            >
              THE ART OF ROOTED LIVING
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#141C18] leading-[1.1]"
            >
              A life that rises higher, <br />
              <span className="italic text-[#8A7D6B]">without losing its connection to nature.</span>
            </motion.h2>
          </div>

          <div className="lg:col-span-4 pb-2">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.25 }}
              className="font-sans text-sm sm:text-base text-[#4A544F] font-light leading-relaxed"
            >
              Vanae is an architectural sanctuary where thirty-six floors of vertical elegance remain deeply anchored to the earth below.
            </motion.p>
          </div>
        </div>

        {/* One Beautiful Architectural Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-16/9 sm:aspect-21/9 min-h-[380px] overflow-hidden rounded-xs border border-[#141C18]/8"
        >
          <img
            src="/assets/living-elevation.jpg"
            alt="Vanae Architectural Elevation"
            className="w-full h-full object-cover object-center filter contrast-100"
          />
        </motion.div>
      </div>
    </section>
  );
}
