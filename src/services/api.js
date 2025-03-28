import axios from 'axios';
import AuthService from './authService';

const BASE_URL = 'http://localhost:8080/api';

const api = axios.create({
  baseURL: BASE_URL
});

// Add a request interceptor to include auth headers
api.interceptors.request.use(
  config => {
    const user = AuthService.getCurrentUser();
    
    if (user && user.token) {
      config.headers['Authorization'] = `Bearer ${user.token}`;
    }
    
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const saveAppointment = async (appointmentData) => {
  try {
    const response = await api.post('/appointments', appointmentData);
    return response.data;
  } catch (error) {
    console.error('Error creating appointment:', error);
    throw error;
  }
};

export const getAllAppointments = async () => {
  try {
    const response = await api.get('/admin/appointments');
    return response.data;
  } catch (error) {
    console.error('Error fetching appointments:', error);
    throw error;
  }
};

export default api;