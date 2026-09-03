import React from 'react';
import { Terminal, Briefcase, Users, Lightbulb } from 'lucide-react';

export default function WorkspacesSection() {
  const audiences = [
    {
      icon: Terminal,
      title: 'Developers',
      desc: 'Keep open PR counts, build status, server health, and deployment timers visible without context switching.'
    },
    {
      icon: Briefcase,
      title: 'Professionals',
      desc: 'Glance at daily schedules, next calendar meetings, Slack presence, and task focus timers at a glance.'
    },
    {
      icon: Users,
      title: 'Teams & Offices',
      desc: 'Mount outside meeting rooms, show office closure notices, room availability, or welcome guest Wi-Fi QR codes.'
    },
    {
      icon: Lightbulb,
      title: 'Creators & Thinkers',
      desc: 'Display inspirational quotes, daily focus goals, Pomodoro countdowns, or personal custom art notes.'
    }
  ];

  return (
    <section id="workspaces" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <span>Target Audience</span>
          </div>
          <h2 className="section-title">Made for Modern Workspaces</h2>
          <p className="section-desc">
            Designed to fit naturally into any desk, office, studio or physical workspace setup.
          </p>
        </div>

        {/* 4-col grid — responsive via workspaces-grid class */}
        <div className="workspaces-grid">
          {audiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-card" style={{ padding: '28px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'rgba(56,189,248,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)', marginBottom: '16px' }}>
                  <Icon size={22} />
                </div>
                <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
