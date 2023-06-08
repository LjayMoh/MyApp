import React, {Component} from 'react';
import Navibar from './components/Navibar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Homepage from './components/pages/Homepage';
import Artwork from './components/pages/Artwork';
import DevBlogs from './components/pages/DevBlogs';
import WebDesign from './components/pages/WebDesign';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navibar/>
      <Routes>
        <Route path='/home' exact  element= {<Homepage/>} />
        <Route path='/artwork' element= {<Artwork/>}/>
        <Route path='/blogs' element= {<DevBlogs/>}/>
        <Route path='/design' element= {<WebDesign/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
