'use client';

import React, { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check touch device or reduced motion
    const touch = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (touch || reducedMotion) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      // Check interactive targets
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
        setIsHovered(true);
        return;
      }

      const interactive = target.closest('button, a, input, select, textarea, [role="button"]');
      if (interactive) {
        setIsHovered(true);
        setCursorText('');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  // Smooth trailing position
  useEffect(() => {
    if (isTouch) return;
    let animationFrameId: number;

    const follow = () => {
      setTrailingPos((prev) => {
        const dx = position.x - prev.x;
        const dy = position.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18,
        };
      });
      animationFrameId = requestAnimationFrame(follow);
    };

    animationFrameId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouch]);

  if (isTouch || !isVisible) return null;

  return (
    <>
      {/* Central pinpoint */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-50 rounded-full bg-[#c5a880] transition-opacity duration-300"
        style={{
          width: '6px',
          height: '6px',
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          opacity: isHovered && cursorText ? 0 : 0.8,
        }}
      />

      {/* Trailing follower ring / label capsule */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full transition-all duration-300 ease-out ${
          cursorText
            ? 'h-14 w-14 border border-[#c5a880]/80 bg-[#061811]/90 backdrop-blur-md shadow-lg shadow-[#061811]/50'
            : isHovered
            ? 'h-10 w-10 border border-[#c5a880]/60 bg-[#c5a880]/10 backdrop-blur-xs'
            : 'h-8 w-8 border border-[#c5a880]/30'
        }`}
        style={{
          transform: `translate3d(${trailingPos.x - (cursorText ? 28 : isHovered ? 20 : 16)}px, ${
            trailingPos.y - (cursorText ? 28 : isHovered ? 20 : 16)
          }px, 0)`,
        }}
      >
        {cursorText && (
          <span className="text-[9px] font-medium tracking-[0.2em] text-[#faf8f5] uppercase select-none">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
