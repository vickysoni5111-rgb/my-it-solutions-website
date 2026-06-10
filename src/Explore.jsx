import React from "react";
import "./Explore.css";

const Explore = () => {
  return (
    <section className="explore-section">

      <div className="explore-card">

        <h2>
          Let's Build Something Amazing Together
        </h2>

        <p>
          Ready to elevate your business? Get a detailed consultation
          and a customized roadmap for your next digital project today.
        </p>

        <div className="explore-buttons">

          <button className="consult-btn">
            Get Free Consultation
          </button>

          <button className="portfolio-btn">
            Explore Portfolio
          </button>

        </div>

      </div>

    </section>
  );
};

export default Explore;