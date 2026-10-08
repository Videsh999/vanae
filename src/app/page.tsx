'use client';

import React, { useState } from 'react';
import { SmoothScroll } from '@/components/common/SmoothScroll';
import { Navbar } from '@/components/navigation/Navbar';
import { HeroSection } from '@/components/hero/HeroSection';
import { StorySection } from '@/components/story/StorySection';
import { RootedLivingSection } from '@/components/rooted/RootedLivingSection';
import { ArchitectureSection } from '@/components/architecture/ArchitectureSection';
import { ArchitectureVisualSection } from '@/components/architecture/ArchitectureVisualSection';
import { ElevateSection } from '@/components/architecture/ElevateSection';
import { ResidencesSection } from '@/components/residences/ResidencesSection';
import { FloorPlanViewer } from '@/components/residences/FloorPlanViewer';
import { MasterPlanSection } from '@/components/masterplan/MasterPlanSection';
import { AmenitiesSection } from '@/components/amenities/AmenitiesSection';
import { ClubhouseSection } from '@/components/clubhouse/ClubhouseSection';
import { NatureSection } from '@/components/nature/NatureSection';
import { LocationSection } from '@/components/location/LocationSection';
import { SpecificationsSection } from '@/components/specifications/SpecificationsSection';
import { GallerySection } from '@/components/gallery/GallerySection';
import { EnquirySection } from '@/components/enquiry/EnquirySection';
import { FooterSection } from '@/components/footer/FooterSection';
import { EnquiryModal } from '@/components/enquiry/EnquiryModal';

export default function Home() {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedPlanForEnquiry, setSelectedPlanForEnquiry] = useState<string | undefined>(undefined);
  const [selectedResidenceConfig, setSelectedResidenceConfig] = useState<'3-bhk' | '4-bhk'>('3-bhk');

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

  const handleSelectResidenceConfig = (config: '3-bhk' | '4-bhk') => {
    setSelectedResidenceConfig(config);
    handleScrollToSection('floorplans');
  };

  return (
    <SmoothScroll>
      {/* Quiet Architectural Header */}
      <Navbar onOpenEnquire={() => handleOpenEnquire()} />

      {/* Main Architectural Presentation */}
      <main className="relative flex flex-col w-full bg-[#FAF8F5] text-[#141C18]">
        {/* HERO: Fullscreen Architectural Dominance, Minimal Typography */}
        <HeroSection onExplore={() => handleScrollToSection('story')} />

        {/* SECTION 01: THE IDEA (Whitespace & 25-Word Philosophy) */}
        <StorySection />

        {/* SECTION 02: ROOTED IN NATURE (Large Editorial Photographic Spread) */}
        <RootedLivingSection />

        {/* SECTION 03: THE SKYLINE (Wide Render + Typographic Statistics in Whitespace) */}
        <ArchitectureSection />

        {/* SECTION 04: ARCHITECTURE (3 Perspectives: Form, Light, Landscape) */}
        <ArchitectureVisualSection />

        {/* SECTION 05: THE WAY WE ELEVATE (Building Cross-Section Diagram) */}
        <ElevateSection />

        {/* SECTION 06: RESIDENCES (Space to Live Beautifully & 3/4 BHK Selector) */}
        <ResidencesSection onSelectConfig={handleSelectResidenceConfig} />

        {/* SECTION 07: FLOOR PLANS (Architectural Drafting Drawing Canvas) */}
        <FloorPlanViewer
          onOpenEnquire={(plan) => handleOpenEnquire(plan)}
          selectedConfig={selectedResidenceConfig}
        />

        {/* SECTION 08: MASTER PLAN (Large Site Drawing Breathes Naturally) */}
        <MasterPlanSection onSelectTower={() => handleScrollToSection('floorplans')} />

        {/* SECTION 09: AMENITIES (5 Experiential Lifestyle Chapters, No 50 Cards) */}
        <AmenitiesSection />

        {/* SECTION 10: CLUBHOUSE (1,00,000 Sft Architectural Realm) */}
        <ClubhouseSection />

        {/* SECTION 11: LIFESTYLE (How Life Feels: Daily Cadence) */}
        <NatureSection />

        {/* SECTION 12: LOCATION (Kollur · ORR Exit 2 · Hyderabad) */}
        <LocationSection />

        {/* SECTION 13: SPECIFICATIONS (Minimalist Accordion) */}
        <SpecificationsSection />

        {/* SECTION 14: GALLERY (Visual Anthology) */}
        <GallerySection />

        {/* SECTION 15: FINAL ENQUIRY (Subtle Private Viewing CTA) */}
        <EnquirySection onOpenEnquire={() => handleOpenEnquire()} />
      </main>

      {/* Simple Architectural Colophon & Legal Disclosures */}
      <FooterSection />

      {/* Minimal Elegant Private Consultation Modal */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultPlan={selectedPlanForEnquiry}
      />
    </SmoothScroll>
  );
}
