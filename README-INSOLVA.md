# INSOLVA - Transformamos tu Estrategia Digital

## 🚀 Descripción

INSOLVA es una plataforma web moderna construida con **React 18**, **Vite**, **TypeScript** y **Tailwind CSS 3** que ofrece soluciones integrales de marketing digital, desarrollo web y automatización para empresas de todos los sectores.

## ✨ Características

### 🎨 Diseño Moderno
- **Glassmorphism effects** para una apariencia premium
- **Dark/Light mode** con persistencia local
- **Gradientes y animaciones** suaves
- **Mobile-first responsive design**

### 🛠️ Tecnologías
- **React 18** con Hooks y Context API
- **TypeScript** para type safety
- **Vite** para desarrollo ultra-rápido
- **Tailwind CSS 3** con configuración personalizada
- **ESLint** para calidad de código

### 📱 Funcionalidades
- **Navegación suave** entre secciones
- **WhatsApp integration** para contacto directo
- **Formulario de contacto** inteligente
- **Animaciones on-scroll** con Intersection Observer
- **Theme toggle** persistente
- **SEO optimizado**

## 🚀 Inicio Rápido

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd insolva

# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev

# Construir para producción
npm run build

# Preview del build
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes UI reutilizables
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección hero
│   ├── Services.tsx    # Servicios ofrecidos
│   ├── Industries.tsx  # Rubros/industrias
│   ├── Plans.tsx       # Planes de servicios
│   ├── Contact.tsx     # Formulario de contacto
│   ├── Footer.tsx      # Pie de página
│   └── WhatsAppButton.tsx # Botón flotante de WhatsApp
├── context/            # React Context
│   └── ThemeContext.tsx # Contexto de tema dark/light
├── hooks/              # Custom hooks
│   └── useAnimations.ts # Hook para animaciones
├── assets/             # Assets estáticos
├── App.tsx            # Componente principal
├── main.tsx           # Punto de entrada
└── index.css          # Estilos globales con Tailwind
```

## 🎨 Personalización

### Colores de Marca
Los colores principales están definidos en `tailwind.config.js`:

```js
colors: {
  insolva: {
    50: '#f0f9ff',
    // ... más tonos
    900: '#0c4a6e',
  }
}
```

### Componentes Reutilizables
- `.btn-primary` - Botón principal con gradiente
- `.btn-secondary` - Botón secundario con borde
- `.card-glass` - Tarjeta con efecto glassmorphism
- `.text-gradient` - Texto con gradiente de marca

### Animaciones Personalizadas
- `animate-fade-in` - Aparición suave
- `animate-slide-up` - Deslizamiento hacia arriba
- `animate-float` - Flotación suave
- `animate-glow` - Efecto de brillo

## 📱 Secciones Principales

### 🏠 Hero
- Presentación de la marca INSOLVA
- CTAs principales hacia WhatsApp y planes
- Estadísticas destacadas
- Indicador de scroll

### 🔧 Servicios
- Marketing Digital
- Desarrollo Web  
- Automatización
- Analytics & BI

### 🏢 Rubros/Industrias
- E-commerce & Retail
- Servicios Profesionales
- Educación & Capacitación
- Salud & Bienestar
- Restaurantes & Gastronomía
- Manufactura & Industria

### 💳 Planes
- Básico ($299/mes)
- Profesional ($599/mes) - Más Popular
- Enterprise ($999/mes)
- Opción de plan personalizado

### 📞 Contacto
- Formulario integrado con WhatsApp
- Información de contacto
- Beneficios de elegir INSOLVA

## 🌐 WhatsApp Integration

Todos los CTAs están configurados para abrir WhatsApp con mensajes predefinidos:

```typescript
const handleWhatsAppClick = (context: string) => {
  const message = encodeURIComponent(`Hola! Me interesa ${context} de INSOLVA...`);
  const phoneNumber = "+5491234567890"; // Actualizar con número real
  window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
};
```

## 🌙 Dark Mode

El tema oscuro se implementa con:
- **Tailwind CSS** clase `dark:`
- **Context API** para estado global
- **localStorage** para persistencia
- **Detección automática** del tema del sistema

## 🔧 Scripts Disponibles

```bash
npm run dev          # Servidor de desarrollo
npm run build        # Build de producción
npm run preview      # Preview del build
npm run lint         # Linting con ESLint
```

## 📊 SEO & Performance

- **Meta tags** optimizados
- **Open Graph** para redes sociales
- **Twitter Cards**
- **Lazy loading** de imágenes
- **Code splitting** automático con Vite

## 🚀 Despliegue

### Netlify
```bash
npm run build
# Subir carpeta dist/
```

### Vercel
```bash
vercel --prod
```

### GitHub Pages
```bash
npm run build
# Configurar GitHub Pages con carpeta dist/
```

## 🤝 Contribuir

1. Fork del proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 📞 Contacto

**INSOLVA** - Transformamos tu Estrategia Digital

- 📧 Email: info@insolva.com
- 📱 WhatsApp: +54 9 11 2345-6789
- 🌐 Website: https://insolva.com

---

**¿Listo para transformar tu estrategia digital? ¡Contáctanos hoy mismo!** 🚀
