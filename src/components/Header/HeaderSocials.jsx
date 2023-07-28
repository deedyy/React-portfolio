import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import './Header.css'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="http://linkedin.com/in/patience-udeh-822403221" target=""><BsLinkedin/></a>  
      <a href="https://github.com/deedyy" target=""><FaGithub/></a>
      
    </div>
  )
}

export default HeaderSocials


