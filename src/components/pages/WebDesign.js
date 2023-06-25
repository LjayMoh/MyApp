import React from 'react'
import {Link} from 'react-router-dom';
import Img from '../../assets/Homepage.png'
import '../../App.css';

export default function WebDesign() {
    return (
      <div className='design'>
        <h1 className='subtitle1'>Styleguides</h1>
        <p>
          I used images from <a className="u-url" href="https://unsplash.com/">unsplash.com</a> as the background images on the cards in the homepage when the user scrolls down, then
          I used a video from <a className="u-url" href="https://za.pinterest.com/pin/1022317184140601879/">pinterest.com</a> as the background in the homepage because I want to give it the feel of future technology. I want
          the user to feel like they are about to experience the future of internet art while they are in the homepage. I didn't use images as backgrounds for the other pages because 
          I think they were going to make the layout look busy and do not want that to confuse the user an dmake it hard for them to read the content on the pages. The other graphics 
          I included are the wireframes I drew to illustrate the ideas of how I wanted the layout of my pages to be.
          <Link to='/styleguide' className='u-url'> MORE ...</Link>
        </p>

        <h2 className='subtitle1'>Wireframes</h2>
        <figure>
          <img src={Img} />
          <figcaption className="caption">Homepage wireframe</figcaption>
        </figure>
        <p>
          I chose this layout because it allows users to have options to navigate to other pages effortlessly by including links and clickable cards. The interface will include images to make it attractive and compliment the kind of information that is conveyed in each section on the cards, and a video 
          as the background for the aesthetic appeal and attraction. The layout has negative space to show that the content is display to be readable, spacious, and legible.
          <Link to='/wireframes' className='u-url'> MORE ...</Link>
        </p>
      
        <h3 className='subtitle1'> Rationale, UI & UX</h3>
        <p>
          The first thing I did before designing this websiteto show my intial ideas was to draw the wireframes, they helped me get ideas on how I could design the layouts of the pages.
          Then I downloaded and uploaded the videos as well as the images I was going to use for the design of the website in the right folders. I watched tutorial videos on YouTube to help me with the 
          process of the design because I needed help to clarify a few things with my coding, one of the videos I watched is by <a href="https://youtu.be/I2UBjN5ER4s" className="u-url">Brain Design</a>.
          I designed the website such that when the user wants to move from one page to another they can do that wtout any hesitations, I made all the links to other pages available and accessible to the user in all the pages.
          <Link to='/ui' className='u-url'> MORE ...</Link>
        </p>
      </div>
    );
}
