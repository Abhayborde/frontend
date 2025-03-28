import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import './BookNow.css';

const BookNow = () => {
  return (
    <div className="book-now-container">
      <div className="book-now-header">
        <h1>Book an Appointment</h1>
        <p>Schedule a Visit with Our Healthcare Professionals</p>
      </div>

      <section className="book-now-content">
        <div className="book-now-info">
          <h2>Appointment Information</h2>
          <div className="info-card">
            <h3>Before Your Visit</h3>
            <p>Please arrive 15 minutes before your scheduled appointment time to complete any necessary paperwork.</p>
          </div>
          <div className="info-card">
            <h3>What to Bring</h3>
            <ul>
              <li>Valid ID</li>
              <li>Insurance card (if applicable)</li>
              <li>List of current medications</li>
              <li>Medical history documents</li>
              <li>Previous test results (if available)</li>
            </ul>
          </div>
          <div className="info-card">
            <h3>Cancellation Policy</h3>
            <p>If you need to cancel or reschedule your appointment, please notify us at least 24 hours in advance.</p>
          </div>
          <div className="info-card">
            <h3>Emergency Cases</h3>
            <p>For emergency situations, please call our emergency line at (123) 456-7899 or visit our Emergency Department immediately.</p>
          </div>
        </div>

        <div className="appointment-form-wrapper">
          <AppointmentForm />
        </div>
      </section>
    </div>
  );
};

export default BookNow;