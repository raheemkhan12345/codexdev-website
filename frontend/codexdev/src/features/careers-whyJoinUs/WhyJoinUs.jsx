import React from 'react';
import './WhyJoinUs.css';
import {
    FiTrendingUp,
    FiMapPin,
    FiBookOpen,
    FiCode,
    FiUsers,
    FiGlobe
} from 'react-icons/fi';

const benefitsData = [
    {
        id: 1,
        icon: <FiTrendingUp />,
        title: 'Career Growth',
        description: 'Defined roadmaps and annual promotions based on merit and impact, not just tenure.'
    },
    {
        id: 2,
        icon: <FiMapPin />,
        title: 'Flexible Work',
        description: 'Remote-first culture with global hub access. Work from wherever you\'re most productive.'
    },
    {
        id: 3,
        icon: <FiBookOpen />,
        title: 'Learning',
        description: 'Uncapped certification budget and weekly dedicated time for skill development.'
    },
    {
        id: 4,
        icon: <FiCode />,
        title: 'Modern Tech',
        description: 'Work with React, Go, Rust, and advanced AI frameworks on enterprise-scale products.'
    },
    {
        id: 5,
        icon: <FiUsers />,
        title: 'Collaborative Culture',
        description: 'Ego-free engineering. We win as a team through peer reviews and mentorship.'
    },
    {
        id: 6,
        icon: <FiGlobe />,
        title: 'Global Projects',
        description: 'Solving complex challenges for Fortune 500 companies and high-growth startups.'
    }
];

const WhyJoinUs = () => {
    return (
        <section className="why-join-section">
            <div className="why-join-container">

                {/* Section Header */}
                <div className="why-join-header">
                    <h2 className="why-join-title">Why Join CodexDev?</h2>
                    <p className="why-join-subtitle">
                        We provide the environment for you to do your best work.
                    </p>
                </div>

                {/* 6 Benefits Cards Grid */}
                <div className="benefits-grid">
                    {benefitsData.map((item) => (
                        <div key={item.id} className="benefit-card">
                            <div className="card-icon">{item.icon}</div>
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-description">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhyJoinUs;