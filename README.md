# INSOLVA - Optimización de Procesos Empresariales

![INSOLVA](https://img.shields.io/badge/INSOLVA-Procesos%20Empresariales-0ea5e9)
![React](https://img.shields.io/badge/React-18+-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4+-38bdf8)
![Vite](https://img.shields.io/badge/Vite-Latest-646cff)

## 🎯 Misión

Hacer que las pymes y empresas argentinas sean más competitivas y rentables, usando inteligencia aplicada y tecnología accesible.

## 🚀 Descripción

INSOLVA es una empresa especializada en optimización de procesos empresariales. Ofrecemos diagnóstico, automatización, gestión operativa y mejora continua para hacer tu empresa más eficiente y rentable. Nuestro sitio web está desarrollado con tecnologías modernas para reflejar nuestra propuesta de valor innovadora.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz con efectos glassmorphism y gradientes
- **🌙 Modo Oscuro/Claro**: Toggle automático con persistencia en localStorage
- **📱 Responsive**: Optimizado para móviles, tablets y desktop
- **⚡ Rendimiento**: Construido con Vite para carga ultra-rápida
- **🔄 Animaciones**: Transiciones suaves y microinteracciones
- **💬 WhatsApp Integration**: Botón flotante y CTAs conectados
- **♿ Accesibilidad**: Cumple con estándares WCAG 2.1

## 🛠️ Stack Tecnológico

- **Frontend**: React 18+ con TypeScript
- **Styling**: Tailwind CSS 3+ con plugins oficiales
- **Build Tool**: Vite para desarrollo y producción
- **Iconos**: Heroicons y SVG personalizados
- **Fuentes**: Inter Font de Google Fonts

## 📦 Instalación

```bash
# Clonar el repositorio
git clone [repository-url]
cd insolva

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Preview de la build
npm run preview
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── Header.tsx      # Navegación principal
│   ├── Hero.tsx        # Sección héroe
│   ├── Services.tsx    # Servicios ofrecidos
│   ├── Industries.tsx  # Rubros/Industrias
│   ├── Plans.tsx       # Planes de precio
│   ├── Contact.tsx     # Formulario de contacto
│   ├── Footer.tsx      # Pie de página
│   ├── WhatsAppButton.tsx # Botón flotante
│   └── ui/            # Componentes UI base
├── context/            # Context providers
│   └── ThemeContext.tsx # Manejo de tema
├── hooks/              # Custom hooks
│   └── useAnimations.ts # Hooks de animación
├── assets/             # Recursos estáticos
└── styles/             # Estilos globales
```

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
#   I n s o l v a 
 
 