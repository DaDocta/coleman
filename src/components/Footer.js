import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">Coleman Strange</div>
        <p className="footer-rights">© 2024 Coleman Strange | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
