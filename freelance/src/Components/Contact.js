import React from 'react';
import '../CssFiles/Contact.css';

function Contact() {
  return (
    <div className='Contact-container'>
        <div className='contact-text'>
            <div className='contact-subtext'>Contact Us</div>
            <div className='contact-heading'>Let’s have a conversation for your Query !</div>
        </div>
        <div className='contact-form'>
            <label for="email" className='label-name'>Email:</label>
            <input type='email' className='email-input' placeholder='eg.  saumen.thakur@gmail.com' />
            <label for='message' className='label-name'>Message</label>
            <input type='textarea' className='textarea' />
            <button className='send-request label-name'>Send Request</button>
        </div>
    </div>
  )
}

export default Contact