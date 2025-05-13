import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollPosition, setScrollPosition] = useState(0); // Keep this if Navbar uses it

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition); // Only if Navbar needs scrollPosition

      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const sectionPositions = sections.map((section) => {
        const element = document.getElementById(section);
        return {
          id: section,
          position: element ? element.offsetTop - 120 : 0, // Offset for fixed navbar
        };
      });

      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        if (currentPosition >= sectionPositions[i].position) {
          setActiveSection(sectionPositions[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 70, // adjust if your navbar height changes
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="app">
      <Navbar 
        scrollToSection={scrollToSection} 
        activeSection={activeSection} 
        scrollPosition={scrollPosition} 
      />
      <Hero id="hero" scrollToSection={scrollToSection} />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
      <Footer />
    </div>
  );
}

export default App;
