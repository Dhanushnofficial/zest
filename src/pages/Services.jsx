import React from "react";
import "./style/Services.css";
import { motion } from "framer-motion";
import { 
  FaLaptopCode, FaMobileAlt, FaChartLine, FaPalette, 
  FaVideo, FaBullhorn, FaCheckCircle, FaQuoteLeft 
} from "react-icons/fa";


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
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>


          
        </div>
        
        
        <motion.div 
          className="service-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {serviceData.map((service, index) => (
            <motion.div 
              key={index} 
              className="service-card"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="choose-grid">
          {["High-Quality Work", "Expert Developers", "Fast Delivery", "24/7 Support"].map((item, index) => (
            <div key={index} className="choose-item">
              <FaCheckCircle /> {item}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index} 
              className="testimonial-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-quote">{testimonial.quote}</p>
              <h4 className="testimonial-name">- {testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

     


    </>
  );
};

export default Services;
