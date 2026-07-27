import React from 'react';
import './ServicesAI.css';
import { FaBrain, FaCheck } from 'react-icons/fa';
// Import your local image path here if you have one saved in your assets folder
import ServicesAIimage from '../../../assets/images/services-images/services-AI-image1.png'

function ServicesAI() {
  return (
    <section className="ai-solutions-section">
      <div className="ai-solutions-container">
        
        {/* Left Text Content Column */}
        <div className="ai-solutions-content">
          {/* Top Icon Badge */}
          <div className="ai-solutions-icon-wrapper">
            <FaBrain className="ai-solutions-icon" />
            
          </div>

          {/* Heading */}
          <h2 className="ai-solutions-title">
            AI Solutions
          </h2>

          {/* Paragraph Description */}
          <p className="ai-solutions-description">
            Leveraging Large Language Models and custom machine learning to automate complex enterprise workflows.
          </p>

          Bullet List
          <ul className="ai-solutions-list">
            {[
              'Custom LLM Fine-tuning',
              'Predictive Analytics Engines',
              'Cognitive Process Automation',
            ].map((item) => (
              <li key={item} className="ai-solutions-list-item">
                <span className="check-icon-wrapper">
                  <FaCheck className="check-icon" />
                </span>
                {item}
              </li>
            ))}
          </ul>


          

          {/* Technology Stack Tags */}
          <div className="ai-solutions-tech-stack">
            <span className="tech-stack-label">TECHNOLOGY STACK</span>
            <div className="tech-stack-tags">
              {['OpenAI API', 'PyTorch', 'LangChain', 'TensorFlow'].map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image Layout Column */}
        <div className="ai-solutions-image-wrapper">
          <img 
            src={ServicesAIimage} 
            alt="AI Neural Network Data Visualization" 
            className="ai-solutions-image"
          />
        </div>

      </div>
    </section>
  );
}

export default ServicesAI;