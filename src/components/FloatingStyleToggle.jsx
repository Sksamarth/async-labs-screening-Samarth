import React from 'react';
import { RefreshCw, Layers } from 'lucide-react';
import { useStyle } from '../context/StyleContext';

export default function FloatingStyleToggle() {
  const { styleMode, setEInkTheme, triggerGlobalWaveform } = useStyle();

  const cycleTheme = () => {
    if (styleMode === 'epaper-monochrome') setEInkTheme('epaper-tricolor');
    else if (styleMode === 'epaper-tricolor') setEInkTheme('epaper-dark');
    else setEInkTheme('epaper-monochrome');
  };

  const getLabel = () => {
    if (styleMode === 'epaper-monochrome') return 'Theme: B&W E-Paper';
    if (styleMode === 'epaper-tricolor') return 'Theme: 3-Color Ink';
    return 'Theme: Dark Ink';
  };

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 9999,
        display: 'flex',
        gap: '8px'
      }}
    >
      <button 
        onClick={cycleTheme}
        className="btn-primary"
        style={{
          borderRadius: '24px',
          padding: '10px 18px',
          fontSize: '0.82rem',
          fontWeight: '800',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}
      >
        <Layers size={16} />
        <span>{getLabel()}</span>
      </button>

      <button 
        onClick={() => triggerGlobalWaveform()}
        className="btn-secondary"
        style={{
          borderRadius: '50%',
          width: '42px',
          height: '42px',
          padding: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        title="Simulate E-Paper Refresh Waveform"
      >
        <RefreshCw size={16} />
      </button>
    </div>
  );
}
