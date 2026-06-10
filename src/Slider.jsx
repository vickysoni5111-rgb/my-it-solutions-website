import React from "react";
import "./Slider.css";

import {
  FaUsersCog,
  FaSyncAlt,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";

const Slider = () => {
  return (
    <section className="why-choose">

      <div className="section-header">
        <h2>Why Choose STWIN SPARX?</h2>
        <p>
          The partner you need to navigate the digital world with confidence.
        </p>
      </div>

      <div className="features-grid">

        {/* Card 1 */}
        <div className="feature-card large">

          <div className="icon engineering">
            <FaUsersCog />
          </div>

          <h3>Highly Experienced Team</h3>

          <p>
            Our engineers bring decades of collective experience
            from top-tier tech firms, ensuring your project is
            handled by genuine experts who understand complex scalability.
          </p>

        </div>

        {/* Card 2 */}
        <div className="feature-card">

          <div className="icon agile">
            <FaSyncAlt />
          </div>

          <h3>Agile Methodology</h3>

          <p>
            We iterate fast and communicate often, ensuring full
            transparency throughout development.
          </p>

        </div>

        {/* Card 3 */}
        <div className="feature-card">

          <div className="icon bolt">
            <FaBolt />
          </div>

          <h3>Fast Delivery</h3>

          <p>
            Rapid prototyping and modular architectures allow us
            to hit tight deadlines without compromise.
          </p>

        </div>

        {/* Card 4 */}
        <div className="feature-card large">

          <div className="icon security">
            <FaShieldAlt />
          </div>

          <h3>Uncompromising Security</h3>

          <p>
            Security is not an afterthought. We implement rigorous
            testing and state-of-the-art encryption at every layer
            of your application from day one.
          </p>

        </div>

      </div>

    </section>
  );
};

export default Slider;