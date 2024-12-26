import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

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
        <Link
          to="/"
          className={`Menulist ${location.pathname === '/' ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`Menulist ${location.pathname === '/about' ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={`Menulist ${location.pathname === '/projects' ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className={`Menulist ${location.pathname === '/contact' ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
