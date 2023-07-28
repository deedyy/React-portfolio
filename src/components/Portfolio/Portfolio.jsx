import './Portfolio.css'
import portfolio1 from '../../assets/portfolio1.jpg'


const data= [
  {
  id: 1,
  Image: portfolio1,
  title: 'HireCraft',
  github:"https://github.com/learnable-2022/HCR-FE",
  demo:"https://www.crafthire.online/"
  },
  {
    id: 2,
    Image: portfolio1,
    title: 'HireCraft',
    github:"https://github.com/learnable-2022/HCR-FE",
    demo:"https://www.crafthire.online/"
    },

    {
      id: 3,
      Image: portfolio1,
      title: 'HireCraft',
      github:"https://github.com/learnable-2022/HCR-FE",
      demo:"https://www.crafthire.online/"
      },
]

const Portfolio = () => {
  return (
    <section id="portfolio">
     <h5>Some of My Completed Works</h5>
     <h2>Portfolio</h2>
     <div className='container portfolio__container'>
        {
          data.map(({id,Image, title,github,demo})=>{
            return(
            <article className='portfolio__item'>
            <div className='portfolio__item-image'>
               <img src={Image}alt="{title}" />
            </div>
              <h3>{title}</h3>
              <div className='portfolio__cta'>
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
           </article>
           )
            })
            }
      
      
       </div>
    </section>
  )
}

export default Portfolio
