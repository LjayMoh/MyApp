import React from 'react'
import '../App.css'
import Video from '../assets/video-3.mp4';
import {Button} from './Button'
import './WelcomeSection.css'

function WelcomeSection() {
    return (
        <div className='welcome-container'>
            <video src={Video} autoPlay loop muted />
            <h1>Welcome to the World of Internet Art!</h1>
            <p>
              This website will give an insight on how digital arts influences societies 
              and the internet growing to become part of our daily lives. The user will feel like they 
              are part of the internet art itself as they navigate from page to page, all they have to do is be open minded
              and experience how I think art should be, which is interactive, expressive, and appealing. 
            </p>
            <p>HAVE FUN!</p>
            <div className="design-btns">
              <Button className="btn" buttonStyle='btn--outline' 
                buttonSize='btn--large'>EXPLORE <i className='far fa-user'/>
              </Button>
              <Button className="btn" buttonStyle='btn--primary' 
                buttonSize='btn--large' to='/artwork'>ARTWORK <i className="fas fa-image"></i>
              </Button>
            </div>
        </div>
    )
}

export default WelcomeSection;