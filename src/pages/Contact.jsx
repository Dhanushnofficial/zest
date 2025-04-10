import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi"; // Importing Icons
import "./style/Contact.css"; 
import contactImg from '../assets/contact-us.png'


const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-form-container">
        <h2>Let’s Get In Touch!</h2>
        <p>Fill in the form below and we’ll get back to you soon.</p>

        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">GET IN TOUCH</button>
        </form>

        <div className="contact-info">
          <h3>Contact Info</h3>

          <div className="contact-item">
            <FiMail className="icon" />
            <div>
              <h4>EMAIL</h4>
              <p>contact@zestpack.com</p>
            </div>
          </div>

          <div className="contact-item">
            <FiPhone className="icon" />
            <div>
              <h4>CONTACT NUMBER</h4>
              <p>+91 98765 43210</p>
            </div>
          </div>

          <div className="contact-item">
            <FiMapPin className="icon" />
            <div>
              <h4>LOCATION</h4>
              <p>123, Tech Street, Bengaluru, India</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-image">
        <img src={contactImg} className="contact_image_img" alt="Contact Support" />
      </div>

     
    </div>
  );
};

export default Contact;
