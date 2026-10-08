'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function LifestyleSection() {
  const pillars = [
    {
      title: 'Botanical Forest Canopy',
      category: '01 / FLORA & HABITAT',
      desc: 'Evergreen canopies and native herbal groves interwoven with organic butterfly corridors, providing continuous natural shade.',
      image: '/assets/amenities/botanical-garden.jpg',
    },
    {
      title: 'Contemplative Water Courts',
      category: '02 / ACOUSTIC CALM',
      desc: 'Cascading stone water features and shaded pavilions designed for quiet morning reflection and generational gathering.',
      image: '/assets/amenities/urli-water-feature.jpg',
    },
    {
      title: 'Ayurvedic Wellness & Spa',
      category: '03 / RESTORATION & CALM',
      desc: 'Holistic therapy suites, temperature-controlled sauna, and quiet wellness lounges designed for deep daily rejuvenation.',
      image: '/assets/clubhouse/wellness-spa.jpg',
    },
    {
      title: 'Athletics & Resort Lap Pool',
      category: '04 / MOVEMENT & SPORT',
      desc: 'Olympic-length pool, indoor hardwood squash courts, twin badminton championships, and open half-basketball courts.',
      image: '/assets/amenities/swimming-pool.jpg',
    },
  ];

  const amenityHighlights = [
    { label: 'WELLNESS & SPA', items: 'Hydrotherapy · Sauna & Steam · Sunrise Sky Yoga · Zen Meditation' },
    { label: 'ATHLETICS & SPORT', items: 'Championship Badminton · Squash · Technogym Arena · Cricket Nets' },
    { label: 'SOCIETY & LEISURE', items: 'Double-Height Banquet Hall · 40-Seat Cinema · Co-Working Hub' },
    { label: 'FAMILY & YOUTH', items: 'Toddler Creche · Outdoor Play Park · Enclosed Pet Park & Agility' },
  ];

  return (
    <section
      id="lifestyle"
      className="relative w-full py-16 sm:py-20 bg-[#FAF9F6] text-[#141414] overflow-hidden border-t border-[#141414]/8 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end pb-4 border-b border-[#141414]/8">
          <div className="lg:col-span-8 space-y-2.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C7A65] font-medium">
              04 — BIOPHILIC LIVING & THE 1,00,000 SFT CLUBHOUSE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#141414] leading-[1.14]">
              The garden that rises <br />
              <span className="italic text-[#8C7A65]">thirty-six floors.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-1">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              Private sky terraces sculpted as seamless extensions of the living room, opening into a 1,00,000 Sft sanctuary of wellness, sport, and society.
            </p>
          </div>
        </div>

        {/* Dual Cinematic Stage: Sky Terraces + 1 Lakh Sft Clubhouse */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Biophilic Sky Terraces */}
          <div className="lg:col-span-6 relative aspect-16/10 sm:aspect-16/10 min-h-[340px] sm:min-h-[400px] overflow-hidden rounded-xs border border-[#141414]/10 bg-white shadow-xs group">
            <img
              src="/assets/living-terraces-pure.jpg"
              alt="VANAE Biophilic Sky Terraces"
              className="w-full h-full object-cover object-center filter contrast-102 group-hover:scale-101 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-5 left-5 px-3.5 py-1.5 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/8 text-[10px] font-mono uppercase tracking-[0.22em] text-[#141414]">
              BIOPHILIC SKY TERRACES · 11-FT VOLUMES
            </div>
          </div>

          {/* Right: The Clubhouse Realm */}
          <div className="lg:col-span-6 relative aspect-16/10 sm:aspect-16/10 min-h-[340px] sm:min-h-[400px] overflow-hidden rounded-xs border border-[#141414]/10 bg-white shadow-xs group">
            <img
              src="/assets/clubhouse-pure.jpg"
              alt="VANAE 1,00,000 Sft Clubhouse Pavilion"
              className="w-full h-full object-cover object-center filter contrast-102 group-hover:scale-101 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-5 left-5 px-3.5 py-1.5 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/8 text-[10px] font-mono uppercase tracking-[0.22em] text-[#141414]">
              THE CLUBHOUSE REALM · 1,00,000 SFT
            </div>
          </div>
        </div>

        {/* 4-Pillar Lifestyle Photography Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="space-y-4 group"
            >
              <div className="relative aspect-4/3 overflow-hidden rounded-xs border border-[#141414]/10 bg-white shadow-2xs">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-center filter contrast-102 group-hover:scale-102 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="space-y-1.5">
                <span className="text-[9.5px] font-mono uppercase tracking-[0.22em] text-[#8C7A65]">
                  {p.category}
                </span>
                <h3 className="font-serif text-lg font-normal text-[#141414]">
                  {p.title}
                </h3>
                <p className="font-sans text-xs text-[#4A544F] font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4-Category Amenity Ledger */}
        <div className="pt-6 border-t border-[#141414]/8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenityHighlights.map((a) => (
              <div key={a.label} className="p-5 rounded-xs bg-white border border-[#141414]/8 space-y-2 shadow-2xs">
                <span className="text-[9.5px] font-mono uppercase tracking-widest text-[#8C7A65] block font-medium">
                  {a.label}
                </span>
                <p className="font-sans text-xs text-[#141414] font-light leading-relaxed">
                  {a.items}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
