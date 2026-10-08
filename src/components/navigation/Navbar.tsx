'use client';

import React, { useState, useEffect } from 'react';
import { VanaeLogo } from '../common/VanaeLogo';
import { FullscreenMenu } from './FullscreenMenu';
import { ArrowRight, Menu } from 'lucide-react';

interface NavbarProps {
  onOpenEnquire: () => void;
}

export function Navbar({ onOpenEnquire }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
    { label: 'Overview', target: 'overview' },
    { label: 'Architecture', target: 'architecture' },
    { label: 'Residences', target: 'residences' },
    { label: 'Amenities', target: 'amenities' },
    { label: 'Location', target: 'location' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out ${
          isScrolled
            ? 'py-4 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#141C18]/8 text-[#141C18] shadow-xs'
            : 'py-7 bg-gradient-to-b from-black/50 via-black/20 to-transparent text-[#FAF8F5]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-12 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 focus:outline-hidden"
            aria-label="Vanae Home"
          >
            <VanaeLogo size={isScrolled ? 'sm' : 'md'} variant="full" />
          </button>

          {/* Center: Quiet Architectural Navigation */}
          <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.25em] font-sans font-light">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.target)}
                className={`transition-colors relative py-1 focus:outline-hidden ${
                  isScrolled
                    ? 'text-[#141C18]/80 hover:text-[#141C18]'
                    : 'text-[#FAF8F5]/80 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
              </button>
            ))}
          </nav>

          {/* Right: Enquire & Menu */}
          <div className="flex items-center gap-6 sm:gap-8">
            <button
              onClick={onOpenEnquire}
              className={`text-[10.5px] uppercase tracking-[0.25em] font-medium pb-0.5 border-b transition-all focus:outline-hidden ${
                isScrolled
                  ? 'text-[#141C18] border-[#141C18]/40 hover:border-[#141C18]'
                  : 'text-[#FAF8F5] border-[#FAF8F5]/50 hover:border-white'
              }`}
            >
              Enquire
            </button>

            <button
              onClick={() => setMenuOpen(true)}
              className={`flex items-center gap-2 text-[10.5px] uppercase tracking-[0.25em] transition-colors focus:outline-hidden ${
                isScrolled ? 'text-[#141C18]' : 'text-[#FAF8F5]'
              }`}
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-4 h-4" />
              <span className="hidden sm:inline">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Architectural Menu Drawer */}
      <FullscreenMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onNavigate={scrollToSection}
        onOpenEnquire={onOpenEnquire}
      />
    </>
  );
}
