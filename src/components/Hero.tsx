import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import SavingsCalculatorCompact from './SavingsCalculatorCompact';

const Hero: React.FC = () => {
  const { setActiveSection } = useNavigation();

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/+5491234567890?text=Hola! Me interesa conocer más sobre los servicios de optimización de procesos de INSOLVA', '_blank');
  };

  const navigateToPlanes = () => {
    setActiveSection('planes');
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-insolva-50 via-white to-insolva-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-insolva-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-insolva-100/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center">
        <div className="transition-all duration-1000 ease-out">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-gray-900 dark:text-white">Optimizamos</span>
            <span className="block text-gradient">Tus Procesos</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="font-semibold text-insolva-600 dark:text-insolva-400">Diagnóstico</span>, 
            <span className="font-semibold text-insolva-600 dark:text-insolva-400"> automatización</span> y 
            <span className="font-semibold text-insolva-600 dark:text-insolva-400"> gestión operativa</span> para 
            hacer tu empresa más <span className="font-bold">competitiva y rentable</span>.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleWhatsAppClick}
              className="bg-white text-insolva-600 font-semibold px-8 py-4 rounded-xl hover:bg-insolva-50 transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <span>Conversemos</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
              </svg>
            </button>

            <button
              onClick={navigateToPlanes}
              className="btn-secondary text-lg px-8 py-4 w-full sm:w-auto group"
            >
              <span>Ver Planes</span>
              <svg 
                className="w-5 h-5 ml-2 transform group-hover:translate-y-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-insolva-600 dark:text-insolva-400 mb-2">+200</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Proyectos Exitosos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-insolva-600 dark:text-insolva-400 mb-2">+150</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Clientes Satisfechos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-insolva-600 dark:text-insolva-400 mb-2">+5</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">Años de Experiencia</div>
            </div>
          </div>

          {/* Calculadora de Ahorros */}
          <div className="max-w-4xl mx-auto">
            <SavingsCalculatorCompact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
