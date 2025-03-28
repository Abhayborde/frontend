import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import BookNow from './pages/BookNow';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import BillingForm from './components/BillingForm';
import BillingListPage from './pages/BillingListPage';
import AuthService from './services/authService';
import './App.css';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = AuthService.isAuthenticated();
  
  return isAuthenticated ? children : <Navigate to="/admin_user" replace />;
};

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="content">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/book-now" element={<BookNow />} />
            
            
            {/* Authentication Routes */}
            <Route path="/admin_user" element={<AdminLogin />} />
            
            {/* Protected Admin Routes */}
            <Route 
              path="/admin/dashboard" 
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            
            {/* Billing-related Protected Routes */}
            <Route 
              path="/admin/billing/create" 
              element={
                <ProtectedRoute>
                  <AdminDashboard activeSection="create-bill" />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/billing/list" 
              element={
                <ProtectedRoute>
                  <AdminDashboard activeSection="view-bills" />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/billing/patient" 
              element={
                <ProtectedRoute>
                  <AdminDashboard activeSection="patient-bills" />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/billing/report" 
              element={
                <ProtectedRoute>
                  <AdminDashboard activeSection="billing-report" />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;