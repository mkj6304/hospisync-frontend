import React from 'react';
import AppointmentCard from './AppointmentCard';
import HospitalCard from './HospitalCard';
import OPDRequestForm from './OPDRequestForm';
import DashboardHeader from '../DashboardHeader';
import '../../styles/patient.css';
import RequestAdmission from '../RequestAdmissions';

const PatientDashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
const username = currentUser?.username || 'Unknown';
const role = currentUser?.user?.role || 'User';


  return (
    <div className="patient-dashboard">
      <DashboardHeader />

      <div className="dashboard-content">
        <h1>Welcome, {username}</h1>

        {/* Patient Info */}
        <section className="dashboard-section">
          <h2>Your Info</h2>
          <div className="info-box">
            <p><strong>Username:</strong> {username}</p>
            <p><strong>Role:</strong> Patient</p>
            {/* You can enhance this with more fields if you store more data */}
          </div>
        </section>

        {/* Appointments */}
        <section className="dashboard-section">
          <h2>Previous OPD Appointments</h2>
          <div className="dashboard-grid">
            <AppointmentCard doctor="Dr. Sharma" date="2025-07-02" time="10:30 AM" status="Confirmed" />
            <AppointmentCard doctor="Dr. Mehta" date="2025-07-05" time="12:00 PM" status="Pending" />
          </div>
        </section>

        {/* OPD Request */}
        <section className="dashboard-section">
          <h2>Request a New OPD Appointment</h2>
          <div className="form-area">
            <RequestAdmission/>
          </div>
        </section>

        {/* Hospitals */}
        <section className="dashboard-section">
          <h2>Available Hospitals</h2>
          <div className="dashboard-grid">
            <HospitalCard name="CityCare Hospital" bedsAvailable={12} emergencySupport />
            <HospitalCard name="GreenLife Medical" bedsAvailable={5} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default PatientDashboard;
