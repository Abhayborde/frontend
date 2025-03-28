// File: src/pages/BillingListPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BillingListPage = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('/api/billing/list');
        setBills(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch bills');
        setLoading(false);
      }
    };

    fetchBills();
  }, []);

  if (loading) return <div>Loading bills...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Billing Records</h1>
      
      {bills.length === 0 ? (
        <div>No bills found</div>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Bill ID</th>
              <th className="border p-2">Patient Name</th>
              <th className="border p-2">Total Amount</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill) => (
              <tr key={bill.id} className="hover:bg-gray-100">
                <td className="border p-2">{bill.id}</td>
                <td className="border p-2">{bill.patientName}</td>
                <td className="border p-2">${bill.totalAmount?.toFixed(2) || 'N/A'}</td>
                <td className="border p-2">
                  {bill.createdAt ? new Date(bill.createdAt).toLocaleDateString() : 'N/A'}
                </td>
                <td className="border p-2">
                  <div className="flex space-x-2">
                    <button 
                      className="bg-blue-500 text-white px-2 py-1 rounded"
                      onClick={() => {/* View bill details */}}
                    >
                      View
                    </button>
                    <button 
                      className="bg-green-500 text-white px-2 py-1 rounded"
                      onClick={() => {/* Download bill */}}
                    >
                      Download
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BillingListPage;