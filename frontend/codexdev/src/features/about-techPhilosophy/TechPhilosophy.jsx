import React from 'react';
import './TechPhilosophy.css';
import { FaLayerGroup, FaTachometerAlt, FaInfinity } from 'react-icons/fa';

const TechPhilosophy = () => {
    const principles = [
        {
            id: 1,
            title: "Clean Architecture",
            description: "Modular designs that separate concerns and ensure maintainability for decades.",
            icon: <FaLayerGroup className="philosophy-icon" />
        },
        {
            id: 2,
            title: "Scalable Code",
            description: "Performance-optimized logic built to handle exponential growth in user demand.",
            icon: <FaTachometerAlt className="philosophy-icon" />
        },
        {
            id: 3,
            title: "CI/CD First",
            description: "Automated pipelines that guarantee reliability from local dev to production.",
            icon: <FaInfinity className="philosophy-icon" />
        }
    ];

    return (
        <section className="tech-philosophy-section">
            <div className="philosophy-container">

                {/* Left Grid: Feature Cards Stack */}
                <div className="philosophy-cards-wrapper">
                    {principles.map((item) => (
                        <div key={item.id} className="philosophy-card">
                            <span className="card-left-border"></span>
                            <div className="philosophy-card-inner">
                                <div className="philosophy-card-header">
                                    {item.icon}
                                    <h3 className="card-title">{item.title}</h3>
                                </div>
                                <p className="card-description">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Content Block */}
                <div className="philosophy-content-block">
                    <h2 className="philosophy-title">Technology Philosophy</h2>
                    <p className="philosophy-text">
                        We don't just write code; we engineer systems. Our approach is grounded
                        in the belief that software should be an asset, not a liability. By
                        following strict engineering principles, we ensure your investment grows
                        in value over time.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default TechPhilosophy;