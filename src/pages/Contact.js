import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    setSubmitMessage('Thank you for your message. We will get back to you soon!');
    setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We're Here to Help You</p>
      </div>

      <section className="contact-info-section">
        <div className="contact-info-card">
          <div className="contact-icon">
            <i className="fas fa-map-marker-alt"></i>
          </div>
          <h3>Our Location</h3>
          <p>123 Healthcare Avenue</p>
          <p>City, State 12345</p>
        </div>
        <div className="contact-info-card">
          <div className="contact-icon">
            <i className="fas fa-phone-alt"></i>
          </div>
          <h3>Phone Numbers</h3>
          <p>General: (123) 456-7890</p>
          <p>Emergency: (123) 456-7899</p>
        </div>
        <div className="contact-info-card">
          <div className="contact-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <h3>Email Us</h3>
          <p>info@jhms.com</p>
          <p>appointments@jhms.com</p>
        </div>
        <div className="contact-info-card">
          <div className="contact-icon">
            <i className="fas fa-clock"></i>
          </div>
          <h3>Working Hours</h3>
          <p>Monday-Friday: 8:00 AM - 8:00 PM</p>
          <p>Saturday: 8:00 AM - 2:00 PM</p>
          <p>Sunday: Closed (Emergency Only)</p>
        </div>
      </section>

      <section className="contact-form-map-section">
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          {submitMessage && (
            <div className={`message ${submitStatus}`}>{submitMessage}</div>
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
        
        <div className="contact-map">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <img src="/assets/images/map-placeholder.jpg" alt="Hospital Location Map" />
            <p>Interactive map will be displayed here</p>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>How do I schedule an appointment?</h3>
            <p>You can schedule an appointment by calling our appointment line, using our online booking system, or visiting the hospital in person.</p>
          </div>
          <div className="faq-item">
            <h3>What insurance plans do you accept?</h3>
            <p>We accept most major insurance plans. Please contact our billing department for specific information about your insurance coverage.</p>
          </div>
          <div className="faq-item">
            <h3>How do I access my medical records?</h3>
            <p>You can access your medical records by submitting a request form available at our reception or on our website.</p>
          </div>
          <div className="faq-item">
            <h3>What should I bring to my first appointment?</h3>
            <p>Please bring your ID, insurance card, list of current medications, and any relevant medical history or test results.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
