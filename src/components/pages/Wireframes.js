import React from 'react'
import '../../App.css';
import Img1 from '../../assets/Homepage.png';
import Img2 from '../../assets/DesignPage.png';
import Img3 from '../../assets/TheoryPage.png';
import Img4 from '../../assets/InternetArtPage.png';

export default function Wireframes() {
    return (
        <div className='wireframe'>
          <h1 className='subtitle1'>Wireframes</h1>
          <figure>
            <img src={Img1} />
            <figcaption className="caption">Homepage wireframe</figcaption>
          </figure>
          <p>
            I chose this layout because it allows users to have options to navigate to other pages effortlessly by including links and clickable cards. The interface will include images to make it attractive and compliment the kind of information that is conveyed in each section on the cards, and a video 
            as the background for the aesthetic appeal and attraction. The layout has negative space to show that the content is display to be readable, spacious, and legible.
          </p>

          <figure>
            <img src={Img2} />
            <figcaption className="caption">WebDesign page wireframe</figcaption>
          </figure>
          <p>
            I chose this layout because I was avoiding to make the user keep going back and forth form page to page to read the content that is in the design section, so I decided to place all the contents in one page and separate them using different background colours. I want to make a scroller for the display
            of the wireframes so I'm loking forward to designing that for the final website.
          </p>

          <figure>
            <img src={Img3} />
            <figcaption className="caption">Theory page wireframe</figcaption>
          </figure>
          <p>
            I chose this layout because I want the information that is supposed to be in the theory section to be in one place, so the user does not have to navigate from page to page to read the content.
            Same as the design section page, the content in this page will be separated using different background colours. I us the different bright colours because I want to catch the user's eye to want to read more. 
          </p>

          <figure>
            <img src={Img4} />
            <figcaption className="caption">Artwork page wireframe</figcaption>
          </figure>
          <p>
            I chose this layout because it will show all the things that I want the internet art to have which are images, texts, and icons. It is simple, legible, spacious, clear, as well as easy to navigate.
          </p>

          <h2 className='subtitle1'>REVISED WIREFRAMES:</h2>

        </div>
    );
}