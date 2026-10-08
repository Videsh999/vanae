'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function AmenitiesSection() {
  const [activeTab, setActiveTab] = useState(0);

  const chapters = [
    {
      category: 'NATURE',
      headline: 'Where the landscape becomes part of everyday life.',
      desc: 'Thematic evergreen tree canopies, organic herbal groves, and native butterfly corridors weaving through quiet pedestrian paths.',
      image: '/assets/amenities/botanical-garden.jpg',
    },
    {
      category: 'SPORT',
      headline: 'Tournament-grade athletics under open skies.',
      desc: 'Championship tennis and squash courts, half basketball court, cricket practice nets, and an expansive resort swimming pool.',
      image: '/assets/amenities/swimming-pool.jpg',
    },
    {
      category: 'WELLNESS',
      headline: 'Acoustic green sanctuaries for morning quietude.',
      desc: 'Sunrise yoga decks, secluded meditation clearings, and reflexology pathways embraced by mature foliage.',
      image: '/assets/nature-calm-clouds.jpg',
    },
    {
      category: 'FAMILY',
      headline: 'Safe meadows and shaded pavilions for all generations.',
      desc: 'Sensory children’s play gardens, senior citizens’ resting gazebos, and pet recreation parks.',
      image: '/assets/amenities/urli-water-feature.jpg',
    },
    {
      category: 'SOCIAL',
      headline: 'Open-air gathering and cultural celebration.',
      desc: 'Terraced amphitheatre with performance stage, sprawling event celebration lawn, and contemplative water courts.',
      image: '/assets/amenities/outdoor-court.jpg',
    },
  ];

  return (
    <section
      id="amenities"
      className="relative w-full py-36 sm:py-48 bg-[#F7F5F0] text-[#141C18] overflow-hidden border-t border-[#141C18]/5"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#141C18]/10">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
              50+ OUTDOOR EXPERIENCES
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#141C18]">
              The living landscape.
            </h2>
          </div>

          {/* Understated Chapter Switcher */}
          <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
            {chapters.map((ch, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={ch.category}
                  onClick={() => setActiveTab(idx)}
                  className="group flex flex-col items-start gap-0.5 focus:outline-hidden"
                >
                  <span
                    className={`text-xs font-mono uppercase tracking-widest transition-colors ${
                      isSelected ? 'text-[#141C18] font-medium' : 'text-[#141C18]/40 group-hover:text-[#141C18]/70'
                    }`}
                  >
                    {ch.category}
                  </span>
                  <span
                    className={`h-px transition-all duration-300 ${
                      isSelected ? 'w-full bg-[#141C18]' : 'w-0 group-hover:w-3 bg-black/20'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Chapter Stage (ONE Large Image + ONE Short Heading + ONE Sentence) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={chapters[activeTab].category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            {/* ONE Large Image */}
            <div className="relative aspect-16/9 sm:aspect-21/10 min-h-[420px] overflow-hidden rounded-xs border border-[#141C18]/8">
              <img
                src={chapters[activeTab].image}
                alt={chapters[activeTab].headline}
                className="w-full h-full object-cover object-center filter contrast-100"
              />
            </div>

            {/* ONE Short Heading + ONE Sentence */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <h3 className="font-serif text-3xl sm:text-4xl text-[#141C18] font-light leading-snug">
                  {chapters[activeTab].headline}
                </h3>
              </div>
              <div className="lg:col-span-5">
                <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
                  {chapters[activeTab].desc}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
