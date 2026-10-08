'use client';

import React, { useState, useEffect } from 'react';
import { FullscreenMenu } from './FullscreenMenu';
import { Menu, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnquire: () => void;
}

export function Navbar({ onOpenEnquire }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Architecture', target: 'architecture' },
    { label: 'Residences', target: 'residences' },
    { label: 'Experience', target: 'experience' },
    { label: 'Amenities', target: 'amenities' },
    { label: 'Location', target: 'location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? 'py-4 bg-white/95 backdrop-blur-md border-b border-[#141414]/6 shadow-xs'
            : 'py-6 bg-white/80 backdrop-blur-xs border-b border-black/3'
        } text-[#141414]`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Left: Brand Wordmark */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 focus:outline-hidden group"
            aria-label="Vanae Home"
          >
            <span className="font-serif text-2xl tracking-[0.24em] font-light text-[#141414] uppercase group-hover:text-[#8A7D6B] transition-colors">
              VANAE
            </span>
            <span className="hidden sm:inline-block w-px h-3.5 bg-[#141414]/15" />
            <span className="hidden sm:inline-block text-[10px] font-mono tracking-[0.2em] text-[#8A7D6B] uppercase">
              HYDERABAD
            </span>
          </button>

          {/* Center: Minimal Editorial Navigation */}
          <nav className="hidden md:flex items-center gap-9 text-[11px] uppercase tracking-[0.22em] font-mono font-normal">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.target)}
                className="text-[#141414]/75 hover:text-[#141414] transition-colors relative py-1 focus:outline-hidden"
              >
                <span>{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Right: Enquire & Menu Trigger */}
          <div className="flex items-center gap-6 sm:gap-8">
            <button
              onClick={onOpenEnquire}
              className="text-[11px] uppercase tracking-[0.22em] font-mono font-medium pb-0.5 border-b border-[#141414]/40 hover:border-[#141414] text-[#141414] transition-all focus:outline-hidden"
            >
              Enquire
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] font-mono text-[#141414] hover:text-[#8A7D6B] transition-colors focus:outline-hidden"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-4 h-4" />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Editorial Menu Drawer */}
      <FullscreenMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={scrollToSection}
        onOpenEnquire={onOpenEnquire}
      />
    </>
  );
}
