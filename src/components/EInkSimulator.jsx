import React, { useState } from 'react';
import { 
  Calendar, 
  GitPullRequest, 
  Clock, 
  CloudSun, 
  QrCode, 
  Layers, 
  Sparkles, 
  Maximize2,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

export default function EInkSimulator() {
  const [placement, setPlacement] = useState('desk-view'); // 'desk-view' or 'wall-view'
  const [inkMode, setInkMode] = useState('tri-color-mode'); // 'monochrome-mode' or 'tri-color-mode'
  const [activeWidgets, setActiveWidgets] = useState(['schedule', 'github', 'pomodoro', 'weather']);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const triggerRefresh = (callback) => {
    setIsRefreshing(true);
    setTimeout(() => {
      callback();
      setIsRefreshing(false);
    }, 400);
  };

  const toggleWidget = (widgetId) => {
    triggerRefresh(() => {
      if (activeWidgets.includes(widgetId)) {
        if (activeWidgets.length > 1) {
          setActiveWidgets(activeWidgets.filter(w => w !== widgetId));
        }
      } else {
        if (activeWidgets.length < 4) {
          setActiveWidgets([...activeWidgets, widgetId]);
        } else {
          setActiveWidgets([...activeWidgets.slice(1), widgetId]);
        }
      }
    });
  };

  const handleInkToggle = (mode) => {
    triggerRefresh(() => setInkMode(mode));
  };

  const handlePlacementToggle = (view) => {
    setPlacement(view);
  };

  return (
    <section id="simulator" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Copy & Value Proposition */}
          <div>
            <div className="hero-badge">
              <Sparkles size={14} />
              <span>7.5-Inch E-Paper Hardware Prototype</span>
            </div>
            
            <h1 className="hero-title">
              Zero Distraction.<br />Always Visible.
            </h1>
            
            <p className="hero-subtitle">
              A dedicated glanceable workspace display managed through your phone or computer. Keep calendars, focus timers, developer metrics, and status signs visible without clogging your primary monitor.
            </p>

            <div className="hero-cta-group">
              <a href="#personas" className="btn-primary">
                Explore Personas
              </a>
              <button 
                onClick={() => triggerRefresh(() => {})} 
                className="btn-secondary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <RefreshCw size={16} className={isRefreshing ? 'spin' : ''} />
                <span>Simulate E-Ink Refresh</span>
              </button>
            </div>

            {/* Quick Spec Tags */}
            <div style={{ display: 'flex', gap: '16px', marginTop: '36px', flexWrap: 'wrap' }}>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 16px', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Battery Life</div>
                <div style={{ fontWeight: '700', color: 'var(--accent-emerald)', fontSize: '1.05rem' }}>Up to 30 Days</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 16px', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Screen Size</div>
                <div style={{ fontWeight: '700', color: 'var(--accent-cyan)', fontSize: '1.05rem' }}>7.5" High-Contrast</div>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '10px 16px', borderRadius: '10px', border: '1px solid var(--border-subtle)' }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase' }}>Display Ink</div>
                <div style={{ fontWeight: '700', color: 'var(--text-main)', fontSize: '1.05rem' }}>B&W / Tri-Color Accent</div>
              </div>
            </div>
          </div>

          {/* Right Column: Physical Display Hardware Simulator */}
          <div className="simulator-wrapper">
            {/* Hardware Controls */}
            <div className="hardware-controls">
              <div className="control-group">
                <span className="control-label">View:</span>
                <div className="pill-toggle">
                  <button 
                    onClick={() => handlePlacementToggle('desk-view')} 
                    className={`pill-btn ${placement === 'desk-view' ? 'active' : ''}`}
                  >
                    Desk Stand
                  </button>
                  <button 
                    onClick={() => handlePlacementToggle('wall-view')} 
                    className={`pill-btn ${placement === 'wall-view' ? 'active' : ''}`}
                  >
                    Wall Mount
                  </button>
                </div>
              </div>

              <div className="control-group">
                <span className="control-label">Ink:</span>
                <div className="pill-toggle">
                  <button 
                    onClick={() => handleInkToggle('monochrome-mode')} 
                    className={`pill-btn ${inkMode === 'monochrome-mode' ? 'active' : ''}`}
                  >
                    B&W (30-Day)
                  </button>
                  <button 
                    onClick={() => handleInkToggle('tri-color-mode')} 
                    className={`pill-btn ${inkMode === 'tri-color-mode' ? 'active' : ''}`}
                  >
                    Tri-Color Accent
                  </button>
                </div>
              </div>
            </div>

            {/* Hardware Prototype Device Frame */}
            <div className={`physical-device-frame ${placement}`}>
              <div className="bezel-inner">
                {/* Simulated E-Paper Screen Surface */}
                <div className={`epaper-screen ${inkMode} ${isRefreshing ? 'refreshing' : ''}`}>
                  {/* Screen Header */}
                  <div className="screen-header">
                    <div>
                      <div className="screen-clock">10:42 AM</div>
                      <div className="screen-date">Wed, Sep 2</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="battery-badge-epaper">⚡ 94% • 30D</span>
                    </div>
                  </div>

                  {/* Screen Widgets Grid */}
                  <div className="screen-content-grid">
                    {activeWidgets.includes('schedule') && (
                      <div className="widget-box">
                        <div className="widget-box-title">
                          <span>Next Calendar Sync</span>
                          <span className={`widget-accent-tag ${inkMode === 'tri-color-mode' ? 'amber-accent' : ''}`}>11:30 AM</span>
                        </div>
                        <div className="widget-main-text">🚀 Product Architecture Review</div>
                        <div className="widget-sub-text">Room 4B • Google Calendar</div>
                      </div>
                    )}

                    {activeWidgets.includes('github') && (
                      <div className="widget-box">
                        <div className="widget-box-title">
                          <span>Developer Pipeline</span>
                          <span className={`widget-accent-tag ${inkMode === 'tri-color-mode' ? 'red-accent' : ''}`}>Urgent</span>
                        </div>
                        <div className="widget-main-text">PR #409 Approved</div>
                        <div className="widget-sub-text">3 Reviews • CI Build Passed</div>
                      </div>
                    )}

                    {activeWidgets.includes('pomodoro') && (
                      <div className="widget-box">
                        <div className="widget-box-title">
                          <span>Deep Focus Mode</span>
                          <span className="widget-accent-tag">Pomodoro</span>
                        </div>
                        <div className="widget-main-text" style={{ fontFamily: 'var(--font-mono)' }}>18 : 42</div>
                        <div className="widget-sub-text">Session 3 of 4 • Async Work</div>
                      </div>
                    )}

                    {activeWidgets.includes('weather') && (
                      <div className="widget-box">
                        <div className="widget-box-title">
                          <span>Ambient Climate</span>
                          <span className="widget-accent-tag">AQI 28</span>
                        </div>
                        <div className="widget-main-text">72°F Sunny</div>
                        <div className="widget-sub-text">Humidity 45% • Clear Sky</div>
                      </div>
                    )}

                    {activeWidgets.includes('qrcode') && (
                      <div className="widget-box">
                        <div className="widget-box-title">
                          <span>Guest Network</span>
                          <span className="widget-accent-tag">Wi-Fi</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <QrCode size={36} color="#111827" />
                          <div>
                            <div style={{ fontWeight: '800', fontSize: '0.8rem' }}>Scan for Wi-Fi</div>
                            <div className="widget-sub-text">SSID: AuraGuest</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Footer status line */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', paddingTop: '6px', borderTop: '1px solid #111827', fontSize: '0.65rem', fontWeight: '700' }}>
                    <span>SYNCED 2m AGO VIA COMPANION APP</span>
                    <span>7.5" E-PAPER</span>
                  </div>
                </div>

                <div className="hardware-brand-mark">AURA 7.5 — PROTOTYPE V1</div>
              </div>
            </div>

            {/* Widget Toggle Buttons Toolbar */}
            <div className="widget-toolbar">
              <button 
                className={`toolbar-btn ${activeWidgets.includes('schedule') ? 'active' : ''}`}
                onClick={() => toggleWidget('schedule')}
              >
                <Calendar size={14} /> Schedule
              </button>

              <button 
                className={`toolbar-btn ${activeWidgets.includes('github') ? 'active' : ''}`}
                onClick={() => toggleWidget('github')}
              >
                <GitPullRequest size={14} /> GitHub PRs
              </button>

              <button 
                className={`toolbar-btn ${activeWidgets.includes('pomodoro') ? 'active' : ''}`}
                onClick={() => toggleWidget('pomodoro')}
              >
                <Clock size={14} /> Focus Timer
              </button>

              <button 
                className={`toolbar-btn ${activeWidgets.includes('weather') ? 'active' : ''}`}
                onClick={() => toggleWidget('weather')}
              >
                <CloudSun size={14} /> Weather
              </button>

              <button 
                className={`toolbar-btn ${activeWidgets.includes('qrcode') ? 'active' : ''}`}
                onClick={() => toggleWidget('qrcode')}
              >
                <QrCode size={14} /> Wi-Fi QR
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
