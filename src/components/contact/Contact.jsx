import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiTelegramLine} from 'react-icons/ri'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.init('tAp6Pe-9VGbKo2lI_')
  emailjs.sendForm('service_7j3hp5t', 'template_tu6x0ud', form.current)

  e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jaycee.a.jasmin@gmail.com</h5>
            <a href="mailto:jaycee.a.jasmin@gmail.com" target="_blank">Send an email</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Jaycee Jasmin</h5>
            <a href="https://m.me/jayceejasmin" target="_blank">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiTelegramLine className='contact__option-icon' />
            <h4>Telegram</h4>
            <h5>@jyjsn</h5>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required />
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact