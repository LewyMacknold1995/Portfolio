import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {AiFillLinkedin} from 'react-icons/ai'

const contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options"></div>
        <article className="contact__option">
        <MdOutlineEmail />
          <h4>Email</h4>
          <h5>Lewymacknold_ttm@hotmail.com</h5>
          <a href="mailto:lewymacknold_ttm@hotmail.com">Send a message</a>
        </article>

        <article className="contact__option">
        <AiFillLinkedin />
          <h4>LinkedIn</h4>
          <h5>Lewy Macknold</h5>
          <a href="https://www.linkedin.com/in/lewy-macknold-103089245/">View Profile</a>
        </article>

        <article className="contact__option">
        <MdOutlineEmail />
          <h4>Email</h4>
          <h5>Lewymacknold_ttm@hotmail.com</h5>
          <a href="mailto:lewymacknold_ttm@hotmail.com">Send a message</a>
        </article>
        <form action=""></form>
      </div>
    </section>
  )
}

export default contact