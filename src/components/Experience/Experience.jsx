import {AiFillCheckCircle} from 'react-icons/ai'
import './Experience.css'

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Skills</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
      <div className="experience__frontend">
        <h3>Frontend Developer</h3>
        <div className="experience__content">
         <article className="experience__details">
          
          <AiFillCheckCircle className='icon'/>
          <div>
           <h4>HTML</h4>
           <small className='text-light'>Experienced</small>
          </div>
          </article>

         <article className="experience__details">
          <AiFillCheckCircle className='icon'/>
          <div>
           <h4>CSS</h4>
           <small className='text-light'>Experienced</small>
          </div>
         </article>
         <article className="experience__details">
          <AiFillCheckCircle className='icon'/>
          <div>
           <h4>JavaScript</h4>
           <small className='text-light'>Intermediate</small>
          </div>
         </article>
         <article className="experience__details">
          <AiFillCheckCircle className='icon'/>
          <div>
           <h4>ReactJs</h4>
           <small className='text-light'>Intermediate</small>
          </div>
         </article>


        </div>
      </div>
      <div className="experience__graphic">
        <h3>Graphic Designer</h3>
        <div className="experience__content">
         <article className="experience__details">
          <AiFillCheckCircle className='icon'/>
          <div>
           <h4>PhotoShop</h4>
           <small className='text-light'>Intermediate</small>
          </div>
         </article>
         <article className="experience__details">
          <AiFillCheckCircle className='icon'/>
          <div>
           <h4>Canva</h4>
           <small className='text-light'>Experienced</small>
          </div>
         </article>
         

        </div>
      </div>
      </div>
      
    </section>
  )
}

export default Experience
