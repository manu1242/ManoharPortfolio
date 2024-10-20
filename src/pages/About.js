import React from 'react';
import './About.css';
import { MdPersonOutline } from 'react-icons/md';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaPython } from 'react-icons/fa';
import { FiFigma } from 'react-icons/fi';
import { GiTimeBomb, GiTrophyCup, GiTeamIdea, GiSkills, GiTalk } from 'react-icons/gi';
import { FaHeadset} from 'react-icons/fa';

const Skills = () => {
  const technicalSkills = [
    { id: 1, name: 'React', icon: <FaReact /> },
    { id: 2, name: 'JavaScript', icon: <FaJs /> },
    { id: 3, name: 'HTML', icon: <FaHtml5 /> },
    { id: 4, name: 'CSS', icon: <FaCss3Alt /> },
    { id: 5, name: 'Python', icon: <FaPython /> },
    { id: 6, name: 'Figma', icon: <FiFigma /> },
  ];
  const softSkills = [
    { id: 1, name: 'Time Management', icon: <GiTimeBomb /> },
    { id: 2, name: 'Hardworking', icon: <GiTrophyCup /> },
    { id: 3, name: 'Leadership', icon: <GiTrophyCup /> },
    { id: 4, name: 'Adaptability', icon: <GiTeamIdea /> },
    { id: 5, name: 'Teamwork', icon: <GiSkills /> },
    { id: 6, name: 'Communication Skills', icon: <GiTalk /> },
    { id: 7, name: 'Customer Needs', icon: <FaHeadset /> }, 
    { id: 8, name: 'Work Independently', icon: <MdPersonOutline /> },  
    { id: 9, name: 'Architecture', icon: <GiTeamIdea /> },
  ];
  
  

  const programmingLanguages = [
    'Python', 'JavaScript', 'SQL', 'HTML', 'CSS'
  ];

  const frameworks = [
    'React', 'Figma'
  ];

  const developmentTools = [
    'Visual Studio Code'
  ];

  const interests = [
    'Web Development', 'Web Designing', 'Innovation'
  ];

  const languages = [
    'English', 'Telugu', 'Hindi (Basics)'
  ];

  const volunteering = [
    'Member, AEE, SRKR ENGINEERING COLLEGE',
    'Facilitated student engagement and promoted soft skills development through event explanations and active participation.'
  ];

  const awards = [
    { id: 1, description: 'Certified in PYTHON LANGUAGE, OpenWeaver Feb 2024' },
    { id: 2, description: 'Certified in HANDS-ON EV DESIGN, JNTUK Mar 2024' },
    { id: 3, description: 'Certified in RESPONSIVE WEB DESIGNING COURSE, CodeCamp Mar 2024' },
    { id: 4, description: 'Certified in FRONT END TECHNOLOGIES COURSE, GreatLearning Apr 2024' }
  ];

  return (
    <div className="about-container">
      <h1>About Me</h1>

      
      <div className="skills-section">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {technicalSkills.map((skill) => (
            <div key={skill.id} className="skill-box">
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

     
      <div className="skills-section">
        <h2>Soft Skills</h2>
        <div className="skills-grid">
          {softSkills.map((skill) => (
            <div key={skill.id} className="skill-box">
              <div className="skill-icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      
      <div className="skills-section">
        <h2>Programming Languages</h2>
        <ul>
          {programmingLanguages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>

     
      <div className="skills-section">
        <h2>Frameworks</h2>
        <ul>
          {frameworks.map((framework, index) => (
            <li key={index}>{framework}</li>
          ))}
        </ul>
      </div>

     
      <div className="skills-section">
        <h2>Development Tools</h2>
        <ul>
          {developmentTools.map((tool, index) => (
            <li key={index}>{tool}</li>
          ))}
        </ul>
      </div>

      <div className="skills-section">
        <h2>Interests</h2>
        <ul>
          {interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
      <div className="skills-section">
        <h2>Languages</h2>
        <ul>
          {languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>
      <div className="skills-section">
        <h2>Volunteering</h2>
        <ul>
          {volunteering.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
      <div className="skills-section">
        <h2>Awards</h2>
        <ul>
          {awards.map((award) => (
            <li key={award.id}>{award.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;
