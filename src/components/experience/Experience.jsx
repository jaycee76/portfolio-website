import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='certificates'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        {/* END OF FRONTEND COMPONENT  */}

        <div className="experience__certificates">
          <h3>Certificates</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Web Development</h4>
                <small className='text-light'><a href="https://drive.google.com/file/d/1dS0d2BCacc5Vhi9aKaC3xaGeSP8GyKS0/view?usp=sharing">View Certificate</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className='text-light'><a href="https://drive.google.com/file/d/1hzP8sWlBjYQ0gUBHKJGXnEdfefqbFXYG/view?usp=sharing">View Certificate</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                <small className='text-light'><a href="https://drive.google.com/file/d/16v1Uj_EDCTYmpH8ptywS4BysrbrSd7dd/view?usp=sharing">View Certificate</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Visual Studio</h4>
                <small className='text-light'><a href="https://drive.google.com/file/d/1ZCVsLynvfx-qSFap3PTqxzSYfmNxvNwr/view?usp=sharing">View Certificate</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'><a href="https://drive.google.com/file/d/1SCchAp82phIQZyJhgvELfk-i9aOUpRwu/view?usp=sharing">View Certificate</a></small>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience