import React from 'react';

const AppointmentCard = ({ doctor, date, time, status }) => {
  return (
    <div className={`appointment-card ${status.toLowerCase()}`}>
      <h3>{doctor}</h3>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <span className="status">{status}</span>
    </div>
  );
};

export default AppointmentCard;
