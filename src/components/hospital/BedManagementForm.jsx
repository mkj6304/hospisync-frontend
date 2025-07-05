import React from 'react';

const BedManagementForm = () => (
  <form className="hospital-form">
    <label>Ward Type</label>
    <select>
      <option>General</option>
      <option>ICU</option>
      <option>Private</option>
    </select>

    <label>Available Beds</label>
    <input type="number" min="0" />

    <button className="primary-btn">Update</button>
  </form>
);

export default BedManagementForm;
