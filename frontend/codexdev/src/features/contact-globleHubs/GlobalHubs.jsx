// React Code (GlobalHubs.js)
import React from 'react';
import './GlobalHubs.css';

const hubLocations = [
    { name: 'San Francisco', role: 'Global HQ', location: 'Tech District', mapX: '15%', mapY: '45%' },
    { name: 'London', role: 'European Operations', location: 'West End', mapX: '51%', mapY: '39%' },
    { name: 'Singapore', role: 'APAC Engineering Campus', location: 'Innovation Hub', mapX: '81%', mapY: '60%' },
];

const GlobalHubs = () => {
    return (
        <div className="map-page-container">
            <div className="text-section">
                <h1 className="main-title">Global Engineering Hubs</h1>
                <p className="subtitle">
                    Wherever you are, CedexDev is there to provide round-the-clock innovation and support.
                </p>
            </div>

            <div className="contact-card-frame">
                <div className="contact-card">
                    <div className="header-info">
                        <span className="breadcrumb">Contact Us | Book a Consultation</span>
                        <h2>CONNECT GLOBALLY: BOOK A CONSULTATION</h2>
                    </div>

                    <div className="map-display">
                        {/* Replace with your specific SVG or Map Component */}
                        <div className="map-placeholder">
                            World Map Visualization
                            {hubLocations.map((hub, index) => (
                                <div
                                    key={index}
                                    className="location-dot"
                                    style={{ left: hub.mapX, top: hub.mapY }}
                                >
                                    <div className="dot-ripple"></div>
                                    <div className="dot-label">{hub.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="locations-summary">
                        {hubLocations.map((hub, index) => (
                            <div key={index} className="hub-info-block">
                                <h3>{hub.name}</h3>
                                <p>{hub.role} • {hub.location}</p>
                            </div>
                        ))}
                        <button className="schedule-btn">Schedule a Meeting</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GlobalHubs;