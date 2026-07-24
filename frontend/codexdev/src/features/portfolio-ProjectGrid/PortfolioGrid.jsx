// src/features/portfolio-grid/PortfolioGrid.jsx
import React, { useState } from 'react';
import { FiSmartphone, FiShoppingBag, FiActivity } from 'react-icons/fi';
import { TbBrain, TbCloudStorm } from 'react-icons/tb';
import Container from '../../components/common/Container/Container';
import './PortfolioGrid.css';

// Project Images
import p1_neo from '../../assets/images/portfolio-project1.png';
import p2_city from '../../assets/images/portfolio-project2.jpg';
import p3_chronos from '../../assets/images/portfolio-project3.png';
import p4_vanguard from '../../assets/images/portfolio-project4.png';
import p5_vitalis from '../../assets/images/portfolio-project5.png';

const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Solutions' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI & Data' },
    { id: 'uiux', label: 'UI/UX Design' }
];

const initialProjects = [
    {
        id: 1,
        title: "NeoBank Mobile Experience",
        image: p1_neo,
        category: "mobile",
        tags: ["Fintech", "SwiftUI"],
        icon: <FiSmartphone />,
        size: "normal"
    },
    {
        id: 4,
        title: "Vanguard AI Predictive Analytics",
        image: p4_vanguard,
        category: "ai",
        tags: ["AI/ML", "Python"],
        icon: <TbBrain />,
        size: "normal"
    },
    {
        id: 2,
        title: "SmartCity Infrastructure Hub",
        image: p2_city,
        category: "web",
        tags: ["IoT", "Dashboard", "React"],
        icon: <TbCloudStorm />,
        size: "tall" // Center Tall column
    },
    {
        id: 3,
        title: "Chronos Luxury Retail",
        image: p3_chronos,
        category: "uiux",
        tags: ["Retail", "Next.js"],
        icon: <FiShoppingBag />,
        size: "normal"
    },
    {
        id: 5,
        title: "Vitalis Wellness App",
        image: p5_vitalis,
        category: "mobile",
        tags: ["Healthcare", "React Native"],
        icon: <FiActivity />,
        size: "normal"
    }
];

const PortfolioGrid = () => {
    const [activeFilter, setActiveFilter] = useState('all');

    const filteredProjects = activeFilter === 'all'
        ? initialProjects
        : initialProjects.filter(project => project.category === activeFilter);

    return (
        <section className="portfolio-grid-section">
            <Container>

                {/* ================= FILTER BUTTONS ================= */}
                <div className="filter-buttons-container">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            className={`filter-button ${activeFilter === cat.id ? 'active' : ''}`}
                            onClick={() => setActiveFilter(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* ================= TRUE MASONRY GRID LAYOUT ================= */}
                <div className="masonry-portfolio-grid">
                    {filteredProjects.map((project) => (
                        <div
                            className={`portfolio-item-card ${project.size}`}
                            key={project.id}
                        >
                            {/* Image Container */}
                            <div className="portfolio-item-img-box">
                                <img src={project.image} alt={project.title} className="portfolio-item-img" />
                            </div>

                            {/* Text Body Content */}
                            <div className="portfolio-item-body">
                                <div className="portfolio-item-header">
                                    <h3 className="portfolio-item-title">{project.title}</h3>
                                    <span className="portfolio-item-icon">{project.icon}</span>
                                </div>

                                {/* Tags Row */}
                                <div className="portfolio-item-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span className="portfolio-item-tag" key={idx}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
};

export default PortfolioGrid;