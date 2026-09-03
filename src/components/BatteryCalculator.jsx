import React, { useState } from 'react';
import { BatteryCharging, ShieldCheck, Zap, Sliders } from 'lucide-react';

export default function BatteryCalculator() {
  const [refreshMinutes, setRefreshMinutes] = useState(15);

  // Math: 1 min refresh = 10 days, 15 min = 30 days, 60 min = 60 days
  const calculateDays = (mins) => {
    if (mins <= 1) return 10;
    if (mins <= 5) return 18;
    if (mins <= 15) return 30;
    if (mins <= 30) return 45;
    return 60;
  };

  const calculatedDays = calculateDays(refreshMinutes);

  return (
    <section id="calculator" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Low-Power Engineering</div>
          <h2 className="section-title">Ultra-Low Power. Charge Once a Month.</h2>
          <p className="section-desc">
            Unlike traditional LCD or OLED monitors that bleed power and emit blue light, E-Paper only consumes energy during screen refresh waveforms.
          </p>
        </div>

        <div className="glass-card calculator-card">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--accent-cyan)', fontWeight: '700', fontSize: '0.9rem', marginBottom: '8px' }}>
              <Sliders size={18} />
              <span>Interactive Refresh Frequency Slider</span>
            </div>
            
            <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '12px' }}>
              Configure Screen Refresh
            </h3>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
              Adjust how often the companion cloud API refreshes screen contents. Choose rapid updates for live metrics or low-frequency updates for max battery longevity.
            </p>

            <div className="slider-group">
              <div className="slider-label">
                <span>Refresh Interval:</span>
                <span style={{ color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>Every {refreshMinutes} Minutes</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="60" 
                step="1"
                value={refreshMinutes} 
                onChange={(e) => setRefreshMinutes(Number(e.target.value))}
                className="custom-range"
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--text-dim)', marginTop: '8px' }}>
                <span>1 Min (Live Ops)</span>
                <span>15 Mins (Recommended)</span>
                <span>60 Mins (Max Range)</span>
              </div>
            </div>
          </div>

          <div className="battery-result-box">
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '12px' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '12px', borderRadius: '50%', border: '1px solid rgba(16, 185, 129, 0.3)', color: 'var(--accent-emerald)' }}>
                <BatteryCharging size={32} />
              </div>
            </div>

            <div className="battery-stat-number">
              {calculatedDays}
              <span className="battery-stat-unit">DAYS</span>
            </div>

            <div style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)', marginTop: '8px' }}>
              Single Charge Battery Life
            </div>
            
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
              Calculated for 7.5" Monochromatic E-Paper Panel
            </div>

            <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'center', gap: '16px', fontSize: '0.8rem', color: 'var(--accent-emerald)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><ShieldCheck size={14} /> Zero Blue Light</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Zap size={14} /> USB-C Charging</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
