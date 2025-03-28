// File: src/pages/BillingPage.js
import React from 'react';
import BillingForm from '../components/BillingForm';
import Navbar from '../components/Navbar';

const BillingPage = () => {
  return (
    <div>
      <Navbar />
      <div className="billing-page-container">
        <h1>Create Patient Bill</h1>
        <BillingForm />
      </div>
    </div>
  );
};

export default BillingPage;
