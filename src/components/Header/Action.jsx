import Resume from '../../assets/Resume.pdf'
import './Header.css'

const Action = () => {
  return (
    <div className="action">
        <a href={Resume} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
      
    </div>
  )
}

export default Action
