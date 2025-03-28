import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import AuthService from '../services/authService';

const AdminLogin = () => {
  const navigate = useNavigate(); // Initialize navigation hook
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    
    // Add explicit console logs for debugging
    console.log('Username:', username);
    console.log('Password:', password);

    // Trim inputs to remove any accidental whitespace
    const trimmedUsername = username.trim();
    const trimmedPassword = password.trim();

    // Validate inputs before sending
    if (!trimmedUsername || !trimmedPassword) {
      setError('Username and password are required');
      return;
    }

    try {
      // Ensure credentials are passed as an object
      const response = await AuthService.login({
        username: trimmedUsername,
        password: trimmedPassword
      });

      // Handle successful login
      console.log('Login successful', response);
      
      // Store token in localStorage
      localStorage.setItem('token', response.token);
      
      // Navigate to admin dashboard
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      setError(error.message || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;