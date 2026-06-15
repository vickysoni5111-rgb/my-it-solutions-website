
import React, { useState } from "react";
import "./About.css";
import Footer from "./Footer";
import aboutHero from "./assets/abouthome.png";
import ceoImage from "./assets/Adrian Sterling.png";
import ctoImage from "./assets/Elena Vance.png";
import designHead from "./assets/Julian Thorne.png";
import visionImage from "./assets/Transformative Vision.png";

const About = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <>
      <div className="about-page">

        {/* HERO */}
        <section className="about-hero">
          <div className="about-left">
            <div className="about-badge">
              ● Our Journey of Excellence
            </div>

            <h2>
              Empowering Global
              <br />
              <span>Enterprises</span> Through
              <br />
              Innovation
            </h2>

            <p>
              From a boutique startup to a globally recognized IT powerhouse,
              STWIN SPARX has been the architect of digital transformation
              for over a decade, building the bridges between human potential
              and technological possibility.
            </p>

            <div className="about-buttons">
              <button className="portfolio-btn">
                View Our Portfolio
              </button>

              <button className="story-btn">
                ▶ Watch Our Story
              </button>
            </div>
          </div>

          <div className="about-right">
            <img
              src={aboutHero}
              alt="About Hero"
              className="about-hero-img"
            />

            <div className="reach-card">
              <span className="material-symbols-outlined">
                public
              </span>

              <div>
                <h4>15+ Countries</h4>
                <p>Global Reach</p>
              </div>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="story-section">
          <div className="story-left">
            <h2>
              A Legacy Built on
              <br />
              <span>Transformative Vision</span>
            </h2>

            <div className="story-line"></div>

            <img
              src={visionImage}
              alt="Vision"
              className="vision-img"
            />
          </div>

          <div className="story-right">
            <p>
              Founded in the heart of the digital revolution,
              STWIN SPARX Pvt. Ltd. emerged from a simple observation:
              that businesses were struggling to keep pace with the
              exponential growth of technology.
            </p>

            <p>
              Today, our mission remains unchanged. We transform
              businesses by integrating cutting-edge innovation with
              strategic human insight. Our story is one of relentless
              pursuit—of excellence, integrity, and client success.
            </p>

            <div className="story-stats">
              <div className="stat-box">
                <h3>500+</h3>
                <span>PROJECTS DELIVERED</span>
              </div>

              <div className="stat-box">
                <h3>120+</h3>
                <span>EXPERT ARCHITECTS</span>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="values-section">
          <h2>The SPARX Philosophy</h2>
          <p>
            Our core values are more than words.
          </p>

          <div className="values-grid">
            <div
              className={`value-card ${activeCard === 0 ? "active-value" : ""}`}
              onClick={() => setActiveCard(0)}
            >
              <span className="material-symbols-outlined">
                lightbulb
              </span>

              <h3>Innovation</h3>

              <p>
                Constantly pushing boundaries through research.
              </p>
            </div>

            <div
              className={`value-card ${activeCard === 1 ? "active-value" : ""}`}
              onClick={() => setActiveCard(1)}
            >
              <span className="material-symbols-outlined">
                verified_user
              </span>

              <h3>Integrity</h3>

              <p>
                Highest standards of transparency and ethics.
              </p>
            </div>

            <div
              className={`value-card ${activeCard === 2 ? "active-value" : ""}`}
              onClick={() => setActiveCard(2)}
            >
              <span className="material-symbols-outlined">
                workspace_premium
              </span>

              <h3>Excellence</h3>

              <p>
                Premium quality and meticulous attention to detail.
              </p>
            </div>

            <div
              className={`value-card ${activeCard === 3 ? "active-value" : ""}`}
              onClick={() => setActiveCard(3)}
            >
              <span className="material-symbols-outlined">
                groups
              </span>

              <h3>Customer Centricity</h3>

              <p>
                Your goals are the center of every decision.
              </p>
            </div>
          </div>
        </section>

        {/* TEAM */}
       {/* TEAM */}
<section className="team-section">
  <div className="team-header">
    <div>
      <h2>Meet the Visionaries</h2>
      <p>
        A team of seasoned professionals dedicated
        to steering STWIN SPARX forward.
      </p>
    </div>

    <button className="join-btn">
      Join Our Team →
    </button>
  </div>

  <div className="team-grid">
    <div
      className={`team-card ${activeCard === 0 ? "active-team" : ""}`}
      onClick={() => setActiveCard(0)}
    >
      <img src={ceoImage} alt="Adrian Sterling" />
      <div className="team-info">
        <h3>Adrian Sterling</h3>
        <p>Chief Executive Officer</p>
        <div className="team-icons">
          <span className="material-symbols-outlined">share</span>
          <span className="material-symbols-outlined">mail</span>
        </div>
      </div>
    </div>

    <div
      className={`team-card ${activeCard === 1 ? "active-team" : ""}`}
      onClick={() => setActiveCard(1)}
    >
      <img src={ctoImage} alt="Elena Vance" />
      <div className="team-info">
        <h3>Elena Vance</h3>
        <p>Chief Technology Officer</p>
        <div className="team-icons">
          <span className="material-symbols-outlined">share</span>
          <span className="material-symbols-outlined">mail</span>
        </div>
      </div>
    </div>

    <div
      className={`team-card ${activeCard === 2 ? "active-team" : ""}`}
      onClick={() => setActiveCard(2)}
    >
      <img src={designHead} alt="Julian Thorne" />
      <div className="team-info">
        <h3>Julian Thorne</h3>
        <p>Head of Design</p>
        <div className="team-icons">
          <span className="material-symbols-outlined">share</span>
          <span className="material-symbols-outlined">mail</span>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* GLOBAL */}
        <section className="global-section">
          <div className="global-overlay">
            <div className="global-content">
              <div className="global-left">
                <h2>
                  Global Reach,
                  <span> Localized Impact</span>
                </h2>

                <p>
                  With strategic hubs in London, Singapore,
                  New York and Mumbai we maintain a 24/7 delivery cycle.
                  Our commitment to international standards of security
                  and performance is unwavering.
                </p>

                <div className="global-stats">
                  <div>
                    <h3>99.9%</h3>
                    <span>SLA Compliance</span>
                  </div>

                  <div>
                    <h3>ISO 27001</h3>
                    <span>Certified Security</span>
                  </div>

                  <div>
                    <h3>24/7</h3>
                    <span>Technical Support</span>
                  </div>
                </div>
              </div>

              <div className="global-map-card">
                <iframe
                  title="Google Map"
                  src="https://maps.google.com/maps?q=udaipur&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="about-cta">
          <span className="material-symbols-outlined">
            language
          </span>

          <h2>
            Ready to Build Your Future?
          </h2>

          <p>
            Let's discuss how STWIN SPARX can accelerate
            your digital journey.
          </p>

          <button>
            Contact Us Today
          </button>
        </section>

      </div>

      <Footer />
    </>
  );
};

export default About;