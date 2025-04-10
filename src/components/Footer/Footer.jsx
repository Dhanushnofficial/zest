import React from "react";
import "./Footer.css";
import logo from "../../assets/logo_1.jpg";
import { FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="cta">
        <div>
          <h2>Ready to Start Your Project?</h2>
          <p>Contact us today and let's build something amazing together!</p>
        </div>

        <button
          className="cta-button"
          onClick={() => (window.location.href = "tel:7708534804")}
        >
          +91 7708534804 <FaPhone style={{ marginLeft: "8px" }} />
        </button>
      </section>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section fade-in">
            <h2>Zest Pack Technology</h2>
            <img src={logo} alt="Image is not Found" className="footer_logo" />
            <p>
              At Zest Pack Technology is focused on delivering value and results
              to customers. The success of our customers is equal to our
              success.{" "}
            </p>
          </div>

          <div className="footer-section slide-in-left">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section slide-in-right">
            <h3>Contact Us</h3>
            <p>Email: contact@zestpack.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Location: 123 Business Street, Tech City</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Zest Pack Technology. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
