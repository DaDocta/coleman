import React from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  return (
    <form className="contact-form">
      <label htmlFor="name" className="form-label">
        Name
        <input
          type="text"
          id="name"
          name="name"
          className="form-control"
          placeholder="Enter your name"
          required
        />
      </label>
      <label htmlFor="email" className="form-label">
        Email
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          placeholder="Enter your email"
          required
        />
      </label>
      <label htmlFor="message" className="form-label">
        Message
        <textarea
          id="message"
          name="message"
          className="form-control"
          placeholder="Enter your message"
          rows="5"
          required
        ></textarea>
      </label>
      <button type="submit" className="submit-button">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
