import React, { useEffect, useState } from 'react';
import './Expertise.css';
import Analytics from '../../assets/analytics.jpg';
import Evaluation from '../../assets/evaluation.jpg';
import Secure from '../../assets/secure.jpg';
import Hardware from '../../assets/hardware.jpg';
import Tech from '../../assets/tech.jpg';

const expertiseData = [
  { img: Analytics, text: 'Data Services & Analytics' },
  { img: Evaluation, text: 'Digital Evaluation Services' },
  { img: Secure, text: 'Secure Edge Solution' },
  { img: Hardware, text: 'Hardware Support' },
  { img: Tech, text: 'Tech Edge Solutions' }
];

const Expertise = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  return (
    <div className={`expertise-container ${isVisible ? 'slide-in' : ''}`}>
      <h1 className='expertise_h1'>Our Expertise</h1>
      <div className="expertise-grid">
        {expertiseData.map((item, index) => (
          <div key={index} className="expertise-card">
            <img src={item.img} alt="Expertise" />
            <div className="overlay">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expertise;
