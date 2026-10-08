import React from 'react';

interface VanaeLogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: 'full' | 'motif' | 'wordmark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function VanaeMotif({ className = 'w-12 h-10', color = 'url(#vanaeGold)' }: { className?: string; color?: string }) {
  return (
    <svg
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="VANAE Root Motif"
    >
      <defs>
        <linearGradient id="vanaeGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFCAAA" />
          <stop offset="50%" stopColor="#C5A880" />
          <stop offset="100%" stopColor="#9E7F56" />
        </linearGradient>
      </defs>
      {/* Contoured organic root lines echoing brochure motif */}
      <path
        d="M 10 10 C 50 12 70 45 80 110 C 90 45 110 12 150 10"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path
        d="M 22 22 C 55 24 72 50 80 100 C 88 50 105 24 138 22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M 34 34 C 60 36 74 55 80 90 C 86 55 100 36 126 34"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M 46 46 C 65 48 76 60 80 80 C 84 60 95 48 114 46"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M 58 58 C 70 60 78 65 80 72 C 82 65 90 60 102 58"
        stroke={color}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function VanaeLogo({
  className = '',
  showTagline = false,
  variant = 'full',
  size = 'md',
}: VanaeLogoProps) {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-9',
    lg: 'h-12',
    xl: 'h-16',
  };

  const textSizes = {
    sm: 'text-xl tracking-[0.25em]',
    md: 'text-2xl sm:text-3xl tracking-[0.28em]',
    lg: 'text-3xl sm:text-4xl tracking-[0.3em]',
    xl: 'text-4xl sm:text-6xl tracking-[0.32em]',
  };

  return (
    <div className={`inline-flex flex-col items-center select-none ${className}`}>
      {variant !== 'motif' && (
        <span
          className={`font-serif uppercase font-light text-transparent bg-clip-text bg-gradient-to-r from-[#DFCAAA] via-[#C5A880] to-[#9E7F56] ${textSizes[size]}`}
          style={{ letterSpacing: '0.28em', paddingLeft: '0.28em' }}
        >
          VANAE
        </span>
      )}

      {variant !== 'wordmark' && (
        <VanaeMotif
          className={`mt-1 text-[#C5A880] ${
            size === 'sm' ? 'w-8 h-6' : size === 'md' ? 'w-12 h-9' : size === 'lg' ? 'w-16 h-12' : 'w-24 h-16'
          }`}
        />
      )}

      {showTagline && (
        <span
          className="mt-2 text-[0.625rem] sm:text-[0.6875rem] uppercase font-sans tracking-[0.28em] text-[#C5A880]/90 font-medium"
        >
          The Art of Rooted Living
        </span>
      )}
    </div>
  );
}
