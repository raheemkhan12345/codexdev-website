import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/common/Container/Container';
import './ClientVoices.css';

const ClientVoices = () => {
  return (
    <section className="cta-section">
      <Container>
        <div className="cta-container-box">
          <h2 className="cta-title">Let's Build Something Exceptional Together</h2>
          <p className="cta-subtitle">
            Ready to transform your vision into a market-leading digital product? Let's start the conversation today.
          </p>
          
          <div className="cta-buttons-wrapper">
            {/* White Filled Button */}
            <Link to="/contact" className="cta-btn-primary">
              Schedule a Strategy Call
            </Link>
            {/* Outline Transparent Button */}
            <Link to="/sales" className="cta-btn-secondary">
              Contact Sales
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ClientVoices;