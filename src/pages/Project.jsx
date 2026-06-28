import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import React, { useState } from "react";
import "./Project.css";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import Abroad from "../assets/welcome Abroad.png";
import Book from "../assets/Books.png";
import Green from "../assets/reactGrenGrocers.png";
import Dog from "../assets/dogOwner.png";
import Recipe from "../assets/recipe.png";


const projects = [

  {
    id: 1,
    title: "Welcome To Abroad",
    image: Abroad,
    live: "https://welcomeabroad.netlify.app/",
    github: "https://github.com/Faiza-tech/",

    shortDesc:
      "A full-stack platform helping Pakistani expatriates access useful UK information.",

    description:
      /* `A Full-Stack web application designed to assist Pakistani expatriates by providing essential information about living in the UK, including education, healthcare, and more.
 
       Users can explore different categories and access resources to ease their transition abroad.
 
 
       Guest Login:
       Email: boolean@gmail.com
       Password: 12345`,*/
      (<>
        A Full-Stack web application designed to assist Pakistani expatriates by
        providing essential information about living in the UK, including
        education, healthcare, and more.

        <br />
        Users can explore different categories and access resources to ease their
        transition abroad.
        <br />
        
        <strong>
          Guest Login:
        </strong>
        <br />
        Email: boolean@gmail.com
        <br />
        Password: 12345
        <br /> <br />
      </>
      ),

    tags: [
      "React.js",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL"
    ]

  },


  {
    id: 2,
    title: "Books Finder",
    image: Book,
    live: "https://bookfinding.netlify.app/",
    github: "https://github.com/Faiza-tech/",

    shortDesc:
      "A React application allowing users to search and explore book information.",

    description:
      `A Front-end book-finding application built with React.

Users can search for books and view detailed information including descriptions and relevant data fetched from an external API.

The application demonstrates API integration, reusable components and responsive UI design.`,

    tags: [
      "React.js",
      "API",
      "JavaScript"
    ]

  },


  {
    id: 3,
    title: "React Greengrocers",
    image: Green,
    live: "https://github.com/Faiza-tech/react-greengrocers",
    github: "https://github.com/Faiza-tech/react-greengrocers",

    shortDesc:
      "An interactive grocery shopping application with cart functionality.",

    description:
      `A React-based grocery store application where users can browse products, add items to their basket and track total costs in real time.

The project includes dynamic state management where products are automatically updated when quantities change.`,

    tags: [
      "React.js",
      "State Management",
      /*"JavaScript"*/
    ]

  },


  {
    id: 4,
    title: "Dog Owner App",
    image: Dog,
    live: "https://github.com/Faiza-tech/js-dom-dog-owners",
    github: "https://github.com/Faiza-tech/js-dom-dog-owners",

    shortDesc:
      "Interactive JavaScript application using DOM manipulation.",

    description:
      `A JavaScript DOM manipulation project where users can browse a list of dogs and view detailed information about each one.

Clicking on a dog dynamically updates the information displayed, creating an interactive user experience.`,

    tags: [
      "JavaScript",
      "DOM",
      "HTML",
      "CSS"
    ]

  },


  {
    id: 5,
    title: "Recipe App",
    image: Recipe,
    live: "https://github.com/Faiza-tech/Recipe",
    github: "https://github.com/Faiza-tech/Recipe",

    shortDesc:
      "A recipe discovery application with search and animation features.",

    description:
      `An interactive recipe browsing application where users can explore different meals and view detailed recipe information.

The application includes search functionality, API data handling, responsive design and smooth animations.`,

    tags: [
      "React",
      "JavaScript",
      "CSS",
      "AOS"
    ]

  }

];



const Project = () => {


  const [selectedProject, setSelectedProject] = useState(null);



  return (

    <section className="projectsSection" id="worksPort">


      <div className="projectsContainer">


        <div className="projectsHeader">

          <h2>Featured Projects</h2>

          <div className="underline"></div>

          <p>
            A collection of frontend and full-stack applications demonstrating
            modern web development skills.
          </p>

        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 3,
            },
          }}
        >

          {projects.map((project) => (

            <SwiperSlide key={project.id}>

              <div className="projectCard">

                {/* <div className="projectImg">
                      <img src={project.image} alt={project.title} />
                    </div>*/}

                <div className="projectImg" onClick={() => setSelectedProject(project)} >

                  <img src={project.image} alt={project.title} />

                  <div className="projectOverlay">
                    <span className="viewBtn">
                      View Details
                    </span>
                  </div>

                </div>


                <div className="projectContent">

                  <span className="projectNo">
                    0{project.id}
                  </span>

                  <h3>{project.title}</h3>

                  <p>{project.shortDesc}</p>

                  <div className="tags">

                    {project.tags.slice(0, 3).map((tag, index) => (

                      <span key={index}>
                        {tag}
                      </span>

                    ))}

                  </div>

                  <div className="buttons">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                    </a>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaExternalLinkAlt />
                    </a>

                  </div>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>


        {/** Slider */}
        <div className="sliderDots">

          <span className="active"></span>

          <span></span>

          <span></span>

          <span></span>

          <span></span>

        </div>

      </div>


      {
        selectedProject &&

        <div className="modalOverlay">


          <div className="projectModal">

            {/* Close Button */}
            <button
              className="closeBtn"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>

            <h2>
              {selectedProject.title}
            </h2>

            <p >
              {selectedProject.description}
            </p>

            <h4>
              Technologies
            </h4>

            {/* MoDal Tag */}
            <div className="ModalTags">

              {
                selectedProject.tags.map((tag, index) => (

                  <span key={index}>
                    {tag}
                  </span>

                ))

              }

            </div>


            {/* Modal Buttons */}
            <div className="modalButtons">

              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                <span>Github</span>
              </a>

              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
              >
                <FaExternalLinkAlt />
                <span>Live Demo</span>
              </a>

            </div>


          </div>


        </div>

      }


    </section>


  )

}


export default Project;

