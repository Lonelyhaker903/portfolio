import React from 'react';
import './About.css'; // Import the CSS for animations
import aboutPicture from './hero.jpg'; // Import your image

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <h1 className="about-title">About Me</h1>
                <p className="about-description">
                    Hello! I'm Somarouthu Naga Balaji, a passionate student with a love for learning and exploring new technologies. 
                    My journey in tech started with a curiosity about how things work, which has now blossomed into a deep interest 
                    in software development, web design, and more. I am constantly seeking to expand my knowledge and skills.
                </p>
            </div>
            <div className="about-image-container">
                <img src={aboutPicture} alt="About Me" className="about-picture" />
            </div>
        </div>
    );
};

export default About;
