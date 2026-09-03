import React, { useState, useEffect, useRef } from 'react';
import { 
  Calendar, 
  Clock, 
  DoorClosed, 
  Cpu, 
  Megaphone, 
  CloudSun, 
  Quote, 
  Edit3, 
  Send, 
  RefreshCw, 
  Smartphone, 
  Sparkles,
  Compass,
  MousePointer
} from 'lucide-react';

export default function InteractiveStudio() {
  const [activePreset, setActivePreset] = useState('calendar');
  const [inkMode, setInkMode] = useState('3-color'); // '2-color' or '3-color'
  const [customText, setCustomText] = useState('Welcome to Async Labs Studio!');
  const [isFlashing, setIsFlashing] = useState(false);

  // Parallax 3D Transform States
  const [transform3D, setTransform3D] = useState({ rotateX: 8, rotateY: -2, translateY: 0, scale: 1 });
  const containerRef = useRef(null);

  const presets = [
    { key: 'calendar', name: 'Calendar & Schedule', icon: Calendar },
    { key: 'focus', name: 'Focus & Productivity', icon: Clock },
    { key: 'room', name: 'Meeting Room Display', icon: DoorClosed },
    { key: 'dev', name: 'Developer Dashboard', icon: Cpu },
    { key: 'updates', name: 'Office Updates', icon: Megaphone },
    { key: 'weather', name: 'Weather', icon: CloudSun },
    { key: 'quote', name: 'Quotes & Inspiration', icon: Quote },
    { key: 'custom', name: 'Custom Content', icon: Edit3 },
  ];

  const triggerFlash = (callback) => {
    setIsFlashing(true);
    setTimeout(() => {
      if (callback) callback();
      setIsFlashing(false);
    }, 380);
  };

  const handleSelectPreset = (presetKey) => {
    triggerFlash(() => setActivePreset(presetKey));
  };

  const handleSendCustomText = (e) => {
    e.preventDefault();
    if (!customText.trim()) return;
    triggerFlash(() => setActivePreset('custom'));
  };

  // Scroll Parallax 3D Movement Engine & Auto Preset Switcher
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false;
            return;
          }

          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Calculate scroll progress relative to studio section (-1 to 1)
          const centerOffset = (rect.top + rect.height / 2) - windowHeight / 2;
          const progress = Math.max(-1, Math.min(1, centerOffset / (windowHeight / 2)));

          // Smooth 3D Rotation and Translation based on scroll position
          const rotateX = 8 - progress * 14;
          const rotateY = progress * 18;
          const translateY = progress * -30;
          const scale = 1 - Math.abs(progress) * 0.04;

          setTransform3D({ rotateX, rotateY, translateY, scale });

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mouse Move Interactive 3D Tilt
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const mouseRotateY = (x / rect.width) * 20;
    const mouseRotateX = -(y / rect.height) * 20;

    setTransform3D(prev => ({
      ...prev,
      rotateY: mouseRotateY,
      rotateX: 8 + mouseRotateX
    }));
  };

  const handleMouseLeave = () => {
    setTransform3D({ rotateX: 8, rotateY: -2, translateY: 0, scale: 1 });
  };

  return (
    <section id="interactive-display" className="section" ref={containerRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Sparkles size={14} />
            <span>Interactive 3D Scroll Display</span>
          </div>
          <h2 className="section-title">Endless Ways To Use It</h2>
          <p className="section-desc">
            As you scroll down the page, the 7.5" E-Paper display moves smoothly in 3D perspective and changes contents automatically!
          </p>

          {/* Controls Bar — Ink Variant Only */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginTop: '24px' }}>
            <div className="pill-group">
              <button 
                className={`pill-btn ${inkMode === '2-color' ? 'active' : ''}`}
                onClick={() => triggerFlash(() => setInkMode('2-color'))}
              >
                Black & White (2-Color)
              </button>
              <button 
                className={`pill-btn ${inkMode === '3-color' ? 'active' : ''}`}
                onClick={() => triggerFlash(() => setInkMode('3-color'))}
              >
                Black, White & Accent Red/Yellow (3-Color)
              </button>
            </div>
          </div>
        </div>

        {/* Main studio-layout: 3D Display + Companion Controls — responsive via CSS class */}
        <div className="studio-layout">
          
          {/* Left: Async Labs Physical Display Frame with 3D Parallax Perspective */}
          <div 
            className="parallax-3d-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="async-hardware-frame desk-view"
              style={{
                transform: `perspective(1200px) rotateX(${transform3D.rotateX}deg) rotateY(${transform3D.rotateY}deg) translateY(${transform3D.translateY}px) scale(${transform3D.scale})`,
              }}
            >
              <div className="bezel-inner-screen-container">
                {/* E-Paper Screen Surface */}
                <div className={`epaper-surface ${inkMode === '3-color' ? 'tri-color-accent' : ''} ${isFlashing ? 'flashing' : ''}`}>
                  
                  {/* Preset 1: Calendar */}
                  {activePreset === 'calendar' && (
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div className="screen-preset-header">
                        <div style={{ fontWeight: '800', fontSize: '1.2rem', fontFamily: 'var(--font-mono)' }}>WED 28 MAY</div>
                        <span className={`preset-title-badge ${inkMode === '3-color' ? 'accent-amber' : ''}`}>CALENDAR</span>
                      </div>

                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
                        <div style={{ border: '2px solid #111827', padding: '12px', borderRadius: '6px', background: '#fff' }}>
                          <div style={{ fontSize: '0.7rem', fontWeight: '800', textTransform: 'uppercase', color: '#6b7280' }}>11:30 AM - 12:30 PM</div>
                          <div style={{ fontSize: '1.1rem', fontWeight: '800', color: '#111827', marginTop: '2px' }}>🚀 Product Architecture Review</div>
                          <div style={{ fontSize: '0.78rem', color: '#4b5563' }}>Room 4B • Sync with Google Calendar</div>
                        </div>

                        <div style={{ border: '1.5px solid #111827', padding: '10px', borderRadius: '6px', background: '#f9fafb' }}>
                          <div style={{ fontSize: '0.7rem', fontWeight: '800', color: '#6b7280' }}>2:00 PM</div>
                          <div style={{ fontSize: '0.95rem', fontWeight: '700', color: '#111827' }}>Design Sprint & Roadmap</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Preset 2: Focus & Productivity */}
                  {activePreset === 'focus' && (
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}>
                      <div className="screen-preset-header">
                        <div style={{ fontWeight: '800', fontSize: '1rem' }}>FOCUS TIME</div>
                        <span className={`preset-title-badge ${inkMode === '3-color' ? 'accent-red' : ''}`}>DO NOT DISTURB</span>
                      </div>

                      <div style={{ padding: '20px 0' }}>
                        <div style={{ fontSize: '3rem', fontWeight: '800', fontFamily: 'var(--font-mono)', letterSpacing: '-0.05em' }}>25 : 00</div>
                        <div style={{ fontSize: '1rem', fontWeight: '800', textTransform: 'uppercase', marginTop: '8px', letterSpacing: '0.05em' }}>
                          Deep Work In Progress
                        </div>
                        <div style={{ fontSize: '0.78rem', color: '#4b5563', marginTop: '4px' }}>Session 2 of 4 • Phone Silent</div>
                      </div>
                    </div>
                  )}

                  {/* Preset 3: Meeting Room Display */}
                  {activePreset === 'room' && (
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div className="screen-preset-header">
                        <div style={{ fontWeight: '800', fontSize: '1.1rem' }}>MEETING ROOM 4B</div>
                        <span className={`preset-title-badge ${inkMode === '3-color' ? 'accent-red' : ''}`}>BOOKED</span>
                      </div>

                      <div style={{ border: '2px solid #111827', padding: '16px', borderRadius: '6px', background: '#fff', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.3rem', fontWeight: '800', color: '#111827' }}>Project Review</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: '700', color: '#4b5563', marginTop: '4px' }}>2:00 PM – 3:00 PM</div>
                        <div style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '8px' }}>Reserved by Product Team</div>
                      </div>
                    </div>
                  )}

                  {/* Preset 4: Developer Dashboard */}
                  {activePreset === 'dev' && (
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div className="screen-preset-header">
                        <div style={{ fontWeight: '800', fontSize: '0.95rem' }}>DEVELOPER DASHBOARD</div>
                        <span className={`preset-title-badge ${inkMode === '3-color' ? 'accent-amber' : ''}`}>CI/CD OK</span>
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        <div style={{ border: '1.5px solid #111827', padding: '10px', borderRadius: '6px', background: '#fff' }}>
                          <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#6b7280' }}>SYSTEM LOAD</div>
                          <div style={{ fontSize: '1.1rem', fontWeight: '800' }}>CPU 32%</div>
                          <div style={{ fontSize: '0.75rem', color: '#4b5563' }}>RAM 68%</div>
                        </div>

                        <div style={{ border: '1.5px solid #111827', padding: '10px', borderRadius: '6px', background: '#fff' }}>
                          <div style={{ fontSize: '0.65rem', fontWeight: '800', color: '#6b7280' }}>DEPLOYMENT</div>
                          <div style={{ fontSize: '0.9rem', fontWeight: '800' }}>Next Deploy</div>
                          <div style={{ fontSize: '0.8rem', fontWeight: '700', color: '#111827' }}>2:45 PM</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Preset 5: Office Updates */}
                  {activePreset === 'updates' && (
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div className="screen-preset-header">
                        <div style={{ fontWeight: '800', fontSize: '1rem' }}>OFFICE ANNOUNCEMENT</div>
                        <span className={`preset-title-badge ${inkMode === '3-color' ? 'accent-amber' : ''}`}>NOTICE</span>
                      </div>

                      <div style={{ border: '2px solid #111827', padding: '16px', borderRadius: '6px', background: '#fff', textAlign: 'center' }}>
                        <Megaphone size={28} color="#111827" style={{ marginBottom: '8px' }} />
                        <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#111827' }}>Office Closed on Monday</div>
                        <div style={{ fontSize: '0.85rem', color: '#4b5563', marginTop: '4px' }}>Happy Holiday to all team members!</div>
                      </div>
                    </div>
                  )}

                  {/* Preset 6: Weather */}
                  {activePreset === 'weather' && (
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div className="screen-preset-header">
                        <div style={{ fontWeight: '800', fontSize: '1rem' }}>WEATHER FORECAST</div>
                        <span className="preset-title-badge">LIVE AQI 24</span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '12px 0' }}>
                        <CloudSun size={52} color="#111827" />
                        <div>
                          <div style={{ fontSize: '2.5rem', fontWeight: '800', lineHeight: '1' }}>28°C</div>
                          <div style={{ fontSize: '0.95rem', fontWeight: '700', marginTop: '4px' }}>Partly Cloudy</div>
                          <div style={{ fontSize: '0.75rem', color: '#4b5563' }}>Humidity 45% • Wind 12 km/h</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Preset 7: Quotes & Inspiration */}
                  {activePreset === 'quote' && (
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}>
                      <div className="screen-preset-header">
                        <div style={{ fontWeight: '800', fontSize: '0.9rem' }}>DAILY INSPIRATION</div>
                        <span className="preset-title-badge">QUOTE</span>
                      </div>

                      <div style={{ padding: '10px 0' }}>
                        <Quote size={28} color="#111827" style={{ opacity: 0.6, marginBottom: '6px' }} />
                        <div style={{ fontSize: '1.25rem', fontWeight: '800', fontStyle: 'italic', color: '#111827', lineHeight: '1.3' }}>
                          "Stay focused and keep shipping."
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Preset 8: Custom Content */}
                  {activePreset === 'custom' && (
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div className="screen-preset-header">
                        <div style={{ fontWeight: '800', fontSize: '0.9rem' }}>CUSTOM NOTICE</div>
                        <span className={`preset-title-badge ${inkMode === '3-color' ? 'accent-amber' : ''}`}>COMPANION APP</span>
                      </div>

                      <div style={{ border: '2px solid #111827', padding: '16px', borderRadius: '6px', background: '#fff', textAlign: 'center' }}>
                        <div style={{ fontSize: '1.2rem', fontWeight: '800', color: '#111827', lineHeight: '1.4' }}>
                          {customText || 'Your custom message appears here!'}
                        </div>
                        <div style={{ fontSize: '0.72rem', color: '#6b7280', marginTop: '8px' }}>
                          Pushed live via Companion App
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bottom Bar */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px', paddingTop: '6px', borderTop: '1px solid #111827', fontSize: '0.62rem', fontWeight: '700' }}>
                    <span>ALWAYS VISIBLE • ASYNC LABS</span>
                    <span>7.5" LOW POWER</span>
                  </div>
                </div>

                {/* Debossed Bezel Logo matching actual prototype image */}
                <div className="bezel-brand-deboss">Async Labs</div>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '12px', fontSize: '0.78rem', color: 'var(--text-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <MousePointer size={13} />
              <span>Scroll page or move mouse over frame to tilt in 3D</span>
            </div>
          </div>

          {/* Right: Interactive Preset Selector & Companion App Sender */}
          <div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '16px' }}>
              Choose What Shows on Your Display
            </h3>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginBottom: '24px', lineHeight: '1.6' }}>
              Click any of the ready-made display modes below or scroll down the page to auto-switch presets:
            </p>

            {/* Presets Grid — responsive via studio-presets-grid class */}
            <div className="studio-presets-grid">
              {presets.map((p) => {
                const Icon = p.icon;
                const isSelected = activePreset === p.key;
                return (
                  <button 
                    key={p.key}
                    onClick={() => handleSelectPreset(p.key)}
                    style={{
                      padding: '12px 14px',
                      borderRadius: '12px',
                      background: isSelected ? 'rgba(56,189,248,0.14)' : 'var(--bg-card)',
                      boxShadow: isSelected ? '0 0 16px rgba(56,189,248,0.3)' : 'var(--card-shadow)',
                      border: isSelected ? '2px solid var(--accent-cyan)' : 'var(--card-border)',
                      color: isSelected ? 'var(--text-main)' : 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      textAlign: 'left',
                      transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}
                  >
                    <Icon size={18} color={isSelected ? 'var(--accent-cyan)' : 'var(--text-dim)'} />
                    <span style={{ fontSize: '0.88rem', fontWeight: '600' }}>{p.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Companion App Live Text Input Box */}
            <div className="glass-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent-cyan)', marginBottom: '12px' }}>
                <Smartphone size={16} />
                <span>Test Companion App Instant Sender</span>
              </div>

              <form onSubmit={handleSendCustomText} style={{ display: 'flex', gap: '10px' }}>
                <input 
                  type="text" 
                  value={customText} 
                  onChange={(e) => setCustomText(e.target.value)}
                  placeholder="Type any quote, reminder or notice..."
                  style={{
                    flex: 1,
                    background: 'rgba(0,0,0,0.5)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '10px',
                    padding: '10px 14px',
                    color: '#fff',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
                <button type="submit" className="btn-primary" style={{ padding: '10px 18px', fontSize: '0.88rem' }}>
                  <Send size={15} />
                  <span>Send</span>
                </button>
              </form>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
