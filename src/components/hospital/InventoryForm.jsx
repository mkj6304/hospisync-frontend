import React from 'react';

const InventoryForm = () => (
  <form className="hospital-form">
    <label>Medicine/Item</label>
    <input type="text" placeholder="e.g. Paracetamol" />

    <label>Quantity</label>
    <input type="number" min="1" />

    <button className="primary-btn">Add/Update</button>
  </form>
);

export default InventoryForm;
