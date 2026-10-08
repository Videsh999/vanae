'use client';

import React, { useState } from 'react';
import { SmoothScroll } from '@/components/common/SmoothScroll';
import { Navbar } from '@/components/navigation/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { RootedLivingSection } from '@/components/rooted/RootedLivingSection';
import { ArchitectureSection } from '@/components/architecture/ArchitectureSection';
import { ResidencesSection } from '@/components/residences/ResidencesSection';
import { LivingTerracesSection } from '@/components/living/LivingTerracesSection';
import { LifestyleSection } from '@/components/lifestyle/LifestyleSection';
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
      {/* Editorial Fixed Header */}
      <Navbar onOpenEnquire={() => handleOpenEnquire()} />

      {/* 
        CURATED EDITORIAL RHYTHM & VISUAL PROGRESSION:
        FULL IMAGE (Hero)
        ↓
        SHORT EDITORIAL STATEMENT (Philosophy & Metrics)
        ↓
        ARCHITECTURAL IMAGE (Form, Monolithic Discipline)
        ↓
        DETAIL / INFORMATION (Stratification & Residence Blueprints)
        ↓
        LARGE IMAGE (Biophilic Sky Terraces)
        ↓
        LIFESTYLE (Living Landscape, Water Courts, Sky Wellness)
        ↓
        AMENITIES (1,00,000 Sft Clubhouse & Categorized Society)
        ↓
        MASTER PLAN (14-Acre Site Drawing & Towers)
        ↓
        LOCATION (Kollur · ORR Exit 2 · Drive Times)
        ↓
        SPECIFICATIONS (Technical Blueprint & Engineering Schedule)
        ↓
        GALLERY (Curated Photographic Anthology)
        ↓
        ENQUIRY (Private Viewing Invitation)
      */}
      <main className="relative flex flex-col w-full bg-white text-[#141414]">
        {/* 01 — FULL IMAGE: Daytime Architectural Cinema Hero */}
        <HeroSection onExplore={() => handleScrollToSection('rooted')} />

        {/* 02 — SHORT EDITORIAL STATEMENT: The Philosophy & Architectural Ledger */}
        <RootedLivingSection />

        {/* 03 — ARCHITECTURAL IMAGE: Vertical Discipline & Facade Ribs */}
        <ArchitectureSection />

        {/* 04 — DETAIL / INFORMATION: Stratification & Residence Blueprints */}
        <ResidencesSection onOpenEnquire={(plan) => handleOpenEnquire(plan)} />

        {/* 05 — LARGE IMAGE: Biophilic Sky Terraces & 11-Foot Volumes */}
        <LivingTerracesSection />

        {/* 06 — LIFESTYLE: Botanical Canopy, Water Courts, Sky Wellness */}
        <LifestyleSection />

        {/* 07 — AMENITIES: 1,00,000 Sft Clubhouse & Society */}
        <AmenitiesSection />

        {/* 08 — MASTER PLAN: 14-Acre Site Drawing & Tower Exploration */}
        <MasterPlanSection onSelectTower={() => handleScrollToSection('residences')} />

        {/* 09 — LOCATION: Strategic Cartography & Transit Times */}
        <LocationSection />

        {/* 10 — SPECIFICATIONS: Structural Craft & Technical Blueprint */}
        <SpecificationsSection />

        {/* 11 — GALLERY: Curated Photographic Anthology */}
        <GallerySection />

        {/* 12 — ENQUIRY: Private Viewing Consultation */}
        <EnquirySection onOpenEnquire={() => handleOpenEnquire()} />
      </main>

      {/* 13 — FOOTER: Architectural Colophon, TS RERA, & Legal Notices */}
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
