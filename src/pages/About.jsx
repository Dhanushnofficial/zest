import React from "react";
import { motion } from "framer-motion";
import "./style/About.css";
import Team from "../components/Team/Team";


const About = () => {
  return (
    <>
      <div className="about-container">
        <motion.h5
          className="about-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ZestPack Technology is an{" "}
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
              ZestPack Technology is a dynamic and innovative talent solutions
              provider. While we are a fresh force in the industry, our team
              consists of highly experienced professionals with over 2 years of
              expertise in recruitment, staffing, and technical services. We go
              beyond just filling roles—we focus on building strong relationships
              and delivering exceptional value. 🚀
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
              ZestPack Technology is a dynamic and innovative talent solutions
              provider. While we may be new to the market, our team brings over 2
              years of expertise in recruitment, staffing, and technical services.
              We go beyond just filling roles; we prioritize building lasting
              relationships and delivering exceptional value. 😊🚀
            </p>
          </motion.div>
        </div>

        <motion.div
          className="about_card_2"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h4 className="about_card_h2">Meet Our Team</h4>
          <Team />
        </motion.div>
      </div>


    </>
  );
};

export default About;
