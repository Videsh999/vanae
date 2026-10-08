'use client';

import React, { useState } from 'react';
import { SmoothScroll } from '@/components/common/SmoothScroll';
import { Navbar } from '@/components/navigation/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { RootedLivingSection } from '@/components/rooted/RootedLivingSection';
import { ArchitectureSection } from '@/components/architecture/ArchitectureSection';
import { ResidencesSection } from '@/components/residences/ResidencesSection';
import { ElevateSection } from '@/components/architecture/ElevateSection';
import { AmenitiesSection } from '@/components/amenities/AmenitiesSection';
import { MasterPlanSection } from '@/components/masterplan/MasterPlanSection';
import { LocationSection } from '@/components/location/LocationSection';
import { SpecificationsSection } from '@/components/specifications/SpecificationsSection';
import { GallerySection } from '@/components/gallery/GallerySection';
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
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SmoothScroll>
      {/* Editorial Header */}
      <Navbar onOpenEnquire={() => handleOpenEnquire()} />

      {/* 12 Deliberate Cinematic Sections on Pure White / Light Canvas */}
      <main className="relative flex flex-col w-full bg-white text-[#141414]">
        {/* 01 — HERO: Daytime Architectural Shot, Subtle Camera Push (1.00 → 1.05) */}
        <HeroSection onExplore={() => handleScrollToSection('rooted')} />

        {/* 02 — THE ART OF ROOTED LIVING: Large Editorial Composition */}
        <RootedLivingSection />

        {/* 03 — ARCHITECTURE: Designed to rise. Designed to belong. */}
        <ArchitectureSection />

        {/* 04 — RESIDENCES: Space to Live Beautifully & Drafting Floor Plans */}
        <ResidencesSection onOpenEnquire={(plan) => handleOpenEnquire(plan)} />

        {/* 05 — THE EXPERIENCE: The Way We Elevate (Building Cross-Section) */}
        <ElevateSection />

        {/* 06 — AMENITIES: 6 Experiential Chapters & 1,00,000 Sft Clubhouse */}
        <AmenitiesSection />

        {/* 07 — MASTER PLAN: Architectural Site Drawing Given Ample Space */}
        <MasterPlanSection onSelectTower={() => handleScrollToSection('residences')} />

        {/* 08 — LOCATION: Kollur · ORR Exit 2 · Hyderabad */}
        <LocationSection />

        {/* 09 — SPECIFICATIONS: Minimal Accordion on Pure White */}
        <SpecificationsSection />

        {/* 10 — GALLERY: Architectural Photography Exhibition & Lightbox */}
        <GallerySection />

        {/* 11 — PRIVATE VIEWING: Daytime Editorial Consultation Form */}
        <EnquirySection onOpenEnquire={() => handleOpenEnquire()} />
      </main>

      {/* 12 — FOOTER: Architectural Colophon & Disclosures */}
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
