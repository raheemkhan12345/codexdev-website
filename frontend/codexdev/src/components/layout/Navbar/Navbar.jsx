// src/components/layout/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'; // <-- React Router hooks import kiye
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

          {/* Logo - wrapped with React Router Link */}
          <div className="navbar-logo">
            <Link to="/" className="logo-text-link" onClick={() => setIsOpen(false)}>
              <span className="logo-text">CodexDev</span>
            </Link>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <button
            className={`menu-toggle ${isOpen ? 'is-active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>

          {/* Navigation Links with dynamic active state styling */}
          <nav className={`navbar-nav ${isOpen ? 'nav-active' : ''}`}>
            <ul className="nav-list">

              <li className="nav-item">
                <NavLink
                  to="/"
                  end /* 'end' ensures Home is only active when path is strictly '/' */
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/services"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/portfolio"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Portfolio
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/technologies"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Technologies
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/careers"
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Careers
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) => `nav-link contact-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </NavLink>
              </li>

            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;