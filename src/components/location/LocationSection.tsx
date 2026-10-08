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

  return (
    <section
      id="location"
      className="relative w-full py-28 sm:py-36 bg-[#FAF9F6] text-[#141414] overflow-hidden border-t border-[#141414]/8"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 relative z-10 space-y-16">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-4 border-b border-[#141414]/8">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#8C7A65] font-medium">
              09 — LOCATION & CONNECTIVITY
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#141414] leading-[1.12]">
              Kollur · ORR Exit 2. <br />
              <span className="italic text-[#8C7A65]">West Hyderabad.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 pb-1">
            <p className="font-sans text-xs sm:text-sm text-[#4A544F] font-light leading-relaxed">
              Situated directly along the arterial Nehru Outer Ring Road corridor, moments from Neopolis and Kokapet yet enveloped in quiet natural breathing room.
            </p>
          </div>
        </div>

        {/* Asymmetrical Split: Editorial Map + Transit Ledger */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Location Map (Span 7) */}
          <div className="lg:col-span-7 relative aspect-16/10 sm:aspect-21/11 overflow-hidden rounded-xs border border-[#141414]/10 bg-white shadow-xs group">
            <img
              src="/assets/location-map.jpg"
              alt="VANAE Location Map — Kollur ORR Exit 2 Hyderabad"
              className="w-full h-full object-cover object-center filter contrast-102 group-hover:scale-101 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-6 left-6 px-3.5 py-1.5 bg-white/95 backdrop-blur-md rounded-xs border border-[#141414]/8 text-[10px] font-mono uppercase tracking-[0.22em] text-[#141414]">
              VANAE · NEHRU OUTER RING ROAD EXIT 2 · KOLLUR
            </div>
          </div>

          {/* Right: Transit Ledger (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C7A65]">
                DRIVE TIMES & ARTERIAL PROXIMITY
              </span>
              <h3 className="font-serif text-2xl font-light text-[#141414]">
                Minutes from every epicenter.
              </h3>
            </div>

            <div className="space-y-4 divide-y divide-[#141414]/8">
              {hubs.map((hub) => (
                <div key={hub.name} className="pt-4 first:pt-0 flex items-start gap-4">
                  <span className="font-mono text-xs text-[#8C7A65] font-semibold tracking-wider whitespace-nowrap pt-0.5 min-w-[70px]">
                    {hub.time}
                  </span>
                  <div className="space-y-0.5">
                    <h4 className="font-serif text-base text-[#141414] font-normal">
                      {hub.name}
                    </h4>
                    <p className="font-sans text-xs text-[#4A544F] font-light leading-relaxed">
                      {hub.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-xs bg-white border border-[#141414]/8 space-y-1">
              <span className="text-[9.5px] font-mono uppercase tracking-widest text-[#8C7A65]">
                SURROUNDING CORRIDOR
              </span>
              <p className="text-xs font-sans text-[#4A544F] font-light leading-relaxed">
                Direct access to Gachibowli and the Financial District via the high-speed, signal-free 8-lane expressway.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
