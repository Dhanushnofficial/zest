import React from 'react'
import './WhoWeAre.css'
import { motion } from "framer-motion";
import { FaCode, FaLightbulb, FaRocket } from "react-icons/fa";
const WhoWeAre = () => {
  return (
    <div>
      <section className="about">
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="about-title">
            <span>Who We Are</span>
          </h2>
          <p className="about-text">
            At <strong>Zest Pack Technology</strong>, we turn ideas into
            reality! 🚀 Our team of expert developers, designers, and
            strategists build **cutting-edge web and app solutions** to help
            businesses scale and succeed.
          </p>
          <div className="about-features">
            <div className="feature">
              <FaCode className="feature-icon" />
              <h3>Innovative Development</h3>
              <p>
                We use the latest technologies to create fast, secure, and
                scalable digital solutions.
              </p>
            </div>
            <div className="feature">
              <FaLightbulb className="feature-icon" />
              <h3>Creative Solutions</h3>
              <p>
                Bringing unique UI/UX designs and seamless experiences for
                brands worldwide.
              </p>
            </div>
            <div className="feature">
              <FaRocket className="feature-icon" />
              <h3>Growth-Oriented</h3>
              <p>
                Empowering businesses with automation, AI, and data-driven
                insights.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default WhoWeAre
