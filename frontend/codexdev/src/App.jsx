// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
<<<<<<< HEAD
// import ServicesPage from './pages/Services'; // Aapke friend ka banaya hua services page component
import './assets/styles/global.css'; // Global CSS 
import Services from './pages/services';
=======
import Portfolio from './pages/Portoflio'; // Import Portfolio page
import './assets/styles/global.css'; // Global CSS 
import Technologies from './pages/Technologies';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import Careers from './pages/Careers';
>>>>>>> origin/main

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
<<<<<<< HEAD
          {/* Default Route: Home page load hoga */}
          <Route path="/" element={<Home />} />


          <Route path="/services" element={<Services />} />


       
          {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
=======
          {/* Default Route */}
          <Route path="/" element={<Home />} />

          {/* <Route path="/services" element={<Services />} /> */}

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/technologies" element={<Technologies />} />

          <Route path="/about" element={<About />} />

          <Route path="/careers" element={<Careers />} />

          <Route path="/contact" element={<ContactUs />} />
>>>>>>> origin/main
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;