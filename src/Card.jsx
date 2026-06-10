import React from "react";
import "./Card.css";
import rocketImg from "./assets/Rocket Software Image 2 image.png";

const Card = () => {
  return (
    <section className="featured-section">
      <div className="featured-container">
        {/* Left Content */}
        <div className="featured-content">
          <span className="featured-tag">OUR FEATURED PRODUCTS</span>

          <h1 className="featured-title">
            Ready-to-Deploy Software
            <br />
            That Actually Works
          </h1>

          <p className="featured-description">
            Accelerate your digital transformation with our suite of pre-built,
            industry-proven software products. From ERPs to E-commerce engines,
            we have the foundation you need.
          </p>

          <div className="stats">
            <div className="stat-item">
              <h2>20+</h2>
              <span>Active Users</span>
            </div>

            <div className="stat-item">
              <h2>99.9%</h2>
              <span>Uptime</span>
            </div>

            <div className="stat-item">
              <h2>4-8wks</h2>
              <span>Deployment</span>
            </div>
          </div>

          <div className="button-group">
            <button className="demo-btn">
              Request Live Demo
            </button>

            <button className="tour-btn">
              ▶ Watch Product Tour
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="featured-image">
          <img src={rocketImg} alt="Rocket Software" />
        </div>
      </div>
    </section>
  );
};

export default Card;