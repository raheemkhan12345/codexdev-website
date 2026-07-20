// src/features/home-process/Process.jsx
import React from 'react';
import Container from '../../components/common/Container/Container';
import './Process.css';

// React Icons Imports
import { FiSearch, FiFeather, FiCode, FiSend } from 'react-icons/fi';

const processData = {
    title: "Our Proven Process",
    subtitle: "A structured journey from your initial idea to a high-performing digital ecosystem.",
    steps: [
        {
            number: "01",
            icon: <FiSearch />,
            title: "Discovery",
            description: "Market research and feasibility analysis."
        },
        {
            number: "02",
            icon: <FiFeather />, // Sleek drafting icon for design
            title: "Design",
            description: "Prototyping and architectural planning."
        },
        {
            number: "03",
            icon: <FiCode />,
            title: "Development",
            description: "Quality-driven engineering and testing."
        },
        {
            number: "04",
            icon: <FiSend />, // Sleek launch rocket/send icon
            title: "Launch",
            description: "Deployment and post-launch support."
        }
    ]
};

const Process = () => {
    return (
        <section className="process-section" id="process">
            <Container>
                {/* Section Header */}
                <div className="process-header">
                    <h2 className="process-main-title">{processData.title}</h2>
                    <p className="process-subtitle">{processData.subtitle}</p>
                </div>

                {/* Process Steps Row */}
                <div className="process-steps-container">
                    {/* Connecting Line (Desktop only) */}
                    <div className="connecting-line"></div>

                    <div className="process-grid">
                        {processData.steps.map((step, index) => (
                            <div className="process-card" key={index}>
                                {/* Icon Wrapper */}
                                <div className="process-icon-box">
                                    <span className="process-icon">{step.icon}</span>
                                </div>

                                {/* Step Info */}
                                <div className="process-info">
                                    <h3 className="process-step-title">
                                        <span className="step-number">{step.number}</span>
                                        {step.title}
                                    </h3>
                                    <p className="process-step-desc">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Process;