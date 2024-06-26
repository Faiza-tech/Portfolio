import React from 'react'
import '../components/Project.css'
//import Portfolio from '../assets/brewery.png'
import Green from '../assets/reactGrenGrocers.png'
import Dog from '../assets/dogOwner.png'

const Project = () => {
  return (
    <section id="worksPort">
      <h2 className="worksTitle">My Projects</h2>
      <span className="workDesc">Some of my recent projects:</span>

      <div className="worksImgs">

        <div className="card">

          <a href="https://github.com/Faiza-tech/react-greengrocers" target="_blank" rel="noopener noreferrer">
            <img src={Green} alt="" width={350} height={250} />
          </a>
          <h1>React Greengrocers</h1>

          <p>
            A user can view a selection of items in the store,
            From the store, a user can add an item to their cart,
            If an item's quantity equals zero it is removed from the cart,
            A user can view the current total in their cart
          </p>
        </div>

        <div className="card">

          
          <a href="https://github.com/Faiza-tech/js-dom-dog-owners" target="_blank" rel="noopener noreferrer">
          <img src={Dog} alt="" width={350} height={250} />
          </a>
          <h1>Dog Owner</h1>

          <p>Render the top list of dogs using the list item template,When you click on an item, the selected dog should display on the main card,The main card should contain all the information from the selected dog </p>
        </div>


      </div>
     
    </section>
  )
}

export default Project


