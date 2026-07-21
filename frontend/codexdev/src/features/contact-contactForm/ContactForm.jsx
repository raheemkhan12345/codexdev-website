import React, { useState } from 'react';
import './ContactForm.css';
import { FaCloudUploadAlt, FaChevronDown } from 'react-icons/fa';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        businessEmail: '',
        companyName: '',
        serviceType: 'SaaS Development',
        projectDescription: '',
        file: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleFileDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFormData((prev) => ({ ...prev, file: e.dataTransfer.files[0] }));
        }
    };

    const handleFileSelect = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFormData((prev) => ({ ...prev, file: e.target.files[0] }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form Submitted Data:', formData);
    };

    return (
        <section className="contact-form-section">
            <div className="contact-form-card">

                {/* Header Title */}
                <div className="form-header">
                    <h2 className="form-title">Drop us a line</h2>
                    <p className="form-subtitle">
                        We respond to all inquiries within 24 business hours.
                    </p>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="contact-form">

                    {/* Row 1: Full Name & Business Email */}
                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="John Doe"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Business Email</label>
                            <input
                                type="email"
                                name="businessEmail"
                                placeholder="john@company.com"
                                value={formData.businessEmail}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    {/* Row 2: Company Name & Service Type */}
                    <div className="form-row">
                        <div className="form-group">
                            <label className="form-label">Company Name</label>
                            <input
                                type="text"
                                name="companyName"
                                placeholder="TechCorp Inc."
                                value={formData.companyName}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Service Type</label>
                            <div className="select-wrapper">
                                <select
                                    name="serviceType"
                                    value={formData.serviceType}
                                    onChange={handleChange}
                                >
                                    <option value="SaaS Development">SaaS Development</option>
                                    <option value="Web Development">Web Development</option>
                                    <option value="Mobile App Development">Mobile App Development</option>
                                    <option value="UI/UX Design">UI/UX Design</option>
                                </select>
                                <FaChevronDown className="select-arrow" />
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Project Description */}
                    <div className="form-group full-width">
                        <label className="form-label">Project Description</label>
                        <textarea
                            name="projectDescription"
                            rows="4"
                            placeholder="Tell us about your project requirements..."
                            value={formData.projectDescription}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    {/* Row 4: Drag & Drop File Upload */}
                    <div className="form-group full-width">
                        <label className="form-label">Project Brief (Optional)</label>
                        <div
                            className="file-drop-zone"
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={handleFileDrop}
                        >
                            <input
                                type="file"
                                id="fileInput"
                                className="file-input-hidden"
                                onChange={handleFileSelect}
                                accept=".pdf,.docx,.zip"
                            />
                            <label htmlFor="fileInput" className="file-drop-label">
                                <div className="cloud-icon-wrapper">
                                    <FaCloudUploadAlt />
                                </div>
                                <span className="drop-text">
                                    {formData.file
                                        ? `Selected File: ${formData.file.name}`
                                        : 'Drag and drop your PDF, DOCX or ZIP here'}
                                </span>
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn-submit-message">
                        Send Message
                    </button>

                </form>
            </div>
        </section>
    );
};

export default ContactForm;