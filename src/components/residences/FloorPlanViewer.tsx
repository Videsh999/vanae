'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VANAE_DATA, FloorPlan } from '@/data/vanae-data';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, X, ArrowRight } from 'lucide-react';

interface FloorPlanViewerProps {
  onOpenEnquire: (planTitle?: string) => void;
  selectedConfig?: '3-bhk' | '4-bhk';
}

export function FloorPlanViewer({ onOpenEnquire, selectedConfig }: FloorPlanViewerProps) {
  const [selectedPlan, setSelectedPlan] = useState<FloorPlan>(
    selectedConfig === '4-bhk' ? VANAE_DATA.floorPlans[0] : VANAE_DATA.floorPlans[2]
  );
  const [activeBlock, setActiveBlock] = useState<string>(
    selectedConfig === '4-bhk' ? 'Block A' : 'B & C'
  );
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const blockTabs = [
    { label: 'BLOCK A', area: '4400 SFT', key: 'Block A' },
    { label: 'BLOCKS B & C', area: '2165 · 2555 SFT', key: 'B & C' },
    { label: 'BLOCKS D & E', area: '1765 · 2315 · 2555 SFT', key: 'D & E' },
    { label: 'BLOCK F', area: '1765 · 2555 SFT', key: 'F' },
  ];

  const availablePlans = VANAE_DATA.floorPlans.filter((p) => {
    if (activeBlock === 'Block A') return p.block.includes('Block A');
    if (activeBlock === 'B & C') return p.block.includes('B') || p.block.includes('C');
    if (activeBlock === 'D & E') return p.block.includes('D') || p.block.includes('E');
    if (activeBlock === 'F') return p.block.includes('F');
    return true;
  });

  const handleBlockChange = (blockKey: string) => {
    setActiveBlock(blockKey);
    const firstPlan = VANAE_DATA.floorPlans.find((p) => {
      if (blockKey === 'Block A') return p.block.includes('Block A');
      if (blockKey === 'B & C') return p.block.includes('B') || p.block.includes('C');
      if (blockKey === 'D & E') return p.block.includes('D') || p.block.includes('E');
      if (blockKey === 'F') return p.block.includes('F');
      return true;
    });
    if (firstPlan) setSelectedPlan(firstPlan);
    setZoomLevel(1);
  };

  return (
    <section
      id="floorplans"
      className="relative w-full py-36 sm:py-48 bg-[#F6F4F0] text-[#141C18] overflow-hidden border-t border-[#141C18]/5"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-12">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#141C18]/10">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8A7D6B]">
              ARCHITECTURAL DRAWINGS
            </span>
            <h2 className="font-serif text-4xl sm:text-6xl font-light text-[#141C18]">
              Floor plans.
            </h2>
          </div>

          {/* Understated Block Switcher */}
          <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
            {blockTabs.map((tab) => {
              const isSelected = activeBlock === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => handleBlockChange(tab.key)}
                  className="group flex flex-col items-start gap-0.5 focus:outline-hidden"
                >
                  <span
                    className={`text-xs font-mono uppercase tracking-widest transition-colors ${
                      isSelected ? 'text-[#141C18] font-medium' : 'text-[#141C18]/40 group-hover:text-[#141C18]/70'
                    }`}
                  >
                    {tab.label}
                  </span>
                  <span
                    className={`h-px transition-all duration-300 ${
                      isSelected ? 'w-full bg-[#141C18]' : 'w-0 group-hover:w-3 bg-black/20'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Minimal Orientation Bar */}
        <div className="flex items-center gap-4 flex-wrap text-xs font-mono text-[#8A7D6B]">
          <span>VARIANTS:</span>
          {availablePlans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => {
                setSelectedPlan(plan);
                setZoomLevel(1);
              }}
              className={`pb-0.5 border-b transition-colors uppercase tracking-wider text-[11px] ${
                selectedPlan.id === plan.id
                  ? 'text-[#141C18] border-[#141C18] font-medium'
                  : 'text-[#4A544F]/60 border-transparent hover:text-[#141C18]'
              }`}
            >
              {plan.facing} ({plan.areaSft} SFT)
            </button>
          ))}
        </div>

        {/* Architectural Drawing Canvas */}
        <div className="relative bg-white border border-[#141C18]/8 rounded-xs p-6 sm:p-12 shadow-xs min-h-[500px] flex flex-col justify-between">
          {/* Subtle Top Metadata & Tools */}
          <div className="flex items-center justify-between pb-4 border-b border-[#141C18]/5">
            <div>
              <div className="font-serif text-2xl text-[#141C18]">
                {selectedPlan.title}
              </div>
              <div className="text-xs font-mono text-[#8A7D6B] tracking-wider mt-0.5">
                {selectedPlan.type} · {selectedPlan.bedrooms}
              </div>
            </div>

            {/* Invisible / Quiet Zoom Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setZoomLevel((z) => Math.min(z + 0.25, 2.5))}
                className="p-2 text-[#4A544F] hover:text-[#141C18] transition-colors"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel((z) => Math.max(z - 0.25, 1))}
                className="p-2 text-[#4A544F] hover:text-[#141C18] transition-colors"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={() => setZoomLevel(1)}
                className="p-2 text-[#4A544F] hover:text-[#141C18] transition-colors"
                aria-label="Reset zoom"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsFullscreen(true)}
                className="p-2 text-[#4A544F] hover:text-[#141C18] transition-colors ml-1"
                aria-label="Fullscreen plan"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Drawing Presentation */}
          <div className="relative flex-1 py-8 flex items-center justify-center overflow-hidden">
            <motion.img
              key={selectedPlan.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: zoomLevel }}
              transition={{ duration: 0.4 }}
              src={selectedPlan.image2d}
              alt={selectedPlan.title}
              className="max-h-[520px] max-w-full object-contain filter contrast-105"
            />
          </div>

          {/* Bottom Action & Footnote */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#141C18]/5 text-xs">
            <div className="font-mono text-[#4A544F]/70 tracking-wider">
              11-FOOT CLEAR HEIGHT · PRIVATE TERRACE
            </div>

            <button
              onClick={() => onOpenEnquire(selectedPlan.title)}
              className="btn-editorial text-[#141C18] self-start sm:self-auto"
            >
              <span>Inquire This Residence</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Plan Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#FAF8F5]/98 backdrop-blur-md flex flex-col p-6 sm:p-12 justify-between"
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#141C18]/10">
              <span className="font-serif text-2xl text-[#141C18]">
                {selectedPlan.title}
              </span>
              <button
                onClick={() => setIsFullscreen(false)}
                className="p-2 text-[#141C18] hover:opacity-60"
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
