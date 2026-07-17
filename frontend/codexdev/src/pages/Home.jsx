// src/pages/Home.jsx
import React from 'react';
import Hero from '../features/home-hero/Hero';
import Brands from '../features/home-brands/Brands';
import Services from '../features/home-services/Services';
import WhyChooseUs from '../features/home-whyChoose/WhyChooseUs';
import Process from '../features/home-process/Process';
import SelectedWork from '../features/home-selectedWork/SelectedWork';
import ClientVoices from '../features/home-clientVoices/ClientVoices';
import FeedbackSection from '../features/home-clientVoices/FeedbackSection';

const Home = () => {
  return (
    <>
      <Hero />
      <Brands />
      <Services />
      <WhyChooseUs />
      <Process />
      <SelectedWork />
      <FeedbackSection />
      <ClientVoices />
    </>
  );
};

export default Home;