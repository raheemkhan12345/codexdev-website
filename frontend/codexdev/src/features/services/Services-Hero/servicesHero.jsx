import React from 'react';
import './servicesHero.css';
import image1 from '../../../assets/images/services-images/image1.png'

function ServicesHero() {
  return (
    <section className="services-hero-section">
      <div className="services-hero-container">
        
        {/* Left Text Content Column */}
        <div className="services-hero-content">
          {/* Badge */}
          <div>
            <span className="services-hero-badge">
              Engineering Excellence
            </span>
          </div>

          {/* Heading */}
          <h1 className="services-hero-title">
            Comprehensive <br />
            Software Solutions
          </h1>

          {/* Paragraph Description */}
          <p className="services-hero-description">
            At CodexDev, we architect future-proof digital ecosystems. From
            high-conversion UI/UX to enterprise AI integrations, our
            engineering team delivers precision-crafted products that drive
            global market leadership.
          </p>

          {/* Action Buttons */}
          <div className="services-hero-actions">
            <button className="btn-primary">
              View Our Approach
            </button>
            <button className="btn-secondary">
              Download Capabilities
            </button>
          </div>
        </div>

        {/* Right Image Layout Column */}
        <div className="services-hero-image-wrapper">
          <img 
            src= {image1} 
            alt="Server Infrastructure Control Center Room" 
            className="services-hero-image"
          />
        </div>

      </div>
    </section>
  );
}

export default ServicesHero;