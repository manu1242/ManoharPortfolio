import React from 'react';
import './Home.css';
import profilePic from '../assets/images/Manu.png';
import { useNavigate } from 'react-router-dom'; 

const Home = () => {
    const navigate = useNavigate();

    
    const handleResumeClick = () => {
        window.open(`${process.env.PUBLIC_URL}/Manohar Yalla.pdf`, '_blank');
    };

    const handleProjectsClick = () => {
        navigate('/projects');
    };

    return (
        <div className="sidebar">
            <img
                alt="Manohar"
                className="profile-pic"
                src={profilePic} 
            />
            <div className="content">
                <h1>Hello I'm Manohar</h1>
                <h2>Here's who I am &amp; what I do</h2>
                <div className="buttons">
                    <button className="btn btn-primary" onClick={handleResumeClick}>
                        RESUME
                    </button>
                    <button className="btn btn-secondary" onClick={handleProjectsClick}>
                        PROJECTS
                    </button>
                </div>
                <p>
                Energetic and self-motivated web developer with hands-on experience in creating dynamic and responsive applications.
                Proven track record in developing user-centric solutions, including a high-quality YouTube video downloader and a weather app. 
                Experienced in collaborative coding projects and technical design, focusing on enhancing user experience and functionality. Committed to continuous learning and applying technical expertise to cross-functional projects.
                </p>
            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com/manohar.yalla.9/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook"></i>
                </a>
                <a href="https://www.linkedin.com/in/manohar-yalla/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/manohar__y/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
            </div>
        </div>
    );
};

export default Home;
