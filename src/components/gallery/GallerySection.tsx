'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export function GallerySection() {
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const images = [
    { title: 'Towers Rising in Morning Clouds', image: '/assets/hero-cloud-towers.jpg' },
    { title: 'Terraced Balconies & Elevated Living', image: '/assets/living-elevation.jpg' },
    { title: 'Vertical Monolithic Discipline & Facade Ribs', image: '/assets/facade-vertical.jpg' },
    { title: 'Clubhouse Architectural Realm', image: '/assets/clubhouse-spread.jpg' },
    { title: 'Living Tree Canopy & Campus Landscape', image: '/assets/campus-aerial.jpg' },
  ];

  return (
    <section
      id="gallery"
      className="relative w-full py-32 sm:py-44 bg-white text-[#141414] overflow-hidden border-t border-[#141414]/6"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="max-w-2xl space-y-2 pb-4 border-b border-[#141414]/8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
            10 — PHOTOGRAPHIC EXHIBITION
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#141414] leading-[1.1]">
            Visual anthology.
          </h2>
        </div>

        {/* Large Editorial Images (Controlled Exhibition Layout) */}
        <div className="space-y-10 sm:space-y-12">
          {/* Hero Spread */}
          <div
            onClick={() => setSelectedIdx(0)}
            className="group relative aspect-16/9 sm:aspect-21/10 overflow-hidden rounded-xs border border-[#141414]/8 cursor-pointer bg-[#FAF9F6]"
          >
            <img
              src={images[0].image}
              alt={images[0].title}
              className="w-full h-full object-cover object-center filter contrast-100 group-hover:scale-101 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-6 left-6 px-3.5 py-1.5 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/6 text-[10.5px] font-mono uppercase tracking-widest text-[#141414]">
              {images[0].title}
            </div>
          </div>

          {/* Offset Duo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {images.slice(1, 3).map((img, i) => (
              <div
                key={img.title}
                onClick={() => setSelectedIdx(i + 1)}
                className="group relative aspect-4/3 sm:aspect-16/10 overflow-hidden rounded-xs border border-[#141414]/8 cursor-pointer bg-[#FAF9F6]"
              >
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-full object-cover object-center filter contrast-100 group-hover:scale-101 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-6 left-6 px-3.5 py-1.5 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/6 text-[10.5px] font-mono uppercase tracking-widest text-[#141414]">
                  {img.title}
                </div>
              </div>
            ))}
          </div>

          {/* Lower Panorama */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {images.slice(3, 5).map((img, i) => (
              <div
                key={img.title}
                onClick={() => setSelectedIdx(i + 3)}
                className="group relative aspect-4/3 sm:aspect-16/10 overflow-hidden rounded-xs border border-[#141414]/8 cursor-pointer bg-[#FAF9F6]"
              >
                <img
                  src={img.image}
                  alt={img.title}
                  className="w-full h-full object-cover object-center filter contrast-100 group-hover:scale-101 transition-transform duration-700 ease-out"
                />
                <div className="absolute bottom-6 left-6 px-3.5 py-1.5 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/6 text-[10.5px] font-mono uppercase tracking-widest text-[#141414]">
                  {img.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Light Fullscreen Viewer (NO DARK BACKGROUND) */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/98 backdrop-blur-md flex flex-col p-6 sm:p-12 justify-between"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#141414]/10">
              <span className="font-serif text-2xl text-[#141414]">
                {images[selectedIdx].title}
              </span>
              <button
                onClick={() => setSelectedIdx(null)}
                className="p-2 text-[#141414] hover:opacity-60 focus:outline-hidden"
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
                className="absolute left-4 p-3 rounded-full bg-white border border-[#141414]/10 hover:bg-[#FAF9F6] text-[#141414] shadow-sm focus:outline-hidden"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setSelectedIdx((i) => (i! + 1) % images.length)}
                className="absolute right-4 p-3 rounded-full bg-white border border-[#141414]/10 hover:bg-[#FAF9F6] text-[#141414] shadow-sm focus:outline-hidden"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="text-center text-[10.5px] font-mono uppercase tracking-widest text-[#8A7D6B]">
              VANAE ARCHITECTURAL ANTHOLOGY · {selectedIdx + 1} OF {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
