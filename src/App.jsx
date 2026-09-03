import React, { Suspense, lazy } from 'react';
import { StyleProvider } from './context/StyleContext';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import InteractiveStudio from './components/InteractiveStudio';
import WhatYouCanDo from './components/WhatYouCanDo';
import FloatingStyleToggle from './components/FloatingStyleToggle';

// Lazy load below-the-fold components to improve initial load time
const WorkflowSection = lazy(() => import('./components/WorkflowSection'));
const HardwareSpecs = lazy(() => import('./components/HardwareSpecs'));
const WorkspacesSection = lazy(() => import('./components/WorkspacesSection'));
const CompanionAppCTA = lazy(() => import('./components/CompanionAppCTA'));
const Footer = lazy(() => import('./components/Footer'));

export default function App() {
  return (
    <StyleProvider>
      <div className="app-root" style={{ position: 'relative' }}>
        <AmbientBackground />
        <Navbar />
        <main>
          <Hero />
          {/* Real Physical Product Photos Gallery from product img folder */}
          <ProductGallery />
          <InteractiveStudio />
          <WhatYouCanDo />
          <Suspense fallback={<div style={{ minHeight: '50vh' }} />}>
            <WorkflowSection />
            <HardwareSpecs />
            <WorkspacesSection />
            <CompanionAppCTA />
          </Suspense>
        </main>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
        <FloatingStyleToggle />
      </div>
    </StyleProvider>
  );
}
