import React from 'react'
import '../components/Intro.css'
import bg from '../assets/myPic.jpg'
import {Link} from 'react-scroll'


{/**this is Home */}

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
         <span className='hello'>Hello,</span>
         <span className="introText">I am <span className="introName">Faiza</span> <br />Full Stack Developer</span>
         <p className="introPara">I'm a skilled web designer & deveoper with experience in <br/> creating visually  appealing and user friendly websites.</p>
        <Link  to='contactPage'><button className='btn'>Hire Me</button></Link>
        </div>
        <img src={bg} alt="profile"  className='bg'/>
    </section>
  )
}


export default Intro