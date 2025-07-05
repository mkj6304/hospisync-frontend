import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import RegisterPage from './components/RegisterPage';
import PatientDashboard from './components/patients/PatientDashboard';
import DoctorDashboard from './components/doctor/DoctorDashboard';
import HospitalDashboard from './components/hospital/HospitalDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard/patient" element={<PatientDashboard />} />
        <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
        <Route path="/dashboard/hospital" element={<HospitalDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
