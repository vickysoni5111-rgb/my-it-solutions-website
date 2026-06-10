import React, { useState } from "react";
import "./Home.css";
import Footer from "./Footer";
import Card from "./Card";
import MyCard from "./MyCard";
import HeroCard from "./HeroCard";
import Slider from "./Slider";
import Explore from "./Explore";
import paymentImage from "./assets/Payment Gateway Image 3 image.png";



const Home = () => {
  const [activeCard, setActiveCard] = useState(0);

  const services = [
    {
      icon: "language",
      title: "Web Development",
      desc: "Responsive, high-performance websites that represent your brand perfectly."
    },
    {
      icon: "terminal",
      title: "Software Dev",
      desc: "Custom enterprise software built to streamline complex operations."
    },
    {
      icon: "smartphone",
      title: "Mobile Apps",
      desc: "Intuitive iOS & Android apps that engage and retain your users."
    },
    {
      icon: "psychology",
      title: "AI Agents",
      desc: "Smart automation solutions utilizing modern large language models."
    },
    {
      icon: "search_insights",
      title: "SEO Strategy",
      desc: "Data-driven digital marketing to scale your organic visibility and leads."
    },
    {
      icon: "cloud",
      title: "Cloud Services",
      desc: "Scalable cloud infrastructure management and migration services."
    },
    {
      icon: "draw",
      title: "UI/UX Design",
      desc: "User-centric designs that blend aesthetic beauty with functional flow."
    },
    {
      icon: "hub",
      title: "IT Consulting",
      desc: "Expert guidance to align your tech stack with your business goals."
    }
  ];

  return (
    <div className="home-page">

      {/* HERO */}

      <section className="hero">

        <div className="hero-left">

          <div className="badge">
            ⭐ Trusted by 500+ Businesses Worldwide
          </div>

          <h1>
            Transform Your Business
            <br />
            with <span>Expert IT Solutions</span>
          </h1>

          <p>
            Empowering enterprises with cutting-edge technology,
            bespoke software development, and strategic digital consulting
            to drive unprecedented growth in the modern era.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary">
              Start Your Project →
            </button>

            <button className="btn-secondary">
              Book Free Consultation 📅
            </button>
          </div>

        </div>

        <div className="hero-right">
          <img src={paymentImage} alt="Hero" />
        </div>

      </section>
<MyCard/>
      {/* SERVICES */}

      <section className="services">

        <span className="section-tag">
          WHAT WE OFFER
        </span>

        <h2>
          Complete IT Services for Every Need
        </h2>

        <p className="section-description">
          Strategic tech solutions designed to help your business grow,
          automate manual tasks, and succeed in a competitive digital landscape.
        </p>

        <div className="services-grid">

          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card ${
                activeCard === index ? "active" : ""
              }`}
              onClick={() => setActiveCard(index)}
            >
              <div className="icon-box">
                <span className="material-symbols-outlined">
                  {service.icon}
                </span>
              </div>

              <h3>{service.title}</h3>

              <p>{service.desc}</p>

              <a href="/">
                Learn More
              </a>
            </div>
          ))}

        </div>

      </section>
      
<Card/>
<HeroCard/>
  <Slider/>
  <Explore/>

      <Footer/>
    

    </div>
  );
};

export default Home;