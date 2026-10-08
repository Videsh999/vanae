'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OpeningExperienceProps {
  onComplete: () => void;
}

export function OpeningExperience({ onComplete }: OpeningExperienceProps) {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Elegant 2.2 second automatic reveal
    const timer = setTimeout(() => {
      handleComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  const handleComplete = () => {
    setIsFinished(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="opening-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#061811] text-[#faf8f5]"
        >
          {/* Subtle architectural grid lines in background */}
          <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

          {/* Skip Button */}
          <button
            onClick={handleComplete}
            className="absolute top-8 right-8 text-[11px] uppercase tracking-[0.25em] text-[#c5a880]/70 hover:text-[#c5a880] transition-colors py-2 px-4 border border-[#c5a880]/20 hover:border-[#c5a880]/60 rounded-full"
            aria-label="Skip Introduction"
          >
            Enter Gallery
          </button>

          {/* Central Logo & Flowing Motif Sequence */}
          <div className="relative flex flex-col items-center px-6 text-center max-w-md">
            {/* Developing contour lines */}
            <svg
              viewBox="0 0 160 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-20 h-16 sm:w-24 sm:h-20 mb-6 text-[#c5a880]"
            >
              <defs>
                <linearGradient id="introGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#DFCAAA" />
                  <stop offset="50%" stopColor="#C5A880" />
                  <stop offset="100%" stopColor="#9E7F56" />
                </linearGradient>
              </defs>

              <motion.path
                d="M 10 10 C 50 12 70 45 80 110 C 90 45 110 12 150 10"
                stroke="url(#introGold)"
                strokeWidth="2.2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.path
                d="M 22 22 C 55 24 72 50 80 100 C 88 50 105 24 138 22"
                stroke="url(#introGold)"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.3, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.path
                d="M 34 34 C 60 36 74 55 80 90 C 86 55 100 36 126 34"
                stroke="url(#introGold)"
                strokeWidth="1.8"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.path
                d="M 46 46 C 65 48 76 60 80 80 C 84 60 95 48 114 46"
                stroke="url(#introGold)"
                strokeWidth="1.6"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>

            {/* Brand Typography */}
            <motion.h1
              initial={{ opacity: 0, letterSpacing: '0.45em', y: 10 }}
              animate={{ opacity: 1, letterSpacing: '0.32em', y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-[#DFCAAA] via-[#C5A880] to-[#9E7F56] pl-[0.32em]"
            >
              VANAE
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#c5a880]/80 font-sans font-light"
            >
              The Art of Rooted Living
            </motion.p>

            {/* Kollur ORR Exit 2 location annotation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mt-8 text-[9px] uppercase tracking-[0.3em] text-[#faf8f5]/50 flex items-center gap-2"
            >
              <span>Kollur</span>
              <span className="w-1 h-1 rounded-full bg-[#c5a880]/60 inline-block" />
              <span>ORR Exit 2</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
