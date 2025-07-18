import React, { useState } from 'react';
import axios from 'axios';
import MlPredictionResult from './MlPredictionResult'; // ⬅ import the component
import '../styles/patient.css';

const RequestAdmission = () => {
  const [formData, setFormData] = useState({
    patient_id: '',
    doctor_id: '',
    hospital_id: '',
    admission_reason: ''
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setResult(null);
    try {
      const res = await axios.post('https://hospisync-backend.onrender.com/predict', formData);
      setResult(res.data);
    } catch (err) {
      console.error(err);
      if (err.response) {
        setError(err.response.data.message || err.response.data.error);
      } else {
        setError('Something went wrong');
      }
    }
  };

  return (
    <div className="form-container">
      <h2>Request Hospital Admission</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <label>Patient ID</label>
        <input type="number" name="patient_id" value={formData.patient_id} onChange={handleChange} required />

        <label>Doctor ID</label>
        <input type="number" name="doctor_id" value={formData.doctor_id} onChange={handleChange} required />

        <label>Hospital ID</label>
        <input type="number" name="hospital_id" value={formData.hospital_id} onChange={handleChange} required />

        <label>Admission Reason</label>
        <textarea name="admission_reason" value={formData.admission_reason} onChange={handleChange} required />

        <button className="primary-btn" type="submit">Submit Request</button>
      </form>

      {/* ✔️ Use the result display component here */}
      {result && <MlPredictionResult result={result} />}

      {error && (
        <div className="error-box">
          <strong>Error:</strong> {error}
        </div>
      )}
    </div>
  );
};

export default RequestAdmission;
