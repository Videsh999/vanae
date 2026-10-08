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

  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section spy
      const sections = ['architecture', 'residences', 'lifestyle', 'location', 'enquiry'];
      const scrollPos = window.scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          return;
        }
      }
      if (window.scrollY < 300) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navHeight = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { label: 'Architecture', target: 'architecture' },
    { label: 'Residences', target: 'residences' },
    { label: 'Club & Terraces', target: 'lifestyle' },
    { label: 'Site & Location', target: 'location' },
    { label: 'Consultation', target: 'enquiry' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-out ${
          isScrolled
            ? 'py-4 bg-white/95 backdrop-blur-md border-b border-[#141414]/6 shadow-xs'
            : 'py-6 bg-gradient-to-b from-white/70 via-white/20 to-transparent'
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
          <nav className="hidden lg:flex items-center gap-9 text-[11px] uppercase tracking-[0.22em] font-mono font-normal">
            {navLinks.map((link) => {
              const isActive = activeSection === link.target;
              return (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.target)}
                  className={`relative py-1 transition-colors focus:outline-hidden cursor-pointer ${
                    isActive ? 'text-[#141414] font-medium' : 'text-[#141414]/65 hover:text-[#141414]'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-[#8C7A65] transition-all duration-300" />
                  )}
                </button>
              );
            })}
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
