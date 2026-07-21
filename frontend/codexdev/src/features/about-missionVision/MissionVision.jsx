import React from 'react';
import './MissionVision.css';
import { FaRocket, FaEye, FaStar } from 'react-icons/fa';

const MissionVision = () => {
    const pillars = [
        {
            id: 1,
            title: "Our Mission",
            description: "Empowering visionaries with the digital architecture required to scale without friction.",
            icon: <FaRocket className="pillar-icon" />
        },
        {
            id: 2,
            title: "Our Vision",
            description: "To become the global standard for executive engineering excellence and software reliability.",
            icon: <FaEye className="pillar-icon" />
        },
        {
            id: 3,
            title: "Our Values",
            description: "Precision, radical transparency, and an obsession with clean, sustainable codebases.",
            icon: <FaStar className="pillar-icon" />
        }
    ];

    return (
        <section className="mission-vision-section">
            <div className="mission-vision-container">
                <div className="pillars-grid">
                    {pillars.map((pillar) => (
                        <div key={pillar.id} className="pillar-card">
                            <div className="pillar-icon-box">
                                {pillar.icon}
                            </div>

                            <h3 className="pillar-title">{pillar.title}</h3>
                            <p className="pillar-description">{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MissionVision;