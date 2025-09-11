import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load components não críticos
const Projects = lazy(() => import('./components/Projects'));
const About = lazy(() => import('./components/About'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div></div>}>
          <Projects />
        </Suspense>
        <Suspense fallback={<div className="py-20 bg-background"><div className="container"><div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 rounded"></div></div></div>}>
          <About />
        </Suspense>
        <Suspense fallback={<div className="py-20 bg-background"><div className="container"><div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-64 rounded"></div></div></div>}>
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <Suspense fallback={null}>
        <WhatsAppButton />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
