import React from 'react'
import '../CssFiles/About.css';
import twitter from './images/titter.png';
import fb from './images/fb.png';
import insta from './images/insta.png';

function About() {
  return (
    <div className='about-container'>
        <div className='logo-details'>
            <div className='Logoo'>Logo</div>
            <div className='logo-text'>1901 Thornridge Cir. Shiloh, Hawaii 81063</div>
        </div>
        <div className='company-details'>
            <ul className='list-non-bullet'>
                <li className='list-first'>Company</li>
                <li className='list-sub'>About Us</li>
                <li className='list-sub'>Career</li>
                <li className='list-sub'>Team</li>
                <li className='list-sub'>Contact</li>
            </ul>
            <ul className='list-non-bullet'>
                <li className='list-first'>Product</li>
                <li className='list-sub'>Service</li>
                <li className='list-sub'>Freelancer</li>
                <li className='list-sub'>Features</li>
                <li className='list-sub'>Development</li>
            </ul>
            <ul className='list-non-bullet'>
                <li className='list-first'>Links</li>
                <li className='list-sub'>Privacy Policy</li>
                <li className='list-sub'>Term&Condition</li>
                <li className='list-sub'>FAQ</li>
            </ul>
        </div>
        <div className='socials'>
            <div className='list-first'>Follow Us</div>
            <img src={twitter} className='social-img' alt='twitter' />
            <img src={fb} className='social-img' alt='fb' />
            <img src={insta} className='social-img' alt='insta' />
        </div>
    </div>
  )
}

export default About