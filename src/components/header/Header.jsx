import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HeaderSocials from './HeaderSocials'
import Fade from 'react-reveal/Fade';

const Header = () => {
  return (
    <header>
      <Fade bottom>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>John Christopher Jasmin</h1>
          <h5 className="text-light">Front-End Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className='me'>
            <img src={ME} alt="picture of me" />
          </div>

          <a href="#contact" className='scroll__down'> Scroll Down </a>
        </div>
      </Fade>
    </header>
  )
}

export default Header