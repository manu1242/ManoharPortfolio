import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
 
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    message: "",
  });

  
  const [isSubmitting, setIsSubmitting] = useState(false);

  
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

 
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_5kh4s9h"; 
    const TEMPLATE_ID = "template_kclp4g4"; 
    const USER_ID = "E-eZxBmVLMFLjwdvA"; 

    
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          email: formData.email, 
          name: formData.name,
          address: formData.address,
          message: formData.message,
        },
        USER_ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message sent successfully!"); 
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send the message. Please try again."); 
        }
      )
      .finally(() => {
        setIsSubmitting(false); 
        setFormData({ email: "", name: "", address: "", message: "" }); 
      });
  };

  return (
    <div className="container">
      <div className="form-section">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              placeholder="Enter a valid email address"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              placeholder="Enter your Name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              placeholder="Enter your address"
              type="text"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button className="submit-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
