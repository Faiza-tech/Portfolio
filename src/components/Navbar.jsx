import React, { useState } from 'react'
import '../components/Navbar.css'
import logo from '../assets/realLogo.jpg'
import { Link } from 'react-scroll'
import Menu from '../assets/menu.png'


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className='navbar'>
      <img src={logo} alt="logo" className='logo' />
      <div className='desktopMenu'>
    
        <Link  activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Home</Link>
        <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-80} duration={500}  className="desktopMenuListItem">About</Link>
        <Link  activeClass='active' to='worksPort' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Project</Link>
        <Link   activeClass='active' to='contactPage' spy={true} smooth={true} offset={-100} duration={500}  className="desktopMenuListItem">Client</Link>
      </div>

      <button className='desktopMenuBtn' onClick={() => {
        document.getElementById('contactPage').scrollIntoView({ behavior: 'smooth' })
      }}>Contact Me</button>

      {/**for hamburger menu */}
      <img src={Menu} alt="menu" className='mobmenu' onClick={() => setShowMenu(!showMenu)}/>
      <div className='navMenu' style={{display : showMenu? 'flex':'none'}}>

        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem"  onClick={() => setShowMenu(false)}>Home</Link>

        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>About</Link>

        <Link activeClass='active' to='worksPort' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Project</Link>

        <Link activeClass='active' to='contactPage' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Client</Link>

       {/* <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={() => setShowMenu(false)}>Client</Link> */}
      </div>
      </nav>

  )
}

export default Navbar