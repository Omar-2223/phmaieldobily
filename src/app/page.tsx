'use client';

import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import TrustMetricsSection from './components/TrustMetricsSection';
import LocationSection from './components/LocationSection';
import DownloadCTASection from './components/DownloadCTASection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LanguageProvider from './components/LanguageProvider';
import ThemeProvider from './components/ThemeProvider';
import GrainOverlay from './components/GrainOverlay';
import SpotlightTracker from './components/SpotlightTracker';
import ScrollAnimator from './components/ScrollAnimator';

export default function HomePage() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <div className="bg-background text-foreground min-h-screen overflow-x-hidden selection:bg-primary/20 selection:text-primary relative">
          <GrainOverlay />
          <SpotlightTracker />
          <ScrollAnimator />

          {/* Background grid */}
          <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-0" />

          {/* Beam lines */}
          <div className="fixed inset-0 pointer-events-none z-0 flex justify-between px-6 md:px-12 lg:px-24 max-w-[1440px] mx-auto">
            <div className="relative w-px h-full bg-white/[0.02] overflow-hidden">
              <div className="beam" />
            </div>
            <div className="relative w-px h-full bg-white/[0.02] overflow-hidden hidden md:block">
              <div className="beam beam-delay-1" />
            </div>
            <div className="relative w-px h-full bg-white/[0.02] overflow-hidden">
              <div className="beam beam-delay-2" />
            </div>
          </div>

          <div className="relative z-10">
            <Header />
            <main>
              <HeroSection />
              <FeaturesSection />
              <TrustMetricsSection />
              <LocationSection />
              <DownloadCTASection />
            </main>
            <Footer />
          </div>
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
}