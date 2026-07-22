import React, { useState } from 'react';
import './GlobalHubs.css';
import { FiMapPin } from 'react-icons/fi';
// Map graphic background ke liye apni Image import karein
import worldMapBg from '../../assets/images/globalHubs-map.jpg';

const hubsData = [
    {
        id: 1,
        name: "New York HQ",
        address: "450 Lexington Ave, Suite 3200",
        city: "New York, NY 10017",
        hours: "Visits: 9 AM - 6 PM EST"
    },
    {
        id: 2,
        name: "London Tech Hub",
        address: "70 St Mary Axe",
        city: "London EC3A 8BE, UK",
        hours: "Visits: 9 AM - 5 PM GMT"
    }
];

const GlobalHubs = () => {
    const [activeHub, setActiveHub] = useState(1);

    return (
        <section className="global-hubs-section">
            <div className="hubs-container">

                {/* Left Side Info & Hub Selector */}
                <div className="hubs-left">
                    <h2 className="hubs-title">Global Hubs</h2>
                    <p className="hubs-description">
                        While we are remote-first, our physical hubs serve as centers for collaboration and community.
                    </p>

                    <div className="hub-cards-list">
                        {hubsData.map((hub) => (
                            <div
                                key={hub.id}
                                className={`hub-card ${activeHub === hub.id ? 'active' : ''}`}
                                onClick={() => setActiveHub(hub.id)}
                            >
                                <div className="active-indicator"></div>
                                <div className="hub-card-content">
                                    <h3 className="hub-name">{hub.name}</h3>
                                    <p className="hub-address">{hub.address}</p>
                                    <p className="hub-city">{hub.city}</p>
                                    <span className="hub-hours">{hub.hours}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side Map Canvas */}
                <div className="hubs-right">
                    <div className="map-wrapper">
                        <img
                            src={worldMapBg}
                            alt="Global Hubs World Map"
                            className="world-map-img"
                        />

                        {/* Center Interactive Badge */}
                        <div className="interactive-map-badge">
                            <FiMapPin className="map-badge-icon" />
                            <span>Interactive Map View</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GlobalHubs;