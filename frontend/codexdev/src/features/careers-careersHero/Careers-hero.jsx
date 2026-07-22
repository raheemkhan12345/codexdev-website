import React from 'react';
import './Careers-hero.css';
import teamImage from '../../assets/images/careers-team-image.jpg';

const CareersHero = () => {
    const stats = [
        { value: '100+', label: 'PROJECTS DONE' },
        { value: '60+', label: 'EXPERTS' },
        { value: '15+', label: 'COUNTRIES' },
        { value: '98%', label: 'SATISFACTION' },
    ];

    return (
        <section className="careers-hero-container">
            <div className="careers-hero-grid">

                {/* Left Column: Heading, Subtext, Buttons & Stats */}
                <div className="hero-left-content">
                    <h1 className="hero-title">
                        Build the Future<br />
                        with CodexDev
                    </h1>

                    <p className="hero-subtitle">
                        Join a world-class team of engineers and designers dedicated to building digital products that define industries. We merge enterprise stability with startup velocity.
                    </p>

                    {/* Action Buttons */}
                    <div className="hero-button-group">
                        <button className="btn-solid-purple">View Open Roles</button>
                        <button className="btn-outline-gray">Our Culture</button>
                    </div>

                    {/* Stats Bar Grid */}
                    <div className="hero-stats-row">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <h3 className="stat-number">{stat.value}</h3>
                                <p className="stat-title">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Hero Image with Floating Badge */}
                <div className="hero-right-content">
                    <div className="hero-image-wrapper">
                        <img
                            src={teamImage}
                            alt="CodexDev Team Collaboration"
                            className="hero-main-img"
                        />

                        {/* Floating Hiring Badge */}
                        <div className="hiring-floating-badge">
                            <span className="green-dot"></span>
                            <span className="badge-label">Hiring for 12+ new roles</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CareersHero;;