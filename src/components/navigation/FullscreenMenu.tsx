'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VanaeLogo } from '../common/VanaeLogo';
import { X, ArrowUpRight } from 'lucide-react';
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
  const menuItems = [
    { number: '01', label: 'OVERVIEW', sectionId: 'overview' },
    { number: '02', label: 'THE IDEA', sectionId: 'story' },
    { number: '03', label: 'ROOTED LIVING', sectionId: 'rooted' },
    { number: '04', label: 'ARCHITECTURE', sectionId: 'architecture' },
    { number: '05', label: 'MASTER PLAN', sectionId: 'masterplan' },
    { number: '06', label: 'RESIDENCES', sectionId: 'residences' },
    { number: '07', label: 'FLOOR PLANS', sectionId: 'floorplans' },
    { number: '08', label: 'THE WAY WE ELEVATE', sectionId: 'elevate' },
    { number: '09', label: 'CLUBHOUSE', sectionId: 'clubhouse' },
    { number: '10', label: 'AMENITIES', sectionId: 'amenities' },
    { number: '11', label: 'LOCATION', sectionId: 'location' },
    { number: '12', label: 'SPECIFICATIONS', sectionId: 'specifications' },
    { number: '13', label: 'GALLERY', sectionId: 'gallery' },
  ];

  const handleItemClick = (sectionId: string) => {
    onClose();
    setTimeout(() => {
      onNavigate(sectionId);
    }, 300);
  };

  const handleEnquireClick = () => {
    onClose();
    setTimeout(() => {
      onOpenEnquire();
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col bg-[#061811]/98 backdrop-blur-2xl text-[#faf8f5] overflow-y-auto"
        >
          {/* Top header bar inside menu */}
          <div className="flex items-center justify-between px-6 sm:px-12 py-8 border-b border-[#c5a880]/15">
            <VanaeLogo size="sm" variant="wordmark" />

            <button
              onClick={onClose}
              className="group flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[#faf8f5]/70 hover:text-[#c5a880] transition-colors py-2 px-3 border border-[#c5a880]/20 hover:border-[#c5a880]/50 rounded-full"
              aria-label="Close Navigation Menu"
            >
              <span>Close</span>
              <X className="w-4 h-4 transition-transform group-hover:rotate-90 duration-300" />
            </button>
          </div>

          {/* Menu contents */}
          <div className="flex-1 max-w-7xl w-full mx-auto px-6 sm:px-12 py-12 flex flex-col lg:flex-row justify-between gap-12">
            {/* Left Column: Menu Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 max-w-2xl">
              {menuItems.map((item, idx) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * idx, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group flex items-baseline gap-4 py-2 cursor-pointer border-b border-[#c5a880]/5 hover:border-[#c5a880]/30 transition-colors"
                  onClick={() => handleItemClick(item.sectionId)}
                  data-cursor="EXPLORE"
                >
                  <span className="text-[11px] font-mono tracking-widest text-[#c5a880]/60 group-hover:text-[#c5a880] transition-colors">
                    {item.number}
                  </span>
                  <span className="font-serif text-lg sm:text-xl lg:text-2xl text-[#faf8f5]/90 group-hover:text-[#c5a880] transition-colors tracking-[0.08em]">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Right Column: Project Summary & Private Viewing CTA */}
            <div className="lg:max-w-md flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#c5a880]/15 lg:pl-12 pt-8 lg:pt-0">
              <div className="space-y-6">
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#c5a880] font-medium block">
                  The Art of Rooted Living
                </span>
                <p className="font-serif text-xl sm:text-2xl text-[#faf8f5]/90 leading-relaxed font-light">
                  A unique residential marvel that’s 36 floors high, spread across 6 towers in Kollur, by ORR Exit 2.
                </p>
                <div className="space-y-2 text-xs text-[#faf8f5]/60 font-sans tracking-wide">
                  <p>3 & 4 BHK Ultra-Luxury Residences</p>
                  <p>11-Foot-High Ceilings · 5 Levels Stilt Parking</p>
                  <p>1,00,000 Sft Clubhouse · 50+ Lifestyle Amenities</p>
                </div>
              </div>

              <div className="pt-8 space-y-4">
                <button
                  onClick={handleEnquireClick}
                  className="w-full btn-architectural-solid justify-center py-4 text-xs tracking-[0.22em]"
                >
                  <span>Request a Private Viewing</span>
                  <ArrowUpRight className="w-4 h-4 ml-1" />
                </button>

                <p className="text-[11px] text-[#faf8f5]/40 tracking-wider text-center">
                  {VANAE_DATA.project.approvals.hmda}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
