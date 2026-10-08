'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export function SpecificationsSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const specifications = [
    {
      num: '01',
      title: 'Monolithic Shear Wall Structure',
      details: 'Engineered as a continuous R.C.C. monolithic shear wall framework compliant with IS 456, IS 1893 (Seismic Zone II), and IS 875 (Wind Loads). Provides high structural rigidity and crack resistance.',
    },
    {
      num: '02',
      title: '11-Foot Ceiling Volumes & Finishes',
      details: 'All residences feature 11-foot clear floor-to-ceiling heights. Internal walls finished with smooth gypsum plaster and low-VOC acrylic emulsion. Large-format premium vitrified floor tiles throughout living zones.',
    },
    {
      num: '03',
      title: 'Acoustic Windows & Teak Veneers',
      details: 'Factory-cured teak-veneered main door with digital smart biometric locks. Heavy-gauge UPVC profile window systems with tinted toughened acoustic glass and integrated mosquito mesh.',
    },
    {
      num: '04',
      title: 'High-Speed Elevators & Grand Lobbies',
      details: 'Multiple high-speed passenger elevators and dedicated stretcher service lifts per tower core with marble jamb framing. Double-height air-conditioned residential entry lobbies with digital access control.',
    },
    {
      num: '05',
      title: 'Sanitaryware & Water Softening',
      details: 'Concealed flush cisterns with premium European fixtures (Kohler / Grohe or equivalent). Centralized on-site Water Softening Plant (WSP) delivering treated potable water to all kitchens and baths.',
    },
    {
      num: '06',
      title: '100% DG Acoustic Power Backup',
      details: 'Full 100% DG backup for both common utilities and individual residences with automatic transfer switches and dual-source digital prepaid smart metering.',
    },
    {
      num: '07',
      title: 'Eco-Hydrology & Sewage Treatment',
      details: 'State-of-the-art Sewage Treatment Plant (STP) with treated water utilized for landscape drip-irrigation. Perimeter rainwater harvesting recharge shafts restoring the local aquifer.',
    },
    {
      num: '08',
      title: '5 Tiers of Open Stilt Parking & EV Ready',
      details: 'Five levels of naturally ventilated above-ground stilt parking, wide circular vehicular ramps, automated boom barriers, and dedicated EV charging station infrastructure.',
    },
  ];

  return (
    <section
      id="specifications"
      className="relative w-full py-28 sm:py-36 bg-white text-[#141414] overflow-hidden border-t border-[#141414]/8"
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="space-y-3 pb-4 border-b border-[#141414]/8">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C7A65] font-medium">
            10 — TECHNICAL BLUEPRINT & CRAFT
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#141414] leading-[1.12]">
            Engineering specifications.
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed max-w-xl">
            Built to National Building Code (NBC) and Bureau of Indian Standards (BIS) parameters with unwavering structural rigor.
          </p>
        </div>

        {/* Technical Specification Accordion */}
        <div className="divide-y divide-[#141414]/8">
          {specifications.map((spec, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={spec.num} className="py-6">
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left focus:outline-hidden group cursor-pointer"
                >
                  <div className="flex items-center gap-6 sm:gap-8">
                    <span className="text-xs font-mono text-[#8C7A65] tracking-widest min-w-[24px]">
                      {spec.num}
                    </span>
                    <h3 className="font-serif text-lg sm:text-2xl font-light text-[#141414] group-hover:text-[#8C7A65] transition-colors">
                      {spec.title}
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
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed pt-4 pl-12 sm:pl-14 max-w-3xl">
                        {spec.details}
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
