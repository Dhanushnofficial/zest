import React, { useEffect, useState } from "react";
import "./style/Home.css";
import Banner_img from "../assets/banner.jpg";
import Expertise from "../components/Expertise/Expertise";
import WhyUs from "../components/WhyUs/WhyUs";
import group from "../assets/Group 324.png"
import vector from "../assets/Vector.png"
import vector_1 from "../assets/Vector_1.png"


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
    <div className=" container home_banner fade-in">
      <div className="banner_header slide-left">
        <h1>Transform Your Ideas into Reality with Zest Pack Technology!</h1>

        <p className="typing_text">
          🚀 We offer <span>{displayedText}</span>
        </p>
        <h2>
          ✅ Hands-on Projects | ✅ Expert Mentorship | ✅ Career Growth
        </h2>

        <h2>
          At Zest Pack Technology, we create stunning, high-performance websites
          & apps that drive success. From startups to enterprises, our
          cutting-edge designs and seamless functionality help your business
          stand out.
        </h2>
        <div className="banner_card slide-up">
          <p>Let’s bring your vision to life! 💡✨</p>
          <button className="btn hover-effect">Contact Us</button>
        </div>
      </div>
      <div>
        <img src={Banner_img} alt="banner" className="banner_image fade-in" />
      </div>
    </div>
    <div className="count">
        <div>
          <h4 className="count_h1">2+</h4>
          <p className="count_p"> years of <br></br><span>experience</span></p>
        </div>
        <hr className="count_hr"></hr>
        <div>
          <h4 className="count_h1">5+</h4>
          <p className="count_p">complete  <br></br><span>projects</span></p>
        </div>
        <hr className="count_hr"></hr>
        <div>
          <h4 className="count_h1">3+</h4>
          <p className="count_p">Happy   <br></br><span>customer</span></p>
        </div>
    </div>
    <div style={{ position: "relative" }}>
      <div className="group">
        <img src={group} alt="image is not found" />
        <div className="group_card">
          <h4 className="group_h4">Our Professional Background</h4>
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,</p>
          <div className="group_card_1">
            <div className="group_card_2">01</div>
            <div>
              <h5 className="group_card_h5">Data Analysis</h5>
              <p className="group_card_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="group_card_1">
            <div className="group_card_3">02</div>
            <div>
              <h5 className="group_card_h5">Mobile App Development</h5>
              <p className="group_card_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="group_card_1">
            <div className="group_card_4">03</div>
            <div>
              <h5 className="group_card_h5">Process Engineering</h5>
              <p className="group_card_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
          <div className="group_card_1">
            <div className="group_card_5">04</div>
            <div>
              <h5 className="group_card_h5">Web Development</h5>
              <p className="group_card_p">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
          </div>
        </div>
      </div>
      <img src={vector} alt="Image is not found" style={{ position: 'absolute', bottom:'-35px', right:'0px', opacity:'0.2'}} />
      <img src={vector_1} alt="Image is not found" style={{ position: 'absolute', top:'5px', left:'0px', opacity:'0.2'}} />
    </div>
    
      <div>
        <WhyUs />
        <Expertise />
     
     </div>
    </>
  );
};

export default HomeBanner;
