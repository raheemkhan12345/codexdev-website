// src/features/home-testimonials/Testimonials.jsx
import React from 'react';
import Container from '../../components/common/Container/Container';
import { AiFillStar } from 'react-icons/ai'; // Stars ke liye icon
import './FeedbackSection.css';

// Aap yahan apne assets se actual avatars import kar sakte hain
import client1 from '../../assets/images/client1.jpg';
import client2 from '../../assets/images/client2.jpg';
import client3 from '../../assets/images/client3.jpg';

const testimonialData = {
  title: "Client Voices",
  subtitle: "Hear from the founders and executives who have scaled with our support.",
  reviews: [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CTO, FinFlow",
      image: client1,
      quote: "“CodexDev delivered a platform that exceeded our performance requirements by 40%. Their engineers are truly part of our core team.”"
    },
    {
      id: 2,
      name: "Marcus Thorne",
      role: "Founder, GreenGrid",
      image: client2,
      quote: "“Their design-first approach changed how we think about our product. The user retention rates skyrocketed after the relaunch.”"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "VP Product, OmniScale",
      image: client3,
      quote: "“Working with CodexDev was seamless. Their communication and documentation are the best we've seen from any agency.”"
    }
  ]
};

const FeedbackSection = () => {
  return (
    <section className="testimonials-section">
      <Container>
        {/* Header */}
        <div className="testimonials-header">
          <h2 className="testimonials-title">{testimonialData.title}</h2>
          <p className="testimonials-subtitle">{testimonialData.subtitle}</p>
        </div>

        {/* Grid Cards */}
        <div className="testimonials-grid">
          {testimonialData.reviews.map((item) => (
            <div className="testimonial-card" key={item.id}>
              {/* Profile Row */}
              <div className="testimonial-profile">
                <img src={item.image} alt={item.name} className="testimonial-avatar" />
                <div className="testimonial-meta">
                  <h4 className="testimonial-name">{item.name}</h4>
                  <p className="testimonial-role">{item.role}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="testimonial-quote">{item.quote}</p>

              {/* Rating Stars */}
              <div className="testimonial-stars">
                {[...Array(5)].map((_, index) => (
                  <AiFillStar key={index} className="star-icon" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FeedbackSection;