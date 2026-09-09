/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ResearchSection } from './components/ResearchSection';
import { ContactSection } from './components/ContactSection';
import { HtmlExportModal } from './components/HtmlExportModal';

export default function App() {
  const [isExportModalOpen, setIsExportModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#FBFBFA] text-[#1E293B] flex flex-col font-sans selection:bg-slate-200">
      {/* Navigation Header */}
      <Navbar onOpenExportModal={() => setIsExportModalOpen(true)} />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <HeroSection onOpenExportModal={() => setIsExportModalOpen(true)} />

        {/* 2. About Me & Educational Philosophy */}
        <AboutSection />

        {/* 3. Interests & Research */}
        <ResearchSection />

        {/* 4. Contact & Footer */}
        <ContactSection onOpenExportModal={() => setIsExportModalOpen(true)} />
      </main>

      {/* Standalone HTML/CSS Code Export Modal */}
      <HtmlExportModal
        isOpen={isExportModalOpen}
        onClose={() => setIsExportModalOpen(false)}
      />
    </div>
  );
}

