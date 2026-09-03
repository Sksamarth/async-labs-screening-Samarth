import React from 'react';
import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Top row — stacks on mobile via footer-top-row class */}
        <div className="footer-top-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', marginBottom: '24px' }}>
          <div className="brand-logo">
            <div className="brand-badge">AL</div>
            <div style={{ textAlign: 'left' }}>
              <div className="brand-name">Async Labs</div>
              <div className="brand-sub">7.5" Smart Display</div>
            </div>
          </div>

          {/* Footer navigation links */}
          <div className="footer-links-row" style={{ display: 'flex', gap: '20px', fontSize: '0.9rem', flexWrap: 'wrap' }}>
            <a href="#interactive-display" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Interactive Display</a>
            <a href="#features" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>What You Can Do</a>
            <a href="#workflow" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Workflow</a>
            <a href="#specs" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Hardware Specs</a>
            <a href="#companion-app" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Companion App</a>
          </div>

          <a
            href="https://github.com/Samarth/async-labs-screening-Samarth"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.85rem' }}
          >
            <Github size={14} />
            <span>GitHub Repo</span>
          </a>
        </div>

        <div style={{ borderTop: '1px solid var(--bg-tertiary)', paddingTop: '20px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', fontSize: '0.83rem' }}>
          <div>© 2026 Async Labs Smart Display • Candidate Submission by Samarth</div>
          <div>Smart. Simple. Always Visible.</div>
        </div>
      </div>
    </footer>
  );
}
