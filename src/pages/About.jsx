import Skills from '../components/Skills'
import './About.css'

const About = () => {
  return (
    <section >
      <div className="main-about-container">

        <div className="intro">
          <h2>Introduction</h2>
          <p>
           
            Hi, I'm Faiza Khan, a Junior Full Stack Developer specialising in building responsive and scalable web applications. I enjoy creating complete solutions using React, Node.js, Express, and PostgreSQL, from designing user interfaces to developing backend APIs and database integrations.
          </p>
        </div>

        <div className="background">
          <h3>Background:</h3>
         
          <p>My journey into software development started during my Computer Science studies, where I developed a strong foundation in programming and problem-solving.
            <br />
            After completing my Full Stack Development Bootcamp at Boolean UK, I focused on building real-world applications using modern technologies including React, Node.js, Express, PostgreSQL and cloud tools.
            <br />
            I have experience creating full-stack applications with authentication, APIs, database management and responsive user interfaces.</p>
        </div>


        <Skills  />

      </div>
    </section>
  )
}

export default About