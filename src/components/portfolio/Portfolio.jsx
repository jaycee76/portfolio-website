import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Tesla Website UI Clone',
    github: 'https://github.com/jaycee76/tesla-clone',
    demo: 'https://github.com/jaycee76/tesla-clone'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Disney+ Website UI Clone',
    github: 'https://github.com/jaycee76/disney-plus-clone',
    demo: 'https://github.com/jaycee76/disney-plus-clone'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'> Live Demo </a>
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