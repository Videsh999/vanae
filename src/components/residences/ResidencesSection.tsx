'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VANAE_DATA, FloorPlan } from '@/data/vanae-data';
import { ZoomIn, ZoomOut, RotateCcw, Compass, ArrowRight } from 'lucide-react';

interface ResidencesSectionProps {
  onOpenEnquire: (planTitle?: string) => void;
}

export function ResidencesSection({ onOpenEnquire }: ResidencesSectionProps) {
  const [activeBlock, setActiveBlock] = useState<string>('B & C');
  const [selectedPlan, setSelectedPlan] = useState<FloorPlan>(VANAE_DATA.floorPlans[2]);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const blockTabs = [
    { label: 'BLOCKS B & C (3 BHK)', area: '2165 · 2555 SFT', key: 'B & C' },
    { label: 'BLOCKS D & E (3 BHK)', area: '1765 · 2315 · 2555 SFT', key: 'D & E' },
    { label: 'BLOCK F (3 BHK)', area: '1765 · 2555 SFT', key: 'F' },
    { label: 'BLOCK A (4 BHK)', area: '4400 SFT', key: 'Block A' },
  ];

  const handleBlockChange = (tabKey: string) => {
    setActiveBlock(tabKey);
    const plan = VANAE_DATA.floorPlans.find((p) => {
      if (tabKey === 'Block A') return p.block.includes('Block A');
      if (tabKey === 'B & C') return p.block.includes('B') || p.block.includes('C');
      if (tabKey === 'D & E') return p.block.includes('D') || p.block.includes('E');
      if (tabKey === 'F') return p.block.includes('F');
      return true;
    });
    if (plan) setSelectedPlan(plan);
    setZoomLevel(1);
  };

  const availablePlans = VANAE_DATA.floorPlans.filter((p) => {
    if (activeBlock === 'Block A') return p.block.includes('Block A');
    if (activeBlock === 'B & C') return p.block.includes('B') || p.block.includes('C');
    if (activeBlock === 'D & E') return p.block.includes('D') || p.block.includes('E');
    if (activeBlock === 'F') return p.block.includes('F');
    return true;
  });

  return (
    <section
      id="residences"
      className="relative w-full py-16 sm:py-20 bg-white text-[#141414] overflow-hidden border-t border-[#141414]/8 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end pb-4 border-b border-[#141414]/8">
          <div className="lg:col-span-8 space-y-2.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C7A65] font-medium">
              03 — RESIDENCE BLUEPRINTS & DRAFTING
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#141414] leading-[1.14]">
              Elevated by design. <br />
              <span className="italic text-[#8C7A65]">Sculpted for life.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-1">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              Every home is sculpted as an independent corner residence. 11-foot clear volumes, zero shared walls, and continuous cross-ventilation.
            </p>
          </div>
        </div>

        {/* Block Selection Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-3 border-b border-[#141414]/8">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65]">
              SELECT RESIDENTIAL BLOCK:
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-6 overflow-x-auto no-scrollbar pb-1 max-w-full">
            {blockTabs.map((tab) => {
              const isSelected = activeBlock === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => handleBlockChange(tab.key)}
                  className={`group flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all cursor-pointer whitespace-nowrap shrink-0 border ${
                    isSelected
                      ? 'bg-[#141414] text-white border-[#141414] shadow-xs'
                      : 'bg-[#FAF9F6] text-[#141414]/70 border-[#141414]/10 hover:border-[#141414]/30'
                  }`}
                >
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Drafting Canvas & Schedule */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: Floor Plan Drawing Display */}
          <div className="lg:col-span-8 bg-[#FAF9F6] border border-[#141414]/10 rounded-xs p-6 sm:p-8 shadow-xs space-y-5">
            {/* Controls bar */}
            <div className="flex items-center justify-between border-b border-[#141414]/8 pb-3">
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-[#8C7A65]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#141414] font-medium">
                  {selectedPlan.facing} FACING · {selectedPlan.areaSft} SFT
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2))}
                  className="p-2 rounded-xs border border-[#141414]/10 bg-white text-[#141414] hover:bg-[#FAF9F6] focus:outline-hidden cursor-pointer"
                  title="Zoom in"
                  aria-label="Zoom in floor plan"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
                  className="p-2 rounded-xs border border-[#141414]/10 bg-white text-[#141414] hover:bg-[#FAF9F6] focus:outline-hidden cursor-pointer"
                  title="Zoom out"
                  aria-label="Zoom out floor plan"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="p-2 rounded-xs border border-[#141414]/10 bg-white text-[#141414] hover:bg-[#FAF9F6] focus:outline-hidden cursor-pointer"
                  title="Reset scale"
                  aria-label="Reset floor plan scale"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Blueprint Image Stage */}
            <div className="relative aspect-4/3 sm:aspect-16/10 flex items-center justify-center overflow-hidden bg-white p-4 rounded-xs border border-[#141414]/6 min-h-[360px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedPlan.image2d}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, scale: zoomLevel }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  src={selectedPlan.image2d}
                  alt={selectedPlan.title}
                  className="max-h-full max-w-full object-contain filter contrast-105"
                />
              </AnimatePresence>
            </div>

            {/* Sub-Plan Switcher Chips */}
            {availablePlans.length > 1 && (
              <div className="flex items-center gap-2.5 pt-1 overflow-x-auto no-scrollbar">
                <span className="text-[9.5px] font-mono uppercase text-[#8C7A65] whitespace-nowrap">
                  FACING / AREA VARIANT:
                </span>
                {availablePlans.map((plan) => (
                  <button
                    key={plan.title}
                    onClick={() => {
                      setSelectedPlan(plan);
                      setZoomLevel(1);
                    }}
                    className={`px-3 py-1 text-xs font-mono rounded-xs border transition-colors whitespace-nowrap focus:outline-hidden cursor-pointer ${
                      selectedPlan.title === plan.title
                        ? 'bg-[#141414] text-white border-[#141414]'
                        : 'bg-white text-[#141414] border-[#141414]/15 hover:border-[#141414]'
                    }`}
                  >
                    {plan.facing} ({plan.areaSft} SFT)
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Technical Specification Ledger for Current Unit */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2 p-6 rounded-xs bg-[#FAF9F6] border border-[#141414]/8">
              <span className="text-[9.5px] font-mono uppercase tracking-widest text-[#8C7A65]">
                RESIDENCE PROFILE
              </span>
              <h4 className="font-serif text-2xl font-light text-[#141414]">
                {selectedPlan.title}
              </h4>
              <p className="text-xs font-sans text-[#4A544F] font-light leading-relaxed">
                {selectedPlan.description}
              </p>
            </div>

            {/* Room Schedule Highlights */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] block">
                SPATIAL ATTRIBUTES
              </span>
              <div className="space-y-2 text-xs divide-y divide-[#141414]/8">
                <div className="pt-2 flex justify-between">
                  <span className="text-[#4A544F]">Ceiling Height</span>
                  <span className="font-mono text-[#141414]">11'-0" Clear Volume</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-[#4A544F]">Starting Level</span>
                  <span className="font-mono text-[#141414]">Floor 06 Upward</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-[#4A544F]">Common Walls</span>
                  <span className="font-mono text-[#141414]">Zero Shared Walls</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-[#4A544F]">Balcony Horizon</span>
                  <span className="font-mono text-[#141414]">Unblocked 270° Views</span>
                </div>
                <div className="pt-2 flex justify-between">
                  <span className="text-[#4A544F]">Super Built-up Area</span>
                  <span className="font-mono text-[#141414] font-medium">{selectedPlan.areaSft} SFT</span>
                </div>
              </div>
            </div>

            {/* Request Unit Consultation CTA */}
            <button
              onClick={() => onOpenEnquire(selectedPlan.title)}
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#141414] text-white hover:bg-[#8C7A65] transition-colors text-xs font-mono uppercase tracking-widest cursor-pointer shadow-xs"
            >
              <span>Request Unit Pricing & Dossier</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
