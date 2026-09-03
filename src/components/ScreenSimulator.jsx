import React, { useState } from 'react';
import { 
  Calendar, 
  GitPullRequest, 
  Clock, 
  CloudSun, 
  QrCode, 
  Sparkles, 
  RefreshCw,
  Sliders,
  Check
} from 'lucide-react';

export default function ScreenSimulator() {
  const [placement, setPlacement] = useState('desk-view'); // 'desk-view' or 'wall-view'
  const [inkMode, setInkMode] = useState('tri-color-mode'); // 'monochrome-mode' or 'tri-color-mode'
  const [activeWidgets, setActiveWidgets] = useState(['schedule', 'github', 'pomodoro', 'weather']);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const triggerRefresh = (callback) => {
    setIsRefreshing(true);
    setTimeout(() => {
      if (callback) callback();
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

  return (
    <section id="screen-demo" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-subtitle">Live Display Customizer</div>
          <h2 className="section-title">Show What Appears on Its Screen</h2>
          <p className="section-desc">
            Reconfigure layout grids, switch between Monochromatic B&W and Tri-Color accent ink, and test widgets in real time.
          </p>
        </div>

        <div className="simulator-wrapper" style={{ maxWidth: '940px', margin: '0 auto' }}>
          {/* Controls Bar */}
          <div className="hardware-controls">
            <div className="control-group">
              <span className="control-label">Placement:</span>
              <div className="pill-toggle">
                <button 
                  onClick={() => setPlacement('desk-view')} 
                  className={`pill-btn ${placement === 'desk-view' ? 'active' : ''}`}
                >
                  Desk Stand
                </button>
                <button 
                  onClick={() => setPlacement('wall-view')} 
                  className={`pill-btn ${placement === 'wall-view' ? 'active' : ''}`}
                >
                  Wall Mount
                </button>
              </div>
            </div>

            <div className="control-group">
              <span className="control-label">Ink Variant:</span>
              <div className="pill-toggle">
                <button 
                  onClick={() => handleInkToggle('monochrome-mode')} 
                  className={`pill-btn ${inkMode === 'monochrome-mode' ? 'active' : ''}`}
                >
                  B&W (Monochrome)
                </button>
                <button 
                  onClick={() => handleInkToggle('tri-color-mode')} 
                  className={`pill-btn ${inkMode === 'tri-color-mode' ? 'active' : ''}`}
                >
                  Tri-Color Accent
                </button>
              </div>
            </div>

            <button 
              onClick={() => triggerRefresh()}
              className="btn-secondary"
              style={{ padding: '4px 12px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <RefreshCw size={14} className={isRefreshing ? 'spin' : ''} />
              <span>Refresh Waveform</span>
            </button>
          </div>

          {/* Simulated Hardware Frame & Live Screen Content */}
          <div className={`physical-device-frame ${placement}`}>
            <div className="bezel-inner">
              {/* Simulated E-Paper Screen Surface */}
              <div className={`epaper-screen ${inkMode} ${isRefreshing ? 'refreshing' : ''}`}>
                {/* Screen Top Header Bar */}
                <div className="screen-header">
                  <div>
                    <div className="screen-clock">10:42 AM</div>
                    <div className="screen-date">Wed, Sep 2</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="battery-badge-epaper">⚡ 94% • 30D</span>
                  </div>
                </div>

                {/* Screen Content Grid (Renders Selected Widgets) */}
                <div className="screen-content-grid">
                  {activeWidgets.includes('schedule') && (
                    <div className="widget-box">
                      <div className="widget-box-title">
                        <span>Calendar Sync</span>
                        <span className={`widget-accent-tag ${inkMode === 'tri-color-mode' ? 'amber-accent' : ''}`}>11:30 AM</span>
                      </div>
                      <div className="widget-main-text">🚀 Product Sprint Review</div>
                      <div className="widget-sub-text">Room 4B • Google Calendar</div>
                    </div>
                  )}

                  {activeWidgets.includes('github') && (
                    <div className="widget-box">
                      <div className="widget-box-title">
                        <span>Dev Pipeline</span>
                        <span className={`widget-accent-tag ${inkMode === 'tri-color-mode' ? 'red-accent' : ''}`}>Urgent</span>
                      </div>
                      <div className="widget-main-text">PR #409 Approved</div>
                      <div className="widget-sub-text">3 Reviews • CI Build Passed</div>
                    </div>
                  )}

                  {activeWidgets.includes('pomodoro') && (
                    <div className="widget-box">
                      <div className="widget-box-title">
                        <span>Deep Focus</span>
                        <span className="widget-accent-tag">Pomodoro</span>
                      </div>
                      <div className="widget-main-text" style={{ fontFamily: 'var(--font-mono)' }}>18 : 42</div>
                      <div className="widget-sub-text">Session 3 of 4 • Async Work</div>
                    </div>
                  )}

                  {activeWidgets.includes('weather') && (
                    <div className="widget-box">
                      <div className="widget-box-title">
                        <span>Climate</span>
                        <span className="widget-accent-tag">AQI 28</span>
                      </div>
                      <div className="widget-main-text">72°F Sunny</div>
                      <div className="widget-sub-text">Humidity 45% • Clear Sky</div>
                    </div>
                  )}

                  {activeWidgets.includes('qrcode') && (
                    <div className="widget-box">
                      <div className="widget-box-title">
                        <span>Guest Wi-Fi</span>
                        <span className="widget-accent-tag">QR Code</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <QrCode size={36} color="#111827" />
                        <div>
                          <div style={{ fontWeight: '800', fontSize: '0.8rem' }}>Scan to Join</div>
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

          {/* Interactive Widget Selector Toolbar */}
          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '10px' }}>
              Click to toggle active screen modules:
            </div>
            
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
                <GitPullRequest size={14} /> Developer PRs
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
                <QrCode size={14} /> Guest Wi-Fi QR
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
