// src/pages/Home.jsx
import React from 'react';
import Hero from '../features/home-hero/Hero';
import Brands from '../features/home-brands/Brands';
import Services from '../features/home-services/Services';

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
    </>
  );
};

export default Home;