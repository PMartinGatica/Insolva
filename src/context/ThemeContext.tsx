import React, { createContext, useContext, useEffect } from 'react';

interface ThemeContextType {
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Always use dark mode
  const isDark = true;

  useEffect(() => {
    // Always set dark mode on load
    const root = document.documentElement;
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    
    // Set a CSS custom property for consistent theming
    root.style.setProperty('--theme-transition', 'all 0.3s ease');
  }, []);

  const value = {
    isDark,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
