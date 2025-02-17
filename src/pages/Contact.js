import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ type: "", text: "" });

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      setStatusMessage({ type: "error", text: "Invalid email format." });
      setIsSubmitting(false);
      return;
    }

    if (!/^\d{10}$/.test(formData.phone)) {
      setStatusMessage({ type: "error", text: "Phone number must be 10 digits." });
      setIsSubmitting(false);
      return;
    }

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
          phone: formData.phone,
          address: formData.address,
          message: formData.message,
        },
        USER_ID
      )
      .then(
        () => setStatusMessage({ type: "success", text: "Message sent successfully!" }),
        () => setStatusMessage({ type: "error", text: "Failed to send message. Try again." })
      )
      .finally(() => {
        setIsSubmitting(false);
        setFormData({ email: "", name: "", phone: "", address: "", message: "" });
      });
  };

  return (
    <div className="contact-container">
      <div className="about-heading">
      <h1>Contact Us</h1>

      </div>
      <div className="contact-form">
        
        {statusMessage.text && (
          <div className={`status-message ${statusMessage.type}`}>
            {statusMessage.text}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message (max 500 characters)"
              value={formData.message}
              onChange={handleChange}
              maxLength={500}
              required
            />
            <small>{formData.message.length}/500</small>
          </div>
          <button  className="done"type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
