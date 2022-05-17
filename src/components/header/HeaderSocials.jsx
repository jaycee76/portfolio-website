import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.facebook.com/JayceeJasmin/" target="_blank"><FaFacebookSquare/></a>
        <a href="https://github.com/jaycee76" target="_blank"><FaGithubSquare/></a>
        <a href="https://www.linkedin.com/in/john-christopher-jasmin-752b2423a/" target="_blank"><FaLinkedin/></a>
    </div>
  )
}

export default HeaderSocials