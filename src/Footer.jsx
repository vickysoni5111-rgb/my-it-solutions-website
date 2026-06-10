import React from "react";
import "./Footer.css";
import logo from "./assets/footer.png";

import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-col company">

          <div className="footer-logo">
            <img src={logo} alt="logo" />
          </div>

          <p className="company-description">
            A premium IT consultancy specializing in exceptional SaaS,
            mobile excellence, and strategic digital transformation.
          </p>

        </div>

        {/* Quick Links */}
        <div className="footer-col">

          <h3>Quick Links</h3>

          <ul>
            <li>Services</li>
            <li>Products</li>
            <li>Portfolio</li>
            <li>About Us</li>
          </ul>

        </div>

        {/* Company */}
        <div className="footer-col">

          <h3>Company</h3>

          <ul>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Contact Us</li>
          </ul>

        </div>

        {/* Newsletter */}
        <div className="footer-col">

          <h3>Newsletter</h3>

          <p className="newsletter-text">
            Stay updated with the latest tech trends.
          </p>

          <div className="newsletter-box">
            <input
              type="email"
              placeholder="Email"
            />

            <button>
              ▶
            </button>
          </div>

          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaYoutube /></a>
            <a href="#"><FaFacebookF /></a>
          </div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="footer-bottom">

        <p>
          © 2026 STWIN SPARX Pvt. Ltd. All rights reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;