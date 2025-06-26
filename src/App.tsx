import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useActiveSection } from './hooks/useActiveSection';

function App() {
  const { activeSection, navigateToSection } = useActiveSection();

  return (
    <div className="min-h-screen bg-white">
      <Header activeSection={activeSection} onNavigate={navigateToSection} />
      
      <main>
        <Hero onNavigate={navigateToSection} />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      
      <Footer onNavigate={navigateToSection} />
    </div>
  );
}

export default App;