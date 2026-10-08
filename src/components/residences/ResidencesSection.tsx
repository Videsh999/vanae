'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VANAE_DATA, FloorPlan } from '@/data/vanae-data';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, X, ArrowRight } from 'lucide-react';

interface ResidencesSectionProps {
  onOpenEnquire: (planTitle?: string) => void;
}

export function ResidencesSection({ onOpenEnquire }: ResidencesSectionProps) {
  const [selectedConfig, setSelectedConfig] = useState<'3-bhk' | '4-bhk'>('3-bhk');
  const [activeBlock, setActiveBlock] = useState<string>('B & C');
  const [selectedPlan, setSelectedPlan] = useState<FloorPlan>(VANAE_DATA.floorPlans[2]);
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const blockTabs = [
    { label: 'BLOCK A', area: '4400 SFT', key: 'Block A', config: '4-bhk' as const },
    { label: 'BLOCKS B & C', area: '2165 · 2555 SFT', key: 'B & C', config: '3-bhk' as const },
    { label: 'BLOCKS D & E', area: '1765 · 2315 · 2555 SFT', key: 'D & E', config: '3-bhk' as const },
    { label: 'BLOCK F', area: '1765 · 2555 SFT', key: 'F', config: '3-bhk' as const },
  ];

  const handleSelectConfig = (config: '3-bhk' | '4-bhk') => {
    setSelectedConfig(config);
    if (config === '4-bhk') {
      setActiveBlock('Block A');
      const plan = VANAE_DATA.floorPlans.find((p) => p.block.includes('Block A'));
      if (plan) setSelectedPlan(plan);
    } else {
      setActiveBlock('B & C');
      const plan = VANAE_DATA.floorPlans.find((p) => p.block.includes('B') || p.block.includes('C'));
      if (plan) setSelectedPlan(plan);
    }
    setZoomLevel(1);
  };

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
      className="relative w-full py-32 sm:py-44 bg-white text-[#141414] overflow-hidden border-t border-[#141414]/6"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Editorial Heading Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
              04 — RESIDENCES
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light text-[#141414] leading-[1.1]">
              Space to live <br />
              <span className="italic text-[#8A7D6B]">beautifully.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-2">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              Thoughtfully sculpted homes where 11-foot ceiling volumes and private sky terraces dissolve the boundary between indoors and horizon. Designed with zero common walls for total privacy.
            </p>
          </div>
        </div>

        {/* 3 BHK / 4 BHK Large Typography Selector (NO CARDS) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14 pb-8 border-b border-[#141414]/8">
          {/* 3 BHK Button */}
          <button
            onClick={() => handleSelectConfig('3-bhk')}
            className={`group text-left space-y-3 p-6 sm:p-8 rounded-xs border transition-all focus:outline-hidden ${
              selectedConfig === '3-bhk'
                ? 'bg-[#FAF9F6] border-[#141414]/30'
                : 'bg-white border-[#141414]/8 hover:border-[#141414]/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-4xl sm:text-6xl font-light text-[#141414]">
                3 BHK
              </span>
              <span className={`text-xs font-mono tracking-widest ${selectedConfig === '3-bhk' ? 'text-[#141414]' : 'text-[#8A7D6B]'}`}>
                {selectedConfig === '3-bhk' ? 'SELECTED' : 'EXPLORE'}
              </span>
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#8A7D6B]">
              1765 · 2165 · 2315 · 2555 SFT
            </div>
            <p className="font-sans text-xs text-[#4A544F] font-light leading-relaxed">
              Expansive drawing and living spaces with private sit-out balconies and morning east or evening west orientations across Blocks B, C, D, E & F.
            </p>
          </button>

          {/* 4 BHK Button */}
          <button
            onClick={() => handleSelectConfig('4-bhk')}
            className={`group text-left space-y-3 p-6 sm:p-8 rounded-xs border transition-all focus:outline-hidden ${
              selectedConfig === '4-bhk'
                ? 'bg-[#FAF9F6] border-[#141414]/30'
                : 'bg-white border-[#141414]/8 hover:border-[#141414]/20'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-4xl sm:text-6xl font-light text-[#141414]">
                4 BHK
              </span>
              <span className={`text-xs font-mono tracking-widest ${selectedConfig === '4-bhk' ? 'text-[#141414]' : 'text-[#8A7D6B]'}`}>
                {selectedConfig === '4-bhk' ? 'SELECTED' : 'EXPLORE'}
              </span>
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-[#8A7D6B]">
              4400 SFT · SIGNATURE GRAND RESIDENCES
            </div>
            <p className="font-sans text-xs text-[#4A544F] font-light leading-relaxed">
              Palatial layouts featuring formal drawing, family lounge, dry and wet kitchens, multipurpose salon, and private maid suite in Tower Block A.
            </p>
          </button>
        </div>

        {/* Architectural Floor Plan Drafting Viewer */}
        <div className="space-y-8">
          {/* Block Switcher Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#141414]/8">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#8A7D6B]">
              SELECT TOWER BLOCK:
            </div>
            <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
              {blockTabs.map((tab) => {
                const isSelected = activeBlock === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => handleBlockChange(tab)}
                    className="group flex flex-col items-start gap-1 pb-1 focus:outline-hidden"
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

          {/* Facing Variants */}
          <div className="flex items-center gap-4 flex-wrap text-xs font-mono text-[#8A7D6B]">
            <span className="text-[10px] uppercase tracking-wider">UNIT ORIENTATION:</span>
            {availablePlans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => {
                  setSelectedPlan(plan);
                  setZoomLevel(1);
                }}
                className={`pb-0.5 border-b transition-colors uppercase tracking-wider text-[11px] focus:outline-hidden ${
                  selectedPlan.id === plan.id
                    ? 'text-[#141414] border-[#141414] font-medium'
                    : 'text-[#4A544F]/60 border-transparent hover:text-[#141414]'
                }`}
              >
                {plan.facing} ({plan.areaSft} SFT)
              </button>
            ))}
          </div>

          {/* Architectural Drawing White Drafting Canvas */}
          <div className="relative bg-[#FAF9F6] border border-[#141414]/8 rounded-xs p-6 sm:p-12 shadow-xs min-h-[520px] flex flex-col justify-between">
            {/* Top Info & Zoom Tools */}
            <div className="flex items-center justify-between pb-4 border-b border-[#141414]/6">
              <div>
                <div className="font-serif text-2xl text-[#141414]">
                  {selectedPlan.title}
                </div>
                <div className="text-xs font-mono text-[#8A7D6B] tracking-wider mt-0.5">
                  {selectedPlan.type} · {selectedPlan.bedrooms} · {selectedPlan.areaSft} SFT
                </div>
              </div>

              {/* Zoom and Fullscreen Controls */}
              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))}
                  className="p-2 text-[#4A544F] hover:text-[#141414] transition-colors focus:outline-hidden"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 1))}
                  className="p-2 text-[#4A544F] hover:text-[#141414] transition-colors focus:outline-hidden"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel(1)}
                  className="p-2 text-[#4A544F] hover:text-[#141414] transition-colors focus:outline-hidden"
                  aria-label="Reset zoom"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsFullscreen(true)}
                  className="p-2 text-[#4A544F] hover:text-[#141414] transition-colors ml-1 focus:outline-hidden"
                  aria-label="Fullscreen plan"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Plan Display Area */}
            <div className="relative flex-1 py-8 flex items-center justify-center overflow-hidden">
              <motion.img
                key={selectedPlan.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, scale: zoomLevel }}
                transition={{ duration: 0.35 }}
                src={selectedPlan.image2d}
                alt={selectedPlan.title}
                className="max-h-[500px] max-w-full object-contain filter contrast-105"
              />
            </div>

            {/* Bottom Actions and Metadata */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#141414]/6 text-xs">
              <div className="font-mono text-[#4A544F]/70 tracking-wider text-[11px]">
                11-FOOT CEILING HEIGHT · ZERO COMMON WALLS · PRIVATE SKY BALCONY
              </div>

              <button
                onClick={() => onOpenEnquire(selectedPlan.title)}
                className="btn-editorial text-[#141414] self-start sm:self-auto focus:outline-hidden"
              >
                <span>Enquire This Residence</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Plan Lightbox */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/98 backdrop-blur-md flex flex-col p-6 sm:p-12 justify-between"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#141414]/10">
              <span className="font-serif text-2xl text-[#141414]">
                {selectedPlan.title} — {selectedPlan.areaSft} SFT
              </span>
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-2 text-[#141414] hover:opacity-60 focus:outline-hidden"
                aria-label="Close fullscreen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
              <img
                src={selectedPlan.image2d}
                alt={selectedPlan.title}
                className="max-h-[82vh] max-w-full object-contain filter contrast-105"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
