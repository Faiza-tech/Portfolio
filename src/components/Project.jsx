import React from 'react'
import '../components/Project.css'
//import Portfolio from '../assets/brewery.png'
import Abroad from '../assets/welcome Abroad.png'
import Book from '../assets/Books.png'
import Green from '../assets/reactGrenGrocers.png'
import Dog from '../assets/dogOwner.png'
import Recipe from '../assets/recipe.png'

const Project = () => {
  return (
    <section id="worksPort">
      <h2 className="worksTitle">My Projects</h2>
      <span className="workDesc">Some of my recent projects:</span>

      <div className="worksImgs">


        <div className="card">
          <a href="https://welcomeabroad.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={Abroad} alt="" width={350} height={250} />
          </a>
          <h1>Welcome To Abroad</h1>

          <p>
            A Full-Stack web application designed to assist Pakistani expatriates by providing essential information about living in the UK, including education, healthcare, and more.
            Users can explore different categories and access resources to ease their transition abroad.
            <br /><br />
            <strong>Login as a Guest to see the features:</strong><br />
            Email: <strong>boolean@gmail.com</strong> <br />
            Password: <strong>12345</strong>
            <br /><br />
            <strong>Tech Used:</strong> React.js, Node.js, Express, Prisma, PostgreSQL.
          </p>
        </div>

        <div className="card">
          <a href="https://bookfinding.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={Book} alt="" width={350} height={250} />
          </a>
          <h1>Books</h1>

          <p>
            A Front-end book-finding project built with React. Users can search for any book and view its details, including a description and other relevant information.
            This app provides an easy way to explore books and find useful insights about them.
            <br /><br />
            <strong>Tech Used:</strong> React.js.
          </p>
        </div>

        <div className="card">
          <a href="https://github.com/Faiza-tech/react-greengrocers" target="_blank" rel="noopener noreferrer">
            <img src={Green} alt="" width={350} height={250} />
          </a>
          <h1>React Greengrocers</h1>

          <p>
            A React.js-based grocery store application where users can browse a selection of items, add products to their cart, and track their total cost in real time.
            If an item's quantity reaches zero, it is automatically removed from the cart, ensuring a smooth shopping experience.
            <br /><br />
            <strong>Tech Used:</strong> React.js.
          </p>
        </div>

        <div className="card">
          <a href="https://github.com/Faiza-tech/js-dom-dog-owners" target="_blank" rel="noopener noreferrer">
            <img src={Dog} alt="" width={350} height={250} />
          </a>
          <h1>Dog Owner</h1>

          <p>
            A JavaScript DOM manipulation project where users can browse a list of dogs and view detailed information about each one.
            Clicking on a dog updates the main card with its details, providing an interactive and dynamic experience.
            <br /><br />
            <strong>Tech Used:</strong> JavaScript, DOM Manipulation.
          </p>
        </div>

        <div className="card">
          <a href="https://github.com/Faiza-tech/Recipe" target="_blank" rel="noopener noreferrer">
            <img src={Recipe} alt="" width={350} height={250} />
          </a>
          <h1>Recipe App</h1>

          <p>
            An interactive recipe browsing application where users can explore a variety of delicious meals
            and view detailed information about each dish. Users can search for recipes, discover new meals,
            and enjoy a dynamic browsing experience with smooth animations.
            <br /><br />
            <strong>Tech Used:</strong> React, JavaScript, DOM Manipulation, CSS, AOS Animation.
          </p>
        </div>


      </div>

    </section>
  )
}

export default Project


