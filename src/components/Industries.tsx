import React from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';

interface Segment {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const Segments: React.FC = () => {
  const sectionAnimation = useScrollAnimation();

  const segments: Segment[] = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: 'Restaurantes',
      description: 'Optimización de procesos de cocina, servicio al cliente y gestión de inventario para restaurantes.',
      features: [
        'Control de inventario inteligente',
        'Optimización de tiempos de cocina',
        'Gestión de pedidos y delivery',
        'Control de costos de alimentos',
        'Análisis de rentabilidad por plato'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Empresas de Turismo',
      description: 'Gestión integral de reservas, itinerarios y experiencias del cliente en el sector turístico.',
      features: [
        'Sistema de reservas automatizado',
        'Gestión de itinerarios dinámicos',
        'Control de capacidad y disponibilidad',
        'Análisis de experiencia del cliente',
        'Optimización de rutas y costos'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Estudios Contables',
      description: 'Digitalización y automatización de procesos contables para mayor eficiencia y precisión.',
      features: [
        'Automatización de reportes',
        'Gestión digital de documentos',
        'Seguimiento de vencimientos',
        'Dashboard de clientes y KPIs',
        'Integración con sistemas tributarios'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      title: 'Comercios',
      description: 'Optimización de ventas, inventario y atención al cliente para comercios minoristas.',
      features: [
        'Control de stock en tiempo real',
        'Análisis de ventas y tendencias',
        'Gestión de proveedores',
        'Automatización de reposición',
        'Programa de fidelización'
      ]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: 'Clínicas y Profesionales de la Salud',
      description: 'Gestión integral de pacientes, turnos y procesos médicos para mejorar la atención sanitaria.',
      features: [
        'Sistema de turnos inteligente',
        'Historias clínicas digitales',
        'Gestión de tratamientos',
        'Control de medicamentos e insumos',
        'Análisis de indicadores de salud'
      ]
    }
  ];

  return (
    <section id="segmentos" className="min-h-screen bg-white dark:bg-gray-800 py-20">
      <div className="container">
        <div 
          ref={sectionAnimation.ref}
          className={`text-center mb-16 transition-all duration-1000 ${sectionAnimation.className}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Segmentos <span className="text-gradient">Especializados</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soluciones a medida para diferentes industrias, con propuestas personalizadas para cada sector
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {segments.map((segment, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {segment.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {segment.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {segment.description}
                </p>
                
                <ul className="space-y-3">
                  {segment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              🤝 Confidencialidad y Profesionalismo
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Tu información es tuya. Firmamos acuerdos de confidencialidad. No usamos tus datos para otros fines.
            </p>
            <p className="text-blue-600 dark:text-blue-400 font-semibold">
              Tu confianza es nuestro mayor activo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Segments;
