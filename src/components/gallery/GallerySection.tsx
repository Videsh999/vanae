'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function GallerySection() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const images = [
    { title: 'Towers in the Morning Mist', image: '/assets/hero-cloud-towers.jpg' },
    { title: 'Living Garden Balconies', image: '/assets/living-elevation.jpg' },
    { title: 'Vertical Light at Twilight', image: '/assets/architecture-night.jpg' },
    { title: 'Clubhouse Social Sanctuary', image: '/assets/clubhouse/clubhouse-lounge.jpg' },
    { title: 'Living Tree Canopy & Campus', image: '/assets/campus-aerial.jpg' },
  ];

  return (
    <section
      id="gallery"
      className="relative w-full py-36 sm:py-48 bg-[#F7F5F0] text-[#141C18] overflow-hidden border-t border-[#141C18]/5"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2 pb-4 border-b border-[#141C18]/10">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
            PERSPECTIVES
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#141C18]">
            Visual anthology.
          </h2>
        </div>

        {/* Large Editorial Images (Asymmetrical Publication Layout) */}
        <div className="space-y-12">
          {/* Hero Spread */}
          <div
            onClick={() => setSelectedIdx(0)}
            className="group relative aspect-16/9 sm:aspect-21/10 overflow-hidden rounded-xs border border-[#141C18]/8 cursor-pointer bg-white"
          >
            <img
              src={images[0].image}
              alt={images[0].title}
              className="w-full h-full object-cover object-center filter contrast-100 group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-6 left-6 px-3.5 py-1.5 bg-white/90 backdrop-blur-md rounded-xs text-[10px] font-mono uppercase tracking-widest text-[#141C18]">
              {images[0].title}
            </div>
          </div>

          {/* Offset Pair */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {images.slice(1, 3).map((img, i) => (
              <div
                key={img.title}
                onClick={() => setSelectedIdx(i + 1)}
                className="group relative aspect-4/3 sm:aspect-16/10 overflow-hidden rounded-xs border border-[#141C18]/8 cursor-pointer bg-white"
              >
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-full object-cover object-center filter contrast-100 group-hover:scale-102 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-6 left-6 px-3.5 py-1.5 bg-white/90 backdrop-blur-md rounded-xs text-[10px] font-mono uppercase tracking-widest text-[#141C18]">
                  {img.title}
                </div>
              </div>
            ))}
          </div>

          {/* Lower Panorama */}
          <div
            onClick={() => setSelectedIdx(4)}
            className="group relative aspect-16/9 sm:aspect-21/9 overflow-hidden rounded-xs border border-[#141C18]/8 cursor-pointer bg-white"
          >
            <img
              src={images[4].image}
              alt={images[4].title}
              className="w-full h-full object-cover object-center filter contrast-100 group-hover:scale-102 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-6 left-6 px-3.5 py-1.5 bg-white/90 backdrop-blur-md rounded-xs text-[10px] font-mono uppercase tracking-widest text-[#141C18]">
              {images[4].title}
            </div>
          </div>
        </div>
      </div>

      {/* Immersive Fullscreen Viewer */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#FAF8F5]/98 backdrop-blur-xl flex flex-col p-6 sm:p-12 justify-between"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#141C18]/10">
              <span className="font-serif text-2xl text-[#141C18]">
                {images[selectedIdx].title}
              </span>
              <button
                onClick={() => setSelectedIdx(null)}
                className="p-2 text-[#141C18] hover:opacity-60"
                aria-label="Close viewer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
              <img
                src={images[selectedIdx].image}
                alt={images[selectedIdx].title}
                className="max-h-[80vh] max-w-full object-contain filter contrast-105"
              />

              <button
                onClick={() => setSelectedIdx((i) => (i! - 1 + images.length) % images.length)}
                className="absolute left-4 p-3 rounded-full bg-white/80 hover:bg-white text-[#141C18] shadow-sm"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSelectedIdx((i) => (i! + 1) % images.length)}
                className="absolute right-4 p-3 rounded-full bg-white/80 hover:bg-white text-[#141C18] shadow-sm"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center text-[10px] font-mono uppercase tracking-widest text-[#8A7D6B]">
              VANAE ARCHITECTURAL ANTHOLOGY · {selectedIdx + 1} OF {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
