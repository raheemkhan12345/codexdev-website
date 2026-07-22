import React from 'react';
import './LifeAtCodexdev.css';
import image1 from '../../assets/images/aboutPage-lifeAtCodexdev1.jpg';
import image2 from '../../assets/images/aboutPage-lifeAtCodexdev2.jpg';
import image3 from '../../assets/images/aboutPage-lifeAtCodexdev3.jpg';
import image4 from '../../assets/images/aboutPage-lifeAtCodexdev4.jpg';
import image5 from '../../assets/images/aboutPage-lifeAtCodexdev5.jpg';
import image6 from '../../assets/images/aboutPage-lifeAtCodexdev6.jpg';

const LifeAtCodexdev = () => {
    const galleryImages = [
        {
            id: 1,
            alt: "Team whiteboard brainstorming session",
            url: image1
        },
        {
            id: 2,
            alt: "Team dinner celebration",
            url: image2
        },
        {
            id: 3,
            alt: "Collaborative tech discussion",
            url: image3
        },
        {
            id: 4,
            alt: "Developer workspace dual monitor setup",
            url: image4
        },
        {
            id: 5,
            alt: "Modern open office space",
            url: image5
        },
        {
            id: 6,
            alt: "Office motivation wall and awards",
            url: image6
        }
    ];

    return (
        <section className="life-at-codex-section">
            <div className="life-container">

                {/* Section Header */}
                <div className="life-header">
                    <h2 className="life-title">Life at CodexDev</h2>
                    <p className="life-subtitle">
                        More than just colleagues. We're a collective of passionate problem solvers who enjoy the journey as much as the destination.
                    </p>
                </div>

                {/* 6-Card Image Gallery Grid */}
                <div className="life-gallery-grid">
                    {galleryImages.map((img) => (
                        <div key={img.id} className="life-gallery-card">
                            <img
                                src={img.url}
                                alt={img.alt}
                                className="life-gallery-img"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LifeAtCodexdev;