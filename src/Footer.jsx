
import React, { useState } from "react";
import "./Footer.css";
import logo from "./assets/footer.png";

import  {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {

  const [activeIcon, setActiveIcon] = useState("support");

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-col company">

          <div className="footer-logo">
            <img src={logo} alt="STWIN SPARX Logo" />
          </div>

          <p className="company-description">
            A premium IT consultancy specializing in enterprise SaaS,
            mobile excellence, and strategic digital transformation.
          </p>
 <p className="company-description">
    Email: info@stwinsparx.com
  </p>

  <p className="company-description">
    Phone: +91 7738384009
  </p>
        </div>

        {/* Quick Links */}
        <div className="footer-col">

          <h3>Quick Links</h3>

          <ul>
            <li><a>Services</a></li>
            <li><a>Products</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About Us</a></li>
          </ul>

        </div>

        {/* Company */}
        <div className="footer-col">

          <h3>Company</h3>

          <ul>
            <li><a>Careers</a></li>
            <li><a>Privacy Policy</a></li>
            <li><a>Terms of Service</a></li>
            <li><a>Contact Us</a></li>
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

  <a
    href="https://instagram.com/stwin_sparx"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaInstagram />
  </a>

  <a
    href="https://linkedin.com/company/stwinsparx"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedinIn />
  </a>

  <a
    href="https://youtube.com/@stwinsparx"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaYoutube />
  </a>

  <a
    href="https://facebook.com/stwinsparx"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://x.com/stwinsparx"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaXTwitter />
  </a>

</div>

        </div>

      </div>

      {/* Bottom Bar */}

      <div className="footer-bottom">

        <p>
          © 2024 STWIN SPARX Pvt. Ltd. All rights reserved.
        </p>

        <div className="footer-bottom-icons">

          <span
            className={`material-symbols-outlined ${
              activeIcon === "support"
                ? "active-footer-icon"
                : ""
            }`}
            onClick={() => setActiveIcon("support")}
          >
            support_agent
          </span>

          <span
            className={`material-symbols-outlined ${
              activeIcon === "share"
                ? "active-footer-icon"
                : ""
            }`}
            onClick={() => setActiveIcon("share")}
          >
            share
          </span>

          <span
            className={`material-symbols-outlined ${
              activeIcon === "hub"
                ? "active-footer-icon"
                : ""
            }`}
            onClick={() => setActiveIcon("hub")}
          >
            hub
          </span>

        </div>

      </div>

    </footer>
  );
};

export default Footer;
