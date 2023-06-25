import React, {Component} from 'react';
import Navibar from './components/Navibar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Homepage from './components/pages/Homepage';
import Artwork from './components/pages/Artwork';
import DevBlogs from './components/pages/DevBlogs';
import WebDesign from './components/pages/WebDesign';
import Essay from './components/pages/Essay';
import Blogs from './components/pages/Blogs';
import PrepWork from './components/pages/PrepWork';
import Additional from './components/pages/Additional';
import Footer from './components/Footer';
import Styleguide from './components/pages/Styleguide'
import Wireframes from './components/pages/Wireframes'
import Interface from './components/pages/Interface'

function App() {
  return (
    <Router>
      <Navibar/>
      <Routes>
        <Route path='/home' exact  element= {<Homepage/>} />
        <Route path='/artwork' element= {<Artwork/>}/>
        <Route path='/blogs' element= {<DevBlogs/>}/>
        <Route path='/design' element= {<WebDesign/>}/>
        <Route path='/essay' element= {<Essay/>}/>
        <Route path='/bloggy' element= {<Blogs/>}/>
        <Route path='/prepwork' element= {<PrepWork/>}/>
        <Route path='/addwork' element= {<Additional/>}/>
        <Route path='/styleguide' element= {<Styleguide/>}/>
        <Route path='/wireframes' element= {<Wireframes/>}/>
        <Route path='/ui' element= {<Interface/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
