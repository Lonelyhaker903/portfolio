import React from 'react';
import './Education.css';

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "Kakinada Group of Institutions",
      duration: "2022 - 2026",
      description: "Focused on software engineering, data structures, algorithms, and web development.",
    },
    {
      degree: "Intermediate Education",
      school: "Narayana Junior College",
      duration: "2020 - 2022",
      description: "Specialized in MPC (Maths, Physics, and Chemistry) with a strong foundation in analytical thinking and problem-solving.",
    },
    {
      degree: "High School",
      school: "Vignana Vihar High School",
      duration: "2018 - 2020",
      description: "Completed secondary education with a focus on science and mathematics, participating in various extracurricular activities.",
    },
  ];

  return (
    <div className="education-container">
      <h1 className="education-heading">Education</h1>
      {educationData.map((edu, index) => (
        <div key={index} className="education-card">
          <h2 className="education-degree">{edu.degree}</h2>
          <h3 className="education-school">{edu.school}</h3>
          <p className="education-duration">{edu.duration}</p>
          <p className="education-description">{edu.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Education;
