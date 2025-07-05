import React from 'react';
import Navbar from './Navbar';
import FeatureCard from './FeatureCard';
import '../styles/LandingPage.css';
import { useState } from 'react';
import LoginModal from './LoginModal';
import { useNavigate } from 'react-router-dom'; // if using react-router

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate(); // if router is used

  return (
    <main className="landing-container">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>HospiSync</h1>
          <p>Smartly manage OPD queues, hospital beds, and medicine inventory — all in real-time.</p>
          <div className="hero-buttons">
  <button className="primary-btn" onClick={() => navigate('/register')}>Register</button>
  <button className="secondary-btn" onClick={() => setShowLogin(true)}>Login</button>
</div>

        </div>
      </section>

      {/* Features Section */}
      <section className="section" id="features">
        <h2>Core Features</h2>
        <div className="features-grid">
          <FeatureCard title="Smart OPD Queue" description="AI-powered queuing with real-time appointment status." />
          <FeatureCard title="Bed Availability" description="Live bed tracking and automated admission decisions." />
          <FeatureCard title="Inventory Management" description="Automated updates on critical medicines and supplies." />
          <FeatureCard title="City-wide Integration" description="Synchronize all hospitals in your healthcare network." />
        </div>
      </section>

      {/* How it Works */}
      <section className="section light" id="how">
        <h2>How It Works</h2>
        <ol className="how-it-works">
          <li><span>1</span> Patient requests OPD or admission</li>
          <li><span>2</span> System checks all hospital data</li>
          <li><span>3</span> Best hospital is allocated intelligently</li>
          <li><span>4</span> Live updates on treatment and resources</li>
        </ol>
      </section>

      {/* Stakeholders */}
      <section className="section" id="roles">
        <h2>Our Stakeholders</h2>
        <div className="roles-grid">
          <div className="role">👨‍⚕️ <strong>Patients</strong><br />Request services anytime</div>
          <div className="role">🏥 <strong>Hospitals</strong><br />Manage and sync your data</div>
          <div className="role">🧠 <strong>System</strong><br />Smart logic and ML for decisions</div>
        </div>
      </section>

      {/* Contact/Footer */}
      <footer className="footer" id="contact">
        <p>&copy; 2025 HospiSync. All Rights Reserved.</p>
      </footer>
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </main>
    
  );
};



export default LandingPage;
