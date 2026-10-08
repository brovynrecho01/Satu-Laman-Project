import React, { useState } from 'react';
import { AxionNavbar } from './components/AxionNavbar';
import { AxionHero } from './components/AxionHero';
import { ProblemSection } from './components/ProblemSection';
import { ValuePropSection } from './components/ValuePropSection';
import { CaseStudySection } from './components/CaseStudySection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { PricingSectionNew } from './components/PricingSectionNew';
import { ProcessSectionNew } from './components/ProcessSectionNew';
import { FAQSectionNew } from './components/FAQSectionNew';
import { AxionFooter } from './components/AxionFooter';
import { DemoModal } from './components/DemoModal';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#EFEFEF] text-gray-900 flex flex-col font-sans selection:bg-[#F26522]/20 selection:text-[#F26522]">
      {/* NAVBAR */}
      <AxionNavbar onOpenDemo={handleOpenDemo} />

      <main className="flex-1">
        {/* 01. HERO SECTION */}
        <AxionHero onOpenDemo={handleOpenDemo} />

        {/* 02. PROBLEM AGITATION SECTION */}
        <ProblemSection />

        {/* 03. VALUE PROPOSITION SECTION */}
        <ValuePropSection />

        {/* 04. DEMO & CASE STUDY (TOKO BERAS PAK KADI) */}
        <CaseStudySection onOpenDemo={handleOpenDemo} />

        {/* 05. DELIVERABLES SECTION (SATULAMAN STARTER SYSTEM & WA SALES KIT) */}
        <WhatYouGetSection />

        {/* 06. THE OFFER (BETA PRICING) SECTION */}
        <PricingSectionNew />

        {/* 07. ALUR PENGERJAAN & FORMULIR DATA */}
        <ProcessSectionNew />

        {/* 08. FAQ SECTION */}
        <FAQSectionNew />
      </main>

      {/* 08. FINAL CTA SECTION & FOOTER */}
      <AxionFooter />

      {/* FLOATING ACTION BUTTON (WHATSAPP QUICK LINK THROUGHOUT PAGE) */}
      <FloatingWhatsAppButton />

      {/* INTERACTIVE DEMO MODAL FOR TOKO BERAS PAK KADI */}
      <DemoModal isOpen={isDemoOpen} onClose={handleCloseDemo} />
    </div>
  );
}
