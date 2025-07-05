import React from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';

interface Plan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  ctaText: string;
}

const Plans: React.FC = () => {
  const sectionAnimation = useScrollAnimation();

  const plans: Plan[] = [
    {
      name: "Básico",
      price: "Desde $150.000",
      period: "",
      description: "Diagnóstico + propuesta de mejora + tablero simple",
      features: [
        "Análisis inicial de procesos",
        "Identificación de cuellos de botella",
        "Propuesta de optimización",
        "Dashboard básico de KPIs",
        "Reporte de estructura de costos",
        "1 sesión de capacitación",
        "Soporte 30 días"
      ],
      highlighted: false,
      ctaText: "Comenzar Diagnóstico"
    },
    {
      name: "Pro",
      price: "Desde $350.000",
      period: "",
      description: "Implementación de procesos + automatización parcial",
      features: [
        "Todo lo del plan Básico",
        "Implementación de mejoras",
        "Automatización de procesos clave",
        "Sistema de trazabilidad",
        "Dashboard avanzado con reportes",
        "Capacitación del equipo completo",
        "Soporte 90 días",
        "2 revisiones mensuales"
      ],
      highlighted:false,
      ctaText: "Plan Más Popular"
    },
    {
      name: "Premium",
      price: "Desde $650.000",
      period: "",
      description: "Solución llave en mano + IA + rediseño completo + capacitaciones",
      features: [
        "Todo lo del plan Pro",
        "Rediseño completo de procesos",
        "Integración de IA personalizada",
        "Layout industrial optimizado",
        "Certificaciones ISO incluidas",
        "Digitalización completa",
        "Capacitaciones Lean/Kaizen/Six Sigma",
        "Soporte tecnológico continuo",
        "Automatización avanzada",
        "Confidencialidad garantizada",
        "Soporte 12 meses"
      ],
      highlighted: false,
      ctaText: "Consultar Proyecto"
    }
  ];

  const handleWhatsAppClick = (planName: string) => {
    const message = encodeURIComponent(
      `Hola! Me interesa el plan ${planName} de INSOLVA. ¿Podrían brindarme más información?`
    );
    const phoneNumber = "+5491234567890";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="planes" className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="container">
        <div 
          ref={sectionAnimation.ref}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${sectionAnimation.className}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Planes que se adaptan a <span className="text-gradient">tu empresa</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Desde diagnóstico básico hasta transformación completa. Elige el plan que mejor se adapte a tus necesidades.
          </p>
          <div className="inline-flex items-center bg-insolva-50 dark:bg-insolva-900/30 rounded-full px-6 py-2 text-sm text-insolva-700 dark:text-insolva-300">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Sin permanencia • Consulta gratuita inicial
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const cardAnimation = useScrollAnimation();
            return (
              <div
                key={index}
                ref={cardAnimation.ref}
                className={`
                  relative rounded-2xl border-2 transition-all duration-500 ease-out transform hover:scale-105
                  ${cardAnimation.className}
                  ${plan.highlighted 
                    ? 'border-insolva-500 bg-gradient-to-b from-insolva-50 to-white dark:from-insolva-900/20 dark:to-gray-800 shadow-2xl' 
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-insolva-300 dark:hover:border-insolva-600'
                  }
                `}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Popular Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-insolva-500 to-insolva-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Más Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {plan.description}
                    </p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-gray-900 dark:text-white">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 ml-1">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex}
                        className="flex items-start"
                      >
                        <svg 
                          className="w-5 h-5 text-insolva-500 mr-3 mt-0.5 flex-shrink-0" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                        <span className="text-gray-600 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => handleWhatsAppClick(plan.name)}
                    className={`
                      w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105
                      ${plan.highlighted
                        ? 'bg-gradient-to-r from-insolva-500 to-insolva-600 hover:from-insolva-600 hover:to-insolva-700 text-white shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-insolva-500 hover:text-white'
                      }
                    `}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-insolva-50 dark:from-gray-800 dark:to-insolva-900/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Creamos soluciones personalizadas para empresas con necesidades específicas. 
              Contáctanos para una propuesta a medida.
            </p>
            <button
              onClick={() => handleWhatsAppClick('Personalizado')}
              className="btn-primary"
            >
              Solicitar Plan Personalizado
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
