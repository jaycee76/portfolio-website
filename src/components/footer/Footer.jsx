import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {AiOutlineFacebook} from 'react-icons/ai'
import {FiTwitter} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JCAJ</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/JayceeJasmin/"><AiOutlineFacebook /></a>
        <a href="https://twitter.com/jayceejasmin2?t=g3-fuuPAz78_1XDx6B8eCg&s=09p&fbclid=IwAR2DK9BaMpBVIaBVoSN8kdKHYjjd7RVeixRULhwnGtUXpa-Sqtpwr1KxMjk"><FiTwitter /></a>
        <a href="https://www.instagram.com/jayceejasmin/"><BsInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Made by Jaycee Jasmin. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer