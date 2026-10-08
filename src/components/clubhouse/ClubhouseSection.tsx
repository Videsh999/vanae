'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function ClubhouseSection() {
  const [activeExp, setActiveExp] = useState(0);

  const experiences = [
    {
      label: 'FITNESS STUDIO',
      title: 'State-of-the-art super gym and aerobics pavilion',
      image: '/assets/clubhouse/fitness-studio.jpg',
    },
    {
      label: 'MINI THEATRE',
      title: 'Private tiered acoustic cinema with club recliners',
      image: '/assets/clubhouse/mini-theatre.jpg',
    },
    {
      label: 'WELLNESS SPA',
      title: 'Holistic restorative therapy chambers and thermal suites',
      image: '/assets/clubhouse/wellness-spa.jpg',
    },
    {
      label: 'BANQUET HALL',
      title: 'Double-height celebratory ballroom and social cafe',
      image: '/assets/clubhouse/banquet-hall.jpg',
    },
  ];

  return (
    <section
      id="clubhouse"
      className="relative w-full py-36 sm:py-48 bg-[#061811] text-[#FAF8F5] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-4">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5A880]">
              THE CLUBHOUSE
            </span>
            <h2 className="font-serif text-5xl sm:text-7xl font-light text-[#FAF8F5] leading-tight">
              A world within <br />
              <span className="italic text-[#C5A880]">Vanae.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-2 space-y-1">
            <div className="font-serif text-4xl sm:text-5xl text-[#FAF8F5] font-light">
              1,00,000
            </div>
            <div className="text-[10px] font-mono uppercase tracking-widest text-[#C5A880]">
              SFT. SOCIAL & RECREATIONAL REALM
            </div>
          </div>
        </div>

        {/* Large Architectural Hero Image */}
        <div className="relative aspect-16/9 sm:aspect-21/9 min-h-[440px] overflow-hidden rounded-xs border border-white/10">
          <img
            src="/assets/clubhouse-spread.jpg"
            alt="Vanae 1,00,000 Sft Clubhouse"
            className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
          />
        </div>

        {/* 4 Selected Experiences Visual Switcher */}
        <div className="space-y-8 pt-4">
          {/* Minimal Switcher Tabs */}
          <div className="flex items-center gap-8 sm:gap-12 flex-wrap">
            {experiences.map((exp, idx) => (
              <button
                key={exp.label}
                onClick={() => setActiveExp(idx)}
                className="group flex flex-col items-start gap-1 focus:outline-hidden"
              >
                <span
                  className={`text-xs font-mono uppercase tracking-widest transition-colors ${
                    activeExp === idx ? 'text-[#FAF8F5] font-medium' : 'text-[#FAF8F5]/40 group-hover:text-[#FAF8F5]/70'
                  }`}
                >
                  {exp.label}
                </span>
                <span
                  className={`h-px transition-all duration-300 ${
                    activeExp === idx ? 'w-full bg-[#C5A880]' : 'w-0 group-hover:w-3 bg-white/20'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Active Experience Visual Frame */}
          <AnimatePresence mode="wait">
            <motion.div
              key={experiences[activeExp].label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-16/9 sm:aspect-21/10 min-h-[380px] overflow-hidden rounded-xs border border-white/10 bg-[#09281e]"
            >
              <img
                src={experiences[activeExp].image}
                alt={experiences[activeExp].title}
                className="w-full h-full object-cover object-center filter contrast-100"
              />

              <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 px-4 py-2 bg-[#061811]/90 backdrop-blur-md rounded-xs border border-white/10 text-xs font-serif text-[#FAF8F5]">
                {experiences[activeExp].title}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
