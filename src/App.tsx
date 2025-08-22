import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Footer from './components/Footer';

// Lazy load components for better performance
const About = lazy(() => import('./components/About'));
const Education = lazy(() => import('./components/Education'));
const Recognition = lazy(() => import('./components/Recognition'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

// Loading component
const SectionLoader: React.FC = () => (
  <div className="flex items-center justify-center py-20">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navigation />
        
        <main>
          <Hero />
          
          <Suspense fallback={<SectionLoader />}>
            <About />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Education />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Recognition />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Skills />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Projects />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Experience />
          </Suspense>
          
          <Suspense fallback={<SectionLoader />}>
            <Contact />
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;