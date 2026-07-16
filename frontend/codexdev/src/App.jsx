// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
// import ServicesPage from './pages/Services'; // Aapke friend ka banaya hua services page component
import './assets/styles/global.css'; // Global CSS 

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* Default Route: Home page load hoga */}
          <Route path="/" element={<Home />} />


          {/* <Route path="/services" element={<Services />} /> */}

       
          {/* <Route path="/portfolio" element={<PortfolioPage />} /> */}
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;