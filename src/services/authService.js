import axios from 'axios';

const API_URL = 'http://localhost:8080/api/admin';

class AuthService {
  static isAuthenticated() {
    const token = localStorage.getItem('user_token');
    return !!token;
  }

  static getCurrentUser() {
    const token = localStorage.getItem('user_token');
    
    if (token) {
      return {
        token: token
      };
    }
    
    return null;
  }

  static login(credentials) {
    // Add more robust input validation
    if (!credentials || typeof credentials !== 'object') {
      throw new Error('Invalid credentials format');
    }

    const { username, password } = credentials;

    // Detailed input validation
    if (!username || typeof username !== 'string' || username.trim() === '') {
      throw new Error('Username is required');
    }

    if (!password || typeof password !== 'string' || password.trim() === '') {
      throw new Error('Password is required');
    }

    return axios.post(`${API_URL}/login`, {
      username: username.trim(),
      password: password.trim()
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      withCredentials: true
    })
    .then(response => {
      console.log('Login response:', response.data);
      if (response.data.token) {
        localStorage.setItem('user_token', response.data.token);
      }
      return response.data;
    })
    .catch(error => {
      console.error('Detailed Login Error:', {
        status: error.response?.status,
        data: error.response?.data,
        message: error.message,
        details: error
      });

      
      // Throw a more informative error
      if (error.response) {
        throw new Error(error.response.data.error || 'Login failed');
      }
      throw error;
    });
  }


  static logout() {
    localStorage.removeItem('user_token');
  }
}

export default AuthService;