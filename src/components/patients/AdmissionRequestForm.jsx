import React, { useState } from 'react';

const AdmissionRequestForm = () => {
  const [urgency, setUrgency] = useState('normal');
  const [preferred, setPreferred] = useState('');

  return (
    <div className="form-container" data-aos="fade-up">
      <h3>Request Admission</h3>
      <label>Urgency</label>
      <select value={urgency} onChange={(e) => setUrgency(e.target.value)}>
        <option value="normal">Normal</option>
        <option value="emergency">Emergency</option>
      </select>

      <label>Preferred Hospital (optional)</label>
      <input type="text" value={preferred} onChange={(e) => setPreferred(e.target.value)} placeholder="e.g. CityCare" />

      <button className="primary-btn" style={{ marginTop: '15px' }}>Submit Request</button>
    </div>
  );
};

export default AdmissionRequestForm;
