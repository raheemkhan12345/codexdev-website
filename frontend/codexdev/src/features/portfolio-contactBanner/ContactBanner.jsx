import React from 'react';
import './ContactBanner.css';

const ContactBanner = () => {
    return (
        <section className="portfolio-cta-section">
            <div className="portfolio-cta-container">
                <div className="portfolio-cta-card">
                    <h2 className="cta-title">Have a vision for your next project?</h2>
                    <p className="cta-subtitle">
                        Let’s combine our executive engineering expertise with your industry insights to
                        build something extraordinary.
                    </p>
                    <div className="cta-buttons-group">
                        <button className="cta-btn btn-primary">Start Your Project</button>
                        <button className="cta-btn btn-secondary">View Our Process</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactBanner;