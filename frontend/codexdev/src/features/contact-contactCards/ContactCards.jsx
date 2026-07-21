import React from 'react';
import './ContactCards.css';
import {
    FaEnvelope,
    FaPhoneAlt,
    FaCommentAlt,
    FaMapMarkerAlt,
    FaArrowRight
} from 'react-icons/fa';

const ContactCards = () => {
    const contactData = [
        {
            id: 1,
            icon: <FaEnvelope />,
            title: "Email Us",
            description: "For project inquiries and general questions.",
            detail: "codexdev@gmail.com",
            linkText: "Send Email",
            linkUrl: "mailto:codexdev@gmail.com"
        },
        {
            id: 2,
            icon: <FaPhoneAlt />,
            title: "Call Us",
            description: "Speak with our engineering directors.",
            detail: "+1 (555) 012-3456",
            linkText: "Call Now",
            linkUrl: "tel:+15550123456"
        },
        {
            id: 3,
            icon: <FaCommentAlt />,
            title: "WhatsApp",
            description: "Instant messaging for quick support.",
            detail: "@codexdev_global",
            linkText: "Start Chat",
            linkUrl: "https://wa.me/"
        },
        {
            id: 4,
            icon: <FaMapMarkerAlt />,
            title: "Global HQ",
            description: "Visit our main engineering campus.",
            detail: "Peshawar",
            linkText: "Get Directions",
            linkUrl: "#"
        }
    ];

    return (
        <section className="contact-cards-section">
            <div className="contact-cards-container">
                {contactData.map((item) => (
                    <div key={item.id} className="contact-card">

                        {/* Top Icon Badge */}
                        <div className="card-icon-wrapper">
                            {item.icon}
                        </div>

                        {/* Title & Underlined Description */}
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-description">{item.description}</p>

                        {/* Detail Info */}
                        <div className="card-detail">{item.detail}</div>

                        {/* Action Link with Arrow */}
                        <a href={item.linkUrl} className="card-action-link">
                            <span>{item.linkText}</span>
                            <FaArrowRight className="arrow-icon" />
                        </a>

                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContactCards;