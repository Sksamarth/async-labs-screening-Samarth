import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Upload, Layout, PenTool, RefreshCw, Calendar,
  Zap, Sliders, Wifi, Compass,
} from 'lucide-react';

/* ── data ──────────────────────────────────────────────────────────────── */
const capabilities = [
  {
    icon: Upload,
    title: 'Upload Anything',
    desc: 'Push images, text, quotes, notices, and announcements wirelessly from your phone or laptop in seconds.',
    img: '/product-img/display_desk_prototype.jpg',
    accent: '#0284c7',
    tag: 'Content',
  },
  {
    icon: Layout,
    title: 'Use Templates',
    desc: 'Choose from a rich library of prebuilt layouts for desks, meeting rooms, retail shelves, and more.',
    img: '/product-img/product_angle_1.png',
    accent: '#7c3aed',
    tag: 'Templates',
  },
  {
    icon: PenTool,
    title: 'Create Your Own',
    desc: 'Drag-and-drop custom widget grids tailored to your exact workflow and personal style.',
    img: '/product-img/product_angle_2.png',
    accent: '#059669',
    tag: 'Design',
  },
  {
    icon: RefreshCw,
    title: 'Sync Your Apps',
    desc: 'Connect Google Calendar, Outlook, Slack, GitHub and dozens more — live, always-fresh data.',
    img: '/product-img/product_angle_3.png',
    accent: '#d97706',
    tag: 'Integrations',
  },
  {
    icon: Calendar,
    title: 'Schedule Content',
    desc: 'Set exactly what shows up and when — morning briefings, afternoon todos, end-of-day wrap-ups.',
    img: '/product-img/product_angle_4.png',
    accent: '#dc2626',
    tag: 'Scheduling',
  },
  {
    icon: Zap,
    title: 'Automatic Updates',
    desc: 'Background refresh keeps every widget current. No manual action, no stale data.',
    img: '/product-img/display_desk_prototype.jpg',
    accent: '#0ea5e9',
    tag: 'Automation',
  },
  {
    icon: Sliders,
    title: 'Reconfigure Anytime',
    desc: 'Swap layouts, data sources and content remotely from the companion app — done in under a minute.',
    img: '/product-img/product_angle_1.png',
    accent: '#8b5cf6',
    tag: 'Flexibility',
  },
  {
    icon: Wifi,
    title: 'Multiple Connections',
    desc: 'Wi-Fi, Bluetooth, or USB — seamlessly adapts to whatever your workspace setup demands.',
    img: '/product-img/product_angle_2.png',
    accent: '#10b981',
    tag: 'Connectivity',
  },
  {
    icon: Compass,
    title: 'Desk or Wall',
    desc: 'Angled desk stand for personal clarity, or flush wall-mount for shared rooms — one device, infinite positions.',
    img: '/product-img/product_angle_3.png',
    accent: '#f59e0b',
    tag: 'Hardware',
  },
];

/* ── component ─────────────────────────────────────────────────────────── */
export default function WhatYouCanDo() {
  const [activeIdx, setActiveIdx]   = useState(0);
  const [displayed, setDisplayed]   = useState(0);   // the image actually shown
  const [animating, setAnimating]   = useState(false);
  const cardRefs   = useRef([]);
  const rafId      = useRef(null);
  const pending    = useRef(null);   // next index waiting to be committed
  const isAnimRef  = useRef(false);

  /* ── commit a new index after the outgoing frame plays ───────────────── */
  const commitSwap = useCallback((nextIdx) => {
    if (isAnimRef.current) {
      pending.current = nextIdx;
      return;
    }
    if (nextIdx === displayed) return;

    isAnimRef.current = true;
    setAnimating(true);

    setTimeout(() => {
      setDisplayed(nextIdx);
      setAnimating(false);
      isAnimRef.current = false;

      if (pending.current !== null && pending.current !== nextIdx) {
        const p = pending.current;
        pending.current = null;
        commitSwap(p);
      }
    }, 310);
  }, [displayed]);

  /* ── find which card centre is closest to viewport mid ──────────────── */
  const pickActive = useCallback(() => {
    const vpMid = window.innerHeight / 2;
    let bestIdx = 0;
    let bestDist = Infinity;

    cardRefs.current.forEach((el, idx) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cardMid = rect.top + rect.height / 2;
      const dist = Math.abs(cardMid - vpMid);
      if (dist < bestDist) { bestDist = dist; bestIdx = idx; }
    });

    return bestIdx;
  }, []);

  /* ── RAF-throttled scroll handler ────────────────────────────────────── */
  const onScroll = useCallback(() => {
    if (rafId.current) return;
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null;
      const idx = pickActive();
      if (idx !== activeIdx) {
        setActiveIdx(idx);
        commitSwap(idx);
      }
    });
  }, [activeIdx, pickActive, commitSwap]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [onScroll]);

  /* ── click a card -> scroll it into view center ─────────────────────── */
  const handleCardClick = (idx) => {
    cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const active  = capabilities[activeIdx];
  const display = capabilities[displayed];

  return (
    <section
      id="what-you-can-do"
      className="section"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-ink-subtle)',
        borderBottom: '1px solid var(--border-ink-subtle)',
      }}
    >
      <div className="container">
        {/* header */}
        <div className="section-header">
          <div className="section-tag"><span>Capabilities</span></div>
          <h2 className="section-title">What You Can Do</h2>
          <p className="section-desc">
            Everything you need to personalise your workspace surface — without any technical hassle.
          </p>
        </div>

        {/* two-column sticky layout */}
        <div className="wycd-layout">

          {/* LEFT sticky image panel */}
          <div className="wycd-sticky-col">
            <div className="wycd-image-frame">

              <img
                key={displayed}
                src={display.img}
                alt={display.title}
                className={`wycd-img${animating ? ' wycd-img--exit' : ' wycd-img--enter'}`}
              />

              {/* coloured bottom glow */}
              <div
                className="wycd-glow"
                style={{ '--glow-color': active.accent }}
              />

              {/* floating tag */}
              <div className="wycd-badge" style={{ background: active.accent }}>
                {active.tag}
              </div>

              {/* pill-style progress dots */}
              <div className="wycd-dots">
                {capabilities.map((cap, i) => (
                  <button
                    key={i}
                    className={`wycd-dot${i === activeIdx ? ' wycd-dot--active' : ''}`}
                    style={i === activeIdx ? { background: active.accent } : {}}
                    onClick={() => handleCardClick(i)}
                    aria-label={`Go to ${cap.title}`}
                  />
                ))}
              </div>
            </div>

            {/* label strip */}
            <div className="wycd-label">
              <span className="wycd-label-title" key={activeIdx}>
                {active.title}
              </span>
              <span className="wycd-label-counter">
                {activeIdx + 1}&thinsp;/&thinsp;{capabilities.length}
              </span>
            </div>
          </div>

          {/* RIGHT scrollable cards */}
          <div className="wycd-scroll-col">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              const isActive = idx === activeIdx;
              return (
                <div
                  key={idx}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  className={`wycd-card${isActive ? ' wycd-card--active' : ''}`}
                  style={isActive ? { '--card-accent': item.accent } : {}}
                  onClick={() => handleCardClick(idx)}
                >
                  {isActive && (
                    <div className="wycd-card-bar" style={{ background: item.accent }} />
                  )}

                  <div
                    className="wycd-card-icon"
                    style={{ background: `${item.accent}1a`, color: item.accent }}
                  >
                    <Icon size={22} />
                  </div>

                  <div className="wycd-card-body">
                    <h3 className="wycd-card-title">{item.title}</h3>
                    <p className="wycd-card-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
