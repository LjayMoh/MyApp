import React from 'react';
import CardObject from './CardObject';
import './CardContainer.css';

function CardContainer() {
  return (
    <div className='card'>
      <section className='card-container'>
        <div className='card-wrapper'>
            <h1 className='title'> My Theory Section</h1>
            <ul className='card-items'>
              <CardObject 
                src="../images/sebastian-svenson-d2w-_1LJioQ-unsplash.jpg"
                text="AI and Internet Art"
                label="Dev Blog"
                path="/blogs"
              />

              <CardObject 
                src="../images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
                text="Net/Web Art"
                label="Essay"
                path="/blogs"
              />

              <CardObject 
                src="../images/zach-key-rKE6rXOl14U-unsplash.jpg"
                text="My Internet Art"
                label="Dev Blog"
                path="/blogs"
              />

              <CardObject 
                src="../images/florian-klauer-mk7D-4UCfmg-unsplash.jpg"
                text="Independent Work"
                label="Dev Blog"
                path="/blogs"
               />
            </ul>

            <h2 className='title'> My Design Section</h2>

            <ul className='card-items'>
              <CardObject 
                src="../images/hal-gatewood-tZc3vjPCk-Q-unsplash.jpg"
                text="Wireframes"
                label="Design"
                path="/design"
              />

              <CardObject 
                src="../images/edho-pratama-T6fDN60bMWY-unsplash.jpg"
                text="Styleguide"
                label="Guide"
                path="/design"
              />

               <CardObject 
                src="../images/estee-janssens-HAzwnsI9oEQ-unsplash.jpg"
                text="Rationale"
                label="Ideas"
                path="/design"
              />

              <CardObject 
                src="../images/milad-fakurian-58Z17lnVS4U-unsplash.jpg"
                text="My UI and UX"
                label="Design"
                path="/design"
              />
            </ul>
        </div>
      </section>
    
    </div>
  )
}

export default CardContainer;