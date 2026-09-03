import React, { useState } from 'react';
import { Maximize2, Monitor, Compass, Battery, Layers } from 'lucide-react';

export default function ProductShowcase() {
  const [viewMode, setViewMode] = useState('desk'); // 'desk' or 'wall'

  return (
    <section id="display-render" className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Hardware Design</div>
          <h2 className="section-title">The Physical 7.5-Inch E-Paper Hardware</h2>
          <p className="section-desc">
            Engineered with a minimalist aesthetic frame, ultra-thin depth, integrated desk stand, and wall-mount mounting slots.
          </p>

          <div style={{ display: 'inline-flex', background: 'rgba(0,0,0,0.5)', padding: '4px', borderRadius: '10px', marginTop: '20px', border: '1px solid var(--border-subtle)' }}>
            <button 
              className={`pill-btn ${viewMode === 'desk' ? 'active' : ''}`}
              onClick={() => setViewMode('desk')}
              style={{ padding: '8px 20px', fontSize: '0.9rem' }}
            >
              Desk Stand Mode
            </button>
            <button 
              className={`pill-btn ${viewMode === 'wall' ? 'active' : ''}`}
              onClick={() => setViewMode('wall')}
              style={{ padding: '8px 20px', fontSize: '0.9rem' }}
            >
              Wall Mount Mode
            </button>
          </div>
        </div>

        {/* Big Render Showcase Frame */}
        <div style={{ position: 'relative', maxWidth: '940px', margin: '0 auto' }}>
          <div 
            className="glass-card" 
            style={{ 
              padding: '40px', 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '40px', 
              alignItems: 'center',
              boxShadow: viewMode === 'desk' 
                ? '0 32px 64px rgba(0,0,0,0.6)' 
                : '0 40px 80px rgba(0,0,0,0.8), 0 0 40px rgba(56,189,248,0.1)'
            }}
          >
            {/* Left: Prototype Image Render */}
            <div style={{ position: 'relative', textAlign: 'center' }}>
              <div 
                style={{ 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  border: '2px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                  background: '#0d1117',
                  padding: '16px'
                }}
              >
                <img 
                  src="/assets/prototype.png" 
                  alt="Aura 7.5 Smart Display Prototype Render" 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    borderRadius: '10px', 
                    display: 'block',
                    transform: viewMode === 'desk' ? 'perspective(800px) rotateX(6deg)' : 'none',
                    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  onError={(e) => {
                    // Fallback visually if image loads asynchronously
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `<div style="padding: 60px 20px; color: var(--accent-cyan); font-weight: 700;">7.5" PHYSICAL HARDWARE PROTOTYPE FRAME</div>`;
                  }}
                />
              </div>

              <div style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--text-dim)', display: 'flex', justifyContent: 'center', gap: '16px' }}>
                <span>7.5" Diagonal Screen</span>
                <span>•</span>
                <span>Matte Anti-Glare E-Paper</span>
              </div>
            </div>

            {/* Right: Key Physical Dimensions & Specs */}
            <div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '16px' }}>
                {viewMode === 'desk' ? 'Angled Desk Stand Configuration' : 'Flush Wall Mount Configuration'}
              </h3>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                {viewMode === 'desk' 
                  ? 'Angled naturally for desk visibility right beside your laptop or monitor. Stays rock-stable without taking valuable desk real estate.'
                  : 'Flush wall mounting slots enable placement outside meeting rooms, in office hallways, studio entryways, or bedside walls.'}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ background: 'rgba(56,189,248,0.1)', padding: '8px', borderRadius: '8px', color: 'var(--accent-cyan)' }}>
                    <Monitor size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>7.5-Inch E-Paper Surface</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>High-contrast paperlike clarity visible under direct sunlight.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ background: 'rgba(16,185,129,0.1)', padding: '8px', borderRadius: '8px', color: 'var(--accent-emerald)' }}>
                    <Battery size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>30-Day Battery Longevity</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Ultra-low energy consumption; charges via standard USB-C.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <div style={{ background: 'rgba(99,102,241,0.1)', padding: '8px', borderRadius: '8px', color: 'var(--accent-blue)' }}>
                    <Layers size={20} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: '700' }}>Dual Display Ink Options</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Choose Crisp Monochromatic or Tri-Color with Red/Yellow highlight ink.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
