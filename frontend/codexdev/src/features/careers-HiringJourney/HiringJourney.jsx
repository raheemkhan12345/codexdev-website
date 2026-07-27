import React from 'react';
import './HiringJourney.css';

const stepsData = [
    {
        step: 1,
        title: "Apply",
        description: "Submit your CV and portfolio. We review every application within 48 hours.",
        tip: "Tip: Highlight your impact, not just your tasks."
    },
    {
        step: 2,
        title: "Intro Call",
        description: "A 30-min chat about your background, career goals, and CodexDev values.",
        tip: "Tip: Be authentic about what you're looking for."
    },
    {
        step: 3,
        title: "Technical Review",
        description: "A deep dive into your craft through a practical session or case study.",
        tip: "Tip: Focus on problem-solving clarity."
    },
    {
        step: 4,
        title: "The Meetup",
        description: "Meet your potential future teammates and discuss team dynamics.",
        tip: "Tip: Ask us the tough questions."
    },
    {
        step: 5,
        title: "Offer & Onboard",
        description: "Welcome to the team! We provide a structured 30-day onboarding.",
        tip: "Tip: Get ready to build something great."
    }
];

const HiringJourney = () => {
    return (
        <section className="hiring-journey-section">
            <div className="journey-container">

                {/* Section Heading */}
                <h2 className="journey-title">Our Hiring Journey</h2>

                {/* 5 Steps Grid Layout */}
                <div className="journey-steps-grid">
                    {stepsData.map((item) => (
                        <div key={item.step} className="journey-step-card">

                            {/* Step Number Badge */}
                            <div className="step-number-circle">
                                {item.step}
                            </div>

                            {/* Title & Description */}
                            <h3 className="journey-step-title">{item.title}</h3>
                            <p className="journey-step-description">{item.description}</p>

                            {/* Bottom Floating Tip Card */}
                            <div className="step-tip-box">
                                {item.tip}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default HiringJourney;