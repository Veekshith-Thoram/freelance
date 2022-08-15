import React from 'react';
import '../CssFiles/Technologies.css'
import contentWriting from './images/content-wriring.png';
import finance from './images/finance.png';
import gameDevelopment from './images/game-development.png';
import graphicsdesign from './images/graphics-design.png';
import logoDesign from './images/logo-design.png';
import seo from './images/seo.png';

function Technologies() {
  return (
    <div className='container-tech'>
        <div className='text-container'>
          <div className='normal-text'>Lorem ipsum dolor sit amet, consectetur</div>
          <div className='bold-text'>Our Choices with different technology</div>
        </div>
        <div className='image-container'>
        <div className='image-display content-writing'>
            <div className='image-description'>Content Writing</div>
            <img src={ contentWriting } alt="content writing" />
          </div>
          <div className='image-display graphics-design'>
            <div className='image-description'>Graphics Design</div>
            <img src={ graphicsdesign } alt="graphicsdesign" />
          </div>
          <div className='image-display finance'>
            <div className='image-description'>Finance</div>
            <img src={ finance } alt="finance" />
          </div>
          <div className='image-display seo'>
            <div className='image-description'>SEO</div>
            <img src={ seo } alt="SEO" />
          </div>
          <div className='image-display game-development'>
            <div className='image-description'>Game Development</div>
            <img src={ gameDevelopment } alt="Game Development" />
          </div>
          <div className='image-display logod-design'>
            <div className='image-description'>Logo Design</div>
            <img src={ logoDesign } alt="Logo Design" />
          </div>
        </div>
    </div>
  )
}

export default Technologies