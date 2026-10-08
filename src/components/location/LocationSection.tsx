'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function LocationSection() {
  const hubs = [
    { time: '08 MINS', name: 'Neopolis CBD', desc: 'Central high-rise business and commercial nexus' },
    { time: '10 MINS', name: 'Kokapet SEZ', desc: 'Premier tech headquarters and financial towers' },
    { time: '12 MINS', name: 'Financial District', desc: 'Global corporate institutions & Gachibowli' },
    { time: '05 MINS', name: 'Global K-12 Campuses', desc: 'The Gaudium, Samisti, and Meru International' },
    { time: '30 MINS', name: 'International Airport', desc: 'Seamless signal-free transit via ORR Exit 2' },
  ];

  const siteMetrics = [
    { label: 'OPEN LANDSCAPE', value: '80%', note: 'Living forest canopy & water courts' },
    { label: 'MASTER SITE', value: '14 ACRES', note: 'Continuous pedestrian-first circulation' },
    { label: 'SOARING TOWERS', value: '06 BLOCKS', note: 'Stratified residential architecture' },
    { label: 'ARTERIAL ACCESS', value: 'ORR EXIT 2', note: 'Direct signal-free 8-lane corridor' },
  ];

  return (
    <section
      id="location"
      className="relative w-full py-16 sm:py-20 bg-white text-[#141414] overflow-hidden border-t border-[#141414]/8 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-12 sm:space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-end pb-4 border-b border-[#141414]/8">
          <div className="lg:col-span-8 space-y-2.5">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C7A65] font-medium">
              05 — MASTER SITE PLAN & STRATEGIC CARTOGRAPHY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#141414] leading-[1.14]">
              14 Acres in Kollur. <br />
              <span className="italic text-[#8C7A65]">Minutes from every epicenter.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-1">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              Situated directly along the arterial Nehru Outer Ring Road Exit 2 corridor, moments from Neopolis and Kokapet yet enveloped in eighty percent open nature.
            </p>
          </div>
        </div>

        {/* Dual Master Spread: 14-Acre Site Plan + Strategic Location Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left: 14-Acre Master Site Plan */}
          <div className="lg:col-span-6 bg-[#FAF9F6] p-6 sm:p-8 rounded-xs border border-[#141414]/10 shadow-xs flex flex-col justify-between space-y-5">
            <div className="space-y-1 pb-3 border-b border-[#141414]/8">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65]">
                ARCHITECTURAL SITE DRAWING
              </span>
              <h3 className="font-serif text-2xl font-light text-[#141414]">
                14-Acre Master Choreography
              </h3>
            </div>

            <div className="relative aspect-16/10 flex items-center justify-center overflow-hidden bg-white p-3 rounded-xs border border-[#141414]/6 min-h-[300px]">
              <img
                src="/assets/masterplan-full.jpg"
                alt="VANAE Master Site Plan Drawing"
                className="max-h-full max-w-full object-contain filter contrast-105"
              />
            </div>

            <div className="pt-2 text-[10px] font-mono uppercase tracking-widest text-[#8C7A65] text-center">
              SIX RESIDENTIAL BLOCKS · CENTRAL LANDSCAPE · DROP-OFF PLAZAS
            </div>
          </div>

          {/* Right: Location Map & Transit Times Schedule */}
          <div className="lg:col-span-6 bg-[#FAF9F6] p-6 sm:p-8 rounded-xs border border-[#141414]/10 shadow-xs flex flex-col justify-between space-y-5">
            <div className="space-y-1 pb-3 border-b border-[#141414]/8">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65]">
                REGIONAL CARTOGRAPHY & TRANSIT
              </span>
              <h3 className="font-serif text-2xl font-light text-[#141414]">
                Kollur · ORR Exit 2
              </h3>
            </div>

            <div className="relative aspect-16/10 overflow-hidden rounded-xs border border-[#141414]/6 bg-white min-h-[220px]">
              <img
                src="/assets/location-map.jpg"
                alt="VANAE Location Map — Kollur ORR Exit 2"
                className="w-full h-full object-cover object-center filter contrast-102"
              />
            </div>

            {/* Drive Times Schedule */}
            <div className="space-y-2.5 divide-y divide-[#141414]/8 pt-1">
              {hubs.map((h) => (
                <div key={h.name} className="pt-2 first:pt-0 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[9.5px] text-[#141414] font-medium tracking-wider px-2 py-0.5 rounded-xs bg-white border border-[#141414]/10">
                      {h.time}
                    </span>
                    <span className="font-serif text-sm text-[#141414]">
                      {h.name}
                    </span>
                  </div>
                  <span className="font-sans text-[11px] text-[#4A544F] font-light hidden sm:inline">
                    {h.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4-Card Site Highlights Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-[#141414]/8">
          {siteMetrics.map((sm) => (
            <div key={sm.label} className="p-5 rounded-xs bg-[#FAF9F6] border border-[#141414]/8 space-y-1">
              <span className="text-[9.5px] font-mono uppercase tracking-widest text-[#8C7A65]">
                {sm.label}
              </span>
              <div className="font-serif text-2xl text-[#141414] font-light">
                {sm.value}
              </div>
              <p className="text-[11px] font-sans text-[#4A544F] font-light">
                {sm.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
