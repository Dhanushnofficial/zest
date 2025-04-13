import React from "react";
import { motion } from "framer-motion";
import "./Team.css";

// Team members data
const teamMembers = [
  { 
    name: "Dhanush N", 
    position: "Frontend Developer", 
    qualifications: "BSc Computer Science", 
    portfolio: "https://portfolio.example.com", 
    email: "dhanush@example.com", 
    // image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nazriya_Nazim.jpg/1200px-Nazriya_Nazim.jpg" 
  },
  { 
    name: "Hari", 
    position: "Backend Developer", 
    qualifications: "MCA", 
    portfolio: "https://hariportfolio.com", 
    email: "hari@example.com", 
    // image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nazriya_Nazim.jpg/1200px-Nazriya_Nazim.jpg" 
  },
  { 
    name: "Swathi", 
    position: "Full Stack Developer", 
    qualifications: "B.Tech IT", 
    portfolio: "https://swathi.dev", 
    email: "swathi@example.com", 
    // image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nazriya_Nazim.jpg/1200px-Nazriya_Nazim.jpg" 
  }
];

const Team = () => {
  return (
    <div>
      {/* <div className="team-grid">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="team-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-position">{member.position}</p>

           
            <div className="team-details">
              <h4>Qualifications: {member.qualifications}</h4>
              <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
              <p>Contact: {member.email}</p>
            </div>
          </motion.div>
        ))}
      </div> */}
      <div className="team_cards">
        <div className="team_card_bg">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nazriya_Nazim.jpg/1200px-Nazriya_Nazim.jpg" 
            alt="Image not found" 
            className="team_img"
          />
          <div className="team_cards_text">
            <h1>Dhanush N</h1>
            <p>Full Stack Developer</p>
            <button href="" className="team_cards_text_a">Portfolio</button>
          </div>
        </div>
        <div className="team_card_bg">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nazriya_Nazim.jpg/1200px-Nazriya_Nazim.jpg" 
            alt="Image not found" 
            className="team_img"
          />
         
          <div className="team_cards_text">
            <h1>Swathi R</h1>
            <p>Full Stack Developer</p>
            <button href="" className="team_cards_text_a">Portfolio</button>
          </div>
        </div>
        <div className="team_card_bg">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nazriya_Nazim.jpg/1200px-Nazriya_Nazim.jpg" 
            alt="Image not found" 
            className="team_img"
          />
          <div className="team_cards_text">
            <h1>Hari Krishnan</h1>
            <p>Full Stack Developer</p>
            <button href="" className="team_cards_text_a">Portfolio</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Team;
