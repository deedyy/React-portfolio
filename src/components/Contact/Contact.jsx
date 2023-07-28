import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin,BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'
import  { useRef } from 'react'


const Contact = () => {
   const form = useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ok7s2rp', 'template_1zofv2l', form.current, 'lqox_O2o4caj84a2t')
      
    e.target.reset()
  };

  return (
  <section id="contact">
    <h5>Get in Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact__container'>
      <div className="contact__options">
       <article className="contact__option">
        <MdOutlineEmail className='contact__option-icon'/>
        <h4>Email</h4>
        <h5>patienceudeh30@gmail.com</h5>
        <a href="mailto:patienceudeh30@gmail.com" target='_blank'>Send a message</a>
       </article>
       <article className="contact__option">
        <BsLinkedin className='contact__option-icon' />
        <h4>Linkedin</h4>
        <h5>Patience Udeh</h5>
        <a href="http://linkedin.com/in/patience-udeh-822403221" target='_blank'>Send a message</a>
       </article>
       <article className="contact__option">
        <BsWhatsapp className='contact__option-icon'/>
        <h4>WhatsApp</h4>
        <h5>+2349093361143</h5>
        <a href="https://wa.link/7gea60" target='_blank'>Send a message</a>
       </article>

      </div>
       
       <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>        
       </form>
    </div>
  </section>
  )
}

export default Contact
