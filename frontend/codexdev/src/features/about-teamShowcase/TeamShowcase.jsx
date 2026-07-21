import React, { useState } from 'react';
import './TeamShowcase.css';

import profile1 from '../../assets/images/about-teamPofile1.jpg';
import profile2 from '../../assets/images/about-teamPofile2.jpg';
import profile3 from '../../assets/images/about-teamPofile3.jpg';
import profile4 from '../../assets/images/about-teamPofile4.jpg';

const TeamShowcase = () => {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Leadership', 'UI/UX', 'Engineering'];

    const teamMembers = [
        {
            id: 1,
            name: "Elena Vance",
            role: "Chief Executive Officer",
            category: "Leadership",
            image: profile1
        },
        {
            id: 2,
            name: "Marcus Thorne",
            role: "CTO & Head of Engineering",
            category: "Leadership",
            image: profile2
        },
        {
            id: 3,
            name: "Sarah Chen",
            role: "VP of UI/UX Design",
            category: "UI/UX",
            image: profile3
        },
        {
            id: 4,
            name: "David Miller",
            role: "Senior DevOps Engineer",
            category: "Engineering",
            image: profile4
        }
    ];

    // Filtering team members based on active tab
    const filteredMembers = activeTab === 'All'
        ? teamMembers
        : teamMembers.filter(member => member.category === activeTab);

    return (
        <section className="team-showcase-section">
            <div className="team-container">

                {/* Top Header & Filter Controls Bar */}
                <div className="team-header-wrapper">
                    <div className="team-header-left">
                        <h2 className="team-title">The Brains Behind CodexDev</h2>
                        <p className="team-subtitle">
                            A multidisciplinary team of engineers, designers, and strategists.
                        </p>
                    </div>

                    {/* Dynamic Filter Tabs */}
                    <div className="team-filter-pill">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`filter-btn ${activeTab === category ? 'active' : ''}`}
                                onClick={() => setActiveTab(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 4-Column Cards Grid */}
                <div className="team-grid">
                    {filteredMembers.map((member) => (
                        <div key={member.id} className="team-card">
                            <div className="team-image-wrapper">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="member-photo"
                                />
                            </div>
                            <div className="team-card-info">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TeamShowcase;