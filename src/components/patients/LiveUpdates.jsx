import React, { useEffect, useState } from 'react';

const fakeUpdates = [
  'OPD with Dr. Mehta confirmed.',
  'Admission slot assigned at GreenLife.',
  'Your report is ready for download.',
  'Inventory updated: Metformin 500mg dispensed.',
];

const LiveUpdates = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % fakeUpdates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="live-updates" data-aos="fade-left">
      <h3>Live Updates</h3>
      <p>{fakeUpdates[current]}</p>
    </div>
  );
};

export default LiveUpdates;
