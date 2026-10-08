'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VANAE_DATA, TowerInfo } from '@/data/vanae-data';
import { ArrowRight } from 'lucide-react';

interface MasterPlanSectionProps {
  onSelectTower: (towerId: string) => void;
}

export function MasterPlanSection({ onSelectTower }: MasterPlanSectionProps) {
  const [selectedTower, setSelectedTower] = useState<TowerInfo>(VANAE_DATA.towers[0]);

  return (
    <section
      id="masterplan"
      className="relative w-full py-32 sm:py-44 bg-white text-[#141414] overflow-hidden border-t border-[#141414]/6"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-14">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#141414]/8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
              07 — MASTER PLAN
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#141414] leading-[1.1]">
              Master plan.
            </h2>
          </div>

          {/* Understated Tower Switcher */}
          <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
            {VANAE_DATA.towers.map((tower) => {
              const isSelected = selectedTower.id === tower.id;
              return (
                <button
                  key={tower.id}
                  onClick={() => setSelectedTower(tower)}
                  className="group flex flex-col items-start gap-1 pb-1 focus:outline-hidden"
                >
                  <span
                    className={`text-xs font-mono uppercase tracking-widest transition-colors ${
                      isSelected ? 'text-[#141414] font-medium' : 'text-[#141414]/40 group-hover:text-[#141414]/70'
                    }`}
                  >
                    {tower.name}
                  </span>
                  <span
                    className={`h-0.5 transition-all duration-300 ${
                      isSelected ? 'w-full bg-[#141414]' : 'w-0 group-hover:w-3 bg-black/20'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Large Master Plan Drawing (Given Generous Space to Breathe) */}
        <div className="relative bg-[#FAF9F6] border border-[#141414]/8 rounded-xs p-6 sm:p-12 shadow-xs">
          <div className="relative aspect-16/10 sm:aspect-21/11 min-h-[460px] flex items-center justify-center overflow-hidden">
            <motion.img
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              src="/assets/masterplan-full.jpg"
              alt="VANAE Master Plan Architectural Site Drawing"
              className="max-h-full max-w-full object-contain filter contrast-105"
            />
          </div>

          {/* Inspection Metadata Line Below Drawing */}
          <div className="pt-6 border-t border-[#141414]/6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
            <div className="space-y-1">
              <div className="font-serif text-xl sm:text-2xl text-[#141414]">
                {selectedTower.name} · {selectedTower.configurations.join(', ')}
              </div>
              <p className="font-sans text-xs text-[#4A544F] font-light max-w-2xl">
                {selectedTower.summary}
              </p>
            </div>

            <button
              onClick={() => onSelectTower(selectedTower.id)}
              className="btn-editorial text-[#141414] self-start sm:self-auto focus:outline-hidden"
            >
              <span>View Residences</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
