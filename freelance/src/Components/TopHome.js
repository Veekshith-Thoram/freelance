import React, { Component } from 'react';
import topImage from './images/top-main-context-image.png';
import searchImage from './images/search-img.png';
import '../CssFiles/TopHome.css';

export default class TopHome extends Component{
    render() {
        return(
            <div className='container'>
                <nav className='top-links'>
                    <ul class="list-non-bullet nav-pills">
                        <li className='Logo inline-item'>Logo</li>
                        <li className="inline-item">
                            <a className="links Login" href="#">Login</a>
                        </li>

                        <li className="inline-item">
                            <a className="links Signup" href="#">Signup</a>
                        </li>

                        <li className="inline-item">
                            <a className="links Be-Freelancer" href="#">Be Freelancer</a>
                        </li>
                    </ul>
                </nav>
                <div className='main-content'>
                    <div className='Main-container'>
                        <div className='main-context'>
                            <div className='Main-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                            <div className='sub-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi tincidunt volutpat vestibulum, massa, imperdiet</div>
                        </div>
                    </div>
                    <div className='search-container'>
                        <img src={ searchImage } alt="search" className='search-image' />
                        <div className='horizontal-rule'></div>
                        <input type="search" placeholder='What are you looking here eg. freelancer, projects' className='search' />
                    </div>
                    <div className='Search-examples'>
                        <div className='search-heading'>Search:<button className='search-examples'>LogoDesign</button>
                        <button className='search-examples'>Wordpress</button>
                        <button className='search-examples'>SEO</button></div>
                    </div>
                </div>
            </div>
        )
    }
}