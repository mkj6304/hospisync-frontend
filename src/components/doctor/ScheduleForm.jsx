import React from 'react';

const ScheduleForm = () => (
  <form className="doctor-form">
    <label>Available Day</label>
    <input type="date" />

    <label>Time Slot</label>
    <input type="time" />

    <button className="primary-btn">Add Slot</button>
  </form>
);

export default ScheduleForm;
