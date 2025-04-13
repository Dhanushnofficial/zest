import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; 
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";  
import About from "./pages/About";
import Services from "./pages/Services";
import Cource from './pages/Cource';
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

// Import icons
import { FaInstagram, FaEnvelope, FaYoutube, FaPhone } from "react-icons/fa";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cource" element={<Cource />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
        <Footer />
        
        <div className="icons"  style={{ gap: "10px", fontSize: "30px", 
            margin: "20px 10px", 
            padding: "13px 10px", 
            borderRadius: "10px" ,
          }}>
          <a href="https://www.youtube.com/watch?v=IzsyZfC97FU"><FaInstagram /> </a>
          <a href="https://www.youtube.com/watch?v=IzsyZfC97FU"><FaEnvelope /> </a>
          <a href="https://www.youtube.com/watch?v=IzsyZfC97FU"><FaYoutube /> </a>
          <a href="https://www.youtube.com/watch?v=IzsyZfC97FU"><FaPhone /> </a>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
