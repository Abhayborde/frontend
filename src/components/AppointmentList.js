// src/components/AppointmentList.js
import React, { useState, useEffect } from 'react';
import { getAllAppointments } from '../services/api';
import './AppointmentList.css';

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetchAppointments();
  }, []);
  
  const fetchAppointments = async () => {
    try {
      setIsLoading(true);
      const data = await getAllAppointments();
      setAppointments(data);
      setError(null);
    } catch (err) {
      console.error('Error fetching appointments:', err);
      setError('Failed to load appointments. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };
  
  if (isLoading) {
    return <div className="loading">Loading appointments...</div>;
  }
  
  if (error) {
    return <div className="error">{error}</div>;
  }
  
  return (
    <div className="appointment-list">
      <h2>All Appointments</h2>
      
      {appointments.length === 0 ? (
        <div className="no-appointments">No appointments found.</div>
      ) : (
        <div className="table-responsive">
          <table className="appointment-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appointment) => (
                <tr key={appointment.id}>
                  <td>{appointment.name}</td>
                  <td>{appointment.age}</td>
                  <td>{appointment.email || '-'}</td>
                  <td>{appointment.phoneNumber}</td>
                  <td>{appointment.address}</td>
                  <td>{appointment.additionalDescription || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      
      <button className="btn btn-primary refresh-btn" onClick={fetchAppointments}>
        Refresh List
      </button>
    </div>
  );
};

export default AppointmentList;