// src/features/hero/Hero.jsx
import React from 'react';
import Container from '../../components/common/Container/Container';
import Button from '../../components/common/Button/Button';
import { heroData } from './heroData';
import './Hero.css';

import dashboardImg from '../../assets/images/hero-dashboard.png';
import { FaCheck } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="hero-section" id="home">
            <Container>
                {/* Main Hero Layout */}
                <div className="hero-wrapper">

                    {/* Left Content Column */}
                    <div className="hero-content">
                        {/* Badge */}
                        <div className="hero-badge">
                            <span className="badge-icon"><FaCheck /></span>
                            {heroData.badge}
                        </div>

                        {/* Main Headline */}
                        <h1 className="hero-title">{heroData.title}</h1>

                        {/* Description */}
                        <p className="hero-desc">{heroData.description}</p>

                        {/* Call to Actions */}
                        <div className="hero-actions">
                            <Button
                                variant="primary"
                                onClick={() => window.location.href = heroData.buttons.primary.link}
                            >
                                {heroData.buttons.primary.text}
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => window.location.href = heroData.buttons.secondary.link}
                            >
                                {heroData.buttons.secondary.text}
                            </Button>
                        </div>
                    </div>

                    {/* Right Image/Visual Column */}
                    <div className="hero-visual">
                        <div className="visual-card-wrapper">
                            <img
                                src={dashboardImg}
                                alt="CodexDev Dashboard Software Services"
                                className="visual-img"
                            />
                        </div>
                    </div>

                </div>

                {/* Stats Section underneath with dividers */}
                <div className="hero-stats-row">
                    {heroData.stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <h3 className="stat-number">{stat.number}</h3>
                            <p className="stat-label">{stat.label}</p>
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
};

export default Hero;