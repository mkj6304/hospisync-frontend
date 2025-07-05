import React, { useEffect, useState } from 'react';
import DashboardHeader from '../DashboardHeader';
import '../../styles/doctor.css';
import axios from '../../api/axios';

const DoctorDashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const username = currentUser?.username || 'Unknown';
  const doctorId = currentUser?.doctor_id;

  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const res = await axios.get(`/doctor/${doctorId}/dashboard`);
        setDoctorData(res.data || []);
      } catch (err) {
        console.error('Error fetching doctor dashboard data:', err);
      }
    };

    if (doctorId) fetchDoctorData();
  }, [doctorId]);

  return (
    <div className="doctor-dashboard">
      <DashboardHeader />
      <div className="dashboard-content">
        <h1>Welcome, {username}</h1>

        <section className="dashboard-section">
          <h2>Doctor Info</h2>
          {doctorData.length > 0 ? (
            <div className="info-box">
              <p><strong>Name:</strong> {doctorData[0].doctor_name}</p>
              <p><strong>Email:</strong> {doctorData[0].email}</p>
              <p><strong>Specialization:</strong> {doctorData[0].specialization}</p>
              <p><strong>Hospital:</strong> {doctorData[0].hospital_name}</p>
            </div>
          ) : (
            <p>No data available.</p>
          )}
        </section>

        <section className="dashboard-section">
          <h2>Upcoming OPD Appointments</h2>
          <ul>
            {doctorData.map((item, idx) =>
              item.appointment_id ? (
                <li key={idx}>
                  {item.patient_name} - {item.appointment_date} at {item.appointment_time}
                </li>
              ) : null
            )}
          </ul>
        </section>

        <section className="dashboard-section">
          <h2>Admitted Patients</h2>
          <ul>
            {doctorData.map((item, idx) =>
              item.admission_id ? (
                <li key={idx}>
                  {item.patient_name} - {item.admission_status} (Admitted on {item.admission_date})
                </li>
              ) : null
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default DoctorDashboard;
