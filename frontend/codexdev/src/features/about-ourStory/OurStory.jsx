import React from 'react';
import './OurStory.css';

const OurStory = () => {
    const storyEvents = [
        {
            year: "2016",
            title: "The Founding",
            description: "CodexDev was established with a clear mission: to provide the financial sector with developer tools that don't compromise on security or scale.",
            position: "left"
        },
        {
            year: "2019",
            title: "Global Expansion",
            description: "Opened our London and Singapore hubs, growing our engineering team to over 40 specialized developers across three continents.",
            position: "right"
        },
        {
            year: "2024",
            title: "AI Solutions Launch",
            description: "Pioneering the integration of ethical AI and machine learning into core enterprise software architectures.",
            position: "left"
        }
    ];

    return (
        <section className="our-story-section">
            <div className="story-container">

                {/* Section Header */}
                <div className="story-header">
                    <h2 className="story-title">Our Story</h2>
                    <div className="title-underline"></div>
                </div>

                {/* Timeline Wrapper */}
                <div className="timeline-wrapper">

                    {/* Central Vertical Line */}
                    <div className="timeline-line"></div>

                    {/* Timeline Items */}
                    {storyEvents.map((event, index) => (
                        <div
                            key={index}
                            className={`timeline-item item-${event.position}`}
                        >
                            {/* Central Node Dot */}
                            <div className="timeline-dot"></div>

                            {/* Content Card */}
                            <div className="timeline-content">
                                <span className="story-year">{event.year}</span>
                                <h3 className="story-heading">{event.title}</h3>
                                <p className="story-description">{event.description}</p>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default OurStory;