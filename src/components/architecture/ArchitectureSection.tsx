'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ArchitectureSection() {
  const [activeTab, setActiveTab] = useState(0);

  const perspectives = [
    {
      key: '01 / FORM',
      title: 'Monolithic vertical discipline and facade ribs',
      image: '/assets/facade-vertical.jpg',
    },
    {
      key: '02 / LIGHT',
      title: 'Sunlit sky terraces rising through morning clouds',
      image: '/assets/hero-cloud-towers.jpg',
    },
    {
      key: '03 / LANDSCAPE',
      title: 'Continuous living canopy and botanical ground plane',
      image: '/assets/campus-aerial.jpg',
    },
  ];

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
      className="relative w-full py-32 sm:py-44 bg-white text-[#141414] overflow-hidden border-t border-[#141414]/6"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Editorial Heading Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
              03 — ARCHITECTURE
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#141414] leading-[1.1]">
              Designed to rise. <br />
              <span className="italic text-[#8A7D6B]">Designed to belong.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-2">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              Monolithic engineering shaped with organic terrace fins, creating a structure that feels anchored to earth and light against sky. Six soaring towers sculpted to maximize breezes and vistas across Kollur.
            </p>
          </div>
        </div>

        {/* Minimal Perspective Switcher Tabs */}
        <div className="flex items-center gap-8 sm:gap-12 pb-1 border-b border-[#141414]/8">
          {perspectives.map((p, idx) => (
            <button
              key={p.key}
              onClick={() => setActiveTab(idx)}
              className="group flex flex-col items-start gap-1 pb-3 focus:outline-hidden"
            >
              <span
                className={`text-xs font-mono tracking-widest transition-colors ${
                  activeTab === idx ? 'text-[#141414] font-medium' : 'text-[#141414]/40 group-hover:text-[#141414]/70'
                }`}
              >
                {p.key}
              </span>
              <span
                className={`h-0.5 transition-all duration-300 ${
                  activeTab === idx ? 'w-full bg-[#141414]' : 'w-0 group-hover:w-3 bg-black/20'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Large High-Quality Architectural Photography Stage */}
        <div className="relative aspect-16/9 sm:aspect-21/10 min-h-[440px] overflow-hidden rounded-xs border border-[#141414]/8 bg-[#F6F5F2]">
          <AnimatePresence mode="wait">
            <motion.div
              key={perspectives[activeTab].key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <img
                src={perspectives[activeTab].image}
                alt={perspectives[activeTab].title}
                className="w-full h-full object-cover object-center filter contrast-100"
              />

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 px-4 py-2 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/6 text-[10.5px] font-mono uppercase tracking-widest text-[#141414]">
                {perspectives[activeTab].title}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Project Facts in Whitespace (NOT CARDS) */}
        <div className="pt-10 border-t border-[#141414]/8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-12">
            {stats.map((s, idx) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="space-y-1"
              >
                <div className="font-serif text-5xl sm:text-6xl text-[#141414] font-light">
                  {s.value}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8A7D6B]">
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
