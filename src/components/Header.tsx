import React, { useState, useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeSection, setActiveSection } = useNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (section: string) => {
    setActiveSection(section as any);
    setIsMobileMenuOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+5491234567890?text=Hola! Me interesa conocer más sobre los servicios de INSOLVA', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="INSOLVA" 
              className="h-16 w-auto md:h-20"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => navigateToSection('inicio')} 
              className={`nav-link ${activeSection === 'inicio' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
            >
              Inicio
            </button>
            <button 
              onClick={() => navigateToSection('servicios')} 
              className={`nav-link ${activeSection === 'servicios' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
            >
              Servicios
            </button>
            <button 
              onClick={() => navigateToSection('segmentos')} 
              className={`nav-link ${activeSection === 'segmentos' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
            >
              Segmentos
            </button>
            <button 
              onClick={() => navigateToSection('planes')} 
              className={`nav-link ${activeSection === 'planes' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
            >
              Planes
            </button>
            <button 
              onClick={() => navigateToSection('nosotros')} 
              className={`nav-link ${activeSection === 'nosotros' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
            >
              Nosotros
            </button>
            <button 
              onClick={() => navigateToSection('contacto')} 
              className={`nav-link ${activeSection === 'contacto' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
            >
              Contacto
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-700 animate-slide-down">
            <nav className="container py-4 space-y-4">
              <button 
                onClick={() => navigateToSection('inicio')} 
                className={`block nav-link ${activeSection === 'inicio' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
              >
                Inicio
              </button>
              <button 
                onClick={() => navigateToSection('servicios')} 
                className={`block nav-link ${activeSection === 'servicios' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
              >
                Servicios
              </button>
              <button 
                onClick={() => navigateToSection('segmentos')} 
                className={`block nav-link ${activeSection === 'segmentos' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
              >
                Segmentos
              </button>
              <button 
                onClick={() => navigateToSection('planes')} 
                className={`block nav-link ${activeSection === 'planes' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
              >
                Planes
              </button>
              <button 
                onClick={() => navigateToSection('nosotros')} 
                className={`block nav-link ${activeSection === 'nosotros' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
              >
                Nosotros
              </button>
              <button 
                onClick={() => navigateToSection('contacto')} 
                className={`block nav-link ${activeSection === 'contacto' ? 'text-blue-600 dark:text-blue-400 font-semibold' : ''}`}
              >
                Contacto
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="btn-primary w-full justify-center"
              >
                Contactar por WhatsApp
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
