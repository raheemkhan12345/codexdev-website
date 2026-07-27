import React from 'react';
import './Services-Work.css';

const steps = [
  {
    number: '01',
    title: 'Discovery & Strategy',
    description:
      'In-depth stakeholder workshops to define core objectives and architectural requirements.',
  },
  {
    number: '02',
    title: 'Agile Sprints',
    description:
      'Iterative development cycles with bi-weekly demos to ensure alignment and momentum.',
  },
  {
    number: '03',
    title: 'QA & Refinement',
    description:
      'Rigorous automated testing and security auditing before any enterprise deployment.',
  },
  {
    number: '04',
    title: 'Launch & Scale',
    description:
      'Continuous monitoring and post-launch support to facilitate global scalability.',
  },
];

function ServicesWork1() {
  return (
    <section className="methodology-section">
      {/* Header */}
      <div className="methodology-header">
        <span className="methodology-subtitle">OUR METHODOLOGY</span>
        <h2 className="methodology-title">How We Work</h2>
        <p className="methodology-description">
          A rigorous Agile workflow designed for transparency, speed, and uncompromising quality.
        </p>
      </div>

      {/* Grid Steps */}
      <div className="steps-grid">
        {steps.map((step) => (
          <div key={step.number} className="step-card">
            <span className="step-number">{step.number}</span>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesWork1;