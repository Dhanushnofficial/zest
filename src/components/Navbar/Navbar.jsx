import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from '../../assets/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo not found" className="logo" />
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li><Link to="/" className="nav-item" onClick={toggleMenu}>Home</Link></li>
        <li><Link to="/about" className="nav-item" onClick={toggleMenu}>About</Link></li>
        <li><Link to="/services" className="nav-item" onClick={toggleMenu}>Services</Link></li>
        {/* <li><Link to="/projects" className="nav-item" onClick={toggleMenu}>Projects</Link></li> */}
        <li><Link to="/contact" className="nav-item" onClick={toggleMenu}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;