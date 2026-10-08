'use client';

import React, { useState } from 'react';
import { SmoothScroll } from '@/components/common/SmoothScroll';
import { Navbar } from '@/components/navigation/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { RootedLivingSection } from '@/components/rooted/RootedLivingSection';
import { ArchitectureSection } from '@/components/architecture/ArchitectureSection';
import { ResidencesSection } from '@/components/residences/ResidencesSection';
import { LifestyleSection } from '@/components/lifestyle/LifestyleSection';
import { LocationSection } from '@/components/location/LocationSection';
import { EnquirySection } from '@/components/enquiry/EnquirySection';
import { FooterSection } from '@/components/footer/FooterSection';
import { EnquiryModal } from '@/components/enquiry/EnquiryModal';

export default function Home() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedPlanForEnquiry, setSelectedPlanForEnquiry] = useState<string | undefined>(undefined);

  const handleOpenEnquire = (planTitle?: string) => {
    setSelectedPlanForEnquiry(planTitle);
    setIsEnquiryModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navHeight = 80;
      const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  return (
    <SmoothScroll>
      {/* Editorial Fixed Header */}
      <Navbar onOpenEnquire={() => handleOpenEnquire()} />

      {/* 
        STREAMLINED ARCHITECTURAL CHAPTER PROGRESSION:
        01 — THE ATMOSPHERIC CINEMA (Hero)
        02 — THE ARCHITECTURAL VISION & CREDENTIALS (Philosophy & 6-Metric Ledger)
        03 — ARCHITECTURAL ELEVATION & STRATIFICATION (Facade + The Way We Elevate)
        04 — RESIDENCE BLUEPRINTS & DRAFTING (Interactive Drafting Atelier)
        05 — BIOPHILIC LIVING & THE 1,00,000 SFT CLUBHOUSE (Sky Terraces + Club + 4 Lifestyle Pillars)
        06 — MASTER SITE PLAN & STRATEGIC CARTOGRAPHY (14-Acre Site + ORR Exit 2 Drive Times)
        07 — PRIVATE CONSULTATION & CRAFT (Viewing Request + Engineering Specs)
        08 — ARCHITECTURAL COLOPHON & FOOTER (Permissions & Legal Notices)
      */}
      <main className="relative flex flex-col w-full bg-white text-[#141414]">
        {/* 01 — Daytime Architectural Cinema Hero */}
        <HeroSection onExplore={() => handleScrollToSection('rooted')} />

        {/* 02 — The Architectural Vision & 6-Point Project Ledger */}
        <RootedLivingSection />

        {/* 03 — Vertical Discipline, Facade & Stratification Cross-Section */}
        <ArchitectureSection />

        {/* 04 — Residence Blueprints & Interactive Drafting Atelier */}
        <ResidencesSection onOpenEnquire={(plan) => handleOpenEnquire(plan)} />

        {/* 05 — Biophilic Sky Terraces, 1 Lakh Sft Club & Lifestyle Pillars */}
        <LifestyleSection />

        {/* 06 — 14-Acre Master Site Plan & Regional Cartography */}
        <LocationSection />

        {/* 07 — Private Consultation & Technical Specifications */}
        <EnquirySection onOpenEnquire={() => handleOpenEnquire()} />
      </main>

      {/* 08 — Architectural Colophon, Permissions & Legal Notices */}
      <FooterSection />

      {/* Private Consultation Modal for Quick Enquire Triggers */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultPlan={selectedPlanForEnquiry}
      />
    </SmoothScroll>
  );
}
