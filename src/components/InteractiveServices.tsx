import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';

interface ServiceDetail {
  id: string;
  title: string;
  icon: React.ReactNode;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  process: string[];
  cases: {
    company: string;
    industry: string;
    challenge: string;
    solution: string;
    results: string[];
  }[];
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

const InteractiveServices: React.FC = () => {
  const sectionAnimation = useScrollAnimation();
  const [activeService, setActiveService] = useState<string>('diagnostico');
  const [activeTab, setActiveTab] = useState<string>('overview');

  const services: ServiceDetail[] = [
    {
      id: 'diagnostico',
      title: 'Diagnóstico & Optimización',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      shortDescription: 'Análisis profundo para identificar oportunidades de mejora',
      fullDescription: 'Realizamos un análisis exhaustivo de todos los procesos de tu empresa utilizando metodologías probadas como Lean Manufacturing, Six Sigma y Value Stream Mapping. Identificamos cuellos de botella, desperdicios ocultos y oportunidades de automatización.',
      benefits: [
        'Reducción de costos operativos hasta 35%',
        'Mejora en tiempos de proceso hasta 50%',
        'Identificación de tareas automatizables',
        'Optimización del flujo de trabajo',
        'Detección de desperdicios ocultos'
      ],
      process: [
        'Mapeo inicial de procesos actuales',
        'Análisis de datos y métricas existentes',
        'Identificación de cuellos de botella',
        'Propuesta de mejoras priorizadas',
        'Plan de implementación detallado'
      ],
      cases: [
        {
          company: 'Metalúrgica ABC',
          industry: 'Manufactura',
          challenge: 'Tiempos de producción elevados y desperdicio de material',
          solution: 'Implementación de Lean Manufacturing y rediseño de layout',
          results: ['40% reducción en tiempo de ciclo', '25% menos desperdicio', '15% aumento en productividad']
        },
        {
          company: 'Textil XYZ',
          industry: 'Textil',
          challenge: 'Procesos manuales lentos y errores frecuentes',
          solution: 'Automatización de procesos críticos y control de calidad',
          results: ['60% reducción en errores', '30% mejora en velocidad', '20% ahorro en costos']
        }
      ],
      metrics: [
        { label: 'Empresas Optimizadas', value: '45+', description: 'Proyectos exitosos completados' },
        { label: 'Ahorro Promedio', value: '28%', description: 'Reducción en costos operativos' },
        { label: 'Tiempo Implementación', value: '6-12', description: 'Semanas para ver resultados' }
      ]
    },
    {
      id: 'gestion',
      title: 'Gestión & Control Operativo',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      shortDescription: 'Dashboards y KPIs para decisiones basadas en datos',
      fullDescription: 'Implementamos sistemas de control operativo con dashboards personalizados, KPIs estratégicos y reportes automatizados que te permiten tomar decisiones informadas en tiempo real.',
      benefits: [
        'Visibilidad completa de operaciones',
        'Toma de decisiones basada en datos',
        'Detección temprana de problemas',
        'Reportes automatizados',
        'Mejora continua sistemática'
      ],
      process: [
        'Definición de KPIs estratégicos',
        'Configuración de sistemas de captura',
        'Diseño de dashboards personalizados',
        'Implementación de alertas automáticas',
        'Capacitación del equipo'
      ],
      cases: [
        {
          company: 'Logística 123',
          industry: 'Logística',
          challenge: 'Falta de visibilidad en operaciones diarias',
          solution: 'Dashboard integral con KPIs de rendimiento',
          results: ['100% visibilidad operativa', '25% mejora en entregas', '30% reducción en reclamos']
        }
      ],
      metrics: [
        { label: 'Dashboards Creados', value: '30+', description: 'Sistemas de control implementados' },
        { label: 'KPIs Monitoreados', value: '150+', description: 'Métricas bajo seguimiento' },
        { label: 'Mejora en Decisiones', value: '45%', description: 'Velocidad de respuesta' }
      ]
    },
    {
      id: 'layout',
      title: 'Layout Industrial',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      shortDescription: 'Diseño óptimo de espacios para máxima eficiencia',
      fullDescription: 'Diseñamos layouts industriales que maximizan la eficiencia del flujo de materiales, minimizan transportes y optimizan el uso del espacio disponible.',
      benefits: [
        'Optimización del flujo de materiales',
        'Reducción de tiempos de transporte',
        'Mejor aprovechamiento del espacio',
        'Ambiente de trabajo más seguro',
        'Facilita futuras expansiones'
      ],
      process: [
        'Análisis del espacio actual',
        'Estudio de flujo de materiales',
        'Simulación de alternativas',
        'Diseño detallado 3D',
        'Plan de reubicación'
      ],
      cases: [
        {
          company: 'Industria DEF',
          industry: 'Alimentaria',
          challenge: 'Layout ineficiente con largos recorridos',
          solution: 'Rediseño completo con enfoque en flujo continuo',
          results: ['50% reducción en distancias', '35% mejora en throughput', '20% ahorro en espacio']
        }
      ],
      metrics: [
        { label: 'Plantas Rediseñadas', value: '25+', description: 'Layouts optimizados' },
        { label: 'Ahorro Espacial', value: '30%', description: 'Mejor aprovechamiento' },
        { label: 'Reducción Transporte', value: '40%', description: 'Menos movimientos' }
      ]
    },
    {
      id: 'digitalizacion',
      title: 'Digitalización',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      shortDescription: 'Transformación digital integral de procesos',
      fullDescription: 'Llevamos tu empresa al siguiente nivel con tecnologías digitales: automatización de procesos, integración de sistemas y herramientas de business intelligence.',
      benefits: [
        'Automatización de tareas repetitivas',
        'Integración de sistemas existentes',
        'Acceso remoto a información',
        'Reducción de errores humanos',
        'Escalabilidad mejorada'
      ],
      process: [
        'Auditoría tecnológica actual',
        'Identificación de oportunidades',
        'Selección de tecnologías',
        'Implementación por fases',
        'Capacitación y soporte'
      ],
      cases: [
        {
          company: 'Servicios GHI',
          industry: 'Servicios',
          challenge: 'Procesos completamente manuales y desconectados',
          solution: 'Plataforma digital integrada con automatización',
          results: ['70% reducción en tiempo admin', '90% menos errores', '50% mejora en satisfacción']
        }
      ],
      metrics: [
        { label: 'Procesos Digitalizados', value: '200+', description: 'Automatizaciones implementadas' },
        { label: 'Sistemas Integrados', value: '60+', description: 'Conexiones establecidas' },
        { label: 'Ahorro en Tiempo', value: '65%', description: 'Reducción en tareas manuales' }
      ]
    }
  ];

  const activeServiceData = services.find(s => s.id === activeService) || services[0];

  const tabs = [
    { id: 'overview', label: 'Visión General', icon: '📋' },
    { id: 'process', label: 'Proceso', icon: '🔄' },
    { id: 'cases', label: 'Casos de Éxito', icon: '🏆' },
    { id: 'metrics', label: 'Resultados', icon: '📊' }
  ];

  return (
    <section id="servicios-interactivos" className="min-h-screen bg-gray-50 dark:bg-gray-800 py-20">
      <div className="container">
        {/* Header */}
        <div 
          ref={sectionAnimation.ref}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${sectionAnimation.className}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Explora Nuestros <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Selecciona un servicio para conocer en detalle cómo podemos transformar tu empresa
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Service Selector */}
          <div className="lg:col-span-1">
            <div className="space-y-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    setActiveService(service.id);
                    setActiveTab('overview');
                  }}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                    activeService === service.id
                      ? 'bg-insolva-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-insolva-50 dark:hover:bg-gray-600'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className={`${activeService === service.id ? 'text-white' : 'text-insolva-600'}`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm">{service.title}</h3>
                      <p className={`text-xs mt-1 ${
                        activeService === service.id ? 'text-insolva-100' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
              {/* Tabs */}
              <div className="border-b border-gray-200 dark:border-gray-700">
                <nav className="flex space-x-8 px-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                        activeTab === tab.id
                          ? 'border-insolva-500 text-insolva-600 dark:text-insolva-400'
                          : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                      }`}
                    >
                      <span className="mr-2">{tab.icon}</span>
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                        <span className="text-insolva-600 mr-3">{activeServiceData.icon}</span>
                        {activeServiceData.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                        {activeServiceData.fullDescription}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Beneficios Clave</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {activeServiceData.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-insolva-500 rounded-full"></div>
                            <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'process' && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Nuestro Proceso</h3>
                    <div className="space-y-4">
                      {activeServiceData.process.map((step, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-insolva-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <p className="text-gray-700 dark:text-gray-300 font-medium">{step}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'cases' && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Casos de Éxito</h3>
                    <div className="space-y-6">
                      {activeServiceData.cases.map((case_, index) => (
                        <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{case_.company}</h4>
                            <span className="text-sm bg-insolva-100 dark:bg-insolva-900 text-insolva-700 dark:text-insolva-300 px-3 py-1 rounded-full">
                              {case_.industry}
                            </span>
                          </div>
                          <div className="space-y-3">
                            <div>
                              <strong className="text-gray-900 dark:text-white">Desafío:</strong>
                              <p className="text-gray-600 dark:text-gray-300">{case_.challenge}</p>
                            </div>
                            <div>
                              <strong className="text-gray-900 dark:text-white">Solución:</strong>
                              <p className="text-gray-600 dark:text-gray-300">{case_.solution}</p>
                            </div>
                            <div>
                              <strong className="text-gray-900 dark:text-white">Resultados:</strong>
                              <ul className="mt-2 space-y-1">
                                {case_.results.map((result, resultIndex) => (
                                  <li key={resultIndex} className="flex items-center space-x-2">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                    <span className="text-gray-600 dark:text-gray-300">{result}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'metrics' && (
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Nuestros Resultados</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {activeServiceData.metrics.map((metric, index) => (
                        <div key={index} className="text-center p-6 bg-gradient-to-br from-insolva-50 to-insolva-100 dark:from-insolva-900/20 dark:to-insolva-800/20 rounded-xl">
                          <div className="text-3xl font-bold text-insolva-600 dark:text-insolva-400 mb-2">
                            {metric.value}
                          </div>
                          <div className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {metric.label}
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            {metric.description}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => window.open('https://wa.me/+5491234567890?text=Hola! Me interesa conocer más sobre el servicio de ' + activeServiceData.title, '_blank')}
            className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2"
          >
            <span>Consultar sobre {activeServiceData.title}</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveServices;
