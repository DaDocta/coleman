import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      <h2>Contact Me</h2>
      <p>Have a question or want to reach out? Fill out the form below:</p>
      <ContactForm />
    </div>
  );
};

export default Contact;
