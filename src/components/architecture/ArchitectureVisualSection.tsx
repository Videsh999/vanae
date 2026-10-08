'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ArchitectureVisualSection() {
  const [activeTab, setActiveTab] = useState(0);

  const perspectives = [
    {
      key: '01 / FORM',
      title: 'Monolithic vertical discipline',
      image: '/assets/facade-vertical.jpg',
    },
    {
      key: '02 / LIGHT',
      title: 'Vertical light shafts against dusk',
      image: '/assets/architecture-night.jpg',
    },
    {
      key: '03 / LANDSCAPE',
      title: 'Continuous living canopy',
      image: '/assets/campus-aerial.jpg',
    },
  ];

  return (
    <section className="relative w-full py-36 sm:py-48 bg-[#FAF8F5] text-[#141C18] overflow-hidden border-t border-[#141C18]/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Editorial Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
              ARCHITECTURE
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl font-light text-[#141C18] leading-tight">
              Designed to rise. <br />
              <span className="italic text-[#8A7D6B]">Designed to belong.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-2">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              Monolithic engineering shaped with organic terrace fins, creating a structure that feels anchored to earth and light against sky.
            </p>
          </div>
        </div>

        {/* Minimal Editorial Perspective Switcher */}
        <div className="flex items-center gap-8 sm:gap-12 pb-2">
          {perspectives.map((p, idx) => (
            <button
              key={p.key}
              onClick={() => setActiveTab(idx)}
              className="group flex flex-col items-start gap-1 focus:outline-hidden"
            >
              <span
                className={`text-xs font-mono tracking-widest transition-colors ${
                  activeTab === idx ? 'text-[#141C18] font-medium' : 'text-[#141C18]/40 group-hover:text-[#141C18]/70'
                }`}
              >
                {p.key}
              </span>
              <span
                className={`h-px transition-all duration-300 ${
                  activeTab === idx ? 'w-full bg-[#141C18]' : 'w-0 group-hover:w-4 bg-black/20'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Large Photographic Stage */}
        <div className="relative aspect-16/9 sm:aspect-21/10 min-h-[440px] overflow-hidden rounded-xs border border-[#141C18]/8 bg-[#F0EDE8]">
          <AnimatePresence mode="wait">
            <motion.div
              key={perspectives[activeTab].key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <img
                src={perspectives[activeTab].image}
                alt={perspectives[activeTab].title}
                className="w-full h-full object-cover object-center filter contrast-100"
              />

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 px-4 py-2 bg-[#FAF8F5]/90 backdrop-blur-md rounded-xs border border-[#141C18]/5 text-[10px] font-mono uppercase tracking-widest text-[#141C18]">
                {perspectives[activeTab].title}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
