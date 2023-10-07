import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Lewy Macknold</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/lewy-macknold-103089245/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/LewyMacknold1995" target="_blank"><AiFillGithub/></a>
      
      </div>

  
    </footer>
  )
}

export default Footer