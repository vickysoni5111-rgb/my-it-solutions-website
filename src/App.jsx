
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";

import Footer from "./Footer";
import Products from "./Products";
import Services1 from "./Services1";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        
 
        <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services1/>} />
           <Route path="/contact" element={<Contact/>} />
                  <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
    
  );
}

export default App;