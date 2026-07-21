// src/features/portfolio-featured/FeaturedProject.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiTrendingUp } from 'react-icons/fi'; // Icons for the list
import { TbLayoutDashboard, TbNetwork } from 'react-icons/tb'; // Grid and Network outline icons
import Container from '../../components/common/Container/Container';
import './Hero.css';

// Mockup Image Import (Aap apne actual assets folder mein curved-monitor screen image rakh sakte hain)
import featuredimage1 from '../../assets/images/portfolio-hero.jpg';

const Hero = () => {
    return (
        <section className="featured-project-section">
            <Container>
                <div className="featured-card-wrapper">

                    {/* Left Column: Curved Screen Monitor Mockup */}
                    <div className="featured-image-col">
                        <img
                            src={featuredimage1}
                            alt="Global Supply Chain Intelligence Dashboard Mockup"
                            className="featured-mockup-img"
                        />
                    </div>

                    {/* Right Column: Project Details */}
                    <div className="featured-content-col">

                        {/* Tags Row */}
                        <div className="featured-tags-row">
                            <span className="badge badge-featured">Featured Case Study</span>
                            <span className="badge badge-category">Logistics & AI</span>
                        </div>

                        {/* Title & Description */}
                        <h1 className="featured-project-title">
                            Global Supply Chain Intelligence Engine
                        </h1>
                        <p className="featured-project-desc">
                            A comprehensive digital transformation project for a Fortune 500 logistics firm, utilizing real-time AI to optimize container routing and reduce carbon footprint by 22%.
                        </p>

                        {/* Feature Icons Group */}
                        <div className="featured-icons-group">
                            <div className="feature-icon-item" title="Dashboard Interface">
                                <TbLayoutDashboard />
                            </div>
                            <div className="feature-icon-item" title="Analytics & Trends">
                                <FiTrendingUp />
                            </div>
                            <div className="feature-icon-item" title="Network Engine">
                                <TbNetwork />
                            </div>
                        </div>

                        {/* Action Button */}
                        <Link to="/portfolio" className="read-case-study-btn">
                            <span>Read Full Case Study</span>
                            <FiArrowRight className="arrow-icon" />
                        </Link>

                    </div>

                </div>
            </Container>
        </section>
    );
};

export default Hero;