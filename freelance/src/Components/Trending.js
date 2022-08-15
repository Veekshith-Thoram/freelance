import React from 'react';
import '../CssFiles/Trending.css';
import rightArrow from './images/right-arrow.png';
import leftArrow from './images/left-arrow.png';
import oldMan from './images/senior-man.png';
import ratingStar from './images/rating-star.png';
import suitcase from './images/suitcase.png';
import clerk from './images/clerk-with-tie.png';
import cheerfulIndian from './images/cheerful-indian.png';
import blackGuy from './images/black-guy.png';
import bessieCooper from './images/photo-young.png';
import albertFlores from './images/albert-flores.png';

function Trending() {
  return (
    <div className='container-trending'>
      <div className='top-container-trending'>
      <div className='text-container-trending'>
          <div className='color-text'>Lorem ipsum dolor sit amet, consectetur</div>
          <div className='black-text'>Trending Freelancer</div>
        </div>
        <div className='arrow-container'>
          <div className='left-arrow-container'><img src={ leftArrow } alt="LeftArrow" /></div>
          <div className='right-arrow-container'><img src={ rightArrow } alt="RightArrow" /></div>
        </div>
      </div>
      <div className='image-container-trending'>
        <div className='image-holder'>
          <div className='image-background-div'>
          <img src={ oldMan } alt='senior-man' className='old-man-image' />
          </div>
          <div className='image-description-container'>
            <div className='image-heading-trending'>Eleanor Pena</div>
            <div className='image-description-trending'>Backend Developer</div>
          </div>
          <div className='rating-holder'>
            <div className='rating-text'>5.0</div>
            <div className='star-holder'>
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
            </div>
          </div>
          <div className='trending-image-bottom-container'>
            <div className='suitcase-container'>
              <img src={ suitcase } alt='suitcase' />
              <div className='projects-text'>Projects</div>
              <div className='projects-count'>90+</div>
            </div>
            <div className='clients-container'>
              <img src={ clerk } alt="clerk" />
              <div className='projects-text'>Clients</div>
              <div className='projects-count'>100+</div>
            </div>
          </div>
        </div>
        <div className='image-holder'>
          <div className='image-background-div'>
          <img src={ cheerfulIndian } alt='cheerful indian' className='jenny-wilson' />
          </div>
          <div className='image-description-container'>
            <div className='image-heading-trending'>Jenny Wilson</div>
            <div className='image-description-trending'>React Developer</div>
          </div>
          <div className='rating-holder'>
            <div className='rating-text'>5.0</div>
            <div className='star-holder'>
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
            </div>
          </div>
          <div className='trending-image-bottom-container'>
            <div className='suitcase-container'>
              <img src={ suitcase } alt='suitcase' />
              <div className='projects-text'>Projects</div>
              <div className='projects-count'>90+</div>
            </div>
            <div className='clients-container'>
              <img src={ clerk } alt="clerk" />
              <div className='projects-text'>Clients</div>
              <div className='projects-count'>100+</div>
            </div>
          </div>
        </div>
        <div className='image-holder'>
          <div className='image-background-div'>
          <img src={ albertFlores } alt='albert flores' className='albert-flores' />
          </div>
          <div className='image-description-container'>
            <div className='image-heading-trending'>Albert Flores</div>
            <div className='image-description-trending'>Ios Developer</div>
          </div>
          <div className='rating-holder'>
            <div className='rating-text'>5.0</div>
            <div className='star-holder'>
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
            </div>
          </div>
          <div className='trending-image-bottom-container'>
            <div className='suitcase-container'>
              <img src={ suitcase } alt='suitcase' />
              <div className='projects-text'>Projects</div>
              <div className='projects-count'>90+</div>
            </div>
            <div className='clients-container'>
              <img src={ clerk } alt="clerk" />
              <div className='projects-text'>Clients</div>
              <div className='projects-count'>100+</div>
            </div>
          </div>
        </div>
        <div className='image-holder'>
          <div className='image-background-div'>
          <img src={ bessieCooper } alt='bessie cooper' className='bessie-cooper' />
          </div>
          <div className='image-description-container'>
            <div className='image-heading-trending'>Bessie Cooper</div>
            <div className='image-description-trending'>Graphics Designer</div>
          </div>
          <div className='rating-holder'>
            <div className='rating-text'>5.0</div>
            <div className='star-holder'>
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
            </div>
          </div>
          <div className='trending-image-bottom-container'>
            <div className='suitcase-container'>
              <img src={ suitcase } alt='suitcase' />
              <div className='projects-text'>Projects</div>
              <div className='projects-count'>90+</div>
            </div>
            <div className='clients-container'>
              <img src={ clerk } alt="clerk" />
              <div className='projects-text'>Clients</div>
              <div className='projects-count'>100+</div>
            </div>
          </div>
        </div>
        <div className='image-holder'>
          <div className='image-background-div'>
          <img src={ blackGuy } alt='ariene mccoy' className='alrene-mccoy' />
          </div>
          <div className='image-description-container'>
            <div className='image-heading-trending'>Alrene McCoy</div>
            <div className='image-description-trending'>Graphics Designer</div>
          </div>
          <div className='rating-holder'>
            <div className='rating-text'>5.0</div>
            <div className='star-holder'>
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
              <img src={ ratingStar } alt='star' />
            </div>
          </div>
          <div className='trending-image-bottom-container'>
            <div className='suitcase-container'>
              <img src={ suitcase } alt='suitcase' />
              <div className='projects-text'>Projects</div>
              <div className='projects-count'>90+</div>
            </div>
            <div className='clients-container'>
              <img src={ clerk } alt="clerk" />
              <div className='projects-text'>Clients</div>
              <div className='projects-count'>100+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending