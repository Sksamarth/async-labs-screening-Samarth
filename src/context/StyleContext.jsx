import React, { createContext, useContext, useState, useEffect } from 'react';

const StyleContext = createContext({
  styleMode: 'epaper-monochrome',
  setEInkTheme: () => {},
  triggerGlobalWaveform: () => {},
});

export function StyleProvider({ children }) {
  const [styleMode, setStyleMode] = useState('epaper-monochrome');
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    document.body.className = `theme-${styleMode}`;
  }, [styleMode]);

  const triggerGlobalWaveform = (callback) => {
    document.body.classList.add('eink-refreshing');
    setIsRefreshing(true);
    setTimeout(() => {
      if (callback) callback();
      document.body.classList.remove('eink-refreshing');
      setIsRefreshing(false);
    }, 380);
  };

  const setEInkTheme = (newTheme) => {
    triggerGlobalWaveform(() => {
      setStyleMode(newTheme);
    });
  };

  return (
    <StyleContext.Provider value={{ styleMode, setEInkTheme, triggerGlobalWaveform, isRefreshing }}>
      {children}
    </StyleContext.Provider>
  );
}

export function useStyle() {
  return useContext(StyleContext);
}
