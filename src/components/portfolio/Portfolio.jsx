import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Finance.png'
import IMG2 from '../../assets/Screenshot 2023-10-16 at 11.05.57.png'
import IMG3 from '../../assets/dkeeper1.png'
import IMG4 from '../../assets/todo1.png'
import IMG5 from '../../assets/simonsays.png'
import IMG6 from '../../assets/tetris.jpeg'




const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Frontend Financial Visualisation Dashboard (Vite, React JS)',
    github: 'https://github.com/LewyMacknold1995/Vite_React_SAAS_Dashboard',
    demo: 'https://courageous-kringle-fc35f6.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Frontend Data Finance Website (React JS, Tailwind CSS',
    github: 'https://github.com/LewyMacknold1995/Data-Finance-Website',
    demo: 'https://lewymacknold1995.github.io/Data-Finance-Website/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Google Keep Clone - Note Taking App (React JS, Motoko)',
    github: 'https://github.com/LewyMacknold1995/Google-Keep-Clone',
    demo: 'https://lewymacknold1995.github.io/Google-keep-clone/dkeeper_assets/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'To Do App (React JS, Javascript)',
    github: 'https://github.com/LewyMacknold1995/To-Do-App',
    demo: 'https://lewymacknold1995.github.io/todoapp/index.html'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Simon Says Video Game (Javascript)',
    github: 'https://github.com/LewyMacknold1995/SimonSays_Game',
    demo: 'https://lewymacknold1995.github.io/SimonSaysGame/SimonSaysGame/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Tetris Video Game (Javascript)',
    github: 'https://github.com/LewyMacknold1995/Tetris',
    demo: 'https://lewymacknold1995.github.io/Tetris/index.html'
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
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img className="photo" src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
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