// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Portfolio from './pages/Portoflio'; // Import Portfolio page
import './assets/styles/global.css'; // Global CSS 
import Technologies from './pages/Technologies';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* Default Route: Home page load hoga */}
          <Route path="/" element={<Home />} />

          {/* <Route path="/services" element={<Services />} /> */}

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/technologies" element={<Technologies />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;