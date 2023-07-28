import {AiFillCheckCircle} from 'react-icons/ai'
import './Services.css'


const Services = () => {
  return (
    <section id="services">
      <h5>Things i can handle </h5>
      <h2>Services</h2>
      <div className=" container services__container">
       <article className="service">
        <div className="service__head">
          <h3>Social Media Mangement</h3>
        </div>
        <ul className="service__list">
         <li>
          <AiFillCheckCircle className='service__list-icon'/>
          <p>Content Creation</p>
         </li>
         <li>
          <AiFillCheckCircle className='service__list-icon'/>
          <p>Graphic Design</p>
         </li>
         <li>
          <AiFillCheckCircle className='service__list-icon'/>
          <p>Copy Writing</p>
         </li>
        </ul>

       </article>
       <article className="service">
        <div className="service__head">
          <h3>Web Development</h3>
        </div>
        <ul className="service__list">
         <li>
          <AiFillCheckCircle className='service__list-icon'/>
          <p> Mobile view</p>
         </li>
         <li>
          <AiFillCheckCircle className='service__list-icon'/>
          <p>E-commerce</p>
         </li>
         <li>
          <AiFillCheckCircle className='service__list-icon'/>
          <p>Blogs</p>
         </li>
        </ul>

       </article>

      </div>
    </section>
  )
}

export default Services
