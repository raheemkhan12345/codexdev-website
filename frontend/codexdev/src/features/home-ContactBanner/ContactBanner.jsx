import React from 'react';
import './ContactBanner.css';

const ContactBanner = ({ 
  title, 
  subtitle, 
  primaryBtnText, 
  secondaryBtnText, 
  variant = 'portfolio' // 'portfolio' ya 'tech' variant taake custom styling apply ho sake
}) => {
  return (
    <section className={`cta-section ${variant}-cta-section`}>
      <div className="cta-container">
        <div className={`cta-card ${variant}-cta-card`}>
          <h2 className="cta-title">{title}</h2>
          <p className="cta-subtitle">{subtitle}</p>
          
          <div className="cta-buttons-group">
            <button className="cta-btn btn-primary">{primaryBtnText}</button>
            <button className="cta-btn btn-secondary">{secondaryBtnText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;