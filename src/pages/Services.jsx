import React from "react";
import "./style/Services.css";
import { motion } from "framer-motion";
import {
  FaLaptopCode, FaMobileAlt, FaChartLine, FaPalette,
  FaVideo, FaBullhorn, FaCheckCircle, FaQuoteLeft
} from "react-icons/fa";
import skills from '../assets/Skills.png';
import service_banner from '../assets/service_banner .png'

const serviceData = [
  { icon: <FaLaptopCode />, title: "Web Development", description: "Custom websites with modern technologies to scale your business." },
  { icon: <FaMobileAlt />, title: "App Development", description: "High-performance mobile apps with seamless UI/UX." },
  { icon: <FaPalette />, title: "Web & App Design", description: "Visually stunning, user-friendly designs for digital success." },
  { icon: <FaVideo />, title: "Video Editing", description: "Professional video edits to elevate your brand's online presence." },
  { icon: <FaBullhorn />, title: "Digital Marketing", description: "Smart marketing strategies to boost engagement & conversions." },
  { icon: <FaChartLine />, title: "Full Stack Development", description: "End-to-end development with scalable, secure solutions." },
];

const testimonials = [
  { quote: "Amazing service! Highly recommended.", name: "John Doe" },
  { quote: "Top-notch web design and fast delivery!", name: "Sarah Smith" },
  { quote: "They exceeded my expectations in every way!", name: "Michael Lee" },
];

const faqs = [
  { question: "What services do you offer?", answer: "We provide web and app development, design, digital marketing, and more." },
  { question: "How long does a project take?", answer: "Project timelines vary but typically range from 2 to 6 weeks." },
  { question: "Do you offer maintenance?", answer: "Yes, we offer ongoing support and updates." },
];

const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section className="services">
        <div className="services_bg">
          <div className="service_banner ">
            <h1>Empowering Digital Futures with Innovative Web & App Solutions</h1>
            <p>At Zest Pack Technology, we craft modern, user-centric web and mobile applications 
              with advanced security and data analysis—delivering cutting-edge solutions to elevate 
              your digital presence and drive business growth.</p>
            <button>Contact Us</button>
          </div>
          
          <img src={service_banner} alt="" />

        </div>
        <div className="services_cards ">
        <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
        <motion.div
          className="service-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {serviceData.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <motion.section
        className="why-choose"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="choose-grid">
          {["High-Quality Work", "Expert Developers", "Fast Delivery", "24/7 Support"].map((item, index) => (
            <motion.div
              key={index}
              className="choose-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <FaCheckCircle style={{ marginRight: '8px' }} /> {item}
            </motion.div>
          ))}
        </div>
        <motion.img
          src={skills}
          alt="image not found"
          className="skills_img"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="testimonials"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title"> Our Clients </h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-quote">{testimonial.quote}</p>
              <h4 className="testimonial-name">- {testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default Services;
