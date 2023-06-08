import React from 'react'
import '../App.css'
import {Button} from './Button'
import './WelcomeSection.css'

function WelcomeSection() {
    return (
        <div className='welcome-container'>
            <video src="/videos/video-3.mp4" autoPlay loop muted />
            <h1>Welcome to the World of Internet Art!</h1>
            <div className="design-btns">
              <Button className="btn" buttonStyle='btn--outline' 
                buttonSize='btn--large'>EXPLORE <i className='far fa-user'/>
              </Button>
              <Button className="btn" buttonStyle='btn--primary' 
                buttonSize='btn--large' to='/artwork'>VIEW ARTWORK <i className="fas fa-image"></i>
              </Button>
            </div>
        </div>
    )
}

export default WelcomeSection;