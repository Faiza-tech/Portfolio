import React from 'react'
import '../components/Intro.css'
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
      window.open('https://app.enhancv.com/share/9632fa27/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic', '_blank');
  }

  return (
    <section id="intro">
        <div className="introContent">
         <span className='hello'>Hello,</span>
         <span className="introText">I am <span className="introName">Faiza</span> <br />Full Stack Developer</span>
         <p className="introPara">I'm a skilled web designer & deveoper with experience in <br/> creating visually  appealing and user friendly websites.</p>
         <button  className='btn'  onClick={handleDownload}>
           Resume
         </button>
        </div>
        <img src={bg} alt="profile"  className='bg'/>
    </section>
  )
}

export default Intro
