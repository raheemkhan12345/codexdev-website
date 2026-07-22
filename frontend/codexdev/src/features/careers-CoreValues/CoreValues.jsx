import React from 'react';
import './CoreValues.css';

const valuesData = [
    "Innovation",
    "Integrity",
    "Quality",
    "Transparency",
    "Collaboration",
    "Accountability",
    "Customer Success",
    "Improvement"
];

const CoreValues = () => {
    return (
        <section className="core-values-section">
            <div className="core-values-container">

                {/* Header Area */}
                <div className="core-values-header">
                    <h2 className="core-values-title">Our Core Values</h2>
                    <p className="core-values-subtitle">
                        The principles that guide every line of code we ship.
                    </p>
                </div>

                {/* 4x2 Cards Grid */}
                <div className="values-grid">
                    {valuesData.map((value, index) => (
                        <div key={index} className="value-card">
                            <h3 className="value-name">{value}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default CoreValues;