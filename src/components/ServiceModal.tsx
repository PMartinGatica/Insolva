import React from 'react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    description: string;
    features: string[];
    valueProposition: string;
    icon: React.ReactNode;
  };
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onClose, service }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-screen overflow-y-auto">
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-insolva-500 to-insolva-600 text-white rounded-xl">
                {service.icon}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Descripción del Servicio
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Características Principales
              </h3>
              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                    <svg className="w-5 h-5 text-insolva-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Valor Agregado
              </h3>
              <div className="bg-insolva-50 dark:bg-insolva-900/20 rounded-lg p-6 mb-6">
                <p className="text-insolva-700 dark:text-insolva-300 leading-relaxed">
                  {service.valueProposition}
                </p>
              </div>

              {/* Video Placeholder */}
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Video Explicativo
              </h3>
              <div className="bg-gray-100 dark:bg-gray-700 rounded-lg aspect-video flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293H15M9 10v4a4 4 0 003 3.874V21H9a4 4 0 01-4-4v-7M9 10V9a4 4 0 118 0v1" />
                  </svg>
                  <p className="text-gray-500 dark:text-gray-400">
                    Video explicativo próximamente
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={() => {
                window.open(`https://wa.me/+5491234567890?text=Hola! Me interesa conocer más sobre el servicio de ${service.title} de INSOLVA`, '_blank');
              }}
              className="btn-primary text-lg px-8 py-4"
            >
              Solicitar Consulta Especializada
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
