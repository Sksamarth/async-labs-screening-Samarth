import React from 'react';
import { Layers, Smartphone, Monitor, ArrowRight } from 'lucide-react';

export default function WorkflowSection() {
  return (
    <section id="workflow" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Seamless Integration</span>
          </div>
          <h2 className="section-title">Seamlessly Fits Into Your Workflow</h2>
          <p className="section-desc">
            No complex manual work required. Your tools talk to the companion app, and your display stays updated automatically.
          </p>
        </div>

        <div className="workflow-diagram">
          {/* Node 1: Your Tools */}
          <div className="workflow-card">
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(56, 189, 248, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)', margin: '0 auto 16px auto' }}>
              <Layers size={28} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '8px' }}>Your Tools & Services</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Google Calendar, Outlook, Slack status, Weather & custom REST webhooks.
            </p>
          </div>

          {/* Arrow 1 */}
          <div className="workflow-arrow" style={{ textAlign: 'center' }}>
            <ArrowRight size={32} />
          </div>

          {/* Node 2: Companion App */}
          <div className="workflow-card" style={{ borderColor: 'var(--accent-cyan)', background: 'rgba(56, 189, 248, 0.04)' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-blue))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', margin: '0 auto 16px auto' }}>
              <Smartphone size={28} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '8px' }}>Companion App</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Manage, customize, layout and schedule what appears on your screen.
            </p>
          </div>

          {/* Arrow 2 */}
          <div className="workflow-arrow" style={{ textAlign: 'center' }}>
            <ArrowRight size={32} />
          </div>

          {/* Node 3: Your Display */}
          <div className="workflow-card" style={{ borderColor: 'var(--accent-emerald)', background: 'rgba(16, 185, 129, 0.04)' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-emerald)', margin: '0 auto 16px auto' }}>
              <Monitor size={28} />
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '8px' }}>Your Display</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--accent-emerald)', fontWeight: '600' }}>
              Always visible. Always up to date.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
