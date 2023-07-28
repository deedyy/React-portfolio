import { FaAward } from "react-icons/fa"
import pic1 from '../../assets/pic1.jpg'
import { RiFileUserFill, RiFolder2Fill } from "react-icons/ri"
import './About.css'

const About = () => {
  return (
     
    <section id="about">
      
      <h5>Let's get acquainted</h5>
      <h2>About Me</h2>
      <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
         <img src={pic1} alt="portrait" />
        </div>

      </div>
      <div className="about__content">
      <div className="about__card">
        <article className="about__cards">
        <FaAward className="about__icon"/> 
        <h5>Experience</h5>
        <small> 2+ years</small>
        
        </article>
        <article className="about__cards">
        <RiFileUserFill className="about__icon"/> 
        <h5>Clients</h5>
        <small> 6+ </small>
        
        </article>
        <article className="about__cards">
        < RiFolder2Fill className="about__icon"/> 
        <h5>Projects</h5>
        <small> 11+ </small>
        
        </article>

      </div>
      <p>
      Experienced and driven professional 
      with a proven track record in copywriting,
       social media management, and web development. 
       Strong expertise in graphic design and a certified 
       Frontend Developer. Committed to delivering high-quality
        results and exceeding expectations through effective problem-solving,
         strategic thinking, and exceptional communication skills. 
      </p>
      <a href="#contact" className="btn btn-primary">Let's talk</a>
      </div>
      </div>
    </section>
  )
}

export default About
