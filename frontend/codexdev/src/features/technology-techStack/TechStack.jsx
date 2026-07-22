import React from 'react';
import './TechStack.css';
// React Icons integration for technology brands and tech indicators
import {
    FaReact, FaNodeJs, FaAws, FaDocker, FaCode, FaChevronRight
} from 'react-icons/fa';
import {
    SiNextdotjs, SiTypescript, SiTailwindcss, SiNestjs,
    SiDotnet, SiSpringboot, SiKubernetes, SiTerraform
} from 'react-icons/si';

const TechStack = () => {
    const stackData = [
        {
            category: "Frontend Development",
            tools: [
                { name: "React", icon: <FaReact className="stack-icon icon-react" /> },
                { name: "Next.js", icon: <SiNextdotjs className="stack-icon icon-next" /> },
                { name: "TypeScript", icon: <SiTypescript className="stack-icon icon-ts" /> },
                { name: "Tailwind", icon: <SiTailwindcss className="stack-icon icon-tailwind" /> },
            ]
        },
        {
            category: "Backend & APIs",
            tools: [
                { name: "Node.js", icon: <FaNodeJs className="stack-icon icon-node" /> },
                { name: "NestJS", icon: <SiNestjs className="stack-icon icon-nest" /> },
                { name: "ASP.NET", icon: <SiDotnet className="stack-icon icon-dotnet" /> },
                { name: "Spring", icon: <SiSpringboot className="stack-icon icon-spring" /> },
            ]
        },
        {
            category: "Cloud & DevOps",
            tools: [
                { name: "AWS", icon: <FaAws className="stack-icon icon-aws" /> },
                { name: "Docker", icon: <FaDocker className="stack-icon icon-docker" /> },
                { name: "K8s", icon: <SiKubernetes className="stack-icon icon-k8s" /> },
                { name: "Terraform", icon: <SiTerraform className="stack-icon icon-terraform" /> },
            ]
        }
    ];

    return (
        <section className="tech-stack-section">
            <div className="tech-stack-container">

                {/* Header Content */}
                <div className="tech-stack-header">
                    <h2 className="stack-main-title">The Tech Stack</h2>
                    <p className="stack-main-subtitle">
                        Our engineers are experts in the industry's most reliable and performant tools.
                    </p>
                </div>

                {/* Stack Categories Wrapper */}
                <div className="stack-categories-list">
                    {stackData.map((layer, index) => (
                        <div key={index} className="stack-row-group">

                            {/* Category Subheading with premium side indicator accent */}
                            <div className="stack-category-title-wrap">
                                <span className="category-line-indicator"></span>
                                <h3 className="stack-category-label">{layer.category}</h3>
                            </div>

                            {/* Grid Cards for current category */}
                            <div className="stack-cards-grid">
                                {layer.tools.map((tool, toolIdx) => (
                                    <div key={toolIdx} className="stack-tool-card">
                                        <div className="tool-icon-wrapper">
                                            {tool.icon}
                                        </div>
                                        <span className="tool-name-label">{tool.name}</span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TechStack;