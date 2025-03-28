// File: src/components/BillingForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './BillingForm.css';
import hospitalLogo from '../assets/images/hospital-logo.png'
const BillingForm = () => {
  const [patientName, setPatientName] = useState('');
  const [medicines, setMedicines] = useState([{ name: '', price: '' }]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addMedicineRow = () => {
    setMedicines([...medicines, { name: '', price: '' }]);
  };

  const updateMedicine = (index, field, value) => {
    const updatedMedicines = [...medicines];
    updatedMedicines[index][field] = value;
    setMedicines(updatedMedicines);

    // Recalculate total price
    const total = updatedMedicines.reduce((sum, med) => 
      sum + (parseFloat(med.price) || 0), 0);
    setTotalPrice(total);
  };

  const removeMedicineRow = (index) => {
    const updatedMedicines = medicines.filter((_, i) => i !== index);
    setMedicines(updatedMedicines);

    // Recalculate total price
    const total = updatedMedicines.reduce((sum, med) => 
      sum + (parseFloat(med.price) || 0), 0);
    setTotalPrice(total);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const billData = {
        patientName,
        medicines,
        totalPrice
      };

      const response = await axios.post('/api/billing/create', billData);
      alert('Bill created successfully!');
      
      // Option to print or download the bill
      window.print();
    } catch (error) {
      console.error('Error creating bill:', error);
      alert('Failed to create bill');
    }
  };

  const printBill = () => {
    window.print();
  };

  return (
    <div className="billing-container">
      <div className="bill-header">
        <img src={hospitalLogo} alt="Hospital Logo" className="hospital-logo" />
        <h1>Hospital Bill</h1>
        <p>Dr. John Doe Medical Center</p>
        <p>123 Healthcare Street, Medical City</p>
      </div>

      <form onSubmit={handleSubmit} className="billing-form">
        <div className="patient-info">
          <label>
            Patient Name:
            <input 
              type="text" 
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              required 
            />
          </label>
        </div>

        <div className="medicines-section">
          <h2>Medicines</h2>
          {medicines.map((medicine, index) => (
            <div key={index} className="medicine-row">
              <input 
                type="text"
                placeholder="Medicine Name"
                value={medicine.name}
                onChange={(e) => updateMedicine(index, 'name', e.target.value)}
              />
              <input 
                type="number"
                placeholder="Price"
                value={medicine.price}
                onChange={(e) => updateMedicine(index, 'price', e.target.value)}
              />
              <button 
                type="button" 
                onClick={() => removeMedicineRow(index)}
                className="remove-medicine-btn"
              >
                Remove
              </button>
            </div>
          ))}
          <button 
            type="button" 
            onClick={addMedicineRow}
            className="add-medicine-btn"
          >
            Add Medicine
          </button>
        </div>

        <div className="total-section">
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
        </div>

        <div className="bill-actions">
          <button type="submit" className="create-bill-btn">Create Bill</button>
          <button 
            type="button" 
            onClick={printBill}
            className="print-bill-btn"
          >
            Print Bill
          </button>
        </div>
      </form>
    </div>
  );
};

export default BillingForm;
