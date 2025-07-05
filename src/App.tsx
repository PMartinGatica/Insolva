import { ThemeProvider } from './context/ThemeContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import InteractiveServices from './components/InteractiveServices';
import Industries from './components/Industries';
import Plans from './components/Plans';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const AppContent = () => {
  const { activeSection } = useNavigation();

  const renderSection = () => {
    switch (activeSection) {
      case 'inicio':
        return <Hero />;
      case 'servicios':
        return <InteractiveServices />;
      case 'segmentos':
        return <Industries />;
      case 'planes':
        return <Plans />;
      case 'nosotros':
        return <AboutUs />;
      case 'contacto':
        return <Contact />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="pt-20 min-h-screen">
        <div key={activeSection} className="section-animate">
          {renderSection()}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </ThemeProvider>
  );
}

export default App;
