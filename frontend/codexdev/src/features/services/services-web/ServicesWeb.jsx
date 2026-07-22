// src/features/services/WebDevService.jsx
import React from 'react';
import { FaCheckCircle, FaCode } from 'react-icons/fa';
import './ServicesWeb.css';

// Replace with your actual image path
import Servicesimage3 from 'F:/github Repositories/codexdev-website/frontend/codexdev/src/assets/images/services-images/services-image3.jpg';

function ServicesWeb() {
  const techStack = ["Next.js", "TypeScript", "Node.js", "PostgreSQL"];

  return (
    <section className="web-dev-section">
      <div className="web-dev-container">
        
        {/* --- Left Column: Image with White Border/Padding --- */}
        <div className="web-dev-image-card">
          <img 
            src={Servicesimage3} 
            alt="Developer workstation with ultrawide monitor and code editor" 
            className="web-dev-img"
          />
        </div>

        {/* --- Right Column: Content --- */}
        <div className="web-dev-content">
          
          {/* Code Icon Box */}
          <div className="web-dev-icon-box">
            <FaCode size={24} color="#FFFFFF" />
            
          </div>

          {/* Heading */}
          <h2 className="web-dev-title">Web Development</h2>

          {/* Intro Description */}
          <p className="web-dev-description">
            Building high-performance, secure, and scalable web applications engineered for executive-level requirements.
          </p>

          {/* Checklist */}
          <ul className="web-dev-checklist">
            <li className="web-dev-check-item">
              <FaCheckCircle className="web-dev-check-icon" />
              <span>Custom SaaS Architectures</span>
            </li>
            <li className="web-dev-check-item">
              <FaCheckCircle className="web-dev-check-icon" />
              <span>Headless CMS Integrations</span>
            </li>
            <li className="web-dev-check-item">
              <FaCheckCircle className="web-dev-check-icon" />
              <span>Real-time Data Visualization</span>
            </li>
          </ul>

          {/* Technology Stack Tags */}
          <div className="web-dev-tech-stack">
            <h4 className="web-dev-tech-title">TECHNOLOGY STACK</h4>
            <div className="web-dev-tech-tags">
              {techStack.map((tech, index) => (
                <span key={index} className="web-dev-tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default ServicesWeb;