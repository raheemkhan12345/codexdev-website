// src/features/home-portfolio/SelectedWork.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../../components/common/Container/Container';
import './SelectedWork.css';

// Project Images Imports (Aap apne actual assets folder mein images rakh kar import kar sakte hain)
import project1 from '../../assets/images/home-project1.png';
import project2 from '../../assets/images/home-project2.png';
import project3 from '../../assets/images/home-project3.png';
import project4 from '../../assets/images/home-project4.png';
import project5 from '../../assets/images/home-project5.png';
import project6 from '../../assets/images/home-project6.png';

const SelectedWork = () => {
    const projects = [
        { id: 1, image: project1, title: "Mobile & Laptop Workspace App" },
        { id: 2, image: project2, title: "Network Graph Analytics Dashboard" },
        { id: 3, image: project3, title: "Enterprise Cloud Analytics" },
        { id: 4, image: project4, title: "Luxury E-Commerce Dashboard" },
        { id: 5, image: project5, title: "Telehealth & Booking Platform" },
        { id: 6, image: project6, title: "Online Learning Management System" },
    ];

    return (
        <section className="portfolio-section" id="portfolio">
            <Container>
                {/* Portfolio Header with Text Left and Button Right */}
                <div className="portfolio-header">
                    <div className="portfolio-header-left">
                        <h2 className="portfolio-main-title">Selected Work</h2>
                        <p className="portfolio-subtitle">
                            Explore how we've helped industries transform their digital landscape through precision engineering.
                        </p>
                    </div>
                    <div className="portfolio-header-right">
                        <Link to="/portfolio" className="view-all-btn">
                            View All Projects
                        </Link>
                    </div>
                </div>

                {/* 3 Column Grid Layout */}
                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <div className="portfolio-card" key={project.id}>
                            <div className="project-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-img"
                                />
                                {/* Light overlay on hover for standard portfolio styling */}
                               
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default SelectedWork;