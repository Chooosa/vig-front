import React from 'react';

export const HeaderContext = React.createContext({
  headerRef: null,
  sections: [],
  activeSection: null,
  mobileNavOpened: false,
  setSections: () => {},
  setActiveSection: () => {},
});
