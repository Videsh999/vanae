'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function NatureSection() {
  const moments = [
    {
      time: '01 / MORNING',
      title: 'Sunrise upon elevated timber decks',
      image: '/assets/nature-calm-clouds.jpg',
    },
    {
      time: '02 / AFTERNOON',
      title: 'Shaded botanical groves & reading pavilions',
      image: '/assets/amenities/botanical-garden.jpg',
    },
    {
      time: '03 / RECREATION',
      title: 'Swimming amidst open horizons',
      image: '/assets/amenities/swimming-pool.jpg',
    },
    {
      time: '04 / TWILIGHT',
      title: 'Warm illuminated terraces at dusk',
      image: '/assets/architecture-night.jpg',
    },
  ];

  return (
    <section className="relative w-full py-36 sm:py-48 bg-[#FAF8F5] text-[#141C18] overflow-hidden border-t border-[#141C18]/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
            DAILY CADENCE
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#141C18]">
            How life feels.
          </h2>
        </div>

        {/* Cinematic Photographic Moments (2x2 Editorial Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {moments.map((m) => (
            <div key={m.time} className="space-y-3">
              <div className="relative aspect-16/10 overflow-hidden rounded-xs border border-[#141C18]/8">
                <img
                  src={m.image}
                  alt={m.title}
                  className="w-full h-full object-cover object-center filter contrast-100 hover:scale-102 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="flex items-baseline justify-between pt-1">
                <div className="font-serif text-lg text-[#141C18]">
                  {m.title}
                </div>
                <div className="text-[10px] font-mono text-[#8A7D6B] tracking-widest uppercase">
                  {m.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
