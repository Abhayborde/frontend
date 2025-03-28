// File: src/services/billingService.js
import axios from 'axios';

const BILLING_API_BASE_URL = 'http://localhost:8080/api/billing';

class BillingService {
  createBill(billData) {
    return axios.post(`${BILLING_API_BASE_URL}/create`, billData);
  }

  getBillsByPatient(patientId) {
    return axios.get(`${BILLING_API_BASE_URL}/patient/${patientId}`);
  }

  downloadBill(billId) {
    return axios.get(`${BILLING_API_BASE_URL}/download/${billId}`, {
      responseType: 'blob'
    });
  }
}

export default new BillingService();