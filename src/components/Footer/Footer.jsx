import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
      <div className='footer__socials'>
      <a href="http://linkedin.com/in/patience-udeh-822403221" target=""><BsLinkedin/></a>  
       <a href="https://github.com/deedyy" target=""><FaGithub/></a>
      
      </div>
      <div className='footer__copyright'>
        <small>
          &copy;Patience Udeh, all rights reserved.
        </small>
      </div>
       
    </footer>
  )
}

export default Footer
