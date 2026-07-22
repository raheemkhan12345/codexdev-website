// src/features/home-why-choose/WhyChooseUs.jsx
import React from 'react';
import Container from '../../components/common/Container/Container';
import './WhyChooseUs.css'; // Same folder se import

// React Icons Imports
import { FaUsers, FaSyncAlt, FaShieldAlt, FaBolt } from 'react-icons/fa';

// Workspace Image Import
import workspaceImg from '../../assets/images/workspace.jpg'; // Ensure the path is correct

const WhyChooseUs = () => {
    const points = [
        {
            icon: <FaUsers />,
            title: "Elite Talent Pool",
            description: "Our team consists of senior engineers and designers with experience at world-leading tech firms."
        },
        {
            icon: <FaSyncAlt />,
            title: "Agile Methodology",
            description: "We work in transparent two-week sprints, keeping you involved and informed every step of the way."
        },
        {
            icon: <FaShieldAlt />,
            title: "Security First",
            description: "Enterprise-grade security practices are baked into every line of code we write."
        }
    ];

    return (
        <section className="why-choose-section" id="why-choose-us">
            <Container>
                <div className="why-choose-grid">

                    {/* Left Column: Image & Floating Card */}
                    <div className="why-choose-left">
                        <div className="image-wrapper">
                            <img
                                src={workspaceImg}
                                alt="CodexDev Workspace"
                                className="workspace-main-img"
                            />

                            {/* Floating "99.9% Uptime" Card */}
                            <div className="floating-uptime-card">
                                <div className="uptime-icon-box">
                                    <FaBolt className="uptime-icon" />
                                </div>
                                <div className="uptime-text-content">
                                    <h4 className="uptime-title">99.9% Uptime</h4>
                                    <p className="uptime-desc">
                                        We build resilient products that never fail when your users need them most.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Text Content */}
                    <div className="why-choose-right">
                        <h2 className="why-choose-main-title">Why Partners Choose CodexDev</h2>
                        <p className="why-choose-intro">
                            We don't just write code: we engineer solutions that drive measurable business value. Our approach combines rigorous testing with rapid iteration.
                        </p>

                        <div className="why-choose-list">
                            {points.map((point, index) => (
                                <div className="why-choose-item" key={index}>
                                    <div className="item-icon-box">
                                        {point.icon}
                                    </div>
                                    <div className="item-text">
                                        <h3 className="item-title">{point.title}</h3>
                                        <p className="item-desc">{point.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default WhyChooseUs;