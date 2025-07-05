import React, { useEffect } from 'react';
import UserManagement from './UserManagement';
import HospitalApproval from './HospitalApproval';
import LiveUpdates from './LiveUpdates';
import '../../styles/admin.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AdminDashboard = () => {
  useEffect(() => AOS.init({ duration: 1000 }), []);

  return (
    <div className="admin-dashboard">
      <h1>System Admin Panel</h1>

      <section data-aos="fade-up">
        <UserManagement />
      </section>

      <section data-aos="fade-up">
        <HospitalApproval />
      </section>

      <section data-aos="fade-left">
        <LiveUpdates />
      </section>
    </div>
  );
};

export default AdminDashboard;
