import React, { createContext, useContext, useState } from 'react';

type SectionType = 'inicio' | 'servicios' | 'segmentos' | 'planes' | 'nosotros' | 'contacto';

interface NavigationContextType {
  activeSection: SectionType;
  setActiveSection: (section: SectionType) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

interface NavigationProviderProps {
  children: React.ReactNode;
}

export const NavigationProvider: React.FC<NavigationProviderProps> = ({ children }) => {
  const [activeSection, setActiveSection] = useState<SectionType>('inicio');

  const value = {
    activeSection,
    setActiveSection,
  };

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export type { SectionType };
