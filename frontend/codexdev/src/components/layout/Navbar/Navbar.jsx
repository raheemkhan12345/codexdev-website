import React, { useState } from 'react';
import Container from '../../common/Container/Container';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar-header">
      <Container>
        <div className="navbar-wrapper">
          {/* Logo */}
          <div className="navbar-logo">
            <span className="logo-text">CodexDev</span>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <button className={`menu-toggle ${isOpen ? 'is-active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Navigation Links */}
          <nav className={`navbar-nav ${isOpen ? 'nav-active' : ''}`}>
            <ul className="nav-list">
              <li className="nav-item"><a href="#home" className="nav-link active" onClick={() => setIsOpen(false)}>Home</a></li>
              <li className="nav-item"><a href="#services" className="nav-link" onClick={() => setIsOpen(false)}>Services</a></li>
              <li className="nav-item"><a href="#portfolio" className="nav-link" onClick={() => setIsOpen(false)}>Portfolio</a></li>
              <li className="nav-item"><a href="#technologies" className="nav-link" onClick={() => setIsOpen(false)}>Technologies</a></li>
              <li className="nav-item"><a href="#about" className="nav-link" onClick={() => setIsOpen(false)}>About</a></li>
              <li className="nav-item"><a href="#careers" className="nav-link" onClick={() => setIsOpen(false)}>Careers</a></li>
              <li className="nav-item"><a href="#contact" className="nav-link contact-btn" onClick={() => setIsOpen(false)}>Contact Us</a></li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;