import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/auth.css';
import axios from '../api/axios';

const LoginModal = ({ isOpen, onClose }) => {
  const [role, setRole] = useState('patient');
  const [username, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', {
        username,
        password,
        role,
      });

     // Save user data to localStorage
   localStorage.setItem('currentUser', JSON.stringify({
  user: res.data.user,
  token: res.data.token  // if using in future
}));


      if (role === 'patient') navigate('/dashboard/patient');
      else if (role === 'doctor') navigate('/dashboard/doctor');
      else if (role === 'hospital') navigate('/dashboard/hospital');
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Login failed');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <span className="modal-close" onClick={onClose}>×</span>
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <label>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="patient">Patient</option>
            <option value="doctor">Doctor</option>
            <option value="hospital">Hospital</option>
          </select>

          <label>Email</label>
          <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setName(e.target.value)} required />

          <label>Password</label>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />

          <button className="primary-btn" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
