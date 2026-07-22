import React from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';


const MainLayout = ({ children }) => {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;