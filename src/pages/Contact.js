import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="container">
     
      <div className="form-section">
        <h2>Contact Us</h2>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" placeholder="Enter a valid email address" type="email" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" placeholder="Enter your Name" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input id="address" placeholder="Enter your address" type="text" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Enter your message"></textarea>
        </div>
       
        <button className="submit-btn">SUBMIT</button>
       
      </div>
    </div>
  );
};

export default Contact;
