import React, { useEffect, useRef } from 'react';
import { Eye, BatteryCharging, Smartphone, LayoutGrid, Cpu, Compass } from 'lucide-react';

const featureList = [
  {
    icon: Eye,
    title: 'Always-Visible Surface',
    desc: 'Paperlike high-contrast E-Ink screen. Stays visible day and night with zero glare and zero eye strain.',
    accent: '#0284c7',
  },
  {
    icon: BatteryCharging,
    title: '30-Day Battery Longevity',
    desc: 'Energy is consumed only when pixels change state. Runs for up to a month on a single USB-C charge.',
    accent: '#059669',
  },
  {
    icon: Smartphone,
    title: 'Companion App Managed',
    desc: 'Full mobile and desktop app controls. Drag & drop layout builder, template manager, and wifi configuration.',
    accent: '#7c3aed',
  },
  {
    icon: LayoutGrid,
    title: 'Custom Layouts & Templates',
    desc: 'Choose from prebuilt productivity, developer, room signage, and retail templates, or design custom widget grids.',
    accent: '#d97706',
  },
  {
    icon: Cpu,
    title: 'Automated Cloud Sync',
    desc: 'Connect Google Calendar, Outlook, Slack status, GitHub PRs, and weather APIs with automatic background refreshes.',
    accent: '#dc2626',
  },
  {
    icon: Compass,
    title: 'Desk & Wall Versatility',
    desc: 'Built-in angled desk stand for personal workspaces, plus flush wall mounting slots for shared meeting rooms.',
    accent: '#0ea5e9',
  },
];

export default function Features() {
  const cardRefs  = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    const targets = [headerRef.current, ...cardRefs.current].filter(Boolean);

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('feat-visible');
            obs.unobserve(entry.target); // animate once — don't reset on scroll-out
          }
        });
      },
      { threshold: 0.18 }
    );

    targets.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="features"
      className="section"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-ink-subtle)',
        borderBottom: '1px solid var(--border-ink-subtle)',
      }}
    >
      <div className="container">
        {/* ── animated header ─────────────────────────────────────────── */}
        <div className="section-header feat-animate" ref={headerRef}>
          <div className="section-tag"><span>Core Capabilities</span></div>
          <h2 className="section-title">Designed Around Hardware Excellence</h2>
          <p className="section-desc">
            Every feature is purpose-built to deliver ambient clarity without adding noise to your physical space.
          </p>
        </div>

        {/* ── feature grid ────────────────────────────────────────────── */}
        <div className="feat-grid">
          {featureList.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div
                key={idx}
                ref={(el) => (cardRefs.current[idx] = el)}
                className="glass-card feat-card feat-animate"
                style={{ '--feat-delay': `${idx * 90}ms`, '--feat-accent': f.accent }}
              >
                {/* top accent line */}
                <div className="feat-card-topline" />

                {/* icon */}
                <div
                  className="feat-card-icon"
                  style={{ background: `${f.accent}18`, color: f.accent }}
                >
                  <Icon size={22} />
                </div>

                {/* text */}
                <h3 className="feat-card-title">{f.title}</h3>
                <p className="feat-card-desc">{f.desc}</p>

                {/* hover shimmer */}
                <div className="feat-card-shimmer" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
