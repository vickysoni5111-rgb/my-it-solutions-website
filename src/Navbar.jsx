// import React, { useState } from "react";
// import "./Navbar.css";
// import logo from "./assets/footer.png";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       {/* Logo Section */}
//       <div className="nav-logo">
//         <img src={logo} alt="Logo" />

//         <div className="logo-text">
//           <h2>Stwin Sparx</h2>
//           <p>IT Services Udaipur</p>
//         </div>
//       </div>

//       {/* Desktop Menu */}
//       <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
//         <li><a href="/">Home</a></li>
//         <li><a href="/services">Services</a></li>
//         <li><a href="/products">Products</a></li>
//         <li><a href="/portfolio">Portfolio</a></li>
//         <li><a href="/about">About</a></li>
//         <li><a href="/blog">Blog</a></li>
//         <li><a href="/contact">Contact</a></li>

//         <button className="consult-btn mobile-btn">
//           Get Free Consultation
//         </button>
//       </ul>

//       {/* Desktop Button */}
//       <button className="consult-btn desktop-btn">
//         Get Free Consultation
//       </button>

//       {/* Hamburger */}
//       <div
//         className="menu-icon"
//         onClick={() => setMenuOpen(!menuOpen)}
//       >
//         ☰
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import "./Navbar.css";
import logo from "./assets/footer.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      <div className="nav-logo">
        <img src={logo} alt="logo" />

        <div className="logo-text">
          <h2>STWIN SPARX</h2>
          <p>IT Services Udaipur</p>
        </div>
      </div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/products">Products</a></li>
        <li><a href="/portfolio">Portfolio</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/blog">Blog</a></li>
        <li><a href="/contact">Contact</a></li>

        <button className="consult-btn mobile-btn">
          Get Free Consultation
        </button>
      </ul>

      <button className="consult-btn desktop-btn">
        Get Free Consultation
      </button>

      <div
        className={`menu-icon ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

    </nav>
  );
};

export default Navbar;