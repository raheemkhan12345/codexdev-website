import React from 'react';
import './TechHero.css';
// FontAwesome Icons Import (react-icons/fa)
import { FaShieldAlt, FaCloud, FaBrain, FaLock, FaMagic } from 'react-icons/fa';
// Apni image ka path yahan handle karein
import techHeroImg from '../../assets/images/tech-hero-image1.png';

const TechHero = () => {
    return (
        <section className="tech-hero-section">
            <div className="tech-hero-container">

                {/* Left Side Content */}
                <div className="tech-hero-content">
                    <div className="tech-badge">
                        <FaMagic className="badge-icon" />
                        <span>Next-Gen Tech Architecture</span>
                    </div>

                    <h1 className="tech-hero-title">
                        Engineering Tomorrow's Digital Experiences with Modern Technologies.
                    </h1>

                    <p className="tech-hero-description">
                        At CodexDev, we architect future-proof solutions using cutting-edge tech stacks and
                        scalable methodologies. From enterprise AI to high-performance cloud ecosystems, we
                        build the foundations of digital excellence.
                    </p>

                    <div className="tech-hero-buttons">
                        <button className="tech-btn btn-filled">Start Your Project</button>
                        <button className="tech-btn btn-white">Book Free Consultation</button>
                    </div>

                    {/* Bottom Trust Indicators with React Icons */}
                    <div className="tech-hero-features">
                        <div className="feature-item">
                            <FaShieldAlt className="feature-icon" />
                            <span>Enterprise Ready</span>
                        </div>
                        <div className="feature-item">
                            <FaCloud className="feature-icon" />
                            <span>Cloud Native</span>
                        </div>
                        <div className="feature-item">
                            <FaBrain className="feature-icon" />
                            <span>AI Powered</span>
                        </div>
                        <div className="feature-item">
                            <FaLock className="feature-icon" />
                            <span>Secure Development</span>
                        </div>
                    </div>
                </div>

                {/* Right Side Image Box */}
                <div className="tech-hero-graphics">
                    <div className="abstract-wrapper">
                        <img
                            src={techHeroImg}
                            alt="CodexDev Technology Architecture"
                            className="tech-main-image"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default TechHero;