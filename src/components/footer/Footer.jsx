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
        <a href="https://twitter.com"><FiTwitter /></a>
        <a href="https://instagram.com"><BsInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Made by Jaycee Jasmin. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer