import React, { useState } from "react";
import "./Homepagecard.css";

const services = [
  { icon: "language", title: "Web Development", desc: "Responsive, high-performance websites that represent your brand perfectly." },
  { icon: "terminal", title: "Software Dev", desc: "Custom enterprise software built to streamline complex operations." },
  { icon: "smartphone", title: "Mobile Apps", desc: "Intuitive iOS & Android apps that engage and retain your users." },
  { icon: "psychology", title: "AI Agents", desc: "Smart automation solutions utilizing modern large language models." },
  { icon: "search_insights", title: "SEO Strategy", desc: "Data-driven digital marketing to scale your organic visibility and leads." },
  { icon: "cloud", title: "Cloud Services", desc: "Scalable cloud infrastructure management and migration services." },
  { icon: "draw", title: "UI/UX Design", desc: "User-centric designs that blend aesthetic beauty with functional flow." },
  { icon: "hub", title: "IT Consulting", desc: "Expert guidance to align your tech stack with your business goals." }
];

export default function Services() {
  const [activeCard, setActiveCard] = useState(0); // Set initial active card

  return (
    <section className="services">
      <div className="services-header">
        <h5>WHAT WE OFFER</h5>
        <h2>Complete IT Services for Every Need</h2>
        <p>Strategic tech solutions designed to help your business grow, automate manual tasks, and succeed in a competitive digital landscape.</p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={index}
            className={`service-card ${activeCard === index ? "active" : ""}`}
            onClick={() => setActiveCard(index)}
          >
            <div className="icon-box">
              <span className="material-symbols-outlined">{service.icon}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <a href="#">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
}