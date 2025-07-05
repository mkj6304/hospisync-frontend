// src/components/MlPredictionResult.jsx
import React from 'react';
import '../styles/patient.css'; // Assuming your styles are here

const MlPredictionResult = ({ result }) => {
  if (!result || !result.data) return null;

  const isDenied = result.data.status === 'Denied';

  return (
    <div
      className="result-box"
      style={{
        backgroundColor: isDenied ? '#ffe6e6' : '#f0fdf4',
        borderLeft: isDenied ? '5px solid #f44336' : '5px solid #4caf50',
      }}
    >
      <h3>{result.message}</h3>
      <p>
        <strong>Model Confidence:</strong>{' '}
        {(result.model_confidence * 100).toFixed(2)}%
      </p>

      {isDenied ? (
        <div className="admission-details">
          <p><strong>Status:</strong> ❌ Denied</p>
          <p><strong>Reason:</strong> {result.data.admission_reason || 'Not specified'}</p>
          <p><strong>Suggested Action:</strong> Try another hospital or consult a different doctor.</p>
        </div>
      ) : (
        <div className="admission-details">
          <p><strong>Status:</strong> ✅ {result.data.status}</p>
          <p><strong>Admission ID:</strong> {result.data.admission_id}</p>
          <p><strong>Patient ID:</strong> {result.data.patient_id}</p>
          <p><strong>Doctor ID:</strong> {result.data.doctor_id}</p>
          <p><strong>Hospital ID:</strong> {result.data.hospital_id}</p>
          <p><strong>Admission Date:</strong> {new Date(result.data.admission_date).toLocaleString()}</p>
          <p><strong>Reason:</strong> {result.data.admission_reason}</p>
        </div>
      )}
    </div>
  );
};

export default MlPredictionResult;
