import React from 'react';

const HospitalCard = ({ name, bedsAvailable, emergencySupport }) => {
  return (
    <div className="hospital-card">
      <h3>{name}</h3>
      <p>Beds Available: {bedsAvailable}</p>
      {emergencySupport && <span className="emergency">Emergency Supported</span>}
    </div>
  );
};

export default HospitalCard;
