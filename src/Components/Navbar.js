import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`Nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="Logo">
        <h1>Manohar Portfolio</h1>
      </div>
      <button className="MenuButton" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`MenuLinks ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="Menulist" onClick={toggleMenu}>Home</Link>
        <Link to="/about" className="Menulist" onClick={toggleMenu}>About</Link>
        <Link to="/projects" className="Menulist" onClick={toggleMenu}>Projects</Link>
        <Link to="/contact" className="Menulist" onClick={toggleMenu}>Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
