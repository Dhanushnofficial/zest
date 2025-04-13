import React, { useEffect, useState } from "react";
import "./style/Home.css";
import { motion } from "framer-motion";
import Banner_img from "../assets/White Gray Monochrome Business Company Blog Banner.png";
import Expertise from "../components/Expertise/Expertise";
import WhyUs from "../components/WhyUs/WhyUs";
import group from "../assets/Group 324.png";
import vector from "../assets/Vector.png";
import vector_1 from "../assets/Vector_1.png";

const textArray = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Hardware Setup",
  "AI & Machine Learning",
  "Graphic Design",
  "Video Editing"
];

const HomeBanner = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = textArray[textIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const typingEffect = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTextIndex((prev) => (prev + 1) % textArray.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(typingEffect);
  }, [displayedText, charIndex, isDeleting, textIndex]);

  return (
    <>
      {/* Banner Section */}
      <motion.div
        className="container home_banner"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="banner_header"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h1>Transform Your Ideas into Reality with Zest Pack Technology!</h1>
          <p className="typing_text">
            🚀 We offer <span>{displayedText}</span>
          </p>
          <h2>
            ✅ Hands-on Projects | ✅ Expert Mentorship | ✅ Career Growth
          </h2>
          <h2>
            At Zest Pack Technology, we create stunning, high-performance websites & apps that drive success. From startups to enterprises, our cutting-edge designs and seamless functionality help your business stand out.
          </h2>

          <motion.div
            className="banner_card"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p>Let’s bring your vision to life! 💡✨</p>
            <button className="btn hover-effect">Contact Us</button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img src={Banner_img} alt="banner" className="banner_image" />
        </motion.div>
      </motion.div>

      {/* Count Section */}
      <motion.div
        className="count"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {[
          { number: "2+", label: "years of", span: "experience" },
          { number: "5+", label: "complete", span: "projects" },
          { number: "3+", label: "Happy", span: "customer" },
        ].map((item, index) => (
          <React.Fragment key={index}>
            <div>
              <h4 className="count_h1">{item.number}</h4>
              <p className="count_p">
                {item.label} <br />
                <span>{item.span}</span>
              </p>
            </div>
            {index !== 2 && <hr className="count_hr" />}
          </React.Fragment>
        ))}
      </motion.div>

      {/* Group Section */}
      <motion.div
        style={{ position: "relative" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', marginTop:'50px'}}>
        <motion.img
          src={group}
          alt="image is not found"
          className="group"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          
        />

        <motion.div
          className="group_card"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h4 className="group_h4">Our Professional Background</h4>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>

          {[
            { step: "01", title: "Web Development", des:"Building and maintaining websites for functionality, design, and performance." },
            { step: "02", title: "Mobile App Development", des:"Creating software applications specifically for smartphones and tablets." },
            { step: "03", title: "Graphic Design and Video Editing ", des:"Creating stunning visuals and dynamic videos for impactful storytelling."},
            { step: "04", title: "Data Analysis", des:"Extracting insights from raw data to support decision-making."},
          ].map((item, index) => (
            <div className="group_card_1" key={index}>
              <div className={`group_card_${index + 2}`}>{item.step}</div>
              <div>
                <h5 className="group_card_h5">{item.title}</h5>
                <p className="group_card_p">{item.des}</p>
              </div>
            </div>
          ))}
        </motion.div>

        </div>
        
        <motion.img
          src={vector}
          alt="Vector"
          style={{ position: 'absolute', bottom: '-35px', right: '0px', opacity: '0.2' }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        <motion.img
          src={vector_1}
          alt="Vector 1"
          style={{ position: 'absolute', top: '5px', left: '0px', opacity: '0.2' }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.2 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Why Us & Expertise */}
      <WhyUs />
      <Expertise />
    </>
  );
};

export default HomeBanner;
