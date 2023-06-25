import React from 'react';
import CardObject from './CardObject';
import Img1 from '../assets/sebastian-svenson-d2w-_1LJioQ-unsplash.jpg'
import Img2 from '../assets/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg'
import Img3 from '../assets/zach-key-rKE6rXOl14U-unsplash.jpg'
import Img4 from '../assets/florian-klauer-mk7D-4UCfmg-unsplash.jpg'
import Img5 from '../assets/hal-gatewood-tZc3vjPCk-Q-unsplash.jpg'
import Img6 from '../assets/edho-pratama-T6fDN60bMWY-unsplash.jpg'
import Img7 from '../assets/estee-janssens-HAzwnsI9oEQ-unsplash.jpg'
import Img8 from '../assets/milad-fakurian-58Z17lnVS4U-unsplash.jpg'
import './CardContainer.css';

function CardContainer() {
  return (
    <div className='card'>
      <section className='card-container'>
        <div className='card-wrapper'>
            <h1 className='title'> My Theory Section</h1>
            <ul className='card-items'>
              <CardObject 
                src= {Img1}
                text="AI and Internet Art"
                label="Dev Blog"
                path="/blogs"
              />

              <CardObject 
                src={Img2}
                text="Net/Web Art"
                label="Essay"
                path="/essay"
              />

              <CardObject 
                src={Img3}
                text="My Internet Art"
                label="Prep Work"
                path="/blogs"
              />

              <CardObject 
                src={Img4}
                text="Independent Work"
                label="Research"
                path="/blogs"
               />
            </ul>

            <h2 className='title'> My Design Section</h2>

            <ul className='card-items'>
              <CardObject 
                src={Img5}
                text="Wireframes"
                label="Design"
                path="/wireframes"
              />

              <CardObject 
                src={Img6}
                text="Styleguide"
                label="Guide"
                path="/styleguide"
              />

               <CardObject 
                src={Img7}
                text="Rationale"
                label="Ideas"
                path="/ui"
              />

              <CardObject 
                src={Img8}
                text="My UI and UX"
                label="UI&UX"
                path="/ui"
              />
            </ul>
        </div>
      </section>
    
    </div>
  )
}

export default CardContainer;