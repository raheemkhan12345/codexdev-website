// src/features/services/Services.jsx
import React from 'react';
import Container from '../../components/common/Container/Container';
import './Services.css';

// React Icons Imports
import {
    FaPalette,
    FaCode,
    FaBrain,
    FaCloud,
    FaMobileAlt,
    FaLaptopCode
} from 'react-icons/fa';

// Combined Local Services Data Object
const servicesData = {
    title: "Solutions That Scale",
    subtitle: "From concept to deployment, we provide end-to-end engineering and design services for the world's most ambitious companies.",
    cards: [
        {
            icon: <FaPalette />, // Directly storing JSX elements since this is a .jsx file!
            title: "UI/UX Design",
            description: "Crafting intuitive, high-fidelity interfaces that drive engagement and business growth.",
            link: "#ui-ux"
        },
        {
            icon: <FaCode />,
            title: "Web Development",
            description: "Building robust, SEO-optimized web applications using modern stacks like React and Next.js.",
            link: "#web-dev"
        },
        {
            icon: <FaBrain />,
            title: "AI Integration",
            description: "Implementing cutting-edge LLMs and machine learning solutions to automate your workflow.",
            link: "#ai-integration"
        },
        {
            icon: <FaCloud />,
            title: "Cloud Infrastructure",
            description: "Serverless architecture and DevOps automation on AWS, GCP, and Azure.",
            link: "#cloud"
        },
        {
            icon: <FaMobileAlt />,
            title: "Mobile Solutions",
            description: "Cross-platform mobile apps for iOS and Android using Flutter and React Native.",
            link: "#mobile"
        },
        {
            icon: <FaLaptopCode />,
            title: "Custom Software",
            description: "Tailor-made software solutions designed to solve your specific business challenges.",
            link: "#custom-software"
        }
    ]
};

const Services = () => {
    return (
        <section className="services-section" id="services">
            <Container>
                {/* Section Header */}
                <div className="services-header">
                    <h2 className="services-main-title">{servicesData.title}</h2>
                    <p className="services-subtitle">{servicesData.subtitle}</p>
                </div>

                {/* Services Grid */}
                <div className="services-grid">
                    {servicesData.cards.map((card, index) => (
                        <div className="service-card" key={index}>
                            {/* Card Icon */}
                            <div className="service-icon-box">
                                <span className="service-icon">
                                    {card.icon}
                                </span>
                            </div>

                            {/* Card Content */}
                            <h3 className="service-card-title">{card.title}</h3>
                            <p className="service-card-desc">{card.description}</p>

                            {/* Learn More Link */}
                            <a href={card.link} className="service-learn-more">
                                Learn More <span className="arrow">→</span>
                            </a>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Services;