import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h1 className="contact-heading">Get in Touch</h1>
        <p className="contact-description">Have a question or want to work together? Reach out to us through the form below or connect with us on social media.</p>

        <div className="contact-info">
          <div className="contact-item">
            <h3>Address</h3>
            <p>krishna dist,<br /> diggurala,<br /> </p>
          </div>

          <div className="contact-item">
            <h3>Phone</h3>
            <p>9391149375</p>
          </div>

          <div className="contact-item">
            <h3>Email</h3>
            <p>somarouthubalaji@gmail.com</p>
          </div>
        </div>

        <form className="contact-form">
          <div className="contact-form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>

          <div className="contact-form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          <div className="contact-form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>

          <button className="contact-button" type="submit">Send Message</button>
        </form>

        <div className="social-media">
          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="https://instagram.com" className="social-link instagram">Instagram</a>
            <a href="https://linkedin.com" className="social-link linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
