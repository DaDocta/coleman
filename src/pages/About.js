import React from 'react';
import '../styles/About.css';
import Picture from '../assets/Picture.jpg';
import { FaFootballBall, FaMedal, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <img 
          src={Picture}
          alt="Coleman Strange" 
          className="about-image" 
        />
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p>
            Hi, I'm Coleman Strange, a dedicated football player known for determination, teamwork, and a passion for the game. 
            With years of experience on the field at Highlands High School, I strive to inspire those around me and excel in every opportunity I encounter.
          </p>
          <div className="about-icons">
            <div className="icon-item">
              <FaFootballBall className="icon" />
              <span>Player</span>
            </div>
            <div className="icon-item">
              <FaMedal className="icon" />
              <span>Achiever</span>
            </div>
            <div className="icon-item">
              <FaUsers className="icon" />
              <span>Team Player</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
