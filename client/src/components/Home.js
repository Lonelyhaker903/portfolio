import React from 'react';
import './Home.css'; // Import the CSS for animations
import profilePicture from './hero.jpg'; // Import your image

const Home = () => {
    return (
        <div className="home-container">
            <div className="intro">
                <h1 className="welcome-message">WELCOME TO MY PORTFOLIO</h1>
                <h2 className="name">SOMAROUTHU NAGA BALAJI</h2>
                <p className="tagline">I AM A STUDENT</p>
            </div>
            <div className="image-container">
                <img src={profilePicture} alt="Profile" className="profile-picture" />
            </div>
        </div>
    );
};

export default Home;
