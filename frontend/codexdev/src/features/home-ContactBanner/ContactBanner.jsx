import React from 'react';
import './ContactBanner.css';

const ContactBanner = ({ 
  title, 
  subtitle, 
  primaryBtnText, 
  secondaryBtnText = null, // Optional prop
  onPrimaryClick,
  onSecondaryClick,
  variant = 'about' // 'about', 'portfolio', or 'tech'
}) => {
  return (
    <section className={`cta-section ${variant}-cta-section`}>
      <div className="cta-container">
        <div className={`cta-card ${variant}-cta-card`}>
          <h2 className="cta-title">{title}</h2>
          <p className="cta-subtitle">{subtitle}</p>
          
          <div className="cta-buttons-group">
            {primaryBtnText && (
              <button className="cta-btn btn-primary" onClick={onPrimaryClick}>
                {primaryBtnText}
              </button>
            )}
            
            {secondaryBtnText && (
              <button className="cta-btn btn-secondary" onClick={onSecondaryClick}>
                {secondaryBtnText}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;