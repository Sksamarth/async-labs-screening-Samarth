import React from 'react';
import { Calendar, Mail, MessageSquare, Code, CheckSquare, Cloud, Tv, Globe } from 'lucide-react';

export default function Integrations() {
  const integrations = [
    { name: 'Google Calendar', category: 'Schedules', icon: Calendar, color: '#4285F4' },
    { name: 'Outlook Calendar', category: 'Schedules', icon: Mail, color: '#0078D4' },
    { name: 'Slack & Teams', category: 'Presence', icon: MessageSquare, color: '#4A154B' },
    { name: 'GitHub & GitLab', category: 'Dev Ops', icon: Code, color: '#2DBA4E' },
    { name: 'Jira & Notion', category: 'Tasks', icon: CheckSquare, color: '#0052CC' },
    { name: 'OpenWeather API', category: 'Climate', icon: Cloud, color: '#FF9900' },
    { name: 'Home Assistant', category: 'IoT & Smart Home', icon: Tv, color: '#1877F2' },
    { name: 'Custom REST API', category: 'Webhooks', icon: Globe, color: '#38bdf8' }
  ];

  return (
    <section id="integrations" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Companion App Sync</div>
          <h2 className="section-title">Syncs with the Tools You Already Use</h2>
          <p className="section-desc">
            Manage your 7.5" display effortlessly from desktop or mobile. No manual typing required — cloud APIs refresh your screen automatically.
          </p>
        </div>

        <div className="integrations-grid">
          {integrations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="glass-card integration-card">
                <div className="integration-icon-box" style={{ color: item.color }}>
                  <Icon size={24} />
                </div>
                <div className="integration-name">{item.name}</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{item.category}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
