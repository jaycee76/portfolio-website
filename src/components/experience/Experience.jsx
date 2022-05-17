import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'
import Fade from 'react-reveal/Fade';

const Experience = () => {
  return (
    <section id='certificates'>
      <Fade bottom>
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
                <small className='text-light'><a href="https://www.udemy.com/certificate/UC-b3929ec5-c6f8-4f5f-a595-ef43396b1621/" target="_blank">View Certificate</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Angular</h4>
                <small className='text-light'><a href="https://www.udemy.com/certificate/UC-402faf5d-de4e-423a-8f73-6e851cadcafb/" target="_blank">View Certificate</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Git</h4>
                <small className='text-light'><a href="https://www.udemy.com/certificate/UC-b1c760c9-fd63-4ff9-b4bc-31cbbe09cc7b/" target="_blank">View Certificate</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Visual Studio</h4>
                <small className='text-light'><a href="https://www.udemy.com/certificate/UC-5ef0d80d-a9cb-4aa8-91de-05931b7d303d/" target="_blank">View Certificate</a></small>
              </div>
            </article>
            <article className='experience__details'>
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className='text-light'><a href="https://www.udemy.com/certificate/UC-0d199506-53ab-4b19-bcc6-25e75fdaefe9/" target="_blank">View Certificate</a></small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </Fade>
    </section>
  )
}

export default Experience