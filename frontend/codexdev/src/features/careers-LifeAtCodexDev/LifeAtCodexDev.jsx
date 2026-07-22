import React from 'react';
import './LifeAtCodexDev.css';
import { FiTarget, FiUsers, FiZap } from 'react-icons/fi';

// Dummy images path — apni images se replace kar lein
import lifeImg1 from '../../assets/images/careers-LifeAtCodexDev-img1.jpg';
import lifeImg2 from '../../assets/images/careers-LifeAtCodexDev-img2.jpg';
import lifeImg3 from '../../assets/images/careers-LifeAtCodexDev-img3.jpg';
import lifeImg4 from '../../assets/images/careers-LifeAtCodexDev-img4.jpg';

const LifeAtCodexDev = () => {
    const highlights = [
        {
            id: 1,
            icon: <FiZap />,
            title: 'Innovation First',
            description: 'We allocate 10% of our week to R&D and exploring new technologies.'
        },
        {
            id: 2,
            icon: <FiTarget />,
            title: 'Continuous Learning',
            description: 'Internal tech talks every Friday and a dedicated mentorship program.'
        },
        {
            id: 3,
            icon: <FiUsers />,
            title: 'Diversity of Thought',
            description: 'A global team bringing unique perspectives to every engineering challenge.'
        }
    ];

    return (
        <section className="life-section">
            <div className="life-container">

                {/* Left Side: 4-Image Grid Collage */}
                <div className="life-image-grid">

                    {/* Column 1 */}
                    <div className="grid-col col-left">
                        <div className="img-card img-small">
                            <img src={lifeImg1} alt="Team Meeting" />
                        </div>
                        <div className="img-card img-tall">
                            <img src={lifeImg3} alt="Developer Workspace Setup" />
                        </div>
                    </div>

                    {/* Column 2 (Offset Masonry) */}
                    <div className="grid-col col-right">
                        <div className="img-card img-tall">
                            <img src={lifeImg2} alt="Team Discussion" />
                        </div>
                        <div className="img-card img-small">
                            <img src={lifeImg4} alt="Office Cafeteria / Lounge" />
                        </div>
                    </div>

                </div>

                {/* Right Side: Text & Key Highlights */}
                <div className="life-content">
                    <h2 className="life-title">Life at CodexDev</h2>

                    <p className="life-description">
                        We don't just build code; we build communities. Our culture is rooted in radical transparency and a relentless pursuit of excellence.
                    </p>

                    <div className="highlights-list">
                        {highlights.map((item) => (
                            <div key={item.id} className="highlight-item">
                                <div className="highlight-icon-box">
                                    {item.icon}
                                </div>
                                <div className="highlight-text">
                                    <h3 className="highlight-title">{item.title}</h3>
                                    <p className="highlight-desc">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default LifeAtCodexDev;