import React from "react";
import "./Home.css";
import { Typewriter } from "react-simple-typewriter";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleResumeClick = () => {
    window.open(`${process.env.PUBLIC_URL}/Manohar (3).pdf`, "_blank");
  };

  

  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="title-text">
          Hello, I'm <span className="emphasized">Manohar</span>
        </h1>
        <h2 className="typing-effect">
          <Typewriter
            words={["Front End Developer"]}
            loop={8}
            typeSpeed={90}
            deleteSpeed={90}
            delaySpeed={1000}
          />
        </h2>
        <p className="intro-text">
          Aspiring Web Developer skilled in building dynamic, responsive websites using HTML, CSS, JavaScript, React.js, and Python.
          Passionate about optimizing front-end performance and ensuring seamless cross-device compatibility.
        </p>
        <div className="button-group">
          <button className="action-btn primary" onClick={handleResumeClick}>
            RESUME
          </button>
          
        </div>
        <div className="icon-links">
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
    </div>
  );
};

export default Home;
