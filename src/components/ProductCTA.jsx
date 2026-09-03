import React, { useState } from 'react';
import { ShoppingBag, Check, ExternalLink, Github, Zap } from 'lucide-react';

export default function ProductCTA() {
  const [selectedVariant, setSelectedVariant] = useState('tri-color');

  return (
    <section id="cta-product" className="section" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, #0d121c 100%)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div 
          className="glass-card" 
          style={{ 
            padding: '48px', 
            borderRadius: '24px', 
            border: '1px solid rgba(56, 189, 248, 0.2)',
            background: 'linear-gradient(135deg, rgba(18, 22, 31, 0.95), rgba(10, 12, 16, 0.95))',
            boxShadow: '0 24px 64px rgba(0,0,0,0.6)'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }}>
            {/* Left: Product Configuration & Specs */}
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(56,189,248,0.1)', color: 'var(--accent-cyan)', padding: '4px 12px', borderRadius: '12px', fontSize: '0.8rem', fontWeight: '600', marginBottom: '16px' }}>
                <Zap size={14} />
                <span>Ready for Vercel Deployment</span>
              </div>

              <h2 style={{ fontSize: '2.8rem', fontWeight: '800', lineHeight: '1.15', marginBottom: '16px' }}>
                Elevate Your Workspace Surface
              </h2>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '28px' }}>
                The 7.5-inch Smart Workspace Display prototype. Fixed physical hardware dimensions, maximum glanceable value.
              </p>

              {/* Variant Selector */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: '600', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Choose Ink Variant:
                </div>
                
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button 
                    onClick={() => setSelectedVariant('bw')}
                    style={{ 
                      flex: 1, 
                      padding: '12px 16px', 
                      borderRadius: '12px', 
                      border: selectedVariant === 'bw' ? '2px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                      background: selectedVariant === 'bw' ? 'rgba(56,189,248,0.1)' : 'rgba(255,255,255,0.03)',
                      color: 'var(--text-main)',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>Monochromatic B&W</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Ultra 30-Day Battery</div>
                  </button>

                  <button 
                    onClick={() => setSelectedVariant('tri-color')}
                    style={{ 
                      flex: 1, 
                      padding: '12px 16px', 
                      borderRadius: '12px', 
                      border: selectedVariant === 'tri-color' ? '2px solid var(--accent-amber)' : '1px solid var(--border-subtle)',
                      background: selectedVariant === 'tri-color' ? 'rgba(245,158,11,0.1)' : 'rgba(255,255,255,0.03)',
                      color: 'var(--text-main)',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ fontWeight: '700', fontSize: '0.95rem', color: selectedVariant === 'tri-color' ? 'var(--accent-amber)' : 'inherit' }}>
                      Tri-Color Accent
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>With Red/Yellow Highlight</div>
                  </button>
                </div>
              </div>

              {/* Hardware Highlights List */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <Check size={16} color="var(--accent-emerald)" />
                  <span>7.5" Fixed E-Paper Panel</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <Check size={16} color="var(--accent-emerald)" />
                  <span>Companion App Control</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <Check size={16} color="var(--accent-emerald)" />
                  <span>Desk Stand & Wall Mount</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <Check size={16} color="var(--accent-emerald)" />
                  <span>Wi-Fi & Bluetooth Sync</span>
                </div>
              </div>
            </div>

            {/* Right: Action Card */}
            <div style={{ background: 'var(--bg-secondary)', padding: '36px', borderRadius: '16px', border: '1px solid var(--border-subtle)', textAlign: 'center' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px' }}>
                Aura 7.5 Smart Display
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                Candidate Submission for Task T5
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <a 
                  href="#screen-demo" 
                  className="btn-primary" 
                  style={{ width: '100%', justifyContent: 'center', padding: '14px' }}
                >
                  <Zap size={18} />
                  <span>Launch Live Screen Simulator</span>
                </a>

                <a 
                  href="https://github.com/Samarth/async-labs-screening-Samarth" 
                  target="_blank" 
                  rel="noreferrer"
                  className="btn-secondary" 
                  style={{ width: '100%', justifyContent: 'center', padding: '14px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                  <Github size={18} />
                  <span>View GitHub Repository</span>
                </a>
              </div>

              <div style={{ marginTop: '24px', fontSize: '0.78rem', color: 'var(--text-dim)' }}>
                Deployed & Hostable on Vercel Static Hosting • Public Code Access
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
