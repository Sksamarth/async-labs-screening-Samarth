import React from 'react';
import { Layout, ArrowUpRight } from 'lucide-react';

export default function TemplateGallery() {
  const templates = [
    {
      title: 'Minimalist Desk Clock & Calendar',
      category: 'Personal Workspace',
      desc: 'Bold digital clock with upcoming event timeline and weather forecast.',
      badge: 'Popular'
    },
    {
      title: 'Developer Release & Pipeline Monitor',
      category: 'Engineering',
      desc: 'Real-time open PR counts, build status badges, and Jira sprint burn-down.',
      badge: 'Dev Favorite'
    },
    {
      title: 'Meeting Room Availability Door Sign',
      category: 'Office & Rooms',
      desc: 'Mounted outside rooms to indicate current meeting, next reservation, and booking QR code.',
      badge: 'Wall Mount'
    },
    {
      title: 'Cafe & Restaurant Special Menu',
      category: 'Retail & Hospitality',
      desc: 'Tri-color accent layout displaying daily specials, price list, and Wi-Fi credentials.',
      badge: 'Tri-Color'
    },
    {
      title: 'Focus Sprint & Pomodoro Dashboard',
      category: 'Productivity',
      desc: 'Large countdown timer, session counter, and focus task list for deep work sessions.',
      badge: 'Focus'
    },
    {
      title: 'Smart Home & Solar Energy Monitor',
      category: 'IoT & Utilities',
      desc: 'Live power consumption stats, battery status, and room ambient climate metrics.',
      badge: 'IoT Ready'
    }
  ];

  return (
    <section id="templates" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Ready-Made Templates</div>
          <h2 className="section-title">Prebuilt Layouts for Instant Value</h2>
          <p className="section-desc">
            Start from ready-made layouts or create your own custom drag-and-drop widget grid inside the companion application.
          </p>
        </div>

        <div className="template-grid">
          {templates.map((tpl, idx) => (
            <div key={idx} className="glass-card template-card">
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="template-badge">{tpl.badge}</span>
                  <ArrowUpRight size={18} color="var(--text-dim)" />
                </div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: '700', margin: '8px 0' }}>{tpl.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{tpl.desc}</p>
              </div>

              <div style={{ marginTop: '20px', fontSize: '0.78rem', color: 'var(--accent-cyan)', fontWeight: '600', textTransform: 'uppercase' }}>
                {tpl.category}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
