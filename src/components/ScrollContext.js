import React, { createContext, useState, useCallback } from 'react';

export const ScrollContext = createContext({
  saveScroll: () => {},
  loadScroll: () => {},
});

export const useScroll = () => React.useContext(ScrollContext);

export const ScrollProvider = ({ children }) => {
  const [scrolls, setScrolls] = useState({});

  const saveScroll = useCallback((key) => {
    setScrolls((prev) => ({
      ...prev,
      [key]: window.scrollY,
    }));
  }, []);

  const loadScroll = useCallback((key) => {
    return scrolls[key];
  }, [scrolls]);

  return (
    <ScrollContext.Provider value={{ saveScroll, loadScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};
