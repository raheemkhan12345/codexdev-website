import React from 'react';
import './EcosystemArchitecture.css';
// FontAwesome Icons Import
import { FaCloud, FaServer, FaTerminal, FaShieldAlt, FaLayerGroup } from 'react-icons/fa';

const EcosystemArchitecture = () => {
    const processSteps = [
        {
            number: "1",
            title: "Discovery & Design",
            description: "Defining technical requirements and high-fidelity prototyping."
        },
        {
            number: "2",
            title: "Agile Development",
            description: "Bi-weekly sprints with full stakeholder visibility and testing."
        },
        {
            number: "3",
            title: "DevOps Pipeline",
            description: "Automated CI/CD for instant, stable global deployments."
        }
    ];

    return (
        <section className="ecosystem-section">
            <div className="ecosystem-container">

                {/* Left Side: Content & Steps */}
                <div className="ecosystem-content">
                    <h2 className="ecosystem-title">Our Ecosystem Architecture</h2>
                    <p className="ecosystem-subtitle">
                        We don't just write code; we build environments. Our ecosystem
                        connects discovery, design, development, and deployment in a
                        continuous feedback loop that ensures quality at every node.
                    </p>

                    <div className="steps-wrapper">
                        {processSteps.map((step, index) => (
                            <div key={index} className="step-card">
                                <div className="step-number">{step.number}</div>
                                <div className="step-details">
                                    <h4 className="step-card-title">{step.title}</h4>
                                    <p className="step-card-description">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Orbital Graphic Diagram */}
                <div className="ecosystem-graphics">
                    <div className="orbit-wrapper">
                        {/* Outer Circular Tracks */}
                        <div className="orbit-track track-outer"></div>
                        <div className="orbit-track track-inner"></div>

                        {/* Center Core Hub */}
                        <div className="orbit-core">
                            <FaLayerGroup className="core-icon" />
                        </div>

                        {/* Surrounding Nodes on Circle Points */}
                        <div className="orbit-node node-top">
                            <FaServer className="node-icon" />
                        </div>
                        <div className="orbit-node node-right">
                            <FaShieldAlt className="node-icon" />
                        </div>
                        <div className="orbit-node node-bottom">
                            <FaTerminal className="node-icon" />
                        </div>
                        <div className="orbit-node node-left">
                            <FaCloud className="node-icon" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EcosystemArchitecture;