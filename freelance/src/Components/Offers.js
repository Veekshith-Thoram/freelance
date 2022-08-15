import React from 'react'
import offerImg from './images/offers.png';
import '../CssFiles/Offers.css';
import location from './images/location.png';
import tools from './images/tools.png';

function Offers() {
  return (
    <div className='Offers-Container'>
        <img src={ offerImg } alt='offerimage' className='offer-image' />
        <div className='access-content'>
            <div className='offers-content'>
                <div className='plain-text'>Lorem ipsum dolor sit amet, consectetur</div>
                <div className='offer-heading'>What We Offer You !</div>
            </div>
            <div className='access-container'>
                <img src={ location } alt='location' className='access-image' />
                <div className='location'>
                <div className='access-heading'>Location By Developer</div>
                <div className='access-description'>Lorem ipsum dolor sit amet, consectetur  elit. Felis donec volutpat duis diam tempor.</div>
                </div>
            </div>
            <div className='access-container'>
                <img src={ tools } alt='tools' className='access-image' />
                <div className='clients-freelancer'>
                <div className='access-heading'>Client & Freelancer Features</div>
                <div className='access-description'>Lorem ipsum dolor sit amet, consectetur  elit. Felis donec volutpat duis diam tempor.</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Offers