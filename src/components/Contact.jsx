import React, { useRef } from 'react'
import '../components/Contact.css'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        // Validate form fields
        const name = form.current.your_name.value;
        const email = form.current.your_email.value;
        const message = form.current.message.value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.'); // Display an alert if any field is empty
            return;
        }

        emailjs
            .sendForm('service_fxkmos4', 'template_75h63b3', form.current, {
                publicKey: 'oFuNlKly5wrC1Eh55',
            })
            .then(
                (result) => {
                    console.log(result.text); // Log the result text
                    e.target.reset(); // Reset the form
                    alert('Email sent successfully !'); // Display an alert SUCCESS
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            )
    }

    return (

        <section id="contactPage">

            <div className="contact">
                <div className='intouch'>
                    <h1> Get In Touch</h1>
                    <p>Interested in hiring me for your project or employement? You can fill in the contact form below or send me an email to
                        <span> <a href="mailto:faraz_ul_islam@yahoo.com">Faraz_ul_islam@yahoo.com</a></span></p>
                    <p> Want to get connected? Follow me on the social channels below.</p>
                    <div className="social">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                            <FaFacebook size={30} style={{ color: '#1877f2', marginRight: '20px' }} />
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} style={{ color: '#0e76a8', marginRight: '20px' }} />
                        </a>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} style={{ color: '#6e5494', marginRight: '20px' }} />
                        </a>
                    </div>
                </div>
            </div>

            <div id="contacts">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work oppertunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className='name' placeholder='Your Name' name="your_name" />

                    <input type="email" className='email' placeholder='Your Email' name="your_email" />

                    <textarea name="message" id="" rows="5" placeholder='your Message' className='msg'  ></textarea>

                    <button className="submitBtn" type='submit' value='send'>Submit</button>
                </form>
            </div>



        </section>
    )
}

export default Contact