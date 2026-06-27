import { useState } from "react";
import "./Skills.css";


const skillsData = [
    {
        title: "Frontend Development",
        skills: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "React.js",
            "TypeScript",
            "Next.js",
            "Tailwind CSS",
            "Bootstrap"
        ]
    },

    {
        title: "Backend Development",
        skills: [
            "Node.js",
            "Express.js",
            "REST APIs",
            "Authentication",
            "Prisma"
        ]
    },

    {
        title: "Database",
        skills: [
            "PostgreSQL",
            "MongoDB",
            "Database Design",
            "SQL",
            "Data Modelling"
        ]
    },

    {
        title: "Tools & Cloud",
        skills: [
            "Git",
            "GitHub",
            "Docker",
            "AWS",
            "Jasmine",
            "Agile/Scrum"
        ]
    }
];


const Skills = () => {

    const [active, setActive] = useState(null);


    return (

        <div className="skills">

            <h3>Technical Skills</h3>


            <div className="accordion">


                {skillsData.map((item, index) => (


                    <div className="skill-item" key={index}>


                        <div
                            className="skill-title"
                            onClick={() => setActive(active === index ? null : index)}
                        >


                            <h4>{item.title}</h4>


                            <span>
                                {active === index ? "−" : "+"}
                            </span>


                        </div>



                        {active === index && (

                            <div className="skill-content">


                                {item.skills.map((skill, i) => (

                                    <span key={i}>
                                        {skill}
                                    </span>

                                ))}


                            </div>

                        )}



                    </div>


                ))}



            </div>

        </div>


    )

}


export default Skills;