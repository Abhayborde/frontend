// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Hospital Management System</h3>
          <p>Providing quality healthcare services since 2010.</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact Us</a></li>
            <li><a href="/book-now">Book Appointment</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p><i className="fa fa-map-marker"></i> 123 Hospital Street, City</p>
          <p><i className="fa fa-phone"></i> +1 234 567 8900</p>
          <p><i className="fa fa-envelope"></i> info@hospital.com</p>
        </div>
        
        <div className="footer-section">
          <h3>Working Hours</h3>
          <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
          <p>Saturday: 9:00 AM - 5:00 PM</p>
          <p>Sunday: 9:00 AM - 1:00 PM</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hospital Management System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;