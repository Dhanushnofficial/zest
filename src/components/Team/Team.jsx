import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Team.css";

const teamMembers = {
  "Web Developer": [
    { name: "Dhanush N", position: "Frontend Developer", qualifications: "BSc Computer Science", portfolio: "https://portfolio.example.com", email: "dhanush@example.com", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Nazriya_Nazim.jpg/1200px-Nazriya_Nazim.jpg" },
    { name: "Hari", position: "Backend Developer", qualifications: "MCA", portfolio: "https://hariportfolio.com", email: "hari@example.com", image: "https://via.placeholder.com/150" },
    { name: "Swathi", position: "Full Stack Developer", qualifications: "B.Tech IT", portfolio: "https://swathi.dev", email: "swathi@example.com", image: "https://via.placeholder.com/150" },
  ],
  "App Developer": [
    { name: "Hari", position: "Mobile Developer", qualifications: "B.Tech CSE", portfolio: "https://hariappdev.com", email: "hariapp@example.com", image: "https://via.placeholder.com/150" },
    { name: "Dhanush N", position: "React Native Expert", qualifications: "BSc CS", portfolio: "https://dhanushapp.com", email: "dhanushapp@example.com", image: "https://via.placeholder.com/150" },
    { name: "Suresh", position: "Android Developer", qualifications: "M.Tech SE", portfolio: "https://sureshandroid.com", email: "suresh@example.com", image: "https://via.placeholder.com/150" },
  ],
  "Analyst": [
    { name: "Azhagapan", position: "Data Analyst", qualifications: "MSc Data Science", portfolio: "https://azhagapananalytics.com", email: "azhagapan@example.com", image: "https://via.placeholder.com/150" },
  ],
  "Ui/Ux Designer": [
    { name: "Shyam", position: "UI Designer", qualifications: "Diploma in UI/UX", portfolio: "https://shyamdesigns.com", email: "shyam@example.com", image: "https://via.placeholder.com/150" },
    { name: "Dhanush", position: "UX Designer", qualifications: "B.Des UX", portfolio: "https://dhanushux.com", email: "dhanushux@example.com", image: "https://via.placeholder.com/150" },
  ],
};

const Team = () => {
  const [selectedRole, setSelectedRole] = useState("Web Developer");
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className={`team-container ${selectedMember ? "blur" : ""}`}>
      <div className="tabs">
        {Object.keys(teamMembers).map((role) => (
          <button
            key={role}
            className={`tab ${selectedRole === role ? "active" : ""}`}
            onClick={() => setSelectedRole(role)}
          >
            {role}
          </button>
        ))}
      </div>

      <motion.div
        key={selectedRole}
        className="team-grid"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {teamMembers[selectedRole].map((member, index) => (
          <motion.div
            key={index}
            className="team-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={member.image} alt={member.name} className="team-image" />
            <h3 className="team-name">{member.name}</h3>
            <button className="view-more" onClick={() => setSelectedMember(member)}>View More</button>
          </motion.div>
        ))}
      </motion.div>

      {selectedMember && (
        <div className="popup-overlay" onClick={() => setSelectedMember(null)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedMember.image} alt={selectedMember.name} className="selectedMember_team-image" />
            <h2>{selectedMember.name}</h2>
            <p><strong>Position:</strong> {selectedMember.position}</p>
            <p><strong>Qualifications:</strong> {selectedMember.qualifications}</p>
            <p><strong>Portfolio:</strong> <a href={selectedMember.portfolio} target="_blank" rel="noopener noreferrer">{selectedMember.portfolio}</a></p>
            <p><strong>Contact:</strong> {selectedMember.email}</p>
            <button className="close-btn" onClick={() => setSelectedMember(null)}>×</button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Team;
