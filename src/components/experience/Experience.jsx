import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Developement</h3>
          <div className="experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>HTML</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>CSS</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Tailwind CSS</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Javascript</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Bootstrap</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon' />
            <div>
            <h4>JQuery</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>React</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>

          </div>

        </div>
        <div className="experience__backend">
        <h3>Backend Developement</h3>
          <div className="experience__content">
          <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Node JS</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>MongoDB</h4>
            <small className="text-light">Basic</small>
            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Mongoose</h4>
            <small className="text-light">Basic</small>
            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>MySQL</h4>
            <small className="text-light">Basic</small>
            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Git</h4>
            <small className="text-light">Experienced</small>
            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>API's</h4>
            <small className="text-light">Basic</small>
            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Security</h4>
            <small className="text-light">Basic</small>
            </div>
          </article>

          <article className="experience__details">
            <BsFillPatchCheckFill className='experience__details-icon'/>
            <div>
            <h4>Web 3 - Motoko</h4>
            <small className="text-light">Intermediate</small>
            </div>
          </article>

          </div>

        </div>
        </div>
      
    </section>
  )
}

export default Experience