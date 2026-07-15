// src/App.jsx
import React from 'react';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import './assets/styles/global.css'; // Global CSS 

function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;