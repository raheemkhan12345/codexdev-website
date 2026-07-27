// src/pages/Home.jsx
import React from 'react';
import ServicesHero from '../features/services/Services-Hero/servicesHero.jsx'
import ServicesUiUx from '../features/services/servicesUiUx/ServicesUiUx.jsx'
import Servicesweb from '../features/services/services-web/ServicesWeb.jsx'
import ServicesAI from '../features/services/services-AI/Services-AI.jsx'
import ServicesWork1 from '../features/services/services-work/Services-work.jsx'
import ContactBanner from '../features/home-ContactBanner/ContactBanner.jsx';
const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesUiUx />
      <Servicesweb />
      <ServicesAI />
      <ServicesWork1 />
      <ContactBanner
        title="Ready to Engineer the Future?"
        subtitle="Partner with CodexDev to transform your technical vision into a
        market-defining software solution."
        primaryBtnText="Book a Free Consultation"
        variant="about"
      />
    </>
  );
};

export default Services;