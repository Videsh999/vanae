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
      title: 'FINISHES',
      details: 'Internal smooth gypsum plaster finish with premium acrylic emulsion paint. External weatherproof texture finish with high-grade exterior emulsion.',
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
      title: 'KITCHENS & BATHROOMS',
      details: 'Provision for modular kitchen with water purifier point. Bathrooms fitted with premium sanitaryware (Kohler / Grohe or equivalent), concealed flush tanks, and thermostatic diverters.',
    },
    {
      title: 'ELECTRICAL',
      details: 'Concealed copper wiring with MCB distribution boards and modular switches. 3-phase supply with individual dual-source smart meters. AC copper piping provision throughout.',
    },
    {
      title: 'LIFTS & POWER BACKUP',
      details: 'High-speed passenger elevators and dedicated service stretcher elevators per tower with granite/marble jambs. 100% DG set power backup with acoustic enclosures.',
    },
    {
      title: 'WATER & SUSTAINABILITY',
      details: 'Treated domestic water supplied through central Water Softening Plant (WSP). Dedicated Sewage Treatment Plant (STP) for landscape irrigation and rainwater harvesting pits.',
    },
    {
      title: 'SECURITY & FIRE SAFETY',
      details: 'Round-the-clock CCTV surveillance at main security gate and tower lobbies; solar fencing along perimeter; fire hydrant and sprinkler system on all residential and stilt levels as per NBC.',
    },
    {
      title: 'PARKING',
      details: 'Five levels of naturally ventilated above-ground open stilt parking, EV charging ready infrastructure, and wide circular entry/exit ramps.',
    },
  ];

  return (
    <section
      id="specifications"
      className="relative w-full py-32 sm:py-44 bg-white text-[#141414] overflow-hidden border-t border-[#141414]/6"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 pb-6 border-b border-[#141414]/8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
            09 — TECHNICAL BLUEPRINT
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#141414] leading-[1.1]">
            Specifications.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed max-w-xl">
            Built strictly to Indian Standard (IS) and National Building Code (NBC) norms with monolithic R.C.C. shear wall discipline.
          </p>
        </div>

        {/* Elegant Minimal Accordion on Pure White Canvas with Thin Borders */}
        <div className="divide-y divide-[#141414]/8">
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
                    <h3 className="font-serif text-xl sm:text-2xl font-light text-[#141414] group-hover:text-[#8A7D6B] transition-colors">
                      {cat.title}
                    </h3>
                  </div>

                  <div className="text-[#141414]/40 group-hover:text-[#141414] transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
