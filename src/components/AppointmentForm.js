// src/components/AppointmentForm.js
import React, { useState } from 'react';
import { saveAppointment } from '../services/api';
import './AppointmentForm.css';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    address: '',
    phoneNumber: '',
    additionalDescription: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const validate = () => {
    const newErrors = {};
    
    // Required fields
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.age.trim()) {
      newErrors.age = 'Age is required';
    } else if (isNaN(formData.age) || parseInt(formData.age) <= 0) {
      newErrors.age = 'Please enter a valid age';
    }
    
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit phone number';
    }
    
    // Optional but validate if provided
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      try {
        await saveAppointment(formData);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          age: '',
          email: '',
          address: '',
          phoneNumber: '',
          additionalDescription: ''
        });
        
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      } catch (error) {
        console.error('Error submitting appointment:', error);
        alert('There was an error submitting your appointment. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  return (
    <div className="appointment-form-container">
      <h2>Book Your Appointment</h2>
      <p>Fill out the form below to schedule your appointment with our medical specialists.</p>
      
      {submitSuccess && (
        <div className="success-message">
          Your appointment has been successfully submitted. We will contact you shortly.
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="age" className="form-label">Age *</label>
          <input
            type="text"
            id="age"
            name="age"
            className="form-control"
            value={formData.age}
            onChange={handleChange}
          />
          {errors.age && <div className="error-message">{errors.age}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="address" className="form-label">Address *</label>
          <textarea
            id="address"
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
            rows="3"
          ></textarea>
          {errors.address && <div className="error-message">{errors.address}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="phoneNumber" className="form-label">Phone Number *</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            className="form-control"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="additionalDescription" className="form-label">Additional Description</label>
          <textarea
            id="additionalDescription"
            name="additionalDescription"
            className="form-control"
            value={formData.additionalDescription}
            onChange={handleChange}
            rows="4"
            placeholder="Please describe your symptoms or reason for the appointment..."
          ></textarea>
        </div>
        
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Book Appointment'}
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;