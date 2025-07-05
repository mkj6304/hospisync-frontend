import React from 'react';
import '../styles/LandingPage.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo"> HospiSync</div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how">How It Works</a></li>
        <li><a href="#roles">Stakeholders</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
