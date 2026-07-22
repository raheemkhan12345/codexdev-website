// src/pages/Home.jsx
import React from 'react';
import Hero from '../features/home-hero/Hero';
import Brands from '../features/home-brands/Brands';
import Services from '../features/home-services/Services';
import WhyChooseUs from '../features/home-whyChoose/WhyChooseUs';
import Process from '../features/home-process/Process';
import SelectedWork from '../features/home-selectedWork/SelectedWork';
import FeedbackSection from '../features/home-ContactBanner/FeedbackSection';
import ContactBanner from '../features/home-ContactBanner/ContactBanner';

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
      <ContactBanner
        title="Let's Build Something Exceptional Together"
        subtitle="Ready to transform your vision into a market-leading digital product? Let's start the
        conversation today."
        primaryBtnText="Schedule a Strategy Call"
        secondaryBtnText="Contact Sales"
        variant="about"
      />
    </>
  );
};

export default Home;