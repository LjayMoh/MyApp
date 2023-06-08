import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './Navibar.css';


function Navibar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeHamburgerMenu = () => setClick(false);

  const viewButton = () => {
    if (window.innerWidth <= 950) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    viewButton()
  }, []);

  window.addEventListener('resize', viewButton);

  return (
    <>
      <nav className='navBar'>
        <div className='navBar-container'>
          <Link to="/home" className="navBar-logo" onClick={closeHamburgerMenu}>
            Internet <span>Art <i className='fas fa-globe'></i></span>
          </Link>
          <div className='menu-checkbox' onClick= {handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'navMenu active' : 'navMenu'}>
            <li className='menuItems'>
              <Link to='/home' className='menuLinks' onClick={closeHamburgerMenu}>
                <i class="fas fa-home"></i> Homepage
              </Link>
            </li>
            <li className='menuItems'>
              <Link to='/blogs' className='menuLinks' onClick={closeHamburgerMenu}>
                <i class="fas fa-pager"></i> DevBlog/s
              </Link>
            </li>
            <li className='menuItems'>
              <Link to='/design' className='menuLinks' onClick={closeHamburgerMenu}>
                <i class="fas fa-palette"></i> WebDesign
              </Link>
            </li>
            <li className='menuItems'>
              <Link to='/artwork' className='menuLinks-hamburger' onClick={closeHamburgerMenu}>
                <i className="fas fa-image"></i> InternetArt
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'><i className="fas fa-image"></i>InternetArt</Button>}

        </div>
      </nav>
    </>
  )
}

export default Navibar;