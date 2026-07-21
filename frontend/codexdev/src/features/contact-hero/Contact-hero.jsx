import React from 'react';
import './Contact-hero.css';
import { FaPhoneAlt } from 'react-icons/fa';

const ContactHero = ({ onStartProject, onOurOffices }) => {
    return (
        <section className="contact-hero-section">
            <div className="hero-bg-overlay"></div>

            <div className="contact-hero-container">
                {/* Main Content Box */}
                <div className="contact-hero-content">

                    <h1 className="contact-hero-title">
                        <span className="underlined-line">Let's Build Something</span>
                        <span className="underlined-line">Amazing Together</span>
                    </h1>

                    <p className="contact-hero-subtitle">
                        Tell us about your business goals, and our team will help you turn your ideas into scalable digital solutions.
                    </p>

                    {/* Action Buttons */}
                    <div className="contact-hero-buttons">
                        <button className="btn-primary-light" onClick={onStartProject}>
                            Start My Project
                        </button>

                        <button className="btn-outline-glass" onClick={onOurOffices}>
                            <span className="icon-badge">
                                <FaPhoneAlt className="btn-icon" />
                            </span>
                            <span className="btn-text-underline">Our Offices</span>
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactHero;