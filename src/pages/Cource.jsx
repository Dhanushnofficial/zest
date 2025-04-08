import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./style/Course.css";
import python from '../assets/Course/python.png';
import react from '../assets/Course/React.png';
import node from '../assets/Course/Node.png';
import frontend from '../assets/Course/Front End.png';
import backend from '../assets/Course/Back End.png';
import mongodb from '../assets/Course/MongoDB.png';
import sql from '../assets/Course/SQL.png';
import javascript from '../assets/Course/JavaScript.png';
import c from '../assets/Course/c.png';
import cpp from '../assets/Course/cpp.png';
import mern from '../assets/Course/MERN.png';

const courses = {
  Development: [
    { 
      name: "Python", 
      image: python, 
      details: [
        "Duration: 3 months",
        "Topics: Web Development, AI basics, Automation, Data Handling",
        "Price: ₹499",
        "Includes: Hands-on projects, Tests, Assignments"
      ]
    },    
    { name: "React.js", image: react, description: "Master modern UI development with reusable components and state management." },
    { name: "Node.js (Express.js)", image: node, description: "Learn to build scalable backend APIs and microservices using Express.js." },
    { name: "Front End", image: frontend, description: "HTML, CSS, and JavaScript mastery for modern web development." },
    { name: "Back End", image: backend, description: "Understand database management, authentication, and API development." },
    { name: "MongoDB", image: mongodb, description: "Master NoSQL database management with MongoDB." },
    { name: "SQL", image: sql, description: "Learn SQL queries, database structures, and data manipulation." },
    { name: "JavaScript", image: javascript, description: "Understand core JavaScript, ES6+, and DOM manipulation." },
    { name: "C", image: c, description: "Learn the fundamentals of C programming, memory management, and algorithms." },
    { name: "C++", image: cpp, description: "Advanced system programming, object-oriented principles, and memory management." },
    { name: "MERN", image: mern, description: "Become a Full Stack Developer using MongoDB, Express, React, and Node.js." },
  ],
  Designing: [
    { name: "UI/UX (Figma)", image: "/images/figma.jpg", description: "Design user-friendly interfaces and create prototypes." },
    { name: "Photoshop", image: "/images/photoshop.jpg", description: "Master graphic design and photo editing with Adobe Photoshop." },
    { name: "Canva", image: "/images/canva.jpg", description: "Create professional graphics quickly and easily using Canva." },
  ],
  "Data Analytics": [
    { name: "Python (Pandas, NumPy)", image: "/images/python-analytics.jpg", description: "Learn data processing and analytics using Pandas and NumPy." },
    { name: "Excel", image: "/images/excel.jpg", description: "Master Excel for data analysis, visualization, and automation." },
    { name: "Power BI", image: "/images/powerbi.jpg", description: "Create powerful visual analytics using Power BI dashboards." },
  ],
  "Data Science": [
    { name: "AI", image: "/images/ai.jpg", description: "Understand Artificial Intelligence fundamentals and applications." },
    { name: "ML", image: "/images/ml.jpg", description: "Learn Machine Learning models, data training, and real-world applications." },
  ],
};

const Course = () => {
  const [activeTab, setActiveTab] = useState("Development");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <div className="course-container">
      <div className="tabs">
        {Object.keys(courses).map((category) => (
          <button
            key={category}
            className={`tab-button ${activeTab === category ? "active" : ""}`}
            onClick={() => setActiveTab(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="loading-spinner"></div>
      ) : (
        <motion.div 
          className="course-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {courses[activeTab].map((course, index) => (
            <motion.div
              className="course-card"
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img src={course.image} alt={course.name} className="course-image" />
              <h3>{course.name}</h3>
              <button className="view-more" onClick={() => setSelectedCourse(course)}>
                View More
              </button>
            </motion.div>
          ))}
        </motion.div>
      )}

      {selectedCourse && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedCourse(null)}
        >
          <motion.div className="modal-content">
            <img src={selectedCourse.image} alt={selectedCourse.name} />
            <h2>{selectedCourse.name}</h2>
            <p>{selectedCourse.description}</p>
            {selectedCourse.details && (
              <ul>
                {selectedCourse.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            )}
            <button className="close-button" onClick={() => setSelectedCourse(null)}>Close</button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Course;
