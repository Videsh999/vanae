'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VANAE_DATA } from '@/data/vanae-data';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function AmenitiesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [showAllList, setShowAllList] = useState(false);

  const chapters = [
    {
      category: 'NATURE',
      headline: 'Where the landscape becomes part of everyday life.',
      desc: 'Thematic evergreen tree canopies, organic herbal groves, and native butterfly corridors weaving through quiet pedestrian paths.',
      image: '/assets/amenities/botanical-garden.jpg',
      highlights: ['Botanical Garden Walk', 'Butterfly Habitat', 'Aroma Gardens', 'Shaded Tree Canopy'],
    },
    {
      category: 'WELLNESS',
      headline: 'Acoustic green sanctuaries for morning quietude.',
      desc: 'Sunrise yoga decks, secluded meditation clearings, and reflexology pathways embraced by mature foliage.',
      image: '/assets/nature-calm-clouds.jpg',
      highlights: ['Sunrise Yoga Lawn', 'Zen Reflection Deck', 'Reflexology Trail', 'Aromatherapy Pavilion'],
    },
    {
      category: 'SPORT',
      headline: 'Tournament-grade athletics under open skies.',
      desc: 'Championship tennis and squash courts, half basketball court, cricket practice nets, and an expansive resort swimming pool.',
      image: '/assets/amenities/swimming-pool.jpg',
      highlights: ['Resort Swimming Pool', 'Tennis Court', 'Squash Courts', 'Cricket Nets'],
    },
    {
      category: 'FAMILY',
      headline: 'Safe meadows and shaded pavilions for all generations.',
      desc: 'Sensory children’s play gardens, senior citizens’ resting gazebos, and pet recreation parks.',
      image: '/assets/amenities/urli-water-feature.jpg',
      highlights: ['Sensory Play Lawns', 'Senior Citizens Pavilion', 'Pet Park', 'Outdoor Board Games'],
    },
    {
      category: 'SOCIAL',
      headline: 'Open-air gathering and cultural celebration.',
      desc: 'Terraced amphitheatre with performance stage, sprawling event celebration lawn, and contemplative water courts.',
      image: '/assets/amenities/outdoor-court.jpg',
      highlights: ['Open-Air Amphitheatre', 'Grand Celebration Lawn', 'Water Courtyards', 'Barbecue Pavilion'],
    },
    {
      category: 'CLUBHOUSE',
      headline: '1,00,000 Sft architectural realm of recreation and society.',
      desc: 'A grand multi-level clubhouse featuring super gym, private tiered acoustic cinema, holistic wellness spa, and double-height banquet ballroom.',
      image: '/assets/clubhouse-spread.jpg',
      highlights: ['1,00,000 Sft Clubhouse', 'Private Acoustic Cinema', 'Wellness Spa', 'Double-Height Banquet Hall'],
    },
  ];

  return (
    <section
      id="amenities"
      className="relative w-full py-32 sm:py-44 bg-white text-[#141414] overflow-hidden border-t border-[#141414]/6"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#141414]/8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
              06 — AMENITIES & CLUBHOUSE
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#141414] leading-[1.1]">
              The living landscape.
            </h2>
          </div>

          {/* Understated Chapter Switcher Tabs */}
          <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
            {chapters.map((ch, idx) => {
              const isSelected = activeTab === idx;
              return (
                <button
                  key={ch.category}
                  onClick={() => setActiveTab(idx)}
                  className="group flex flex-col items-start gap-1 pb-1 focus:outline-hidden"
                >
                  <span
                    className={`text-xs font-mono uppercase tracking-widest transition-colors ${
                      isSelected ? 'text-[#141414] font-medium' : 'text-[#141414]/40 group-hover:text-[#141414]/70'
                    }`}
                  >
                    {ch.category}
                  </span>
                  <span
                    className={`h-0.5 transition-all duration-300 ${
                      isSelected ? 'w-full bg-[#141414]' : 'w-0 group-hover:w-3 bg-black/20'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Chapter Stage (ONE Large Daytime Image + ONE Heading + ONE Sentence) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={chapters[activeTab].category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="space-y-10"
          >
            {/* ONE Large Image */}
            <div className="relative aspect-16/9 sm:aspect-21/10 min-h-[420px] overflow-hidden rounded-xs border border-[#141414]/8 bg-[#F6F5F2]">
              <img
                src={chapters[activeTab].image}
                alt={chapters[activeTab].headline}
                className="w-full h-full object-cover object-center filter contrast-100"
              />

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 px-4 py-2 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/6 text-[10.5px] font-mono uppercase tracking-widest text-[#141414]">
                {chapters[activeTab].category} EXPERIENCE
              </div>
            </div>

            {/* ONE Short Heading + ONE Sentence + Key Highlights */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-3">
                <h3 className="font-serif text-3xl sm:text-4xl text-[#141414] font-light leading-snug">
                  {chapters[activeTab].headline}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed max-w-xl">
                  {chapters[activeTab].desc}
                </p>
              </div>

              <div className="lg:col-span-5 pt-1">
                <div className="text-[10px] font-mono uppercase tracking-widest text-[#8A7D6B] pb-3 border-b border-[#141414]/8">
                  SIGNATURE EXPERIENCES
                </div>
                <div className="grid grid-cols-2 gap-3 pt-3 text-xs font-sans text-[#141414]">
                  {chapters[activeTab].highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8A7D6B]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Minimal Accordion for Full 50+ Amenities Index */}
        <div className="pt-6 border-t border-[#141414]/8">
          <button
            onClick={() => setShowAllList(!showAllList)}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#8A7D6B] hover:text-[#141414] transition-colors focus:outline-hidden"
          >
            <span>{showAllList ? 'Hide Complete 50+ Amenities Index' : 'Inspect Complete 50+ Amenities Index'}</span>
            {showAllList ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          <AnimatePresence>
            {showAllList && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden pt-6"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs font-sans text-[#4A544F] bg-[#FAF9F6] p-6 sm:p-8 rounded-xs border border-[#141414]/6">
                  {VANAE_DATA.amenities.flatMap((cat) => cat.items).map((item) => (
                    <div key={item.name} className="flex items-start gap-2">
                      <span className="text-[#8A7D6B] font-mono text-[10px] mt-0.5">•</span>
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
