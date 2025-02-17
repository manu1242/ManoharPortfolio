import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Styles/Navbar.css';

const Navbar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    setHasScrolled(window.scrollY > 0);
    const sections = ['home', 'about', 'projects', 'contact'];
    let currentSection = '';

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section;
        }
      }
    });

    setActiveSection(currentSection);
  };

  const handleNavClick = (section) => {
    setIsMenuOpen(false);
    scrollToSection(section);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`custom-navbar ${hasScrolled ? 'custom-scrolled' : ''}`}>
      <div className="custom-logo">
        <h1>Manohar Portfolio</h1>
      </div>
      <button className="custom-menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`custom-menu-links ${isMenuOpen ? 'custom-open' : ''}`}>
        <button className={`custom-menu-item ${activeSection === 'home' ? 'active' : ''}`} onClick={() => handleNavClick('home')}>
          Home
        </button>
        <button className={`custom-menu-item ${activeSection === 'about' ? 'active' : ''}`} onClick={() => handleNavClick('about')}>
          About
        </button>
        <button className={`custom-menu-item ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => handleNavClick('projects')}>
          Projects
        </button>
        <button className={`custom-menu-item ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => handleNavClick('contact')}>
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
