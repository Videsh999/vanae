'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export function SpecificationsSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const categories = [
    {
      title: 'STRUCTURE',
      details: 'R.C.C. Framed Structure & Monolithic Shear Wall construction engineered to withstand wind and seismic loads as per IS codes.',
    },
    {
      title: 'FLOORING',
      details: 'Large format premium vitrified tile flooring in living, dining, and bedrooms; laminated wooden flooring in master suite; non-slip vitrified tiles in utility and balconies.',
    },
    {
      title: 'DOORS & WINDOWS',
      details: 'Factory-made teak-veneered main door with melamine polish. UPVC profile window sections with tinted toughened glass and mosquito mesh provision.',
    },
    {
      title: 'ELECTRICAL',
      details: 'Concealed copper wiring with MCB distribution boards and modular switches. 3-phase supply. Provision for air conditioning copper piping in all bedrooms and living areas.',
    },
    {
      title: 'LIFTS & BACKUP',
      details: 'High-speed passenger lifts and dedicated service elevators in each tower with granite cladding. 100% DG set power backup with acoustic enclosure.',
    },
    {
      title: 'WATER & SANITARY',
      details: 'Domestic water supplied through central Water Softening Plant (WSP) with individual smart unit meters. On-campus Sewage Treatment Plant (STP) and rainwater harvesting recharge pits.',
    },
    {
      title: 'SECURITY',
      details: 'Round-the-clock CCTV surveillance at main security cabin and block lobbies; solar fencing along perimeter; intercom and panic button in lifts.',
    },
    {
      title: 'FIRE SAFETY',
      details: 'Comprehensive fire hydrant and sprinkler system on all floors and parking areas as per National Building Code (NBC) norms with central control panel.',
    },
    {
      title: 'PARKING',
      details: 'Five levels of naturally ventilated above-ground open stilt parking, EV charging ready bays, and wide entry and exit ramps.',
    },
  ];

  return (
    <section
      id="specifications"
      className="relative w-full py-36 sm:py-48 bg-[#FAF8F5] text-[#141C18] overflow-hidden border-t border-[#141C18]/5"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 pb-6 border-b border-[#141C18]/10">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
            TECHNICAL BLUEPRINT
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#141C18]">
            Specifications.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed max-w-xl">
            Built strictly to Indian Standard (IS) and NBC codes with monolithic R.C.C. shear wall discipline.
          </p>
        </div>

        {/* Elegant Minimal Accordion */}
        <div className="divide-y divide-[#141C18]/10">
          {categories.map((cat, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={cat.title} className="py-6">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-hidden group"
                >
                  <div className="flex items-center gap-6 sm:gap-8">
                    <span className="text-xs font-mono text-[#8A7D6B] tracking-widest">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-[#141C18] group-hover:text-[#8A7D6B] transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="text-[#141C18]/50 group-hover:text-[#141C18] transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 pl-12 sm:pl-16 font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
                        {cat.details}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
