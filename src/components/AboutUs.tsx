import React from 'react';
import { useScrollAnimation } from '../hooks/useAnimations';

const AboutUs: React.FC = () => {
  const sectionAnimation = useScrollAnimation();

  const team = [
    {
      name: 'Ing. Carlos Rodríguez',
      role: 'Ingeniero de Procesos Senior',
      specialization: 'Optimización & Lean Manufacturing',
      experience: '12+ años',
      description: 'Especialista en análisis de procesos industriales y implementación de metodologías Lean. Lideró proyectos de optimización en más de 50 empresas.',
      image: '/team/carlos.jpg', // Placeholder
      skills: ['Lean Manufacturing', 'Six Sigma', 'Análisis de Procesos', 'Kaizen']
    },
    {
      name: 'Lic. María González',
      role: 'Analista de Calidad',
      specialization: 'Sistemas de Gestión & ISO',
      experience: '10+ años',
      description: 'Experta en implementación de sistemas de gestión de calidad ISO. Ha certificado más de 30 empresas en diferentes normas internacionales.',
      image: '/team/maria.jpg', // Placeholder
      skills: ['ISO 9001', 'ISO 14001', 'Auditorías', 'Control de Calidad']
    },
    {
      name: 'Ing. Diego Fernández',
      role: 'Analista de Sistemas',
      specialization: 'Automatización & Digitalización',
      experience: '8+ años',
      description: 'Desarrollador de soluciones tecnológicas para automatización de procesos. Especialista en integración de sistemas y transformación digital.',
      image: '/team/diego.jpg', // Placeholder
      skills: ['Automatización', 'ERP', 'BI', 'Integración de Sistemas']
    },
    {
      name: 'Ing. Ana Martínez',
      role: 'Ingeniera de Procesos',
      specialization: 'Layout Industrial & Logística',
      experience: '9+ años',
      description: 'Especialista en diseño de layouts industriales y optimización logística. Ha rediseñado más de 40 plantas industriales mejorando eficiencia.',
      image: '/team/ana.jpg', // Placeholder
      skills: ['Layout Industrial', 'Logística', 'Simulación', 'Optimización Espacial']
    }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Fundación de INSOLVA',
      description: 'Cuatro ingenieros con visión común se unen para crear soluciones innovadoras en optimización de procesos empresariales.',
      milestone: 'Inicio'
    },
    {
      year: '2020',
      title: 'Primeros Proyectos',
      description: 'Implementación exitosa de metodologías Lean en 15 pymes argentinas, logrando mejoras promedio del 25% en eficiencia.',
      milestone: 'Crecimiento'
    },
    {
      year: '2021',
      title: 'Expansión Digital',
      description: 'Incorporación de soluciones de automatización e IA, digitalizando procesos en más de 30 empresas del sector manufacturero.',
      milestone: 'Innovación'
    },
    {
      year: '2022',
      title: 'Certificaciones ISO',
      description: 'Alcanzamos la marca de 25 empresas certificadas ISO 9001 y expandimos servicios a certificaciones ISO 14001 y ISO 45001.',
      milestone: 'Calidad'
    },
    {
      year: '2023',
      title: 'Reconocimiento Sectorial',
      description: 'Premio a la "Mejor Consultora en Optimización de Procesos" otorgado por la Cámara Argentina de la Industria.',
      milestone: 'Excelencia'
    },
    {
      year: '2024',
      title: 'Transformación IA',
      description: 'Lanzamiento de soluciones de inteligencia artificial aplicada a procesos, siendo pioneros en la región.',
      milestone: 'Futuro'
    }
  ];

  return (
    <section id="nosotros" className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="container">
        {/* Header Section */}
        <div 
          ref={sectionAnimation.ref}
          className={`text-center mb-20 transition-all duration-1000 ease-out ${sectionAnimation.className}`}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Acerca de <span className="text-gradient">Nosotros</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Somos un equipo multidisciplinario de ingenieros especializados en transformar empresas a través de 
            la optimización de procesos, automatización inteligente y mejora continua.
          </p>
        </div>

        {/* Company Story */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-insolva-50 to-insolva-100 dark:from-insolva-900/20 dark:to-insolva-800/20 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Nuestra Historia
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto mb-8">
              INSOLVA nació en 2019 de la visión compartida de cuatro ingenieros argentinos que identificaron 
              una oportunidad única: ayudar a las empresas locales a competir globalmente através de la 
              optimización inteligente de sus procesos. Con formaciones complementarias en ingeniería de procesos, 
              sistemas de calidad y tecnología, decidimos combinar nuestras expertises para crear soluciones 
              integrales que realmente transformen organizaciones.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-insolva-600 dark:text-insolva-400">80+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Empresas Optimizadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-insolva-600 dark:text-insolva-400">25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Certificaciones ISO</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-insolva-600 dark:text-insolva-400">35%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Mejora Promedio</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-insolva-600 dark:text-insolva-400">5</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Años Experiencia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Nuestro Recorrido
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-insolva-500 to-insolva-700 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-insolva-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>
                
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-2xl font-bold text-insolva-600 dark:text-insolva-400">{item.year}</span>
                      <span className="text-xs bg-insolva-100 dark:bg-insolva-900 text-insolva-700 dark:text-insolva-300 px-2 py-1 rounded-full">
                        {item.milestone}
                      </span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Nuestro Equipo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105">
                {/* Photo Placeholder */}
                <div className="w-24 h-24 bg-gradient-to-br from-insolva-400 to-insolva-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                
                <div className="text-center">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{member.name}</h4>
                  <p className="text-insolva-600 dark:text-insolva-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{member.specialization} • {member.experience}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">{member.description}</p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex} 
                        className="text-xs bg-insolva-100 dark:bg-insolva-900 text-insolva-700 dark:text-insolva-300 px-3 py-1 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-br from-insolva-600 to-insolva-800 rounded-3xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              ¿Quieres conocer más sobre nuestro enfoque?
            </h3>
            <p className="text-insolva-100 text-lg mb-8 max-w-2xl mx-auto">
              Contáctanos para una consulta gratuita donde analizaremos tu empresa y te mostraremos 
              oportunidades concretas de mejora.
            </p>
            <button
              onClick={() => window.open('https://wa.me/+5491234567890?text=Hola! Me interesa conocer más sobre el equipo y enfoque de INSOLVA', '_blank')}
              className="bg-cyan-500 text-white font-semibold px-8 py-4 rounded-xl hover:bg-cyan-600 transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <span>Conversemos</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.309"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
