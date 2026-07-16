// src/components/layout/Brands/Brands.jsx
import React from 'react';
import Container from '../../components/common/Container/Container';
import './Brands.css';

// Logos imports
import brandVolkswagen from '../../assets/images/brands/volkswagen.jpg';
import brandFacebook from '../../assets/images/brands/facebook.jpg';
import brandStarbucks from '../../assets/images/brands/starbucks.jpg';
import brandLamborghini from '../../assets/images/brands/lamborghini.jpg';
import brandGoogle from '../../assets/images/brands/google.jpg';

const Brands = () => {
    const brandsList = [
        { logo: brandVolkswagen, alt: "Volkswagen", className: "brand-vw" },
        { logo: brandFacebook, alt: "Facebook", className: "brand-fb" },
        { logo: brandStarbucks, alt: "Starbucks", className: "brand-starbucks" },
        { logo: brandLamborghini, alt: "Lamborghini", className: "brand-lamborghini" },
        { logo: brandGoogle, alt: "Google", className: "brand-google" },
    ];

    return (
        <section className="brands-section">
            <Container>
                <p className="brands-title">Trusted by Growing Businesses</p>
                <div className="brands-wrapper">
                    <div className="brands-grid">
                        {brandsList.map((brand, index) => (
                            <div key={index} className={`brand-card ${brand.className}`}>
                                <img src={brand.logo} alt={brand.alt} className="brand-logo-img" />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Brands;