import React from 'react';
import './TechDNA.css';
// FontAwesome Icons Import (react-icons/fa)
import {
    FaCloud,
    FaShieldAlt,
    FaBolt,
    FaRobot,
    FaProjectDiagram
} from 'react-icons/fa';

const TechDNA = () => {
    const dnaFeatures = [
        {
            id: 1,
            icon: <FaProjectDiagram />,
            title: "Scalable Architecture",
            description: "Microservices and modular patterns designed to grow infinitely as your user base expands."
        },
        {
            id: 2,
            icon: <FaCloud />,
            title: "Cloud Infrastructure",
            description: "Optimized multi-cloud strategies for high availability and automated disaster recovery."
        },
        {
            id: 3,
            icon: <FaShieldAlt />,
            title: "Secure Development",
            description: "Zero-trust security models integrated into every line of code from the start."
        },
        {
            id: 4,
            icon: <FaBolt />,
            title: "Performance Optimization",
            description: "Millisecond-level latency and efficient resource utilization for superior UX."
        },
        {
            id: 5,
            icon: <FaRobot />,
            title: "Artificial Intelligence",
            description: "Embedding LLMs and ML models to automate workflows and drive intelligent insights."
        },
        {
            id: 6,
            icon: <FaProjectDiagram />, // Isko aap exact image wale node structure ke liye FaProjectDiagram ya FaNetworkWired rakh sakte hain
            title: "Enterprise Integration",
            description: "Seamless connectivity between legacy systems and modern digital platforms."
        }
    ];

    return (
        <section className="tech-dna-section">
            <div className="tech-dna-container">

                {/* Header Section */}
                <div className="tech-dna-header">
                    <h2 className="tech-dna-title">Our Technical DNA</h2>
                    <p className="tech-dna-subtitle">
                        We leverage a robust suite of technologies to solve complex business challenges with precision and speed.
                    </p>
                </div>

                {/* 3x2 Grid Layout */}
                <div className="tech-dna-grid">
                    {dnaFeatures.map((feature) => (
                        <div key={feature.id} className="dna-card">
                            <div className="dna-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3 className="dna-card-title">{feature.title}</h3>
                            <p className="dna-card-description">{feature.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TechDNA;