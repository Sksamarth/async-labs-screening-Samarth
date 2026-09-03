import React, { useState } from 'react';
import { Github, Menu, X } from 'lucide-react';
import { useStyle } from '../context/StyleContext';

export default function Navbar() {
  const { styleMode, setEInkTheme } = useStyle();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#gallery', label: 'Photo Gallery' },
    { href: '#interactive-display', label: 'Interactive Display' },
    { href: '#features', label: 'What You Can Do' },
    { href: '#workflow', label: 'Workflow' },
    { href: '#specs', label: 'Hardware Specs' },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo">
          <div className="brand-badge">AL</div>
          <div>
            <div className="brand-name">Async Labs</div>
            <div className="brand-sub">7.5" Smart Display</div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link">{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Right Actions Group */}
        <div className="nav-actions">
          {/* E-Paper Theme Pills — hidden on tablet/mobile */}
          <div className="theme-pill-container">
            <button
              onClick={() => setEInkTheme('epaper-monochrome')}
              className={`theme-pill-btn ${styleMode === 'epaper-monochrome' ? 'active' : ''}`}
              title="Light Paper Mode"
            >
              Light Paper
            </button>
            <button
              onClick={() => setEInkTheme('epaper-tricolor')}
              className={`theme-pill-btn ${styleMode === 'epaper-tricolor' ? 'active' : ''}`}
              title="Tri-Color Accent Mode"
            >
              3-Color
            </button>
            <button
              onClick={() => setEInkTheme('epaper-dark')}
              className={`theme-pill-btn ${styleMode === 'epaper-dark' ? 'active' : ''}`}
              title="Dark Ink Mode"
            >
              Dark Ink
            </button>
          </div>

          {/* GitHub Button — hidden on tablet/mobile */}
          <a
            href="https://github.com/Sksamarth/async-labs-screening-Samarth"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary github-btn"
          >
            <Github size={16} />
            <span style={{ fontSize: '0.85rem' }}>GitHub</span>
          </a>

          {/* Mobile Hamburger Button — shows on ≤1024px */}
          <button
            className="mobile-menu-btn btn-secondary"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            style={{ padding: '8px 12px' }}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu-drawer">
          {/* Theme switcher inside drawer */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', paddingBottom: '16px', borderBottom: '1px solid var(--bg-tertiary)' }}>
            <button
              onClick={() => { setEInkTheme('epaper-monochrome'); }}
              className={`theme-pill-btn ${styleMode === 'epaper-monochrome' ? 'active' : ''}`}
              style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--bg-tertiary)' }}
            >
              ☀ Light Paper
            </button>
            <button
              onClick={() => { setEInkTheme('epaper-tricolor'); }}
              className={`theme-pill-btn ${styleMode === 'epaper-tricolor' ? 'active' : ''}`}
              style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--bg-tertiary)' }}
            >
              🔴 3-Color
            </button>
            <button
              onClick={() => { setEInkTheme('epaper-dark'); }}
              className={`theme-pill-btn ${styleMode === 'epaper-dark' ? 'active' : ''}`}
              style={{ flex: 1, padding: '8px 12px', borderRadius: '8px', border: '1px solid var(--bg-tertiary)' }}
            >
              🌑 Dark Ink
            </button>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <a
            href="https://github.com/Sksamarth/async-labs-screening-Samarth"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ marginTop: '8px', justifyContent: 'center' }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <Github size={16} />
            <span>GitHub Repository</span>
          </a>
        </div>
      )}
    </nav>
  );
}
