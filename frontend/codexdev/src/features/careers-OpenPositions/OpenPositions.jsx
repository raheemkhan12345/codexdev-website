import React, { useState } from 'react';
import './OpenPositions.css';
import { FiSearch, FiSliders } from 'react-icons/fi';

const jobsData = [
    {
        id: 1,
        title: "Senior Full-Stack Engineer",
        department: "Engineering",
        type: "Full-time",
        location: "Remote",
        posted: "Posted 2 days ago",
        departmentMeta: "Engineering Department"
    },
    {
        id: 2,
        title: "Lead UI/UX Designer",
        department: "Design",
        type: "Full-time",
        location: "Hybrid (NYC)",
        posted: "Posted 5 days ago",
        departmentMeta: "Design Department"
    },
    {
        id: 3,
        title: "AI Research Scientist",
        department: "AI Labs",
        type: "Full-time",
        location: "Remote",
        posted: "Posted 1 week ago",
        departmentMeta: "Research Department"
    }
];

const OpenPositions = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedDept, setSelectedDept] = useState('All');
    const [selectedLocation, setSelectedLocation] = useState('All');

    // Filter Logic
    const filteredJobs = jobsData.filter((job) => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.department.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesDept = selectedDept === 'All' || job.department === selectedDept;
        const matchesLoc = selectedLocation === 'All' || job.location.includes(selectedLocation);

        return matchesSearch && matchesDept && matchesLoc;
    });

    return (
        <section className="open-positions-section">
            <div className="positions-container">

                {/* Title */}
                <h2 className="positions-title">Open Positions</h2>

                {/* Search & Filters Controls Bar */}
                <div className="controls-bar">

                    {/* Search Bar Input */}
                    <div className="search-box">
                        <FiSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search roles, skills, or keywords..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Filter Dropdowns */}
                    <div className="filter-group">

                        {/* Department Dropdown */}
                        <select
                            className="filter-select"
                            value={selectedDept}
                            onChange={(e) => setSelectedDept(e.target.value)}
                        >
                            <option value="All">Department</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Design">Design</option>
                            <option value="AI Labs">AI Labs</option>
                        </select>

                        {/* Location Dropdown */}
                        <select
                            className="filter-select"
                            value={selectedLocation}
                            onChange={(e) => setSelectedLocation(e.target.value)}
                        >
                            <option value="All">Location</option>
                            <option value="Remote">Remote</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>

                        {/* Filter Toggle Button */}
                        <button className="filter-btn" title="More Filters">
                            <FiSliders />
                        </button>

                    </div>
                </div>

                {/* Job Listings List */}
                <div className="jobs-list">
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map((job) => (
                            <div key={job.id} className="job-card">

                                {/* Left Info: Title & Tags */}
                                <div className="job-info">
                                    <h3 className="job-title">{job.title}</h3>
                                    <div className="job-tags">
                                        <span className="tag">{job.department}</span>
                                        <span className="tag">{job.type}</span>
                                        <span className="tag">{job.location}</span>
                                    </div>
                                </div>

                                {/* Right Info: Posted Date & Apply Button */}
                                <div className="job-action">
                                    <div className="posted-meta">
                                        <span className="posted-time">{job.posted}</span>
                                        <span className="dept-meta">{job.departmentMeta}</span>
                                    </div>
                                    <button className="btn-apply">Apply</button>
                                </div>

                            </div>
                        ))
                    ) : (
                        <div className="no-jobs-found">
                            No matching positions found. Try adjusting your search query.
                        </div>
                    )}
                </div>

                {/* Footer Note */}
                <div className="positions-footer">
                    <p>
                        Don't see a perfect match? <a href="#open-app" className="underline-link">Send us an open application.</a>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default OpenPositions;