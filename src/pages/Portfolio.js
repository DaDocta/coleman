import React from 'react';
import About from './About';
import Stats from './Stats';
import Contact from './Contact';
import '../styles/Portfolio.css';

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <About />
      <Stats />
      <Contact />
    </div>
  );
};

export default Portfolio;
