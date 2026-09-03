import React, { useEffect, useRef, useState } from 'react';
import { BatteryCharging, Zap, Eye, ArrowRight, Camera, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  const imgRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  // Subtle parallax on the hero product image
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero-section" style={{ paddingTop: '100px', paddingBottom: '0', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '960px' }}>

        {/* Badge */}
        <div className="section-tag" style={{ marginBottom: '20px' }}>
          <Sparkles size={13} />
          <span>7.5-Inch Smart E-Paper Workspace Display</span>
        </div>

        {/* Headline */}
        <h1 className="section-title" style={{ fontSize: 'clamp(2.8rem, 6vw, 4.6rem)', marginBottom: '18px', lineHeight: 1.08 }}>
          Smart. Simple.<br />Always Visible.
        </h1>

        {/* Tagline */}
        <p className="section-desc" style={{ maxWidth: '700px', margin: '0 auto 36px auto', fontSize: 'clamp(1rem, 2vw, 1.18rem)' }}>
          A low-power display that keeps what matters to you visible in your workspace — always up to date, personalized and effortlessly in sync with your world.
        </p>

        {/* CTA Buttons */}
        <div className="hero-cta-row" style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '52px' }}>
          <a href="#interactive-display" className="btn-primary" style={{ padding: '14px 30px', fontSize: '1rem' }}>
            <span>Try Live Simulator</span>
            <ArrowRight size={18} />
          </a>
          <a href="#gallery" className="btn-secondary" style={{ padding: '14px 30px', fontSize: '1rem' }}>
            <Camera size={18} />
            <span>View Gallery</span>
          </a>
        </div>

        {/* ── BIG HERO PRODUCT IMAGE ── */}
        <div style={{ position: 'relative', maxWidth: '820px', margin: '0 auto' }}>
          {/* Floating label top-left */}
          <div style={{
            position: 'absolute', top: '20px', left: '20px', zIndex: 10,
            background: 'var(--badge-bg)', color: 'var(--badge-text)',
            padding: '6px 16px', borderRadius: '20px', fontSize: '0.78rem',
            fontWeight: '800', border: '1px solid var(--text-main)',
            display: 'flex', alignItems: 'center', gap: '6px'
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
            Real Hardware Prototype
          </div>

          {/* Floating spec pill top-right */}
          <div style={{
            position: 'absolute', top: '20px', right: '20px', zIndex: 10,
            background: 'rgba(255,255,255,0.92)', color: '#0f172a',
            padding: '6px 14px', borderRadius: '20px', fontSize: '0.78rem',
            fontWeight: '800', border: '1.5px solid #0f172a',
            backdropFilter: 'blur(8px)'
          }}>
            7.5" E-Paper • 800×480
          </div>

          {/* Main product photo with subtle parallax */}
          <div style={{
            borderRadius: '20px', overflow: 'hidden',
            border: '2px solid var(--text-main)',
            boxShadow: '8px 8px 0px var(--text-main)',
            transform: `translateY(${scrollY * 0.08}px)`,
            transition: 'transform 0.1s linear',
          }}>
            <img
              ref={imgRef}
              src="/product-img/display_desk_prototype.jpg"
              alt="Async Labs 7.5-inch E-Paper Smart Display on desk"
              style={{ width: '100%', display: 'block', objectFit: 'cover', maxHeight: '480px' }}
            />
          </div>

          {/* Bottom floating stats bar */}
          <div style={{
            position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)',
            background: 'var(--bg-secondary)', border: '2px solid var(--text-main)',
            borderRadius: '40px', padding: '10px 28px', display: 'flex', gap: '28px',
            boxShadow: '4px 4px 0px var(--text-main)', whiteSpace: 'nowrap',
            zIndex: 10
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', fontWeight: '700' }}>
              <BatteryCharging size={16} color="#22c55e" />
              <span>1 Month Battery</span>
            </div>
            <div style={{ width: '1px', background: 'var(--bg-tertiary)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', fontWeight: '700' }}>
              <Zap size={16} color="#f59e0b" />
              <span>Ultra Low Power</span>
            </div>
            <div style={{ width: '1px', background: 'var(--bg-tertiary)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', fontWeight: '700' }}>
              <Eye size={16} color="#6366f1" />
              <span>Paper-like Clarity</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ paddingTop: '64px', paddingBottom: '40px', color: 'var(--text-muted)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', fontSize: '0.82rem', fontWeight: '600' }}>
          <ChevronDown size={20} style={{ animation: 'bounce 1.6s ease-in-out infinite' }} />
          Scroll to explore
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
