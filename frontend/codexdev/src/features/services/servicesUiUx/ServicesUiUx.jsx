
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Solid checkmark
import { CgDesignmodo } from 'react-icons/cg'; // A specific modern design icon
import  './ServicesUiUx.css';
import serviceMockup from "F:/github Repositories/codexdev-website/frontend/codexdev/src/assets/images/services-images/servicesUiUx-image1.jpg";


function ServicesUiUx() {
  const techStack = ["Figma", "Adobe Creative Suite", "Storybook"];

  return (
    <section className="service-section">
      <div className="service-container">
        
        {/* --- Left Column: Description --- */}
        <div className="service-description">
          
          {/* Main Service Icon */}
          <div className="service-main-icon">
            <CgDesignmodo size={28} color="white" />
           
          </div>

          {/* Heading */}
          <h2 className="service-title">UI/UX Design</h2>

          {/* Intro Paragraph */}
          <p className="service-intro">
           Creating high-fidelity, user-centric interfaces that
            blend aesthetic elegance with seamless functional
            psychology.
          </p>

          {/* Checklist */}
          <ul className="service-checklist">
            <li className="service-check-item">
              <FaCheckCircle className="check-icon" />
              <span>High-End Visual Identity Systems</span>
            </li>
            <li className="service-check-item">
              <FaCheckCircle className="check-icon" />
              <span>Enterprise Design Systems</span>
            </li>
            <li className="service-check-item">
              <FaCheckCircle className="check-icon" />
              <span>Multi-platform Responsive Design</span>
            </li>
          </ul>

          {/* Technology Stack Tags */}
          <div className="service-tech-stack">
            <h4 className="tech-stack-title">TECHNOLOGY STACK</h4>
            <div className="tech-tags">
              {techStack.map((tech, index) => (
                <span key={index} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* --- Right Column: Mockup Image --- */}
        <div className="service-mockup-wrapper">
          {/* Note: In production, ensure the image file itself is high quality
              and has a clean white padding around the phone inside the file. */}
          <img 
            src={serviceMockup} 
            alt="Smartphone showing the CodexDev service menu." 
            className="service-mockup-img"
          />
        </div>

      </div>
    </section>
  );
}

export default ServicesUiUx;