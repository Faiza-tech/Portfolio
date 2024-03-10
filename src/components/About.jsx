import React from 'react'
import '../components/About.css'

const About = () => {
  return (
    <section className="skills">
      <div className="main-about-container">



        <div className="intro">
          <h2>Introduction</h2>
          <p>
            Hi, I am Faiza Khan, a developer with a passion for creating innovative solutions and bringing ideas to life.My journey in the world of web development has been a delightful exploration of creativity and problem-solving.
          </p>
        </div>

        <div className="background">
          <h3>Background:</h3>
          <p>
            I grew up in the vibrant landscape of Pakistan, where I initially embarked on my coding journey. My love for web development ignited during my master's program in 2015. Life led me on a unique path, and I navigated a seven-year gap due to personal challenges. Despite the difficulties, I emerged stronger and more determined.
          </p>
          <p>
            In recent years, I've had the privilege of calling the United Kingdom home. This shift to the diverse and dynamic environment of the UK has played a pivotal role in shaping my personal and professional journey. Amidst this change, I rediscovered my passion for web development, finding solace, strength, and a renewed enthusiasm for turning ideas into interactive and visually appealing digital solutions. This cross-cultural experience has not only enriched my personal growth but has also influenced my approach to the ever-evolving field of web development.
          </p>
        </div>

        <div className="skills">
          <h3>Skills:</h3>
          <div className="skill-container">
            <div className="skills-1">
              <h4>Front-End Development:</h4>
              <ul>
                <li>HTML5</li>
                <li>CSS3 </li>
                <li>JavaScript </li>
                <li>React.js</li>
              </ul>
            </div>

            <div className="skills-2">
              <h4>Design:</h4>
              <ul>
                <li>User Interface (UI) Design</li>
                <li>Responsive Web Design</li>
                <li>Color Theory</li>
              </ul>
            </div>

            <div className="skills-3">
              <h4>Tools & Technologies:</h4>
              <ul>
                <li>Git & Version Control</li>
                <li>Visual Studio Code</li>
                <li>Responsive Design Frameworks (e.g: Bootstrap)</li>
              </ul>
            </div>

            <div className="skills-4">
              <h4>Soft Skills:</h4>
              <ul>
                <li>Team Collaboration</li>
                <li>Communication</li>
                <li>Creativity</li>
              </ul>
            </div>

            <div className="skills-5">
              <h4>Backend Development:</h4>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Prisma</li>
              </ul>
            </div>

            <div className="skills-6">
              <h4>Project Management:</h4>
              <ul>
                <li>Agile Methodology</li>
                <li>Scrum Framework</li>
                <li>Task Prioritization</li>
                <li>Time Management</li>
              </ul>
            </div>

          </div>
        </div>


      </div>
    </section>
  )
}

export default About