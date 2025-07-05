import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Initialize dark theme before React loads
function initTheme() {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
}

// Call initTheme immediately
initTheme();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
