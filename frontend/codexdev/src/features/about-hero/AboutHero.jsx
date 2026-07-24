import React from 'react';
import './AboutHero.css';
import { Link } from 'react-router-dom';

import aboutImage1 from '../../assets/images/aboutPage-image1.png';
const AboutHero = () => {
    const stats = [
        { value: "150+", label: "PROJECTS DELIVERED" },
        { value: "60+", label: "ACTIVE CLIENTS" },
        { value: "12+", label: "INDUSTRY AWARDS" },
        { value: "98%", label: "CLIENT RETENTION" }
    ];

    return (
        <section className="about-hero-section">

            {/* Top Main Hero Block */}
            <div className="about-hero-main">
                <div className="about-hero-container">

                    {/* Left Text Content */}
                    <div className="about-hero-content">
                        <h1 className="about-hero-title">
                            Building Digital <br />
                            Solutions That <br />
                            <span className="title-highlight">Shape the Future</span>
                        </h1>

                        <p className="about-hero-description">
                            CodexDev is an executive engineering firm dedicated to
                            transforming complex enterprise challenges into streamlined,
                            high-performance digital ecosystems. We bridge the gap
                            between legacy reliability and modern velocity.
                        </p>

                        <div className="about-hero-buttons">
                            <button className="about-btn btn-primary">Meet Our Team</button>
                            <Link to="/portfolio" className="about-btn btn-outline">
                                Our Portfolio
                            </Link>
                        </div>
                    </div>

                    {/* Right Hero Showcase Visual */}
                    <div className="about-hero-visual">
                        <div className="visual-image-wrapper">
                            <img
                                src={aboutImage1}
                                alt="CodexDev Team & Story"
                                className="about-hero-img"
                            />
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Metrics Bar */}
            <div className="about-stats-bar">
                <div className="about-hero-container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <h3 className="stat-value">{stat.value}</h3>
                                <p className="stat-label">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutHero;