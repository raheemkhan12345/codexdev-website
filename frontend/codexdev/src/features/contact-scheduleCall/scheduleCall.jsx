import React from 'react';
import { FaCalendarAlt, FaVideo } from 'react-icons/fa';
import './ScheduleCall.css';

const ScheduleCall = () => {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    const dates = [
        { day: '14', active: false },
        { day: '15', active: false },
        { day: '16', active: true },
        { day: '17', active: false },
        { day: '18', active: false },
    ];

    return (
        <section className="contact-form-section">
            <div className="booking-container">
                {/* Left Section */}
                <div className="booking-left">
                    <h2 className="title">Prefer a direct conversation?</h2>
                    <p className="subtitle">
                        Schedule a 15–minute discovery call with one of our solutions architects to discuss your roadmap.
                    </p>

                    <div className="feature-list">
                        <div className="feature-item">
                            <div className="icon-wrapper">
                                <FaCalendarAlt className="icon" />
                            </div>
                            <div className="feature-text">
                                <h4>Flexible Timing</h4>
                                <p>Available across all timezones.</p>
                            </div>
                        </div>

                        <div className="feature-item">
                            <div className="icon-wrapper">
                                <FaVideo className="icon" />
                            </div>
                            <div className="feature-text">
                                <h4>Zoom or Google Meet</h4>
                                <p>Meeting link generated instantly.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="booking-right">
                    <div className="calendar-widget">
                        {/* Days Header */}
                        <div className="days-row">
                            {days.map((d, index) => (
                                <span key={index} className="day-label">{d}</span>
                            ))}
                        </div>

                        {/* Dates Row */}
                        <div className="dates-row">
                            {dates.map((item, index) => (
                                <div
                                    key={index}
                                    className={`date-circle ${item.active ? 'active' : ''}`}
                                >
                                    {item.day}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button className="book-btn">Book via Calendly</button>
                </div>
            </div>
        </section>
    );
};

export default ScheduleCall;