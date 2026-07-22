// src/pages/Home.jsx
import React from 'react';
import ServicesHero from '../features/services/Services-Hero/servicesHero.jsx'
import ServicesUiUx from '../features/services/servicesUiUx/ServicesUiUx.jsx'
import Servicesweb from '../features/services/services-web/ServicesWeb.jsx'

const Services = () => {
  return (
    <>
      <ServicesHero />
      <ServicesUiUx />
      <Servicesweb />
    </>
  );
};

export default Services;