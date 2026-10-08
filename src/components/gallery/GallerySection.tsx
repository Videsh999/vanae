'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function GallerySection() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowLeft') setSelectedIdx((prev) => (prev! - 1 + exhibits.length) % exhibits.length);
      if (e.key === 'ArrowRight') setSelectedIdx((prev) => (prev! + 1) % exhibits.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  const exhibits = [
    {
      title: 'Sweeping Campus Aerial & Living Canopy',
      category: 'CAMPUS MASTER AERIAL',
      image: '/assets/campus-aerial-pure.jpg',
      aspect: 'aspect-16/9 sm:aspect-21/10',
    },
    {
      title: 'The Private Club Lounge & Interior Solarium',
      category: 'INTERIOR HOSPITALITY',
      image: '/assets/clubhouse/clubhouse-lounge.jpg',
      aspect: 'aspect-4/3 sm:aspect-16/10',
    },
    {
      title: 'Double-Height Arrival Atrium & Reception',
      category: 'GRAND ARRIVAL',
      image: '/assets/clubhouse/clubhouse-entry.jpg',
      aspect: 'aspect-4/3 sm:aspect-16/10',
    },
    {
      title: 'Athletic Conditioning & Cardio Arena',
      category: 'WELLNESS & TRAINING',
      image: '/assets/clubhouse/fitness-studio.jpg',
      aspect: 'aspect-4/3 sm:aspect-16/10',
    },
    {
      title: 'Grand Celebration Ballroom & Banquet Pavilions',
      category: 'SOCIETY & GATHERING',
      image: '/assets/clubhouse/banquet-hall.jpg',
      aspect: 'aspect-4/3 sm:aspect-16/10',
    },
  ];

  return (
    <section
      id="gallery"
      className="relative w-full py-28 sm:py-36 bg-[#FAF9F6] text-[#141414] overflow-hidden border-t border-[#141414]/8"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-4 border-b border-[#141414]/8">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C7A65] font-medium">
              11 — PHOTOGRAPHIC ANTHOLOGY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#141414] leading-[1.12]">
              Curated perspectives.
            </h2>
          </div>

          <div className="lg:col-span-4 pb-1">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              An architectural anthology capturing unseen facets of campus scale, double-height interiors, athletic wellness, and social spaces.
            </p>
          </div>
        </div>

        {/* Gallery Exhibition Grid */}
        <div className="space-y-10">
          {/* Main Panorama: Campus Aerial */}
          <div
            onClick={() => setSelectedIdx(0)}
            className="group relative aspect-16/9 sm:aspect-21/10 overflow-hidden rounded-xs border border-[#141414]/10 cursor-pointer bg-white shadow-xs"
          >
            <img
              src={exhibits[0].image}
              alt={exhibits[0].title}
              className="w-full h-full object-cover object-center filter contrast-102 group-hover:scale-101 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-6 left-6 px-3.5 py-1.5 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/8 text-[10px] font-mono uppercase tracking-[0.22em] text-[#141414]">
              {exhibits[0].category} · {exhibits[0].title}
            </div>
          </div>

          {/* Secondary Duo: Interiors & Arrival */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {exhibits.slice(1, 3).map((item, i) => (
              <div
                key={item.title}
                onClick={() => setSelectedIdx(i + 1)}
                className="group relative aspect-4/3 sm:aspect-16/10 overflow-hidden rounded-xs border border-[#141414]/10 cursor-pointer bg-white shadow-xs"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center filter contrast-102 group-hover:scale-101 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-5 left-5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/8 text-[9px] font-mono uppercase tracking-widest text-[#141414]">
                  {item.category}
                </div>
              </div>
            ))}
          </div>

          {/* Tertiary Duo: Fitness & Banqueting */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {exhibits.slice(3, 5).map((item, i) => (
              <div
                key={item.title}
                onClick={() => setSelectedIdx(i + 3)}
                className="group relative aspect-4/3 sm:aspect-16/10 overflow-hidden rounded-xs border border-[#141414]/10 cursor-pointer bg-white shadow-xs"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center filter contrast-102 group-hover:scale-101 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-5 left-5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/8 text-[9px] font-mono uppercase tracking-widest text-[#141414]">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Light Fullscreen Viewer Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/98 backdrop-blur-md flex flex-col p-6 sm:p-12 justify-between"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#141414]/8 pb-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#8C7A65]">
                {exhibits[selectedIdx].category}
              </span>
              <button
                onClick={() => setSelectedIdx(null)}
                className="p-2 rounded-full hover:bg-black/5 text-[#141414] focus:outline-hidden cursor-pointer"
                aria-label="Close image viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image Stage */}
            <div className="relative flex-1 flex items-center justify-center py-6 overflow-hidden">
              <img
                src={exhibits[selectedIdx].image}
                alt={exhibits[selectedIdx].title}
                className="max-h-full max-w-full object-contain rounded-xs shadow-md"
              />
            </div>

            {/* Bottom Controls Bar */}
            <div className="flex items-center justify-between border-t border-[#141414]/8 pt-4">
              <span className="font-serif text-lg text-[#141414]">
                {exhibits[selectedIdx].title}
              </span>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSelectedIdx((selectedIdx - 1 + exhibits.length) % exhibits.length)}
                  className="p-2 rounded-full hover:bg-black/5 text-[#141414] focus:outline-hidden cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-mono text-[#8C7A65]">
                  {selectedIdx + 1} / {exhibits.length}
                </span>
                <button
                  onClick={() => setSelectedIdx((selectedIdx + 1) % exhibits.length)}
                  className="p-2 rounded-full hover:bg-black/5 text-[#141414] focus:outline-hidden cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
