'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function LifestyleSection() {
  const chapters = [
    {
      title: 'Botanical Tree Canopy',
      category: '01 / FLORA & HABITAT',
      desc: 'Evergreen canopies and native herbal groves interwoven with organic butterfly corridors, providing continuous natural shade.',
      image: '/assets/amenities/botanical-garden.jpg',
      aspect: 'aspect-4/3',
    },
    {
      title: 'Contemplative Water Courts',
      category: '02 / ACOUSTIC CALM',
      desc: 'Cascading stone water features and shaded pavilions designed for quiet morning reflection and generational gathering.',
      image: '/assets/amenities/urli-water-feature.jpg',
      aspect: 'aspect-4/3',
    },
    {
      title: 'Ayurvedic Wellness & Spa',
      category: '03 / RESTORATION & CALM',
      desc: 'Holistic therapy suites, temperature-controlled sauna, and quiet wellness lounges designed for deep daily rejuvenation.',
      image: '/assets/clubhouse/wellness-spa.jpg',
      aspect: 'aspect-4/3',
    },
  ];

  return (
    <section
      id="lifestyle"
      className="relative w-full py-28 sm:py-36 bg-white text-[#141414] overflow-hidden border-t border-[#141414]/8"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-4 border-b border-[#141414]/8">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C7A65] font-medium">
              06 — LIFESTYLE & NATURE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#141414] leading-[1.12]">
              Living landscape. <br />
              <span className="italic text-[#8C7A65]">Daily rituals.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-1">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              Eighty percent of VANAE is dedicated to an open natural plane. Shaded walkways, organic flora, and acoustic sanctuaries weave through every step.
            </p>
          </div>
        </div>

        {/* 3-Chapter Editorial Rhythm */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
          {chapters.map((ch, idx) => (
            <motion.div
              key={ch.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="space-y-5 group"
            >
              {/* Image Container */}
              <div className="relative aspect-4/3 overflow-hidden rounded-xs border border-[#141414]/10 bg-[#FAF9F6] shadow-xs">
                <img
                  src={ch.image}
                  alt={ch.title}
                  className="w-full h-full object-cover object-center filter contrast-102 group-hover:scale-102 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text content */}
              <div className="space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#8C7A65]">
                  {ch.category}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-light text-[#141414]">
                  {ch.title}
                </h3>
                <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
                  {ch.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
