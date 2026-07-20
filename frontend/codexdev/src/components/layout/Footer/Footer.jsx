// src/components/layout/Footer/Footer.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiGlobe, FiMail, FiBriefcase } from 'react-icons/fi'; // Icons matching the image
import Container from '../../common/Container/Container';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="main-footer">
      <Container>
        {/* Top Footer Grid */}
        <div className="footer-top-grid">
          
          {/* Column 1: Brand Info & Socials */}
          <div className="footer-col brand-col">
            <h2 className="footer-logo">CodexDev</h2>
            <p className="footer-description">
              Enterprise engineering for visionary companies. We build products that define markets.
            </p>
            <div className="footer-social-icons">
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label="Website">
                <FiGlobe />
              </a>
              <a href="mailto:info@codexdev.com" className="social-icon-btn" aria-label="Email">
                <FiMail />
              </a>
              <a href="/careers" className="social-icon-btn" aria-label="Jobs">
                <FiBriefcase />
              </a>
            </div>
          </div>

          {/* Column 2: Company Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links-list">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Services Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              <li><Link to="/services/web-development">Web Development</Link></li>
              <li><Link to="/services/mobile-apps">Mobile Apps</Link></li>
              <li><Link to="/services/ui-ux-design">UI/UX Design</Link></li>
              <li><Link to="/services/cloud-ai">Cloud / AI</Link></li>
            </ul>
          </div>

          {/* Column 4: Newsletter Subscription */}
          <div className="footer-col newsletter-col">
            <h4 className="footer-col-title">Subscribe to Insights</h4>
            <p className="newsletter-text">
              Get the latest engineering and product insights delivered to your inbox.
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                placeholder="Email address" 
                className="newsletter-input" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-submit-btn">
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Divider Line */}
        <hr className="footer-divider" />

        {/* Bottom Footer Details */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © 2024 CodexDev Software Services. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/legal">Legal</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;