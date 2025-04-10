import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar"; 
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";  
import About from "./pages/About";
import Services from "./pages/Services"
import Cource from './pages/Cource'
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"; 

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
      </div>
    </BrowserRouter>
  );
}

export default App;
