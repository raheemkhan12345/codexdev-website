import React from 'react';
import './TechPartners.css';
import { 
  FaAws, 
  FaMicrosoft, 
  FaGoogle, 
  FaStripe, 
  FaEnvira // MongoDB leafy icon alternative or brand representation
} from 'react-icons/fa';
import { SiVercel, SiMongodb } from 'react-icons/si'; 

const TechPartners = () => {
  const partners = [
    { id: 1, name: "AWS", icon: <FaAws /> },
    { id: 2, name: "Microsoft", icon: <FaMicrosoft /> },
    { id: 3, name: "Google", icon: <FaGoogle /> },
    { id: 4, name: "Stripe", icon: <FaStripe /> },
    { id: 5, name: "MongoDB", icon: <SiMongodb /> },
    { id: 6, name: "Vercel", icon: <SiVercel /> }
  ];

  return (
    <section className="tech-partners-section">
      <div className="partners-container">
        
        {/* Subtitle Heading */}
        <p className="partners-subtitle">TRUSTED BY LEADING TECHNOLOGY PARTNERS</p>

        {/* Logos Flex Row */}
        <div className="partners-logos-grid">
          {partners.map((partner) => (
            <div key={partner.id} className="partner-logo-item">
              <span className="partner-icon">{partner.icon}</span>
              <span className="partner-name">{partner.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechPartners;