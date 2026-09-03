import React from 'react';
import { Smartphone, RefreshCw, Layers } from 'lucide-react';
import BatteryCalculator from './BatteryCalculator';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Place in Workspace',
      desc: 'Set on your desk with the integrated stand or mount flush on a room wall.'
    },
    {
      num: '02',
      title: 'Pair Companion App',
      desc: 'Open mobile or desktop controls to select layout templates and connect services.'
    },
    {
      num: '03',
      title: 'Automate & Forget',
      desc: 'Cloud APIs refresh your screen automatically. Ultra low-power display runs up to 30 days.'
    }
  ];

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Simple Setup</div>
          <h2 className="section-title">How It Works in 3 Simple Steps</h2>
          <p className="section-desc">
            No complex wiring or configuration required. Go from unboxing to glanceable clarity in under 2 minutes.
          </p>
        </div>

        {/* 3-Step Horizontal Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginBottom: '60px' }}>
          {steps.map((s, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '32px', position: 'relative' }}>
              <div style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--accent-cyan)', opacity: '0.4', marginBottom: '12px' }}>
                {s.num}
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px' }}>{s.title}</h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Embedded Interactive Battery Estimator */}
        <BatteryCalculator />
      </div>
    </section>
  );
}
