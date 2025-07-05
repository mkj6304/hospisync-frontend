import React, { useState } from 'react';
import '../styles/auth.css';
import Navbar from './Navbar';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [role, setRole] = useState('patient');
  const [username, setName] = useState('');
  //const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [hospitalName, setHospitalName] = useState('');
  //const [licenseId, setLicenseId] = useState('');
  const [hospitalUserName, setHospitalUserName] = useState('');
  const [hospitalAddress, setHospitalAddress] = useState('');
  const [hospitalCity, setHospitalCity] = useState('');
  const [hospitalState, setHospitalState] = useState('');
  const [hospitalContact, setHospitalContact] = useState('');
  const [hospitalBedstotal, setHospitalBedstotal] = useState('');
  const [hospitalAvailBeds, setHospitalAvailBeds] = useState('');
  const [hospital_id, setHospitalId] = useState('');
  const [doctorContact, setdoctorContact] = useState('');
  const [doctoremail, setdoctoremail] = useState('');
  const [gender ,setgender] = useState('');
  const [date_of_birth ,setdate_of_birth] = useState('');
  const [patientEmail ,setpatientEmail] = useState('');
  const [patientAddress ,setpatientAddress] = useState('');
  const [patientAge , setpatientAge] = useState('');
  const [patientContact, setpatientContact] = useState('');



  const navigate = useNavigate();

  const handleRegister = async (e) => {
  e.preventDefault();

  try {
    // Base payload
    const payload = {
      username,
      password,
      role
    };

    if (role === 'hospital') {
      payload.name = hospitalName;
      payload.address = hospitalAddress;
      payload.city = hospitalCity;
      payload.state = hospitalState;
      payload.contact_number = hospitalContact;
      payload.total_beds = hospitalBedstotal;
      payload.available_beds = hospitalAvailBeds;
    }

    if (role === 'doctor') {
  payload.hospital_id = hospital_id;
  payload.name = username; // doctor's full name
  payload.specialization = specialization;
  payload.doctorContact = doctorContact;
  payload.doctoremail = doctoremail;
}

  if(role === 'patient'){
    payload.gender = gender;
    payload.date_of_birth = date_of_birth;
    payload.patientEmail = patientEmail;
    payload.patientAddress = patientAddress;
    payload.patientAge = patientAge;
    payload.patientContact = patientContact;
  }


    await axios.post('auth/register', payload);
    alert('Registration successful!');
    navigate('/');
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.error || 'Registration failed');
  }
};


  return (
    <div>
      <Navbar />
      <div className="form-container">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleRegister}>
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="hospital">Hospital</option>
            <option value="admin">Admin</option>
          </select>

          <label>Name</label>
          <input type="text" placeholder="Full Name" value={username} onChange={(e) => setName(e.target.value)} required />

          <label>Password</label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          {role === 'doctor' && (
  <>
    <label>Specialization</label>
    <input
      type="text"
      placeholder="Cardiologist, Dentist..."
      value={specialization}
      onChange={(e) => setSpecialization(e.target.value)}
      required
    />

    <label>Hospital ID</label>
    <input
      type="number"
      placeholder="Hospital ID"
      value={hospital_id}
      onChange={(e) => setHospitalId(e.target.value)}
      required
    />

    <label>Contact</label>
    <input
      type="text"
      placeholder="Enter Contact Number"
      value={doctorContact}
      onChange={(e) => setdoctorContact(e.target.value)}
      required
    />

    <label>Email</label>
    <input
      type="email"
      placeholder="Enter Email"
      value={doctoremail}
      onChange={(e) => setdoctoremail(e.target.value)}
      required
    />
  </>
)}

          {role === 'hospital' && (
            <>
              <label>Username</label>
              <input type="text" placeholder="Enter username" value={hospitalUserName} onChange={(e) => setHospitalUserName(e.target.value)} />
              <label>LHospital Name</label>
              <input type="text" placeholder="Enter Hospital Name" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} />
              <label>Address</label>
              <input type="text" placeholder="Enter Address" value={hospitalAddress} onChange={(e) => setHospitalAddress(e.target.value)} />
              <label>City</label>
              <input type="text" placeholder="Enter Hospital City" value={hospitalCity} onChange={(e) => setHospitalCity(e.target.value)} />
              <label>State</label>
              <input type="text" placeholder="Enter State" value={hospitalState} onChange={(e) => setHospitalState(e.target.value)} />
              <label>Contact Number</label>
              <input type="text" placeholder="Enter Contact Number" value={hospitalContact} onChange={(e) => setHospitalContact(e.target.value)} />
              <label>Total Number of Beds</label>
              <input type="text" placeholder="Enter Bedstotal" value={hospitalBedstotal} onChange={(e) => setHospitalBedstotal(e.target.value)} />
              <label>Currently Available beds</label>
              <input type="text" placeholder="Enter AvailBeds" value={hospitalAvailBeds} onChange={(e) => setHospitalAvailBeds(e.target.value)} />
            </>
          )}

          {role === 'patient' && (
  <>
    <label>Gender</label>
    <select value={gender} onChange={(e) => setgender(e.target.value)} required>
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Other">Other</option>
    </select>

    <label>Date of Birth</label>
    <input
      type="date"
      value={date_of_birth}
      onChange={(e) => setdate_of_birth(e.target.value)}
      required
    />

    <label>Email</label>
    <input
      type="email"
      placeholder="Enter Email"
      value={patientEmail}
      onChange={(e) => setpatientEmail(e.target.value)}
      required
    />

    <label>Address</label>
    <input
      type="text"
      placeholder="Enter Address"
      value={patientAddress}
      onChange={(e) => setpatientAddress(e.target.value)}
      required
    />

    <label>Age</label>
    <input
      type="number"
      placeholder="Enter Age"
      value={patientAge}
      onChange={(e) => setpatientAge(e.target.value)}
      required
    />

    <label>Contact Number</label>
    <input
      type="text"
      placeholder="Enter Contact Number"
      value={patientContact}
      onChange={(e) => setpatientContact(e.target.value)}
      required
    />
  </>
)}


          <button type="submit" className="primary-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
