import React from 'react'
import {Link} from 'react-router-dom'
import './CardContainer.css';

function CardObject(props) {
  return (
    <>
        <li className='cardObj'>
            <Link className='cardObj-link' to={props.path}>
                <figure className='img-wrapper' data-category={props.label}>
                   <img src={props.src} alt='' className='cardImg'/>
                </figure>
                <article className='cardObj-info'>
                   <h1 className='cardObj-text'>
                       {props.text}
                   </h1>
                </article>
            </Link>
        </li>
    </>
  )
}

export default CardObject;