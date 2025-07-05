import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/LandingPage.css'; // Make sure navbar styles are defined here

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('currentUser'));
  const { role, username } = user?.data || {};

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
  };

  return (
    <nav className="dashboard-navbar">
      <div className="navbar-left">
        <h2>HospiSync</h2>
      </div>
      <div className="navbar-right">
        <span><strong>{role?.toUpperCase()}</strong>: {username}</span>
        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
