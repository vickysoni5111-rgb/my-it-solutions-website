import React from "react";
import "./HeroCard.css";

import paymentImg from "./assets/Payment Gateway Image 3 image.png";

import { FaCheckCircle } from "react-icons/fa";

const HeroCard = () => {
  return (
    <section className="payment-section">

      <div className="payment-container">

        {/* Left Image */}
        <div className="payment-image">
          <img src={paymentImg} alt="Payment Gateway" />
        </div>

        {/* Right Content */}
        <div className="payment-content">

          <span className="payment-tag">
            Secure & Seamless
          </span>

          <h2>
            Payment Gateway Integration <br />
            Services
          </h2>

          <p className="payment-description">
            We specialize in integrating secure, high-conversion payment
            ecosystems for websites and mobile applications. Scale
            globally with localized checkout experiences.
          </p>

          <div className="payment-features">

            <div className="feature-item">
              <FaCheckCircle />
              <span>
                Easy Multi-Gateway Integration (Stripe, PayPal, Razorpay)
              </span>
            </div>

            <div className="feature-item">
              <FaCheckCircle />
              <span>
                PCI-DSS Compliant Security Protocols
              </span>
            </div>

            <div className="feature-item">
              <FaCheckCircle />
              <span>
                Optimized One-Click Checkout Flows
              </span>
            </div>

            <div className="feature-item">
              <FaCheckCircle />
              <span>
                Real-time Analytics & Fraud Detection
              </span>
            </div>

          </div>

          <button className="integrate-btn">
            Integrate Now →
          </button>

        </div>

      </div>

    </section>
  );
};

export default HeroCard;