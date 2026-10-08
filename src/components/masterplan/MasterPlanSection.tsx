'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VANAE_DATA, TowerInfo } from '@/data/vanae-data';
import { ArrowRight, Compass } from 'lucide-react';

interface MasterPlanSectionProps {
  onSelectTower: (towerId: string) => void;
}

export function MasterPlanSection({ onSelectTower }: MasterPlanSectionProps) {
  const [selectedTower, setSelectedTower] = useState<TowerInfo>(VANAE_DATA.towers[0]);

  const siteHighlights = [
    { label: 'OPEN LANDSCAPE', value: '80%', desc: 'Living forest canopy & water features' },
    { label: 'MASTER SITE', value: '14 ACRES', desc: 'Continuous pedestrian-first circulation' },
    { label: 'SOARING TOWERS', value: '6 BLOCKS', desc: 'Stratified from Level 6 upward' },
    { label: 'PRIVATE RETREAT', value: '1,00,000 SFT', desc: 'Integrated clubhouse campus' },
  ];

  return (
    <section
      id="masterplan"
      className="relative w-full py-28 sm:py-36 bg-white text-[#141414] overflow-hidden border-t border-[#141414]/8"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-4 border-b border-[#141414]/8">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C7A65] font-medium">
              08 — ARCHITECTURAL SITE PLAN
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#141414] leading-[1.12]">
              14 Acres. <br />
              <span className="italic text-[#8C7A65]">The master choreography.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-1">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              An urban oasis where eighty percent of the master site is dedicated to nature, pedestrian avenues, and communal calm.
            </p>
          </div>
        </div>

        {/* Site Statistics Ledger */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pb-4">
          {siteHighlights.map((stat) => (
            <div key={stat.label} className="p-5 rounded-xs bg-[#FAF9F6] border border-[#141414]/8 space-y-1">
              <span className="text-[9.5px] font-mono uppercase tracking-widest text-[#8C7A65]">
                {stat.label}
              </span>
              <div className="font-serif text-2xl sm:text-3xl text-[#141414] font-light">
                {stat.value}
              </div>
              <p className="text-[11px] font-sans text-[#4A544F] font-light">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tower Selector Bar */}
        <div className="flex items-center justify-between pb-2 border-b border-[#141414]/8 overflow-x-auto">
          <div className="flex items-center gap-6 sm:gap-8">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] whitespace-nowrap">
              SELECT TOWER:
            </span>
            {VANAE_DATA.towers.map((tower) => {
              const isSelected = selectedTower.id === tower.id;
              return (
                <button
                  key={tower.id}
                  onClick={() => setSelectedTower(tower)}
                  className="group flex flex-col items-start gap-1 pb-1 focus:outline-hidden whitespace-nowrap cursor-pointer"
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

        {/* Large Master Plan Drawing */}
        <div className="relative bg-[#FAF9F6] border border-[#141414]/10 rounded-xs p-6 sm:p-10 shadow-xs space-y-6">
          <div className="relative aspect-16/10 sm:aspect-21/11 min-h-[460px] flex items-center justify-center overflow-hidden bg-white p-4 rounded-xs border border-[#141414]/6">
            <motion.img
              key={selectedTower.id}
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              src="/assets/masterplan-full.jpg"
              alt="VANAE Master Plan Architectural Site Drawing"
              className="max-h-full max-w-full object-contain filter contrast-105"
            />
          </div>

          {/* Tower Metadata & Inspection Bar */}
          <div className="pt-4 border-t border-[#141414]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
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
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141414] text-white hover:bg-[#8C7A65] transition-colors text-xs font-mono uppercase tracking-widest cursor-pointer shadow-xs self-start sm:self-auto"
            >
              <span>Inspect Residences</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
