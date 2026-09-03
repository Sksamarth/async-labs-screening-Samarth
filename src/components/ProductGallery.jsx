import React, { useState } from 'react';
import { Camera, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductGallery() {
  const productPhotos = [
    {
      id: 'desk-proto',
      src: '/product-img/display_desk_prototype.jpg',
      title: 'Async Labs Hardware Prototype',
      caption: 'Fixed 7.5-inch e-paper display sitting on desk stand with debossed Async Labs bezel branding.',
      tag: 'Real Hardware'
    },
    {
      id: 'angle-1',
      src: '/product-img/product_angle_1.png',
      title: 'Studio Workspace Setup',
      caption: 'Matte black frame angled beside laptop and desk lamp for glanceable workflow clarity.',
      tag: 'Desk Setup'
    },
    {
      id: 'angle-2',
      src: '/product-img/product_angle_2.png',
      title: 'High-Contrast E-Paper Display',
      caption: 'Paperlike high contrast readable under ambient office lighting with zero screen glare.',
      tag: 'Display Surface'
    },
    {
      id: 'angle-3',
      src: '/product-img/product_angle_3.png',
      title: 'Minimalist Frame & Bezel Detail',
      caption: 'Durable 300g lightweight chassis with integrated USB-C port.',
      tag: 'Hardware Detail'
    },
    {
      id: 'angle-4',
      src: '/product-img/product_angle_4.png',
      title: 'Ambient Deep Focus Setup',
      caption: 'Seamless integration into modern developer desks, executive offices, and creative studios.',
      tag: 'Workspace Context'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activePhoto = productPhotos[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? productPhotos.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === productPhotos.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="gallery" className="section" style={{ background: 'var(--bg-secondary)', borderTop: 'var(--border-ink)', borderBottom: 'var(--border-ink)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <Camera size={14} />
            <span>Product Photography</span>
          </div>
          <h2 className="section-title">Physical Product Gallery</h2>
          <p className="section-desc">
            Explore real physical prototype photography showcasing the 7.5-inch hardware frame, proportions, and workspace placement.
          </p>
        </div>

        {/* Main Gallery Showcase Frame */}
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          <div className="glass-card" style={{ padding: '20px', overflow: 'hidden' }}>
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '10px', overflow: 'hidden', background: '#090a0f', border: '1.5px solid var(--text-main)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={activePhoto.src}
                alt={activePhoto.title}
                style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'all 0.3s ease' }}
              />

              {/* Tag Badge */}
              <div style={{ position: 'absolute', top: '12px', left: '12px', background: 'var(--badge-bg)', color: 'var(--badge-text)', padding: '4px 12px', borderRadius: '20px', fontSize: '0.78rem', fontWeight: '800', border: '1px solid var(--text-main)' }}>
                {activePhoto.tag}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={handlePrev}
                className="btn-secondary"
                style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', padding: '0', borderRadius: '50%', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                aria-label="Previous Photo"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={handleNext}
                className="btn-secondary"
                style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', padding: '0', borderRadius: '50%', width: '38px', height: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}
                aria-label="Next Photo"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            {/* Photo Caption Row */}
            <div style={{ marginTop: '14px', padding: '8px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' }}>
              <div style={{ flex: 1, minWidth: '200px' }}>
                <h3 style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', fontWeight: '800', marginBottom: '4px' }}>{activePhoto.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>{activePhoto.caption}</p>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: '700', flexShrink: 0 }}>
                Photo {activeIndex + 1} of {productPhotos.length}
              </div>
            </div>

            {/* Thumbnails Row — responsive via gallery-thumbs-grid class */}
            <div className="gallery-thumbs-grid">
              {productPhotos.map((photo, idx) => {
                const isSelected = activeIndex === idx;
                return (
                  <button
                    key={photo.id}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`View ${photo.title}`}
                    style={{
                      aspectRatio: '4/3',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: isSelected ? '3px solid var(--accent-cyan)' : '1.5px solid var(--border-ink-subtle)',
                      boxShadow: isSelected ? '3px 3px 0px var(--accent-cyan)' : 'none',
                      opacity: isSelected ? 1 : 0.65,
                      transition: 'all 0.15s ease',
                      padding: 0,
                      background: '#0d1017',
                      cursor: 'pointer',
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
