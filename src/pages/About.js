// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about our mission, vision, and the dedicated team behind our hospital.</p>
        </div>
      </div>
      
      <div className="container">
        <section className="about-section section">
          <div className="about-content">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, our hospital started as a small clinic with a mission to provide quality healthcare services to our community. Over the years, we have grown into a full-service hospital with state-of-the-art facilities and a team of highly qualified medical professionals.
            </p>
            <p>
              Throughout our journey, we have remained committed to our core values of compassion, excellence, and patient-centered care. Our dedication to these values has earned us the trust and respect of our patients and the community we serve.
            </p>
          </div>
          <div className="about-image">
            <img src="/assets/images/hospital-history.jpg" alt="Hospital History" />
          </div>
        </section>
        
        <section className="mission-vision section">
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              To provide exceptional healthcare services that improve the health and well-being of our patients and community, delivered with compassion, integrity, and excellence.
            </p>
          </div>
          
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To be the preferred healthcare provider in our region, known for our clinical excellence, compassionate care, and commitment to improving the health of our community.
            </p>
          </div>
        </section>
        
        <section className="values section">
          <h2 className="section-title">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Compassion</h3>
              <p>We treat each patient with kindness, empathy, and respect, recognizing their individual needs and concerns.</p>
            </div>
            
            <div className="value-card">
              <h3>Excellence</h3>
              <p>We strive for excellence in all aspects of our care, continuously improving our services to meet the highest standards.</p>
            </div>
            
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We act with honesty, transparency, and ethical behavior in all our interactions with patients, colleagues, and the community.</p>
            </div>
            
            <div className="value-card">
              <h3>Teamwork</h3>
              <p>We collaborate effectively across disciplines to provide coordinated, comprehensive care for our patients.</p>
            </div>
          </div>
        </section>
        
        <section className="team section">
          <h2 className="section-title">Our Medical Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="/assets/images/doctor1.jpg" alt="Dr. John Smith" />
              </div>
              <h3>Dr. John Smith</h3>
              <p className="member-role">Chief Medical Officer</p>
              <p>Over 20 years of experience in internal medicine and healthcare management.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="/assets/images/doctor2.jpg" alt="Dr. Sarah Johnson" />
              </div>
              <h3>Dr. Sarah Johnson</h3>
              <p className="member-role">Head of Cardiology</p>
              <p>Specialist in cardiovascular diseases with extensive research experience.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="/assets/images/doctor3.jpg" alt="Dr. Michael Brown" />
              </div>
              <h3>Dr. Michael Brown</h3>
              <p className="member-role">Head of Pediatrics</p>
              <p>Dedicated to providing compassionate care for children of all ages.</p>
            </div>
            
            <div className="team-member">
              <div className="member-image">
                <img src="/assets/images/doctor4.jpg" alt="Dr. Emily Davis" />
              </div>
              <h3>Dr. Emily Davis</h3>
              <p className="member-role">Head of Surgery</p>
              <p>Experienced surgeon specializing in minimally invasive techniques.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;