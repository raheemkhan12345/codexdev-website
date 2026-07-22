import React, { useState } from 'react';
import './CommonInquiries.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
    {
        id: 1,
        question: "How long does it take to start a project?",
        answer: "Typically, we can kick off a project within 10–14 days after the initial consultation. This includes team assembly and environment setup."
    },
    {
        id: 2,
        question: "Do you work with startups?",
        answer: "Yes, we collaborate closely with startups at various stages to build scalable MVPs, core platforms, and rapid technical solutions."
    },
    {
        id: 3,
        question: "What is your typical project budget?",
        answer: "Our project engagements usually start from $10,000 depending on the scope, team composition, and overall timeline requirements."
    }
];

const CommonInquiries = () => {
    // Pehla question default open rakha hai screenshot ke according
    const [openId, setOpenId] = useState(1);

    const toggleAccordion = (id) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <section className="inquiries-section">
            <div className="inquiries-container">

                {/* Section Heading */}
                <div className="inquiries-header">
                    <h2 className="inquiries-title">Common Inquiries</h2>
                </div>

                {/* Accordion List */}
                <div className="accordion-list">
                    {faqData.map((item) => {
                        const isOpen = openId === item.id;

                        return (
                            <div
                                key={item.id}
                                className={`accordion-card ${isOpen ? 'open' : ''}`}
                            >
                                {/* Accordion Header / Question */}
                                <button
                                    className="accordion-header"
                                    onClick={() => toggleAccordion(item.id)}
                                >
                                    <span className="question-text">{item.question}</span>
                                    <span className="arrow-icon">
                                        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                                    </span>
                                </button>

                                {/* Accordion Body / Answer */}
                                {isOpen && (
                                    <div className="accordion-body">
                                        <p className="answer-text">{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default CommonInquiries;