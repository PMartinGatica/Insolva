import React from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';

const Contact: React.FC = () => {
  const sectionAnimation = useScrollAnimation();

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      'Hola! Me interesa conocer más sobre los servicios de INSOLVA para optimizar procesos empresariales.'
    );
    const phoneNumber = "+5491234567890";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:info@insolva.com?subject=Consulta sobre servicios INSOLVA';
  };

  return (
    <section id="contacto" className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="container">
        <div 
          ref={sectionAnimation.ref}
          className={`text-center mb-16 transition-all duration-1000 ease-out ${sectionAnimation.className}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            ¿Listo para <span className="text-gradient">Optimizar</span> tu Empresa?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Contáctanos hoy mismo y descubre cómo podemos mejorar tus procesos empresariales
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* WhatsApp */}
            <div 
              onClick={handleWhatsAppClick}
              className="group bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-2xl p-8 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">WhatsApp</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">+54 9 11 2345-6789</p>
              <p className="text-sm text-green-600 dark:text-green-400 font-medium">Respuesta inmediata • Disponible 24/7</p>
            </div>

            {/* Email */}
            <div 
              onClick={handleEmailClick}
              className="group bg-gradient-to-br from-insolva-50 to-insolva-100 dark:from-insolva-900/20 dark:to-insolva-800/20 rounded-2xl p-8 cursor-pointer hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-insolva-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-2">info@insolva.com</p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">ventas@insolva.com</p>
              <p className="text-sm text-insolva-600 dark:text-insolva-400 font-medium">Respuesta en 24hs</p>
            </div>

            {/* Phone */}
            <div className="group bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/50 dark:to-gray-700/50 rounded-2xl p-8 hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-gray-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Teléfono</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">+54 9 11 2345-6789</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">Lun a Vie • 9:00 - 18:00</p>
            </div>
          </div>

          {/* Promise & Benefits */}
          <div className="bg-gradient-to-br from-insolva-50 to-insolva-100 dark:from-insolva-900/20 dark:to-insolva-800/20 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Nuestra Promesa de Respuesta
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Te respondemos en <span className="font-bold text-insolva-600 dark:text-insolva-400">menos de 2 horas hábiles</span> 
                {' '}con una propuesta inicial personalizada para tu empresa.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-insolva-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Consulta Gratuita</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Sin compromiso inicial</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-insolva-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Propuesta Personalizada</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Adaptada a tu empresa</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-insolva-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Soporte Continuo</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Acompañamiento total</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-insolva-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Resultados Garantizados</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Mejoras medibles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
