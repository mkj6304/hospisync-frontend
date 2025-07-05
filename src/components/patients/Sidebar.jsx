import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>HospiSync</h2>
      <ul className="sidebar-menu">
        <li>Dashboard</li>
        <li>Request OPD</li>
        <li>Request Admission</li>
        <li>Medicines</li>
        <li>History</li>
        <li>Logout</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
