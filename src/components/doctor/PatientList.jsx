import React from 'react';

const patients = [
  { name: 'Mayank Sharma', issue: 'Fever' },
  { name: 'Priya Mehta', issue: 'Back pain' },
];

const PatientList = () => (
  <div className="patient-list">
    <h3>Upcoming Appointments</h3>
    <ul>
      {patients.map((p, i) => (
        <li key={i}>
          <strong>{p.name}</strong> – {p.issue}
        </li>
      ))}
    </ul>
  </div>
);

export default PatientList;
