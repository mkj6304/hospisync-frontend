import React, { useState } from 'react';

const OPDRequestForm = () => {
  const [specialty, setSpecialty] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const hospitals = [
    { name: 'CityCare Hospital', specialties: ['Cardiology', 'Dermatology'] },
    { name: 'GreenLife Hospital', specialties: ['Orthopedics', 'ENT'] },
  ];

  const handleChange = (e) => {
    setSpecialty(e.target.value);
    const filtered = hospitals.filter(h =>
      h.specialties.some(s => s.toLowerCase().includes(e.target.value.toLowerCase()))
    );
    setSuggestions(filtered);
  };

  return (
    <div className="form-container" data-aos="fade-up">
      <h3>Request OPD</h3>
      <label>Specialty</label>
      <input type="text" value={specialty} onChange={handleChange} placeholder="e.g. Dermatology" />

      <div className="hospital-suggestions">
        {suggestions.map((h, idx) => (
          <div key={idx} className="suggestion-box">
            <strong>{h.name}</strong> – {h.specialties.join(', ')}
          </div>
        ))}
      </div>

      <button className="primary-btn" style={{ marginTop: '15px' }}>Submit Request</button>
    </div>
  );
};

export default OPDRequestForm;
