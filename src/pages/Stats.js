import React from 'react';
import '../styles/Stats.css';

const Stats = () => {
  const stats = [
    { label: "Games Played", value: 45 },
    { label: "Touchdowns", value: 30 },
    { label: "Yards", value: 5200 },
    { label: "MVP Awards", value: 5 },
  ];

  return (
    <div className="stats-section">
      <h2>My Stats</h2>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
