import React, { useEffect, useState } from "react";
import "./WhyUs.css";
import hand from "../../assets/hand.jpg";
import team from "../../assets/team.jpg";

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(".container");
      if (section) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`container ${isVisible ? "fade-in" : ""}`}>
      <h4 className="why_h1">WHY US</h4>
      <hr className="why_hr" />
      <div className="why">
        <div className={`why_card slide-left ${isVisible ? "active" : ""}`}>
          <h2 className="why_card_h2">Our Commitment to Excellence</h2>
          <p className="why_card_p">
            At ZestPack, we are committed to providing the finest quality service.
            Our staff is dedicated about discovering the greatest personnel for your
            company, and we are proud of our ability to provide results swiftly and
            efficiently.
          </p>
          <h2 className="why_card_h2">Your Success is Our Success</h2>
          <p className="why_card_p">
            We believe in creating long-term partnerships with our clients. By
            treating each customer as if they were our only one, we ensure that you
            receive the individualized attention and care you need.
          </p>
          <h2 className="why_card_h2">Innovative Solutions</h2>
          <p className="why_card_p">
            We remain ahead of market trends and constantly reinvent our services to
            satisfy our clients' increasing demands. We are here to help you
            succeed, whether through innovative technological solutions or targeted
            recruitment methods.
          </p>
          <h2 className="why_card_h2">Expertise in Technical Support</h2>
          <p className="why_card_p">
            Our technical support professionals contribute significant expertise and
            hands-on experience to each project, assuring smooth operations and
            problem resolution. We specialize in troubleshooting, system
            optimization, and proactive maintenance to increase efficiency and
            dependability. Whether you need hardware support, software help, or
            network solutions, we're here to walk you through each step with
            professional accuracy.
          </p>
        </div>
        <div className="why_img">
          <img src={hand} alt="Image not Found" className="why_img_1 fade-in-img" />
          <img src={team} alt="Image not Found" className="why_img_2 fade-in-img" />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
