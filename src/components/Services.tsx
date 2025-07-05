import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';
import ServiceModal from './ServiceModal';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  valueProposition: string;
}

const Services: React.FC = () => {
  const sectionAnimation = useScrollAnimation();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services: Service[] = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Diagnóstico & Optimización',
      description: 'Análisis profundo de operaciones para identificar cuellos de botella, tareas repetitivas y pérdidas ocultas.',
      features: [
        'Análisis de procesos actuales',
        'Identificación de cuellos de botella', 
        'Cálculo de costos reales',
        'Rediseño con automatización IA',
        'Márgenes de rentabilidad'
      ],
      valueProposition: 'Optimizamos recursos y maximizamos eficiencia. Identificamos oportunidades de mejora y las convertimos en resultados tangibles y medibles.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Gestión & Control Operativo',
      description: 'Implementación de trazabilidad y visualización de datos con KPIs estratégicos para decisiones basadas en evidencia.',
      features: [
        'Trazabilidad completa',
        'Dashboards personalizados',
        'KPIs estratégicos', 
        'Reportes automatizados',
        'Control en tiempo real'
      ],
      valueProposition: 'Proporcionamos visibilidad completa de las operaciones empresariales en tiempo real, facilitando la toma de decisiones estratégicas informadas.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'IA & Automatización',
      description: 'Desarrollo de sistemas internos personalizados y automatización de marketing digital.',
      features: [
        'Sistemas personalizados',
        'Control de stock automático',
        'Dashboards inteligentes',
        'Marketing automatizado', 
        'Posicionamiento web'
      ],
      valueProposition: 'Desarrollamos sistemas específicos que permiten que su empresa opere de manera autónoma, mejore la comunicación y crezca de forma sostenible sin requerir supervisión constante.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Capacitaciones Prácticas',
      description: 'Entrenamos a tu equipo en mejora continua (Lean, Kaizen, Six Sigma) de forma simple y aplicable.',
      features: [
        'Metodologías Lean',
        'Kaizen aplicado',
        'Six Sigma básico',
        'Entrenamiento práctico',
        'Mejora continua'
      ],
      valueProposition: 'Proporcionamos metodologías prácticas y transferibles. Nuestro compromiso es enseñar a su equipo a mantener y mejorar continuamente los sistemas implementados.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Certificaciones ISO',
      description: 'Acompañamos para lograr ISO, OHSAS, y otros estándares, con preparación completa para auditorías.',
      features: [
        'Preparación ISO',
        'Estándares OHSAS',
        'Auditorías completas',
        'Documentación requerida',
        'Seguimiento continuo'
      ],
      valueProposition: 'Fortalecemos la imagen corporativa y reducimos riesgos operacionales. Las certificaciones abren nuevas oportunidades de mercado y mejoran la competitividad.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Digitalización Completa',
      description: 'Creación de bases de datos de procedimientos operativos accesibles y estandarizados.',
      features: [
        'Bases de datos estructuradas',
        'Procedimientos estandarizados',
        'Acceso fácil y rápido',
        'Documentación completa',
        'Sistema organizado'
      ],
      valueProposition: 'Cada persona sabe qué hacer, cómo y cuándo. Todo ordenado, a un clic.'
    }
  ];

  const openServiceModal = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section id="servicios" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div 
          ref={sectionAnimation.ref}
          className={`text-center mb-16 transition-all duration-1000 ${sectionAnimation.className}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soluciones integrales de optimización empresarial diseñadas para hacer tu negocio más competitivo y rentable
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-glass group hover:scale-105 transition-all duration-300"
            >
              <div className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 mb-6">
                  <p className="text-sm font-semibold text-blue-800 dark:text-blue-200">
                    💡 Valor agregado:
                  </p>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mt-1">
                    {service.valueProposition}
                  </p>
                </div>
                
                <button 
                  onClick={() => openServiceModal(service)}
                  className="btn-secondary w-full group-hover:btn-primary transition-all duration-300"
                >
                  Conocer más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <ServiceModal
          isOpen={isModalOpen}
          onClose={closeServiceModal}
          service={selectedService}
        />
      )}
    </section>
  );
};

export default Services;
