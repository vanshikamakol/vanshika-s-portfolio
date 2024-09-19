import React, { useEffect } from 'react';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles

// Import your components
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';  // Footer added

function App() {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1200,  // Animation duration
      once: true,      // Whether animation should happen only once
    });
  }, []);

  return (
    <div>
      {/* Navbar component */}
      <Navbar />
      
      {/* Home section with AOS animation */}
      <section id="home" data-aos="fade-up">
        <Home />
      </section>

      {/* About section with AOS animation */}
      <section id="about" data-aos="fade-right">
        <About />
      </section>

      {/* Projects section with AOS animation */}
      <section id="projects" data-aos="fade-left">
        <Projects />
      </section>

      {/* Skills section with AOS animation */}
      <section id="skills" data-aos="zoom-in">
        <Skills />
      </section>

      {/* Contact section with AOS animation */}
      <section id="contact" data-aos="fade-up">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
