import React from 'react'
import {FaFacebookSquare} from 'react-icons/fa'
import {FaGithubSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://facebook.com" target="_blank"><FaFacebookSquare/></a>
        <a href="https://github.com/jaycee76" target="_blank"><FaGithubSquare/></a>
        <a href="https://linkedin.com" target="_blank"> </a>
    </div>
  )
}

export default HeaderSocials