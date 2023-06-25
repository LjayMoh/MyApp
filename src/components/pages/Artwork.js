import React from 'react';
import {Link} from 'react-router-dom';
import Img1 from '../../assets/img1.jpg';
import Img2 from '../../assets/img2.jpg';
import Img3 from '../../assets/jean-carlo-emer-y5UPTJ63PyI-unsplash.jpg';
import Img4 from '../../assets/sebastian-svenson-d2w-_1LJioQ-unsplash.jpg';
import Img5 from '../../assets/zach-key-rKE6rXOl14U-unsplash.jpg';
import Img6 from '../../assets/img3.jpg';
import Video from '../../assets/video-3.mp4';
import '../../App.css';

export default function Artwork() {
  return (
      <div className='artwork'>
        <video src={Video} autoPlay loop muted />
        <div className='top'>
          <Link to="/home" className="navbar-logo">
            <span><i className='fas fa-globe'></i></span>
          </Link>
          <Link to="/home" className='close'>
            <span>X</span>
          </Link>
        </div>

        <div className='left'>
          <Link to="/design" className='icon'>
            <span><i class="fa fa-paint-brush"></i></span>
          </Link>

          <Link to="/blogs" className='icon'>
            <span><i className='fas fa-newspaper'></i></span>
          </Link>

          <Link to="/wireframes" className='icon'>
            <span><i className='fas fa-crop'></i></span>
          </Link>

          <Link to="/" className='icon'>
            <span><i className='fa fa-brain'></i></span>
          </Link>
        </div>

        <div className='images'>
          <Link to="/bloggy">
            <img src={Img1} />
          </Link>

          <Link to="/styleguide">
            <img src={Img2} />
          </Link>

          <Link to="/addwork">
            <img src={Img3} />
          </Link>

          <Link to="/essay">
            <img src={Img4} />
          </Link>

          <Link to="/wireframes">
            <img src={Img5} />
          </Link>

          <Link to="/ui">
            <img src={Img6} />
          </Link>
        </div>
      </div>
    );
}