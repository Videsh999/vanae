'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VANAE_DATA, FloorPlan } from '@/data/vanae-data';
import { ZoomIn, ZoomOut, RotateCcw, Compass, ArrowRight, ShieldCheck } from 'lucide-react';

interface ResidencesSectionProps {
  onOpenEnquire: (planTitle?: string) => void;
}

export function ResidencesSection({ onOpenEnquire }: ResidencesSectionProps) {
  const [selectedConfig, setSelectedConfig] = useState<'3-bhk' | '4-bhk'>('3-bhk');
  const [activeBlock, setActiveBlock] = useState<string>('B & C');
  const [selectedPlan, setSelectedPlan] = useState<FloorPlan>(VANAE_DATA.floorPlans[2]);
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const blockTabs = [
    { label: 'BLOCKS B & C', area: '2165 · 2555 SFT', key: 'B & C', config: '3-bhk' as const },
    { label: 'BLOCKS D & E', area: '1765 · 2315 · 2555 SFT', key: 'D & E', config: '3-bhk' as const },
    { label: 'BLOCK F', area: '1765 · 2555 SFT', key: 'F', config: '3-bhk' as const },
    { label: 'BLOCK A (4 BHK)', area: '4400 SFT', key: 'Block A', config: '4-bhk' as const },
  ];

  const stratification = [
    {
      tier: 'LEVELS 06 TO 36',
      title: 'Residences Start From Floor 6',
      desc: 'Lifted entirely above ground noise into open skies, natural cross-ventilation, and 11-foot clear ceiling volumes.',
      tag: 'RESIDENTIAL LIVING',
    },
    {
      tier: 'LEVELS 01 TO 05',
      title: '5 Tiers of Open Stilt Parking',
      desc: 'Naturally ventilated above-ground parking tiers, eliminating deep underground excavation and preserving natural hydrology.',
      tag: 'STILT PARKING',
    },
    {
      tier: 'GROUND LEVEL',
      title: 'Living Earth & Forest Floor',
      desc: 'Continuous pedestrian realm, thematic tree canopies, contemplative water courts, and native butterfly corridors.',
      tag: 'BIOPHILIC LANDSCAPE',
    },
  ];

  const handleBlockChange = (tab: typeof blockTabs[0]) => {
    setActiveBlock(tab.key);
    setSelectedConfig(tab.config);
    const plan = VANAE_DATA.floorPlans.find((p) => {
      if (tab.key === 'Block A') return p.block.includes('Block A');
      if (tab.key === 'B & C') return p.block.includes('B') || p.block.includes('C');
      if (tab.key === 'D & E') return p.block.includes('D') || p.block.includes('E');
      if (tab.key === 'F') return p.block.includes('F');
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
      className="relative w-full py-28 sm:py-36 bg-white text-[#141414] overflow-hidden border-t border-[#141414]/8"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-24">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-4 border-b border-[#141414]/8">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C7A65] font-medium">
              04 — DETAIL & INFORMATION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#141414] leading-[1.12]">
              Elevated by design. <br />
              <span className="italic text-[#8C7A65]">Sculpted for life.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-1">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              Every residence begins on Level 6, floating above five tiers of open stilt parking. Conceived with 11-foot volumes and zero common walls for pure privacy.
            </p>
          </div>
        </div>

        {/* SUB-CHAPTER 1: The Architectural Elevation Stratification */}
        <div className="space-y-10">
          <div className="flex items-center justify-between pb-3 border-b border-[#141414]/8">
            <span className="text-[10px] font-mono uppercase tracking-[0.26em] text-[#8C7A65]">
              STRATIFIED CROSS-SECTION
            </span>
            <span className="text-[10px] font-mono text-[#4A544F]">
              ELEVATION LOGIC · LEVELS 00 – 36
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Elevation Diagram Drawing */}
            <div className="lg:col-span-7 bg-[#FAF9F6] p-6 sm:p-10 rounded-xs border border-[#141414]/10 shadow-xs">
              <div className="relative aspect-4/3 sm:aspect-16/10 flex items-center justify-center overflow-hidden">
                <img
                  src="/assets/elevate-diagram.jpg"
                  alt="VANAE Architectural Elevation Cross-Section Diagram"
                  className="max-h-full max-w-full object-contain filter contrast-105"
                />
              </div>
              <div className="pt-4 text-center text-[10px] font-mono uppercase tracking-widest text-[#8C7A65]">
                CROSS-SECTION DRAWING · STRATIFIED VERTICAL TIERS
              </div>
            </div>

            {/* Right: Three Structural Tiers */}
            <div className="lg:col-span-5 space-y-8 divide-y divide-[#141414]/8">
              {stratification.map((tier) => (
                <div key={tier.tier} className="pt-6 first:pt-0 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65]">
                      {tier.tier}
                    </span>
                    <span className="text-[9px] font-mono uppercase px-2 py-0.5 bg-[#FAF9F6] border border-[#141414]/6 rounded-xs text-[#141414]">
                      {tier.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-light text-[#141414]">
                    {tier.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
                    {tier.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SUB-CHAPTER 2: Floor Plans & Residence Blueprints */}
        <div className="space-y-10 pt-8 border-t border-[#141414]/8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-[#141414]/8">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.26em] text-[#8C7A65]">
                ARCHITECTURAL BLUEPRINTS
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#141414]">
                Explore residential drafting.
              </h3>
            </div>

            {/* Block Navigation Tabs */}
            <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
              {blockTabs.map((tab) => {
                const isSelected = activeBlock === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => handleBlockChange(tab)}
                    className="group flex flex-col items-start gap-1 pb-1 focus:outline-hidden cursor-pointer"
                  >
                    <span
                      className={`text-xs font-mono uppercase tracking-widest transition-colors ${
                        isSelected ? 'text-[#141414] font-medium' : 'text-[#141414]/40 group-hover:text-[#141414]/70'
                      }`}
                    >
                      {tab.label}
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

          {/* Interactive Drafting Canvas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Floor Plan Drawing Display */}
            <div className="lg:col-span-8 bg-[#FAF9F6] border border-[#141414]/10 rounded-xs p-6 sm:p-10 shadow-xs space-y-6">
              {/* Controls bar */}
              <div className="flex items-center justify-between border-b border-[#141414]/8 pb-4">
                <div className="flex items-center gap-3">
                  <Compass className="w-4 h-4 text-[#8C7A65]" />
                  <span className="text-xs font-mono uppercase tracking-widest text-[#141414]">
                    {selectedPlan.facing} FACING · {selectedPlan.areaSft} SFT
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2))}
                    className="p-1.5 rounded-xs border border-[#141414]/10 bg-white text-[#141414] hover:bg-[#FAF9F6] focus:outline-hidden"
                    title="Zoom in"
                    aria-label="Zoom in floor plan"
                  >
                    <ZoomIn className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 0.75))}
                    className="p-1.5 rounded-xs border border-[#141414]/10 bg-white text-[#141414] hover:bg-[#FAF9F6] focus:outline-hidden"
                    title="Zoom out"
                    aria-label="Zoom out floor plan"
                  >
                    <ZoomOut className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => setZoomLevel(1)}
                    className="p-1.5 rounded-xs border border-[#141414]/10 bg-white text-[#141414] hover:bg-[#FAF9F6] focus:outline-hidden"
                    title="Reset scale"
                    aria-label="Reset floor plan scale"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Blueprint Image Container */}
              <div className="relative aspect-4/3 sm:aspect-16/10 flex items-center justify-center overflow-hidden bg-white p-4 rounded-xs border border-[#141414]/6">
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

              {/* Sub-Plan Switcher Chips if multiple facings exist */}
              {availablePlans.length > 1 && (
                <div className="flex items-center gap-3 pt-2 overflow-x-auto">
                  <span className="text-[10px] font-mono uppercase text-[#8C7A65]">
                    SELECT VARIANT:
                  </span>
                  {availablePlans.map((plan) => (
                    <button
                      key={plan.title}
                      onClick={() => {
                        setSelectedPlan(plan);
                        setZoomLevel(1);
                      }}
                      className={`px-3 py-1.5 text-xs font-mono rounded-xs border transition-colors whitespace-nowrap focus:outline-hidden cursor-pointer ${
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
                    <span className="text-[#4A544F]">Orientation</span>
                    <span className="font-mono text-[#141414]">{selectedPlan.facing} Facing</span>
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
      </div>
    </section>
  );
}
