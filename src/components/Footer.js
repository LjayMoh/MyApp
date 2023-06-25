import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
       <section className='footer-feedback'>
          <p className='feedback-heading'>
            Feel free to give me feedback on the website
          </p>
          <div>
            <form>
                <input type='email' name='email' 
                   placeholder='Your email' 
                   className='footer-input'
                />
                <Button buttonStyle='btn--outline'>Send</Button>
            </form>
          </div>
       </section>

       <div className='footerLinks'>
          <section className='footerLink-wrapper'>
            <div className='footerLink-objects'>
              <h1 className='subhead'>Theory</h1>
              <Link to='/essay' className='link'>Essay</Link>
              <Link to='/bloggy' className='link'>Blogs</Link>
              <Link to='/prepwork' className='link'>Prep work</Link>
              <Link to='/addwork' className='link'>Independent Work</Link>
            </div>

            <div className='footerLink-objects'>
              <h2 className='subhead'>Web Design</h2>
              <Link to='/wireframes' className='link'>Wireframes</Link>
              <Link to='/styleguide' className='link'>Styleguide</Link>
              <Link to='/ui' className='link'>Rationale</Link>
              <Link to='/ui' className='link'>My UI&UX</Link>
            </div>
          </section>

          <section className='footerLink-wrapper'>
            <div className='footerLink-objects'>
              <h3 className='subhead'>About Me</h3>
              <Link to='/blogs' className='link'>Dev Blogs</Link>
              <Link to='/artwork' className='link'>Internet Art</Link>
              <Link to='/design' className='link'>Web Design</Link>
              <Link to='/home' className='link'>Home</Link>
            </div>
            <div className='footerLink-objects'>
              <h4 className='subhead'>Social Media</h4>
              <Link to='/' className='link'>Instagram</Link>
              <Link to='/' className='link'>Facebook</Link>
              <Link to='/' className='link'>Twitter</Link>
              <Link to='/' className='link'>LinkedIn</Link>
            </div>
          </section>

          <section className='socialMedia'>
            <div className='media-wrapper'>
                <small className='footer-bottom'>interactivemedia.com | &copy; By LJ Mohapi 2023</small>
                <div className='icons'>
                   <Link className='icon-link facebook'
                     to='/'
                     target=' _blank'
                     aria-label='Facebook'>
                    <i className='fab fa-facebook'/>
                    </Link>
                    <Link className='icon-link instagram'
                     to='/'
                     target=' _blank'
                     aria-label='Instagram'>
                    <i className='fab fa-instagram'/>
                    </Link>
                    <Link className='icon-link twitter'
                     to='/'
                     target=' _blank'
                     aria-label='Twitter'>
                    <i className='fab fa-twitter'/>
                    </Link>
                    <Link className='icon-link linkedin'
                     to='/'
                     target=' _blank'
                     aria-label='LinkedIn'>
                    <i className='fab fa-linkedin'/>
                    </Link>
                </div>
            </div>
          </section>

       </div>
    </div>
  )
}

export default Footer;