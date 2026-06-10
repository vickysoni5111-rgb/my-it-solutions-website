import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Services.css";

const Services = () => {
  return (
   <section className="services-cta">

  <div className="cta-card">

    <h2>Let's Build Something Amazing Together</h2>

    <p>
      Ready to elevate your business? Get a detailed consultation
      and a customized roadmap for your next digital project today.
    </p>

    <div className="cta-buttons">

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
export default Services;