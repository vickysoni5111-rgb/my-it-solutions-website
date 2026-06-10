import React from "react";
import "./Services1.css";
import Footer from "./Footer";
import travel from "./assets/travel.jpeg";
import webdev from "./assets/webdev.jpeg";
import apppic from "./assets/apppic.jpeg";
import api from "./assets/api.jpeg";
import payment from "./assets/payment.jpeg";

const Services1 = () => {
  return (
    <>
    <section className="services-page">

      {/* HERO SECTION */}
      <div className="services-hero">

        <div className="hero-text">
          <h1>Transform Your Business with Expert IT Solutions</h1>
          <p>
            From stunning websites to powerful enterprise software, we deliver
            technology solutions that drive growth, boost efficiency, and help
            your business stay ahead in the digital age.
          </p>

          <div className="stats">
            <div>
              <h2>50+</h2>
              <p>Happy Clients</p>
            </div>

            <div>
              <h2>100+</h2>
              <p>Projects Done</p>
            </div>

            <div>
              <h2>6+</h2>
              <p>Years Experience</p>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img src={travel} alt="Hero" />
        </div>

      </div>

      {/* SERVICES CARDS */}
      <div className="services-section">

        <h2>Our Core Services</h2>

        <div className="services-grid">

          <div className="service-card">
            <img src={webdev} alt="Web Development" />
            <h3>Web Development</h3>
            <p>Modern responsive websites with high performance and SEO optimization.</p>
          </div>

          <div className="service-card">
            <img src={apppic} alt="App Development" />
            <h3>App Development</h3>
            <p>Android & iOS apps with smooth UI and scalable architecture.</p>
          </div>

          <div className="service-card">
            <img src={api} alt="API Development" />
            <h3>API Development</h3>
            <p>Secure and fast REST APIs for seamless system integration.</p>
          </div>

          <div className="service-card">
            <img src={payment} alt="Payment Integration" />
            <h3>Payment Integration</h3>
            <p>Secure payment gateways like Razorpay, Stripe and UPI integration.</p>
          </div>

        </div>
      </div>

      {/* PROCESS SECTION */}
      <div className="process-section">

        <h2>How We Turn Ideas Into Reality</h2>
        <p>Simple, transparent, and result-oriented approach to every project</p>

        <div className="process-grid">

          <div className="process-card">
            <h3>1. Discovery & Planning</h3>
            <p>
              We understand your business goals, audience, and requirements to build strong foundation.
            </p>
          </div>

          <div className="process-card">
            <h3>2. Design & Proposal</h3>
            <p>
              Wireframes, mockups, timeline and transparent pricing with no hidden cost.
            </p>
          </div>

          <div className="process-card">
            <h3>3. Development & Testing</h3>
            <p>
              Agile development with continuous testing and regular updates.
            </p>
          </div>

          <div className="process-card">
            <h3>4. Launch & Support</h3>
            <p>
              Deployment, training, documentation and ongoing support after launch.
            </p>
          </div>

        </div>
      </div>

    </section>
    <Footer/>
    </>
  );
};

export default Services1;