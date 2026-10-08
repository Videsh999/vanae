'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowUpRight } from 'lucide-react';
import { VANAE_DATA } from '@/data/vanae-data';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onOpenEnquire: () => void;
}

export function FullscreenMenu({
  isOpen,
  onClose,
  onNavigate,
  onOpenEnquire,
}: FullscreenMenuProps) {
  const [hoveredImage, setHoveredImage] = useState<string>('/assets/hero-cloud-towers.jpg');

  const navigationGroups = [
    {
      category: 'CHAPTERS',
      items: [
        { label: 'The Art of Rooted Living', sectionId: 'rooted', image: '/assets/hero-cloud-towers.jpg' },
        { label: 'Architecture & Stratification', sectionId: 'architecture', image: '/assets/facade-vertical.jpg' },
        { label: 'Residence Blueprints', sectionId: 'residences', image: '/assets/living-elevation.jpg' },
        { label: 'Biophilic Terraces & 1L Club', sectionId: 'lifestyle', image: '/assets/living-terraces-pure.jpg' },
        { label: 'Master Site Plan & Location', sectionId: 'location', image: '/assets/masterplan-full.jpg' },
        { label: 'Consultation & Specifications', sectionId: 'enquiry', image: '/assets/campus-aerial-pure.jpg' },
      ],
    },
  ];

  const handleItemClick = (sectionId: string) => {
    onClose();
    setTimeout(() => {
      onNavigate(sectionId);
    }, 250);
  };

  const handleEnquireClick = () => {
    onClose();
    setTimeout(() => {
      onOpenEnquire();
    }, 250);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col bg-white text-[#141414] overflow-y-auto"
        >
          {/* Top Header Bar Inside Menu */}
          <div className="flex items-center justify-between px-6 sm:px-12 py-7 border-b border-[#141414]/8 bg-white/95 sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="font-serif text-2xl tracking-[0.25em] text-[#141414] uppercase">
                VANAE
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8A7D6B] hidden sm:inline">
                · HYDERABAD
              </span>
            </div>

            <button
              onClick={onClose}
              className="group flex items-center gap-2.5 text-xs font-mono uppercase tracking-[0.2em] text-[#141414]/70 hover:text-[#141414] transition-colors py-2 px-3.5 border border-[#141414]/15 hover:border-[#141414] rounded-full focus:outline-hidden"
              aria-label="Close navigation"
            >
              <span>Close</span>
              <X className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-90" />
            </button>
          </div>

          {/* Menu Body */}
          <div className="flex-1 max-w-7xl w-full mx-auto px-6 sm:px-12 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Editorial Navigation Structure */}
            <div className="lg:col-span-7 space-y-12">
              {navigationGroups.map((group, gIdx) => (
                <div key={group.category} className="space-y-4">
                  <div className="text-[10.5px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
                    0{gIdx + 1} — {group.category}
                  </div>

                  <ul className="space-y-3">
                    {group.items.map((item, idx) => (
                      <motion.li
                        key={item.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: 0.05 * (gIdx * 4 + idx),
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      >
                        <button
                          onClick={() => handleItemClick(item.sectionId)}
                          onMouseEnter={() => setHoveredImage(item.image)}
                          className="group flex items-center justify-between w-full text-left py-1.5 border-b border-[#141414]/5 hover:border-[#141414]/30 transition-colors focus:outline-hidden"
                        >
                          <span className="font-serif text-2xl sm:text-3xl text-[#141414] group-hover:text-[#8A7D6B] transition-colors tracking-wide">
                            {item.label}
                          </span>
                          <ArrowRight className="w-4 h-4 text-[#141414]/30 group-hover:text-[#141414] group-hover:translate-x-1.5 transition-all duration-300" />
                        </button>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Enquire Call to Action in Left Column */}
              <div className="pt-4 space-y-3">
                <div className="text-[10.5px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
                  03 — ENQUIRE
                </div>
                <button
                  onClick={handleEnquireClick}
                  className="group flex items-center justify-between w-full text-left py-2 border-b border-[#141414]/20 hover:border-[#141414] focus:outline-hidden"
                >
                  <span className="font-serif text-2xl sm:text-3xl text-[#141414] group-hover:text-[#8A7D6B] transition-colors tracking-wide">
                    Private Viewing
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#141414] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right Column: Architectural Photography Preview & Project Detail */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              {/* Architectural Image Stage */}
              <div className="relative aspect-4/3 sm:aspect-16/10 overflow-hidden rounded-xs border border-[#141414]/8 bg-[#F7F6F2]">
                <motion.img
                  key={hoveredImage}
                  initial={{ opacity: 0.85, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  src={hoveredImage}
                  alt="VANAE Architectural Perspective"
                  className="w-full h-full object-cover object-center filter contrast-100"
                />
              </div>

              {/* Project Footnote */}
              <div className="space-y-4 pt-2 border-t border-[#141414]/10">
                <div className="text-xs font-mono uppercase tracking-widest text-[#8A7D6B]">
                  KOLLUR · ORR EXIT 2 · HYDERABAD
                </div>
                <p className="font-serif text-lg text-[#141414] font-light leading-relaxed">
                  36 floors of vertical elegance across 6 iconic towers. 11-foot ceilings, 5 stilt levels, and a 1,00,000 Sft clubhouse.
                </p>
                <div className="text-[11px] font-mono text-[#6B6B6B] tracking-wider">
                  HMDA Permission No: 006436/LO/HMDA 1500/MED/2024TG
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
