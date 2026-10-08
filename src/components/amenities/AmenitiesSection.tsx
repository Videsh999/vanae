'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AmenitiesSection() {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const categories = [
    {
      name: 'WELLNESS & SPA',
      headline: 'Acoustic calm and restorative therapies.',
      amenities: [
        'Holistic Ayurvedic & Hydrotherapy Spa',
        'Temperature-Controlled Sauna & Steam Suites',
        'Sunrise Sky Yoga Pavilion',
        'Zen Meditation Clearings',
        'Acupressure & Reflexology Trail',
        'Oxygenated Therapy Lounges',
      ],
    },
    {
      name: 'ATHLETICS & SPORT',
      headline: 'Tournament-grade courts and high-performance training.',
      amenities: [
        'Olympic-Length Resort Swimming Pool',
        'Indoor Hardwood Squash Courts',
        'Twin Badminton Championship Courts',
        'Half Basketball Court under open sky',
        'Dedicated Cricket Practice Nets with Bowling Machine',
        'Fully-Equipped Technogym Strength & Cardio Arena',
      ],
    },
    {
      name: 'SOCIETY & LEISURE',
      headline: 'Grand entertaining and cultural gathering.',
      amenities: [
        'Double-Height Grand Banquet Ballroom',
        'Private 40-Seat Tiered Acoustic Cinema',
        'Billiards & Snooker Club Room',
        'Executive Co-Working Hub & Private Boardrooms',
        'Alfresco Terrace Barbecue Pavilion',
        'Library & Literature Quiet Lounge',
      ],
    },
    {
      name: 'FAMILY & YOUTH',
      headline: 'Protected exploration for every generation.',
      amenities: [
        'Sensory Soft-Play Toddler Creche',
        'Shaded Senior Citizens Chess & Conversation Gazebo',
        'Safe Outdoor Children’s Adventure Play Park',
        'Enclosed Dedicated Pet Park & Agility Course',
        'Interactive Water Splash Zone',
        'Open-Air Community Amphitheatre',
      ],
    },
  ];

  return (
    <section
      id="amenities"
      className="relative w-full py-28 sm:py-36 bg-[#FAF9F6] text-[#141414] overflow-hidden border-t border-[#141414]/8"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-4 border-b border-[#141414]/8">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C7A65] font-medium">
              07 — CLUBHOUSE & SOCIETY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#141414] leading-[1.12]">
              1,00,000 Sft. <br />
              <span className="italic text-[#8C7A65]">The architectural clubhouse.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-1">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              A private realm of recreation, wellness, and society. Designed as a sculptural glass and stone pavilion nestled within mature foliage.
            </p>
          </div>
        </div>

        {/* Visual Spread: Hero Clubhouse Render + Dual Architectural Vignettes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Clubhouse Image (Span 7) */}
          <div className="lg:col-span-7 relative aspect-16/10 overflow-hidden rounded-xs border border-[#141414]/10 bg-white shadow-xs group">
            <img
              src="/assets/clubhouse-pure.jpg"
              alt="VANAE 1,00,000 Sft Architectural Clubhouse Pavilion"
              className="w-full h-full object-cover object-center filter contrast-102 group-hover:scale-101 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-6 left-6 px-3.5 py-1.5 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/8 text-[10px] font-mono uppercase tracking-[0.22em] text-[#141414]">
              THE CLUBHOUSE REALM · 1,00,000 SFT
            </div>
          </div>

          {/* Dual Supporting Vignettes (Span 5) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <div className="relative aspect-16/9 sm:aspect-21/10 overflow-hidden rounded-xs border border-[#141414]/10 bg-white shadow-xs group">
              <img
                src="/assets/amenities/swimming-pool.jpg"
                alt="Olympic-Length Resort Lap Pool"
                className="w-full h-full object-cover object-center filter contrast-102 group-hover:scale-101 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/8 text-[9px] font-mono uppercase tracking-widest text-[#141414]">
                RESORT LAP POOL
              </div>
            </div>

            <div className="relative aspect-16/9 sm:aspect-21/10 overflow-hidden rounded-xs border border-[#141414]/10 bg-white shadow-xs group">
              <img
                src="/assets/amenities/outdoor-court.jpg"
                alt="Championship Sports Courts"
                className="w-full h-full object-cover object-center filter contrast-102 group-hover:scale-101 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/8 text-[9px] font-mono uppercase tracking-widest text-[#141414]">
                TOURNAMENT ATHLETICS
              </div>
            </div>
          </div>
        </div>

        {/* Categorized 50+ Amenities Ledger */}
        <div className="space-y-8 pt-8 border-t border-[#141414]/8">
          {/* Category Tabs */}
          <div className="flex items-center gap-6 sm:gap-10 border-b border-[#141414]/8 pb-3 overflow-x-auto no-scrollbar">
            {categories.map((cat, idx) => (
              <button
                key={cat.name}
                onClick={() => setActiveCategory(idx)}
                className="group flex flex-col items-start gap-1 pb-1 focus:outline-hidden whitespace-nowrap cursor-pointer"
              >
                <span
                  className={`text-xs font-mono uppercase tracking-widest transition-colors ${
                    activeCategory === idx
                      ? 'text-[#141414] font-medium'
                      : 'text-[#141414]/40 group-hover:text-[#141414]/70'
                  }`}
                >
                  {cat.name}
                </span>
                <span
                  className={`h-0.5 transition-all duration-300 ${
                    activeCategory === idx ? 'w-full bg-[#141414]' : 'w-0 group-hover:w-3 bg-black/20'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={categories[activeCategory].name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <p className="font-serif italic text-lg sm:text-xl text-[#141414] font-light">
                {categories[activeCategory].headline}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-2">
                {categories[activeCategory].amenities.map((item, i) => (
                  <div
                    key={item}
                    className="p-4 rounded-xs bg-white border border-[#141414]/8 flex items-start gap-3 shadow-2xs"
                  >
                    <span className="text-[10px] font-mono text-[#8C7A65] pt-0.5">
                      0{i + 1}
                    </span>
                    <span className="font-sans text-xs text-[#141414] font-normal leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
