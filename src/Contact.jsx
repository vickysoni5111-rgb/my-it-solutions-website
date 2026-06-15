import React from "react";
import "./Contact.css";

import Footer from "./Footer";

import contactImage from "./assets/contact.png";
import newYorkImage from "./assets/newyork.png";
import bengaluruImage from "./assets/benglure.png";

const Contact = () => {
  return (
    <>
      <div className="contact-page">

        {/* HERO */}

        <section className="contact-hero">

          <div className="contact-left">

            <span className="contact-tag">
              CONNECT WITH EXCELLENCE
            </span>

            <h1>
              Let's Build Something
              <br />
              <span>Extraordinary</span> Together
            </h1>

            <p>
              Partner with STWIN SPARX to architect scalable solutions,
              secure your digital assets, and lead with AI-driven innovation.
            </p>

            <button className="contact-btn">
              Start Inquiry
              <span className="material-symbols-outlined">
                arrow_forward
              </span>
            </button>

          </div>

          <div className="contact-right">
            <img
              src={contactImage}
              alt="Contact"
            />
          </div>

        </section>

        {/* CONTACT CARDS */}

       {/* CONTACT CARDS */}

<section className="contact-cards-section">

  <div className="contact-cards">

    <div className="info-card">

      <div className="icon-box">
        <span className="material-symbols-outlined">
          mail
        </span>
      </div>

      <h3>Email Us</h3>

      <p>
        Our specialized team responds within
        4 business hours.
      </p>

      <span>
        [solutions@stwinsparx.com](mailto:solutions@stwinsparx.com)
      </span>

    </div>

    <div className="info-card">

      <div className="icon-box">
        <span className="material-symbols-outlined">
          call
        </span>
      </div>

      <h3>Call Us</h3>

      <p>
        Direct access to our consultants
        for urgent inquiries.
      </p>

      <span>
        +1 (800) SPARX-OFFICE
      </span>

    </div>

    <div className="info-card">

      <div className="icon-box">
        <span className="material-symbols-outlined">
          location_on
        </span>
      </div>

      <h3>Visit Us</h3>

      <p>
        Visit our innovation hubs
        for a face-to-face workshop.
      </p>

      <span>
        Global HQ: New York & Bengaluru
      </span>

    </div>

  </div>

</section>
        {/* PROJECT DISCOVERY */}

        <section className="project-section">

          <div className="project-left">

            <h2>Project Discovery</h2>

            <p>
              Share your project vision with us.
              Our technical architects will review your
              requirements and prepare a tailored strategy proposal.
            </p>

            <ul>

              <li>
                <span className="material-symbols-outlined check-icon">
                  check_circle
                </span>
                Confidential NDA Agreement
              </li>

              <li>
                <span className="material-symbols-outlined check-icon">
                  check_circle
                </span>
                Technical Feasibility Audit
              </li>

              <li>
                <span className="material-symbols-outlined check-icon">
                  check_circle
                </span>
                Transparent Cost Estimates
              </li>

            </ul>

            <div className="trusted">

              <p>TRUSTED BY INDUSTRY LEADERS</p>

              <div className="trusted-icons">

                <span className="material-symbols-outlined">
                  bolt
                </span>

                <span className="material-symbols-outlined">
                  diamond
                </span>

                <span className="material-symbols-outlined">
                  monitoring
                </span>

              </div>

            </div>

          </div>

          <div className="project-right">

            <form>

              <div className="row">

                <input
                  type="text"
                  placeholder="Full Name"
                />

                <input
                  type="email"
                  placeholder="Business Email"
                />

              </div>

              <div className="row">

                <input
                  type="text"
                  placeholder="Company Name"
                />

                <select>
                  <option>Select a Service</option>
                  <option>Web Engineering</option>
                  <option>Mobile Development</option>
                  <option>AI & Machine Learning</option>
                  <option>Cloud Architecture</option>
                  <option>Cybersecurity</option>
                </select>

              </div>

              <textarea
                rows="6"
                placeholder="Project Details"
              ></textarea>

              <button
                type="submit"
                className="proposal-btn"
              >
                Send Inquiry Proposal
              </button>

            </form>

          </div>

        </section>

        {/* GLOBAL ECOSYSTEM */}

        <section className="global-section">

          <h2>
            Our Global Ecosystem
          </h2>

          <p>
            Strategically located in the world's leading
            technology hubs to serve you better.
          </p>

          <div className="global-grid">

            <div className="city-card">

              <img
                src={newYorkImage}
                alt="New York"
              />

              <div className="overlay">

                <h3>New York</h3>

                <p>
                  Innovation & Financial Hub
                </p>

                <span>
                  Wall Street District, NY 10005
                </span>

              </div>

            </div>

            <div className="city-card">

              <img
                src={bengaluruImage}
                alt="Bengaluru"
              />

              <div className="overlay">

                <h3>Bengaluru</h3>

                <p>
                  Global Technology Center
                </p>

                <span>
                  Outer Ring Road, Bengaluru 560103
                </span>

              </div>

            </div>

          </div>

        </section>

      </div>

  {/* FAQ SECTION */}

<section className="faq-section">

  <h2>Frequently Asked Questions</h2>

  <details className="faq-item">
    <summary>
      How do you handle project security and NDAs?
    </summary>

    <p>
      We prioritize intellectual property protection.
      Every engagement begins with a comprehensive
      Non-Disclosure Agreement (NDA). All code is stored
      in encrypted repositories and we follow strict
      ISO/IEC 27001 security standards.
    </p>
  </details>

  <details className="faq-item">
    <summary>
      What tech stacks does STWIN SPARX specialize in?
    </summary>

    <p>
      Our core expertise includes modern frameworks
      like React/Next.js for web, Flutter/Kotlin for
      mobile, and Python/PyTorch for AI. For cloud,
      we are certified partners with AWS, Azure,
      and Google Cloud.
    </p>
  </details>

  <details className="faq-item">
    <summary>
      What are typical project delivery timelines?
    </summary>

    <p>
      Timelines vary based on complexity.
      A typical MVP discovery phase takes
      2-4 weeks, with full product engineering
      cycles ranging from 3 to 6 months
      following an agile delivery model.
    </p>
  </details>

</section>

      <Footer />
    </>
  );
};

export default Contact;