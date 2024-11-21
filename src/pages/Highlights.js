import React from 'react';
import '../styles/Highlights.css';
import Highlight from '../assets/Highlight.mp4';

const highlights = [
  {
    video: Highlight,
    description: "An incredible touchdown showcasing speed and agility.",
  },
  {
    video: Highlight,
    description: "A clutch play under pressure during the championship game.",
  },
  {
    video: Highlight,
    description: "Excellent defensive skills stopping a critical run.",
  },
  // Add more highlights as needed
];

const Highlights = () => {
  return (
    <div className="highlights-page">
      <h1 className="highlights-title">Highlights</h1>
      <div className="highlights-list">
        {highlights.map((highlight, index) => (
          <div key={index} className="highlight-item">
            <video
              className="highlight-video"
              src={highlight.video}
              controls
              preload="metadata"
            />
            <p className="highlight-description">{highlight.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
