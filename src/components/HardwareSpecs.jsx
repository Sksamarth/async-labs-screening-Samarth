import React from 'react';
import { BatteryCharging, Zap, Shield, TouchpadIcon, Feather, Compass, Layers } from 'lucide-react';

export default function HardwareSpecs() {
  return (
    <section id="specs" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Hardware Quality</span>
          </div>
          <h2 className="section-title">Designed for Long Life. Built for Real Use.</h2>
          <p className="section-desc">
            Premium build quality, ultra-low power engineering, and daily durability.
          </p>
        </div>

        {/* Display Variants Banner — responsive via display-variants-grid class */}
        <div className="glass-card" style={{ padding: '28px', marginBottom: '36px', background: 'linear-gradient(135deg, rgba(30, 37, 54, 0.8), rgba(15, 18, 26, 0.9))' }}>
          <h3 style={{ fontSize: '1.3rem', fontWeight: '800', marginBottom: '16px', textAlign: 'center' }}>
            Choose Your Display Variant
          </h3>

          <div className="display-variants-grid">
            <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-ink-subtle)', padding: '24px', borderRadius: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-main)', fontWeight: '700', fontSize: '1rem', marginBottom: '8px' }}>
                <Layers size={20} color="var(--accent-cyan)" />
                <span>Black & White (2-Color)</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Crisp monochromatic e-ink clarity. Maximum 30-day battery life.</p>
            </div>

            <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--accent-amber)', padding: '24px', borderRadius: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-amber)', fontWeight: '700', fontSize: '1rem', marginBottom: '8px' }}>
                <Layers size={20} color="var(--accent-amber)" />
                <span>Black, White & Accent Red/Yellow (3-Color)</span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>High-visibility red and yellow ink for urgent notifications & highlights.</p>
            </div>
          </div>
        </div>

        {/* 6 Spec Cards — responsive via specs-grid class */}
        <div className="specs-grid">
          <div className="spec-card">
            <div style={{ color: 'var(--accent-emerald)', marginBottom: '10px' }}><BatteryCharging size={24} /></div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '4px' }}>30 Days Battery Life</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Up to 30 days on a single charge with smart background updates.</p>
          </div>

          <div className="spec-card">
            <div style={{ color: 'var(--accent-cyan)', marginBottom: '10px' }}><Zap size={24} /></div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '4px' }}>3000 mAh Rechargeable</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>High-capacity battery with fast USB-C charging (~2 hours full charge).</p>
          </div>

          <div className="spec-card">
            <div style={{ color: '#818cf8', marginBottom: '10px' }}><Shield size={24} /></div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '4px' }}>Status LED Light</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Discreet LED indicator for charging status and sync updates.</p>
          </div>

          <div className="spec-card">
            <div style={{ color: 'var(--accent-amber)', marginBottom: '10px' }}><TouchpadIcon size={24} /></div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '4px' }}>Touch + Quick Button</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Touch controls and physical action button for quick screen cycles.</p>
          </div>

          <div className="spec-card">
            <div style={{ color: 'var(--accent-cyan)', marginBottom: '10px' }}><Feather size={24} /></div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '4px' }}>300g Lightweight Design</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Ultra-lightweight durable matte body engineered for long use.</p>
          </div>

          <div className="spec-card">
            <div style={{ color: 'var(--accent-emerald)', marginBottom: '10px' }}><Compass size={24} /></div>
            <h4 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '4px' }}>Desk Stand & Wall Mount</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>Integrated angled desk kickstand plus flush rear wall mount slot.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
