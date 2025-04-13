import React from "react";
import { motion } from "framer-motion";
import "./style/About.css";
import Team from "../components/Team/Team";
import OurClient from '../components/OurClient/OurClient'
import about_banner from '../assets/about_banner.png'

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about_banner">
          <motion.h5
            className="about-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            ZestPack Technology is an{" "}<br></br>
            <span>Innovative Talent Solutions Provider</span>
          </motion.h5>
          <motion.p
            className="about-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            We’re not just about filling roles, we’re about building relationships
            and delivering exceptional value.
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = 'tel:7708534804'}
            
          >
            Book Appointment
          </motion.button>
        </div>
        <img src={about_banner} alt="Image is not found" />
      </div>

      <div className="container">
        <div className="about-content">
          <motion.div
            className="about_card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="about_card_h1">
              <span>WHO </span> WE ARE
            </h4>
            <motion.hr
              className="about_card_hr"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1 }}
            />
            <p className="about_card_p">
            At Zest Pack Technology, we are passionate innovators in web and app development, 
            delivering cutting-edge digital solutions tailored to your business needs. With a 
            focus on creative design, robust functionality, and user-centric experiences, we 
            empower brands to thrive in the digital age. From startups to enterprises, our expert 
            team transforms ideas into impactful products through strategic development and 
            advanced technology. 🚀
            </p>
          </motion.div>

          <motion.div
            className="about_card about_card_1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h4 className="about_card_h1">
              <span>WHAT </span> WE DO
            </h4>
            <motion.hr
              className="about_card_hr"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <p className="about_card_p">
            At Zest Pack Technology, we specialize in crafting innovative web and app 
            solutions tailored to meet your business goals. Our team combines creativity,
            technology, and strategy to deliver visually appealing, high-performing digital 
            experiences. From sleek websites and mobile apps to data-driven analytics and 
            secure platforms, we turn your ideas into impactful realities. With a focus on 
            user experience and the latest tech trends, we help businesses thrive in the 
            digital world. 😊🚀
            </p>
          </motion.div>
        </div>

        <motion.div
          className="about_card_2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <OurClient />
          <h4 className="about_card_h2">Meet Our Team</h4>
          <Team />
        </motion.div>
      </div>
      
    </>
  );
};

export default About;
