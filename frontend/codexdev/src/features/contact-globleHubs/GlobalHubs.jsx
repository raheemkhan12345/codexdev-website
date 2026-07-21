import React, { useState } from 'react';
import './GlobalHubs.css';
import {
    FaGlobe,
    FaMapMarkerAlt,
    FaCalendarAlt,
    FaArrowRight
} from 'react-icons/fa';

const GlobalHubs = () => {
    const [selectedHub, setSelectedHub] = useState('sf');

    const hubLocations = [
        {
            id: 'sf',
            city: 'San Francisco',
            role: 'Global HQ • Tech District',
        },
        {
            id: 'london',
            city: 'London',
            role: 'European Operations',
        },
        {
            id: 'singapore',
            city: 'Singapore',
            role: 'APAC Engineering Campus',
        },
    ];

    return (
        <section className="global-hubs-section">
            <div className="global-hubs-container">

                {/* Section Header */}
                <div className="hubs-header">
                    <h2 className="hubs-title">Global Engineering Hubs</h2>
                    <p className="hubs-subtitle">
                        Wherever you are, CodexDev is there to provide round-the-clock innovation and support.
                    </p>
                </div>

                {/* Main Map Card Outer Container */}
                <div className="hubs-map-card">

                    {/* Card Top Title Banner */}
                    <div className="map-banner">
                        <FaGlobe className="banner-globe-icon" />
                        <span className="banner-text">CONNECT GLOBALLY: BOOK A CONSULTATION</span>
                    </div>

                    {/* Map Display Box */}
                    <div className="map-viewport">

                        {/* World Map SVG Graphic */}
                        <div className="map-graphic-overlay"></div>

                        {/* Glowing Map Pins */}
                        <div className={`map-pin pin-sf ${selectedHub === 'sf' ? 'active' : ''}`} style={{ top: '38%', left: '21%' }}>
                            <span className="ping"></span>
                            <span className="dot"></span>
                            <span className="pin-tooltip">San Francisco</span>
                        </div>

                        <div className="map-pin pin-ny" style={{ top: '39%', left: '29%' }}>
                            <span className="ping"></span>
                            <span className="dot"></span>
                            <span className="pin-tooltip">New York</span>
                        </div>

                        <div className={`map-pin pin-london ${selectedHub === 'london' ? 'active' : ''}`} style={{ top: '28%', left: '46%' }}>
                            <span className="ping"></span>
                            <span className="dot"></span>
                            <span className="pin-tooltip">London</span>
                        </div>

                        <div className="map-pin pin-berlin" style={{ top: '27%', left: '50%' }}>
                            <span className="ping"></span>
                            <span className="dot"></span>
                            <span className="pin-tooltip">Berlin</span>
                        </div>

                        <div className={`map-pin pin-singapore ${selectedHub === 'singapore' ? 'active' : ''}`} style={{ top: '60%', left: '76%' }}>
                            <span className="ping"></span>
                            <span className="dot"></span>
                            <span className="pin-tooltip">Singapore</span>
                        </div>

                        <div className="map-pin pin-tokyo" style={{ top: '36%', left: '85%' }}>
                            <span className="ping"></span>
                            <span className="dot"></span>
                            <span className="pin-tooltip">Tokyo</span>
                        </div>

                        <div className="map-pin pin-sydney" style={{ top: '75%', left: '88%' }}>
                            <span className="ping"></span>
                            <span className="dot"></span>
                            <span className="pin-tooltip">Sydney</span>
                        </div>

                    </div>

                    {/* Bottom Floating Hub Cards */}
                    <div className="hubs-bottom-overlay">

                        <div className="hub-cards-grid">
                            {hubLocations.map((hub) => (
                                <div
                                    key={hub.id}
                                    className={`hub-info-card ${selectedHub === hub.id ? 'selected' : ''}`}
                                    onClick={() => setSelectedHub(hub.id)}
                                >
                                    <div className="hub-card-top">
                                        <FaMapMarkerAlt className="hub-icon" />
                                        <h4 className="hub-city">{hub.city}</h4>
                                    </div>
                                    <p className="hub-role">{hub.role}</p>
                                </div>
                            ))}
                        </div>

                        {/* Schedule Meeting CTA Button */}
                        <button className="btn-schedule-meeting">
                            <FaCalendarAlt className="cta-icon" />
                            <span>Schedule a Meeting</span>
                            <FaArrowRight className="cta-arrow" />
                        </button>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default GlobalHubs;