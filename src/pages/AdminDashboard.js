// File: src/pages/AdminDashboard.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppointmentList from '../components/AppointmentList';
import BillingForm from '../components/BillingForm';
import BillingListPage from './BillingListPage';
import AuthService from '../services/authService';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('appointments');

  const sidebarButtons = [
    // Appointments Section
    {
      category: 'Appointments',
      items: [
        { 
          label: 'View Appointments', 
          icon: '📅', 
          action: () => {
            setActiveSection('appointments')
            navigate('/admin/dashboard');
          }
        },
        { 
          label: 'Create Appointment', 
          icon: '➕', 
          action: () => {
            setActiveSection('create-appointment')
            navigate('/book-now');
          }
        }
      ]
    },
    // Billing Section
    {
      category: 'Billing',
      items: [
        { 
          label: 'Create Bill', 
          icon: '💰', 
          action: () => setActiveSection('create-bill')
        },
        { 
          label: 'View Bills', 
          icon: '📋', 
          action: () => setActiveSection('view-bills')
        },
        { 
          label: 'Patient Bills', 
          icon: '🧾', 
          action: () => setActiveSection('patient-bills')
        },
        { 
          label: 'Generate Report', 
          icon: '📊', 
          action: () => setActiveSection('billing-report')
        }
      ]
    },
    // System Actions
    {
      category: 'System',
      items: [
        { 
          label: 'Logout', 
          icon: '🚪', 
          action: () => {
            AuthService.logout();
            navigate('/admin_user');
          }
        }
      ]
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'appointments':
        return <AppointmentList appointments={[]} showActions={true} />;
      case 'create-bill':
        return <BillingForm />;
      case 'view-bills':
        return <BillingListPage />;
      case 'patient-bills':
        return <div>Patient Bills Content</div>;
      case 'billing-report':
        return <div>Billing Report Content</div>;
      default:
        return <AppointmentList appointments={[]} showActions={true} />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-4 overflow-y-auto">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
        </div>

        {sidebarButtons.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-4">
            <h3 className="text-gray-400 font-semibold mb-2">
              {section.category}
            </h3>
            {section.items.map((button, buttonIndex) => (
              <button
                key={buttonIndex}
                onClick={button.action}
                className={`w-full flex items-center p-3 rounded-lg mb-2 transition-colors duration-200 ${
                  activeSection === button.label.toLowerCase().replace(' ', '-')
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-700 text-gray-300'
                }`}
              >
                <span className="mr-3 text-xl">{button.icon}</span>
                <span>{button.label}</span>
              </button>
            ))}
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-grow bg-gray-100 overflow-y-auto">
        {renderContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;