import React, { useState } from 'react';
import { AxionNavbar } from './components/AxionNavbar';
import { AxionHero } from './components/AxionHero';
import { ProblemSection } from './components/ProblemSection';
import { RealSolutionSection } from './components/RealSolutionSection';
import { CaseStudySection } from './components/CaseStudySection';
import { WhatYouGetSection } from './components/WhatYouGetSection';
import { PricingSectionNew } from './components/PricingSectionNew';
import { ProcessSectionNew } from './components/ProcessSectionNew';
import { FAQSectionNew } from './components/FAQSectionNew';
import { AxionFooter } from './components/AxionFooter';
import { DemoModal } from './components/DemoModal';

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
      {/* 1. NAVBAR */}
      <AxionNavbar onOpenDemo={handleOpenDemo} />

      <main className="flex-1">
        {/* 2. HERO SECTION */}
        <AxionHero onOpenDemo={handleOpenDemo} />

        {/* 3. KONDISI YANG SERING TERJADI (PROBLEM VS SOLUTION) */}
        <ProblemSection />

        {/* 4. SOLUSI NYATA UMKM (6 CORE PILLARS) */}
        <RealSolutionSection />

        {/* 5. STUDI KASUS & CONTOH NYATA (TOKO BERAS PAK KADI) */}
        <CaseStudySection onOpenDemo={handleOpenDemo} />

        {/* 6. LENGKAP & SIAP PAKAI (11 FITUR DIGITAL STOREFRONT) */}
        <WhatYouGetSection />

        {/* 7. BIAYA JELAS & TRANSPARAN (PRICING & ADDONS) */}
        <PricingSectionNew />

        {/* 8. ALUR PENGERJAAN (5 LANGKAH) */}
        <ProcessSectionNew />

        {/* 9. PERTANYAAN YANG SERING DIAJUKAN (FAQ) */}
        <FAQSectionNew />
      </main>

      {/* 10. PRE-FOOTER CTA & FOOTER */}
      <AxionFooter />

      {/* INTERACTIVE DEMO MODAL FOR TOKO BERAS PAK KADI */}
      <DemoModal isOpen={isDemoOpen} onClose={handleCloseDemo} />
    </div>
  );
}
