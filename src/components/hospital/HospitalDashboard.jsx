import React, { useEffect, useState } from 'react';
import DashboardHeader from '../DashboardHeader';
import '../../styles/hospital.css';
import axios from '../../api/axios';

const HospitalDashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  const username = currentUser?.username || 'Unknown';
  const hospitalId = currentUser?.hospital_id;

  const [hospitalData, setHospitalData] = useState([]);

  useEffect(() => {
    const fetchHospitalData = async () => {
      try {
        const res = await axios.get(`/hospital/${hospitalId}/dashboard`);
        setHospitalData(res.data || []);
      } catch (err) {
        console.error('Error fetching hospital dashboard data:', err);
      }
    };

    if (hospitalId) fetchHospitalData();
  }, [hospitalId]);

  return (
    <div className="hospital-dashboard">
      <DashboardHeader />
      <div className="dashboard-content">
        <h1>Welcome, {username}</h1>

        <section className="dashboard-section">
          <h2>Hospital Info</h2>
          {hospitalData.length > 0 ? (
            <div className="info-box">
              <p><strong>Name:</strong> {hospitalData[0].hospital_name}</p>
              <p><strong>Email:</strong> {hospitalData[0].email}</p>
              <p><strong>Contact:</strong> {hospitalData[0].contact_number}</p>
              <p><strong>Address:</strong> {hospitalData[0].address}</p>
            </div>
          ) : (
            <p>No data available.</p>
          )}
        </section>

        <section className="dashboard-section">
          <h2>Doctors at Your Hospital</h2>
          <ul>
            {hospitalData.map((item, idx) =>
              item.doctor_name ? (
                <li key={idx}>
                  {item.doctor_name} ({item.specialization})
                </li>
              ) : null
            )}
          </ul>
        </section>

        <section className="dashboard-section">
          <h2>Admitted Patients</h2>
          <ul>
            {hospitalData.map((item, idx) =>
              item.patient_name ? (
                <li key={idx}>
                  {item.patient_name} - {item.admission_status}
                </li>
              ) : null
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default HospitalDashboard;
