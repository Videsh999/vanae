'use client';

import React from 'react';
import { motion } from 'framer-motion';

export function RootedLivingSection() {
  const metrics = [
    { value: '36', label: 'FLOORS', desc: 'Monolithic shear wall engineering' },
    { value: '6', label: 'TOWERS', desc: 'Aerodynamic separation & corner homes' },
    { value: '11 FT', label: 'CEILING VOLUMES', desc: 'Expansive natural light & airflow' },
    { value: '14', label: 'ACRES', desc: '80% open living landscape' },
    { value: '1,00,000', label: 'SFT CLUBHOUSE', desc: 'Multi-level realm of society & wellness' },
  ];

  return (
    <section
      id="rooted"
      className="relative w-full py-28 sm:py-36 bg-white text-[#141414] overflow-hidden border-t border-[#141414]/8"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-12 relative z-10 space-y-20">
        {/* Editorial Eyebrow & Hero Statement */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[10px] font-mono uppercase tracking-[0.34em] text-[#8C7A65] font-medium"
          >
            02 — THE ART OF ROOTED LIVING
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-[#141414] leading-[1.18] tracking-tight"
          >
            “An architectural sanctuary where thirty-six floors of vertical elegance remain deeply anchored to the earth below.”
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xs sm:text-sm text-[#4A544F] font-light max-w-2xl mx-auto leading-relaxed"
          >
            VANAE is conceived as an elevated ecosystem in Kollur. Six soaring towers sculpted to rise with quiet restraint, offering unobstructed 270° horizons while nurturing rich botanical life at every level.
          </motion.p>
        </div>

        {/* Architectural Metrics Ledger Strip */}
        <div className="pt-8 border-t border-[#141414]/8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
            {metrics.map((m, idx) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`space-y-1.5 text-left border-l-0 lg:border-l border-[#141414]/10 lg:pl-6 first:pl-0 first:border-l-0 ${
                  idx === 4 ? 'col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-[#141414] tracking-tight">
                  {m.value}
                </div>
                <div className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#8C7A65] font-medium">
                  {m.label}
                </div>
                <p className="text-[11px] font-sans text-[#4A544F] font-light leading-snug hidden sm:block">
                  {m.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
