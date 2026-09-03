import React from 'react';
import { Smartphone, Monitor, CheckCircle, ArrowRight } from 'lucide-react';

export default function CompanionAppCTA() {
  const actions = ['Create', 'Customize', 'Schedule', 'Preview', 'Send', 'Update'];
  const platforms = ['iOS', 'Android', 'macOS', 'Windows'];

  return (
    <section id="companion-app" className="section" style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, #0c0e17 100%)' }}>
      <div className="container">
        <div className="bottom-app-bar">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(56,189,248,0.12)', color: 'var(--accent-cyan)', padding: '5px 14px', borderRadius: '20px', fontSize: '0.82rem', fontWeight: '700', textTransform: 'uppercase', marginBottom: '16px' }}>
            <Smartphone size={14} />
            <span>Companion App Ecosystem</span>
          </div>

          <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '12px', lineHeight: '1.15' }}>
            Manage everything from our companion app.
          </h2>

          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto 28px auto', lineHeight: '1.6' }}>
            Full control at your fingertips. Create custom layouts, set schedule automation, and send content live to your 7.5" display in seconds.
          </p>

          {/* Action Step Badges */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Companion App Workflow:
            </div>
            
            <div className="badge-row">
              {actions.map((act, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="action-badge">{act}</span>
                  {idx < actions.length - 1 && <span style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>➔</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Platform Badges */}
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: '700', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Available On All Platforms:
            </div>
            
            <div className="badge-row">
              {platforms.map((plat, idx) => (
                <span key={idx} className="platform-badge">
                   {plat}
                </span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '36px' }}>
            <a href="#interactive-display" className="btn-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
              <span>Try Live Display Studio</span>
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
