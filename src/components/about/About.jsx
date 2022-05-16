import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import { BsAward } from 'react-icons/bs'
import {VscNote} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small>Fresh Graduate</small>
            </article>
            <article className='about__card'>
              <VscNote className='about__icon' />
              <h5>IT Related Certs</h5>
              <small>5+ Certificates</small>
            </article>
            <article className='about__card'>
              <VscNote className='about__icon' />
              <h5>IT Related Certs</h5>
              <small>5+ Certificates</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Facilis ipsum quas, mollitia inventore cum accusamus doloribus,
            voluptates qui magnam nulla aperiam cumque quaerat sapiente nihil sequi perferendis cupiditate, rerum expedita!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About