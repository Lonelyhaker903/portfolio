import React from 'react';
import './Skills.css';

function Skills() {
  const skillsData = [
    {
      category: "Programming Languages",
      skills: ["JavaScript", "Python", "Java", "C++", "HTML", "CSS"],
    },
    {
      category: "Web Development",
      skills: ["React", "Node.js", "Express"],
    },
    {
      category: "Database Management",
      skills: ["MySQL", "MongoDB", "PostgreSQL"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "GitHub", "AWS"],
    },
   
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-heading">Skills</h1>
      <div className="skills-grid">
        {skillsData.map((skillCategory, index) => (
          <div key={index} className="skills-card">
            <h2 className="skills-category">{skillCategory.category}</h2>
            <ul className="skills-list">
              {skillCategory.skills.map((skill, i) => (
                <li key={i} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
