import React ,{useState}from 'react';
import { Link } from 'react-router-dom';

import './Styles/Navbar.css'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Nav">
    <div className="Logo">Manohar Portfolio</div>
    <button className="MenuButton" onClick={toggleMenu}>
      ☰
    </button>
    <div className={`MenuLinks ${isOpen ? "open" : ""}`}>
      <Link to="/" className="Menulist" onClick={toggleMenu}>Home</Link>
      <Link to="/about" className="Menulist" onClick={toggleMenu}>About</Link>
      <Link to="/projects" className="Menulist" onClick={toggleMenu}>Projects</Link>
      <Link to="/contact" className="Menulist" onClick={toggleMenu}>Contact</Link>
    </div>
  </div>
  );
};

export default Navbar;
