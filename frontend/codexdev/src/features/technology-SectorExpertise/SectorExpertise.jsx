import React from 'react';
import './SectorExpertise.css';
import medImg from '../../assets/images/medvantage.jpg';
import aiImg from '../../assets/images/neuralcore.jpg';

const SectorExpertise = () => {
    const projects = [
        {
            id: 1,
            badge: "Healthcare Tech",
            title: "MedVantage Enterprise",
            description: "A secure, HIPAA-compliant patient management system powered by React and AWS, supporting over 20,000 daily active providers.",
            tags: ["Node.js", "PostgreSQL", "Redis"],
            image: medImg
        },
        {
            id: 2,
            badge: "AI Infrastructure",
            title: "NeuralCore Analytics",
            description: "Real-time fraud detection engine leveraging TensorFlow and Kafka, processing millions of transactions with sub-100ms latency.",
            tags: ["Python", "PyTorch", "Go"],
            image: aiImg,
        }
    ];

    return (
        <section className="sector-expertise-section">
            <div className="sector-container">

                {/* Section Header */}
                <div className="sector-header">
                    <h2 className="sector-main-title">Sector Expertise</h2>
                    <p className="sector-main-subtitle">
                        Diverse solutions for industry leaders across the globe.
                    </p>
                </div>

                {/* 2-Column Cards Grid */}
                <div className="sector-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="sector-card">

                            {/* Image Box with absolute badge */}
                            <div className="sector-image-wrapper">
                                <span className="project-badge">{project.badge}</span>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-display-img"
                                />
                            </div>

                            {/* Bottom Content Area */}
                            <div className="sector-card-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                {/* Tech Stack Tags */}
                                <div className="project-tags-group">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="tech-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SectorExpertise;