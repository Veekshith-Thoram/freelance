import React from 'react';
import code from './images/code.png';
import music from './images/music.png';
import socialMedia from './images/social-media.png';
import design from './images/Expanded.png';
import finance from './images/finance-feature.png';
import content from './images/content.png';
import sales from './images/bar-chart.png';
import '../CssFiles/Features.css';

function Features() {
  return (
    <div className='Features-container'>
        <div className='features-subtext'>Lorem ipsum dolor sit amet, consectetur</div>
        <div className='features-heading'>Features for Your Growth</div>
        <div className='features-classification'>
            <div className='features-sub'>
                <img src={ code } alt='text' className='features-img' />
                <div className='features-image-heading'>Programming</div>
            </div>
            <div className='features-sub'>
                <img src={ music } alt='text' className='features-img' />
                <div className='features-image-heading'>Music</div>
            </div>
            <div className='features-sub'>
                <img src={ socialMedia } alt='text' className='features-img' />
                <div className='features-image-heading'>Digital Marketing</div>
            </div>
            <div className='features-sub'>
                <img src={ design } alt='text' className='features-img' />
                <div className='features-image-heading'>Design & Art</div>
            </div>
            <div className='features-sub'>
                <img src={ finance } alt='text' className='features-img' />
                <div className='features-image-heading'>Finance</div>
            </div>
            <div className='features-sub'>
                <img src={ content } alt='text' className='features-img' />
                <div className='features-image-heading'>Content</div>
            </div>
            <div className='features-sub'>
                <img src={ sales } alt='text' className='features-img' />
                <div className='features-image-heading'>Sales & Marketing</div>
            </div>
        </div>
    </div>
  )
}

export default Features