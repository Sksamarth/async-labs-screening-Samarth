import React from 'react';
import { StyleProvider } from './context/StyleContext';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGallery from './components/ProductGallery';
import InteractiveStudio from './components/InteractiveStudio';
import WhatYouCanDo from './components/WhatYouCanDo';
import WorkflowSection from './components/WorkflowSection';
import HardwareSpecs from './components/HardwareSpecs';
import WorkspacesSection from './components/WorkspacesSection';
import CompanionAppCTA from './components/CompanionAppCTA';
import Footer from './components/Footer';
import FloatingStyleToggle from './components/FloatingStyleToggle';

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
          <WorkflowSection />
          <HardwareSpecs />
          <WorkspacesSection />
          <CompanionAppCTA />
        </main>
        <Footer />
        <FloatingStyleToggle />
      </div>
    </StyleProvider>
  );
}
