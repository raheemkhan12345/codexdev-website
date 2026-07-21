// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Portfolio from './pages/Portoflio'; // Import Portfolio page
import './assets/styles/global.css'; // Global CSS 
import Technologies from './pages/Technologies';
import About from './pages/About';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* Default Route */}
          <Route path="/" element={<Home />} />

          {/* <Route path="/services" element={<Services />} /> */}

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/technologies" element={<Technologies />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;