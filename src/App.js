import React, { useRef } from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    let ref;
    switch (section) {
      case 'home': ref = homeRef; break;
      case 'about': ref = aboutRef; break;
      case 'projects': ref = projectsRef; break;
      case 'contact': ref = contactRef; break;
      default: return;
    }
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <main className="app">
        <section ref={homeRef} id="home">
          <Home />
        </section>
        <section ref={aboutRef} id="about">
          <About />
        </section>
        <section ref={projectsRef} id="projects">
          <Projects />
        </section>
        <section ref={contactRef} id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
};

export default App;
