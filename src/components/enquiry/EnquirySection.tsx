'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface EnquirySectionProps {
  onOpenEnquire?: () => void;
}

export function EnquirySection({ onOpenEnquire }: EnquirySectionProps) {
  return (
    <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-[#061811] text-[#FAF8F5]">
      {/* Full-width Architectural Image Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/architecture-skyline.jpg"
          alt="Vanae Architecture"
          className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Centered Minimal Content */}
      <div className="relative z-10 max-w-xl mx-auto px-6 text-center space-y-6">
        <div className="text-[10px] font-mono uppercase tracking-[0.35em] text-[#C5A880]">
          PRIVATE VIEWING
        </div>

        <h2 className="font-serif text-5xl sm:text-7xl font-light text-[#FAF8F5]">
          Experience Vanae.
        </h2>

        <div className="pt-2">
          <button
            onClick={onOpenEnquire}
            className="btn-editorial text-[#FAF8F5] hover:text-[#C5A880] mx-auto focus:outline-hidden"
          >
            <span>Request a Private Viewing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
