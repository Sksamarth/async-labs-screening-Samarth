import React, { useState } from 'react';
import { Terminal, Briefcase, Brain, Store, ArrowRight, Check } from 'lucide-react';

export default function PersonaPresets() {
  const [activePersona, setActivePersona] = useState('dev');

  const personas = [
    {
      id: 'dev',
      icon: Terminal,
      title: 'Developer Ops',
      subtitle: 'Engineers & DevOps',
      description: 'Keep CI/CD build status, open PR review counts, on-call alert status, and Jira sprint progress visible without switching browser tabs.',
      features: ['GitHub PR Watcher', 'Sentry Error Counter', 'On-Call Alert Badge', 'Jenkins/Vercel Deploy Status']
    },
    {
      id: 'exec',
      icon: Briefcase,
      title: 'Executive Desk',
      subtitle: 'Founders & Leaders',
      description: 'Glanceable view of your daily agenda, high-priority Slack status, team meeting room status, and top company KPI metric.',
      features: ['Calendar Next Event', 'Slack Status Sync', 'Meeting Room Availability', 'Daily MRR / KPI Counter']
    },
    {
      id: 'focus',
      icon: Brain,
      title: 'Deep Work Anchor',
      subtitle: 'Writers & Designers',
      description: 'Eliminate context switching. Dedicated physical countdown Pomodoro timer, hydration reminder, and daily focus goal status.',
      features: ['Pomodoro Focus Timer', 'Daily Goal Tracker', 'Ambient Water Intake', 'Do-Not-Disturb Status']
    },
    {
      id: 'retail',
      icon: Store,
      title: 'Studio & Physical Signage',
      subtitle: 'Retail, Cafes & Receptions',
      description: 'Mount on doors or counters to show guest Wi-Fi QR codes, daily restaurant specials, welcome announcements, or desk availability.',
      features: ['Guest Wi-Fi QR Code', 'Daily Specials Menu', 'Room Occupancy Sign', 'Welcome Announcements']
    }
  ];

  return (
    <section id="personas" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Contextual Workspace Modes</div>
          <h2 className="section-title">One Hardware Device. Infinite Personas.</h2>
          <p className="section-desc">
            The physical 7.5-inch hardware frame stays stationary on your desk or wall, but its role adapts seamlessly to your workflow.
          </p>
        </div>

        <div className="persona-grid">
          {personas.map((p) => {
            const Icon = p.icon;
            const isActive = activePersona === p.id;
            return (
              <div 
                key={p.id} 
                className={`glass-card persona-card ${isActive ? 'active' : ''}`}
                onClick={() => setActivePersona(p.id)}
              >
                <div className="persona-icon-wrapper">
                  <Icon size={24} />
                </div>
                <h3 className="persona-title">{p.title}</h3>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontWeight: '600', marginBottom: '8px' }}>
                  {p.subtitle}
                </div>
                <p className="persona-desc">{p.description}</p>

                <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                  {p.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                      <Check size={12} color="var(--accent-emerald)" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
