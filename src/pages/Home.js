// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="hero">
        <div className="hero-content">
          <h1>Your Health Is Our Priority</h1>
          <p>Providing quality healthcare services with compassion and excellence.</p>
          <Link to="/book-now" className="btn btn-primary">Book Appointment</Link>
        </div>
      </div>

      <div className="container">
        <section className="services-preview section">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-user-md"></i>
              </div>
              <h3>Qualified Doctors</h3>
              <p>Our team consists of highly qualified and experienced medical professionals.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3>Emergency Care</h3>
              <p>24/7 emergency care services for all medical urgencies.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-procedures"></i>
              </div>
              <h3>Operation Theatre</h3>
              <p>Modern operation theatres equipped with the latest technology.</p>
            </div>
            
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-flask"></i>
              </div>
              <h3>Laboratory Services</h3>
              <p>Comprehensive laboratory services for accurate diagnostics.</p>
            </div>
          </div>
          <div className="text-center">
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </section>

        <section className="about-preview section">
          <div className="about-grid">
            <div className="about-image">
              <img src="/assets/images/hospital-building.jpg" alt="Hospital Building" />
            </div>
            <div className="about-content">
              <h2>About Our Hospital</h2>
              <p>
                Founded in 2010, our hospital has been providing exceptional healthcare services to our community for over a decade. We are dedicated to improving the health and wellbeing of our patients through personalized care and advanced medical techniques.
              </p>
              <p>
                Our state-of-the-art facilities and compassionate medical professionals ensure that every patient receives the highest standard of care in a comfortable and supportive environment.
              </p>
              <Link to="/about" className="btn btn-outline">Learn More</Link>
            </div>
          </div>
        </section>

        <section className="appointment-cta section">
          <div className="cta-content">
            <h2>Need to See a Doctor?</h2>
            <p>Schedule an appointment with our specialists today.</p>
            <Link to="/book-now" className="btn btn-primary">Book Appointment</Link>
          </div>
        </section>

        <section className="testimonials section">
          <h2 className="section-title">What Our Patients Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The care I received was exceptional. The doctors were knowledgeable and the staff was very attentive to my needs."</p>
              </div>
              <div className="testimonial-author">
                <p><strong>John Doe</strong></p>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"I was impressed by the modern facilities and the efficiency of all procedures. Highly recommend this hospital."</p>
              </div>
              <div className="testimonial-author">
                <p><strong>Jane Smith</strong></p>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"The doctors explained everything thoroughly and made me feel comfortable throughout my treatment."</p>
              </div>
              <div className="testimonial-author">
                <p><strong>Robert Johnson</strong></p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;