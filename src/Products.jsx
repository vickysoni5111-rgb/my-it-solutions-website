import React from "react";
import "./Products.css";

import Footer from "./Footer";

import school from "./assets/school.jpeg";
import hospital from "./assets/hospital.jpeg";
import travel from "./assets/travel.jpeg";
import ecommerce from "./assets/ecomerce.jpeg";
import delivery from "./assets/delivery.jpeg";

const Products = () => {
  return (
    <>
      <section className="products-section">

        <div className="heading">
          <h5>OUR PRODUCTS</h5>
          <h2>Smart Software Solutions For Every Industry</h2>
        </div>

        {/* Product Cards */}
        <div className="products-grid">

          <div className="product-card">
            <img src={school} alt="School Management" />
            <h3>School Management</h3>
            <p>
              Complete ERP solution for schools with attendance,
              exams, fees, transport and parent portal.
            </p>
            <button>Learn More</button>
          </div>

          <div className="product-card">
            <img src={hospital} alt="Hospital Management" />
            <h3>Hospital Management</h3>
            <p>
              Manage patients, doctors, billing, appointments,
              pharmacy and reports from one platform.
            </p>
            <button>Learn More</button>
          </div>

          <div className="product-card">
            <img src={travel} alt="Travel Booking" />
            <h3>Travel Booking</h3>
            <p>
              Advanced travel booking platform with hotels,
              packages, payments and AI recommendations.
            </p>
            <button>Learn More</button>
          </div>

          <div className="product-card">
            <img src={ecommerce} alt="E-Commerce Platform" />
            <h3>E-Commerce Platform</h3>
            <p>
              Powerful online store with inventory,
              payments, analytics and customer management.
            </p>
            <button>Learn More</button>
          </div>

          {/* ✅ NEW DELIVERY CARD */}
          <div className="product-card">
            <img src={delivery} alt="Delivery Management" />
            <h3>Delivery Management</h3>
            <p>
              Smart delivery system with real-time tracking,
              route optimization and order management.
            </p>
            <button>Learn More</button>
          </div>

        </div>

        {/* Why Choose */}
        <div className="why-section">

          <h2>Why Choose Our Products</h2>
          <p className="sub">Proven Solutions, Real Results</p>

          <div className="why-grid">

            <div className="why-card">
              <h3>⚡ Quick Deployment</h3>
              <p>
                Get your software running in 4-8 weeks with
                migration, customization and training.
              </p>
            </div>

            <div className="why-card">
              <h3>🛡 Battle-Tested</h3>
              <p>
                Trusted by 20+ institutions with 99.9% uptime
                and thousands of active users.
              </p>
            </div>

            <div className="why-card">
              <h3>🎯 Fully Customizable</h3>
              <p>
                Custom modules, reports and integrations
                designed specifically for your business.
              </p>
            </div>

            <div className="why-card">
              <h3>🤝 Ongoing Support</h3>
              <p>
                1 year free support with updates, bug fixes
                and dedicated technical assistance.
              </p>
            </div>

          </div>
        </div>

        {/* Stats */}
        <div className="stats-section">

          <h2>Customer Success</h2>
          <p className="sub">Real Impact on Real Businesses</p>

          <div className="stats-grid">

            <div className="stat-card">
              <h1>70%</h1>
              <h4>Time Saved</h4>
              <p>
                Administrative work reduced by 70%
                after implementing our ERP solutions.
              </p>
            </div>

            <div className="stat-card">
              <h1>₹15L</h1>
              <h4>Annual Savings</h4>
              <p>
                Cost savings in manual processes and
                paperwork annually.
              </p>
            </div>

            <div className="stat-card">
              <h1>95%</h1>
              <h4>User Adoption</h4>
              <p>
                Parents, staff and customers actively
                using the system daily.
              </p>
            </div>

          </div>
        </div>

      </section>

      <Footer />
    </>
  );
};

export default Products;