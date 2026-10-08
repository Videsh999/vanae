'use client';

import React from 'react';
import { VanaeLogo } from '../common/VanaeLogo';
import { ArrowUp } from 'lucide-react';

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#EFEBE4] text-[#141C18] border-t border-[#141C18]/10 overflow-hidden py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 space-y-16">
        {/* Top Tier: Brand & Back to Top */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 pb-12 border-b border-[#141C18]/10">
          <div className="space-y-4">
            <VanaeLogo size="lg" variant="full" />
            <p className="font-serif text-2xl sm:text-3xl font-light italic text-[#141C18]">
              The Art of Rooted Living.
            </p>
            <div className="text-xs font-mono uppercase tracking-widest text-[#8A7D6B]">
              KOLLUR · ORR EXIT 2 · HYDERABAD
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-[10.5px] font-mono uppercase tracking-widest text-[#141C18]/70 hover:text-[#141C18] transition-colors focus:outline-hidden"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Middle Tier: Simple Links & Addresses */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-xs font-sans font-light">
          {/* Navigation Links */}
          <div className="space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A7D6B]">
              INDEX
            </div>
            <div className="space-y-2 text-[#141C18]/80">
              {['Overview', 'Architecture', 'Residences', 'Floor Plans', 'Master Plan', 'Amenities', 'Clubhouse', 'Location'].map((item) => (
                <div key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                    className="hover:text-[#141C18] transition-colors"
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Addresses */}
          <div className="space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A7D6B]">
              LOCATIONS
            </div>
            <div className="space-y-3 text-[#4A544F]">
              <div>
                <span className="text-[#141C18] block font-medium">Site Address</span>
                Kollur Exit 2, Nehru Outer Ring Road, Hyderabad – 502300
              </div>
              <div>
                <span className="text-[#141C18] block font-medium">Corporate Office</span>
                Ravi Shankar Arcade, Gachibowli, Hyderabad – 500032
              </div>
            </div>
          </div>

          {/* Statutory Approvals & Developers */}
          <div className="space-y-3">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[#8A7D6B]">
              STATUTORY PERMISSIONS
            </div>
            <div className="space-y-2 text-[#4A544F]">
              <div className="font-mono text-[11px] text-[#141C18]">
                HMDA Permission No: 006436/LO/HMDA 1500/MED/2024TG
              </div>
              <div className="italic text-[#8A7D6B]">
                RERA Registration Under Process
              </div>
              <div className="pt-2 text-[11px] text-[#141C18]">
                A Joint Development by Nestmakers & Elegans Group
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Clean Minimal Copyright */}
        <div className="pt-8 border-t border-[#141C18]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10.5px] text-[#4A544F]/70 font-sans">
          <div>
            © 2025–2026 VANAE. All rights reserved.
          </div>
          <div className="text-[10px] font-mono uppercase tracking-widest text-[#8A7D6B]">
            THE ART OF ROOTED LIVING
          </div>
        </div>
      </div>
    </footer>
  );
}
