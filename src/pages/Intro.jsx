import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";
import '../pages/Intro.css'
import bg from '../assets/myPic.jpg'

const Intro = () => {

  // Function to handle the download action
  const handleDownload = () => {
    // Example: Generate a download link and initiate download
    /* const link = document.createElement('a');
     link.href = 'https://app.enhancv.com/share/9632fa27/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic'; // Replace with your CV URL
     link.setAttribute('download', 'your-cv.pdf'); // Specify the filename
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);*/
    // Open the download link in a new window
    //window.open('https://app.enhancv.com/share/9632fa27/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic', '_blank');
    window.open(' https://app.enhancv.com/share/ba8e04d0', '_blank');
    // https://app.enhancv.com/share/ba8e04d0
  }

  return (
    <>
      <section id="intro">
        <div className="introContent">
         
          <span className='hello'> 👋 Hello, I am</span>

         
          <h1 className="introText">
            <span className="introName">Faiza Khan</span>
          </h1>

          <h2 className="jobTitle">
            Junior Full Stack Developer
          </h2>

          <p className="introPara">

            I build responsive full-stack web applications using React, Node.js, Express and PostgreSQL. Passionate about creating clean user interfaces, scalable APIs and modern web experiences.
          </p>
          <button className='btn' onClick={handleDownload}>
            Download CV
          </button>
        </div>

        <img src={bg} alt="profile" className='bg' />


        
        <Link
          to="skills"
          smooth={true}
          duration={600}
          offset={-70}
          className="scrollDown"
        >
          <FaArrowDown />
        </Link>


      </section>


    </>
  )
}

export default Intro
